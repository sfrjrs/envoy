
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var browserSync = require('browser-sync').create();

//
// Task: Minify CSS
gulp.task('styles-min', function() {
  return gulp.src('./stylesheets/scss/*.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./stylesheets/css'))
});

//
// Task: Delete minified js file
gulp.task('del-min-scripts', function() {  
  return gulp.src('./scripts/*.min.js')
    .pipe(vinylPaths(del));
});

//
// Task: Minify JS
gulp.task('scripts-min', function() {  
  return gulp.src('./scripts/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('scripts'));
});

//
// Task: Delete min file then reproduce min file
gulp.task('build-scripts', function() {
  runSequence('del-min-scripts','scripts-min');
});

//
// Task: Spin up server and watch files
gulp.task('serve', function() {
  browserSync.init({
      server: {
          baseDir: './'
      }
  });
  gulp.watch('./scripts/*.js', ['build-scripts']);
  gulp.watch('./stylesheets/scss/*.scss', ['styles-min']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

//
// Task: Default
gulp.task('default', ['serve']);