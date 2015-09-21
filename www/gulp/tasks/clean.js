//'use strict';

var config = require('../config');
var gulp   = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    gulp.src('./dist/*')
      .pipe(clean({ force: true }));
    gulp.src('./public/build/main.js')
      .pipe(clean({ force: true }));
});
