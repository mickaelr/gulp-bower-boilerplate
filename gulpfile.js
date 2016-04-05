var gulp = require('gulp')
    uglify = require('gulp-uglify')
    rename = require("gulp-rename")
    sass = require('gulp-sass');

// Styles task
gulp.task('styles', function() {
  gulp.src('src/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/'));
});

// Scripts task
gulp.task('scripts', function() {
  gulp.src('src/**/*.js')
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('dist/'))
});

// Watch task
gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/**/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);
