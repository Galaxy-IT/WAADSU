module.exports = function () {

  $.gulp.task('img:dev', () => {
    return $.gulp.src('./static/img/**/*.{png,jpg,gif,JPG,PNG,GIF}')
      .pipe($.gulp.dest('./build/static/img/'));
  });

  $.gulp.task('img:build', () => {
    return $.gulp.src('./static/img/**/*.{png,jpg,gif,JPG,PNG,GIF}')
      .pipe($.gp.tinypng(tiny_png_key))
      .pipe($.gulp.dest('./build/static/img/'));
  });

  $.gulp.task('img:webp', () => {
    return $.gulp.src('./static/img/**/*.{png,jpg,JPG,PNG}')
      .pipe($.gp.webp())
      .pipe($.gulp.dest('./build/static/img/'));
  });

  $.gulp.task('svg:copy', () => {
    return $.gulp.src('./static/img/svg/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        },
        plugins: [{
          removeDoctype: true
        }, {
          removeComments: true
        }, {
          cleanupNumericValues: {
            floatPrecision: 2
          }
        }, {
          convertColors: {
            names2hex: false,
            rgb2hex: false
          }
        }]
      }))
      .pipe($.gulp.dest('./build/static/img/svg/'));
  });

};
