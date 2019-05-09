const gulp = require('gulp');
const postcss = require('gulp-postcss');
const flexboxStylesheet = require('../builder/index');

gulp.task('postcss', function () {
    return gulp.src('./style.css')
        .pipe(postcss([ flexboxStylesheet ]))
        .pipe(gulp.dest('./prod'));
});
