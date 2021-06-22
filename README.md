Для запуска шаблона нужно выполнить следующие шаги

1. npm i
2. gulp

``npm install -g npm-upgrade``

``npm-upgrade``


WebP usage:

В сборщик включена поддержка WebP. WebP — это формат графики, разработанный Google в 2010 году. Он был создан как альтернатива PNG и JPG и отличается от них гораздо меньшим размером при том же качестве изображения.

// in pug

```
picture
  source(media="(min-width:992px)" srcset='static/img/general/pic_webp.webp', type='image/webp')
  source(media="(min-width:575px)" srcset='static/img/general/pic_webp.webp', type='image/webp')
  source(srcset='static/img/general/pic_webp.webp', type='image/webp')
  img(src='static/img/general/pic_webp.png', alt='img')
```

// in stylus

```
.css-img
  size(300px, 200px)
  background: url("../img/general/pic_webp.webp") no-repeat;
  background-size: cover;

@media not all and (min-resolution:.001dpcm) // FOR SAFARI 10+
  .css-img
    size(300px, 200px)
    background: url("../img/general/pic_webp.png") no-repeat;
    background-size: contain;

@supports (-ms-ime-align:auto) // FOR EDGE
  .css-img
    size(300px, 200px)
    background: url("../img/general/pic_webp.png") no-repeat;
    background-size: contain;

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)  // FOR IE 10+
  .css-img
    size(300px, 200px)
    background: url("../img/general/pic_webp.png") no-repeat;
    background-size: contain;
    
@media only screen and (min-resolution: 110dpi)
       and (max-resolution: 190dpi) and (max-width: 1600px),
       not (-webkit-min-device-pixel-ratio: 1.5),
       not (min--moz-device-pixel-ratio: 1.5),
       not (-o-min-device-pixel-ratio: 3/2),
       not (min-device-pixel-ratio: 1.5),
       not (min-resolution: 1.25dppx) // NOT RETINA WITH 125% ZOOM
```


#### [demo all media](https://www.ryadel.com/en/css3-media-query-target-only-ie-ie6-ie11-firefox-chrome-safari-edge/) 

#### [gulp-pugbem](https://ru.bem.info/forum/1426/)

````
header.header
    nav.menu
        a(href="#")._logo Company
        .list
            a._item.-active(href="#") Home
            a._item(href="#") News
            a._item(href="#") Gallery
            a._item(href="#") Partners
            a._item(href="#") About
            a._item(href="#") Contacts
    h1._title Hello, World!
````
