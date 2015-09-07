var gulp = require('gulp');
var amdOptimize = require('amd-optimize');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('compress', function() {
  return gulp.src('js/**/*.js')
    .pipe(amdOptimize("main"))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('js/**/*.js', ['compress']);
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['compress', 'sass', 'watch'], function() {
});
