
/* SLIDE UP */
const slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.boxSizing = 'border-box'
    target.style.height = target.offsetHeight + 'px'
    target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    window.setTimeout(() => {
        target.style.display = 'none'
        target.style.removeProperty('height')
        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-top')
        target.style.removeProperty('margin-bottom')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
        //alert("!")
    }, duration)
}

/* SLIDE DOWN */
const slideDown = (target, duration = 500) => {
    target.style.removeProperty('display')
    let display = window.getComputedStyle(target).display
    if (display === 'none') display = 'block'
    target.style.display = display
    let height = target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    target.offsetHeight
    target.style.boxSizing = 'border-box'
    target.style.transitionProperty = "height, margin, padding"
    target.style.transitionDuration = duration + 'ms'
    target.style.height = height + 'px'
    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    window.setTimeout(() => {
        target.style.removeProperty('height')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
    }, duration)

}

/* TOOGGLE */
const slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration)
    } else {
        return slideUp(target, duration)
    }
}

const selectTrigger = document.querySelectorAll('.select__trigger')
const selects = document.querySelectorAll('.select')
const dropDowns = document.querySelectorAll('.select__dropdown')
const dropDownOption = document.querySelectorAll('.select__option')


function closeSelect() {
    selects.forEach(item => {
        if (item.classList.contains(('active'))) {
            item.classList.remove('active')
        }
    })
    dropDowns.forEach(item => {
        if (item.classList.contains(('active'))) {
            item.classList.remove('active')
            slideUp(item, 100)
        }
    })
}

// SELECT ===================================================

selectTrigger && selectTrigger.forEach(item => {
    item.addEventListener('click', function () {
        const container = this.closest('.select')
        const dropdown = container.querySelector('.select__dropdown')
        const selectsItems = [...selects].filter(item => item !== container)
        const dropDownsItems = [...dropDowns].filter(item => item !== dropdown)
        selectsItems.forEach(item => {
            item.classList.remove('active')
        })
        dropDownsItems.forEach(item => {
            item.classList.remove('active')
            slideUp(item, 200)
        })
        // closeSelect()
        if (!container.classList.contains('active')) {
            container.classList.add('active')
            dropdown.classList.add('active')
            slideDown(dropdown, 200)
        } else {
            container.classList.remove('active')
            dropdown.classList.remove('active')
            slideUp(dropdown, 200)
        }

    })
})
window.addEventListener('click', (e) => {
    const target = e.target
    if (!target.closest('.select')) {
        closeSelect()
    }
})

//burger
let burger = document.querySelector('.header-burger');
let navigation = document.querySelector('.header-nav');
burger && burger.addEventListener('click', function () {
  this.classList.toggle('opened');
  this.setAttribute('aria-expanded', this.classList.contains('opened'));
  navigation.classList.toggle('opened_nav');
  document.body.classList.toggle('overflow');
});





// GLOBAL MENU ===================================================
document.querySelector('.menu_click') && document.querySelector('.menu_click').addEventListener('click', () => {
    const menuWrap = document.querySelector('.menu_wrap')
    menuWrap.classList.toggle('menu_wrap_active')
})






