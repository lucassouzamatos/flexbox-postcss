var gulp = require('gulp');
var postcss = require('gulp-postcss');
var flexboxStylesheet = require('./index');

gulp.task('postcss', function () {
    return gulp.src('./style.css')
        .pipe(postcss([ flexboxStylesheet ]))
        .pipe(gulp.dest('./prod'));
});