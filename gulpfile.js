'use strict';

const {task, src, parallel, series, dest, watch, lastRun} = require('gulp'),
  sass = require('gulp-sass'),
  webpack = require('webpack'),
  cssmin = require('gulp-cssmin'),
  debug = require('gulp-debug'),
  del = require('del'),
  webp = require('gulp-webp'),
  svgmin = require('gulp-svgmin'),
  imgmin = require('gulp-image'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create();

task('html', function() {
  return src('src/templates/*.html')
    .pipe(debug({title: 'working on'}))
    .pipe(dest('build'))
})

task('style', function () {
  return src('src/scss/app.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cssmin())
    .pipe(debug({title: 'working on'}))
    .pipe(dest('build/css'))
});

task('js', function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

task('img', function () {
  return src('src/img/**/*.*', {since: lastRun('img')})
    .pipe(debug({title: 'working on'}))
    .pipe(imgmin({
      pngquant: true,
      optipng: true,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: true
    }))
    .pipe(dest('build/img'))
});

task('webp', function() {
  return src('src/img/**/*.{png,jpg}')
    .pipe(debug({title: 'qweqweqwe'}))
    .pipe(webp())
    .pipe(dest('build/img'))
});

task('svgimg', function () {
  return src('src/img/**/*.svg', {since: lastRun('svgimg')})
    .pipe(debug({title: 'working on'}))
    .pipe(svgmin())
    .pipe(dest('build/img'))
});

// task('fonts', function () {
//   return src('src/fonts/**/**.*')
//       .pipe(dest('build/fonts'))
// });


task('watch', function () {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
    notify: true
  })

  watch('src/scss/**/*.*',series('style'));
  watch('src/templates/**/*.*',series('html'));
  watch('src/**/*.*',series('js'));

  watch('build/**/*.*').on('change', browserSync.reload);
});

task('clean', function () {
  return del('build');
});

task('build',series('clean', parallel('html', 'style', 'js', 'img')));

task('dev',series('build', 'watch'));