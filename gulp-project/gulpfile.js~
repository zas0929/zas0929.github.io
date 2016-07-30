


//gulp.task('sass', function() {
  //return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
//    .pipe(sass())
  //  .pipe(gulp.dest('app/css'))
//});

//gulp.task('watch', function(){
  //gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
//});





var gulp = require('gulp'),
    sassSCSS = require('gulp-sass'),
    livereload = require('gulp-livereload');

// Default Task
gulp.task('default', ['sass', 'watch']);

// Watch Task
 gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('app/scss/*.scss', ['sass']).on('change', livereload.changed);
});

// Sass Complie Task
gulp.task('sass', function(){
 gulp.src('app/scss/*.scss')
  .pipe(sassSCSS())
  .pipe(gulp.dest('app/css'));
});





