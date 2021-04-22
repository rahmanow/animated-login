const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('sassTask', function(){
    return gulp.src('app/style.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.src(['app/main.js']);

gulp.task('jsTask', function(){
    return gulp.src('app/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watchTask', function(){
    browserSync.init({
        server: ""
    });

    gulp.watch('app/*.scss', gulp.series('sassTask'));
    gulp.watch('app/*.js', gulp.series('jsTask'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sassTask', 'jsTask', 'watchTask'));
