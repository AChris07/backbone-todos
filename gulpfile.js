var gulp = require('gulp');
var amdOptimize = require('amd-optimize');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('compress', function() {
  return gulp.src('js/**/*.js')
    .pipe(amdOptimize("main"))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch('js/**/*.js', ['compress']);
});

gulp.task('default', ['compress', 'watch'], function() {
});
