var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var concat = require('gulp-concat');


// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("src/scss/*.scss", ['sass']);
});

// Sass task, will run when any SCSS files change & BrowserSync will auto-update browsers
gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}));
});
//concat
//gulp.task('styles', function() {
 // return gulp.src('app/css/*.css')
 //   .pipe(concat('all.css'))
 //   .pipe(gulp.dest('app/dist'));
//});
// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });

});

