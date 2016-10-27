
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

//
// Task: Minify CSS
gulp.task('styles-min', function() {
  return gulp.src('stylesheets/scss/*.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('stylesheets/css'))
});

//
// Task: Minify JS
gulp.task('scripts-min', function() {  
  return gulp.src('scripts/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('scripts'));
});