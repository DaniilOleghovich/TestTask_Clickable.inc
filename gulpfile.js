var gulp = require('gulp'),
    sass = require('gulp-scss'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

function styles(){
    return gulp.src('app/style/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(gulp.dest('app/style'))
        .pipe(browserSync.reload({stream: true}))
}

function sync(){
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
}


function watch(){
    gulp.watch('app/style/**/*.scss', gulp.series('styles'));
}

var build = gulp.series(styles, gulp.parallel(sync, watch));

exports.styles = styles;
exports.sync = sync;
exports.watch = watch;
exports.build = build;

exports.default = build;
