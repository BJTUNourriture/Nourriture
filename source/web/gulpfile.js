/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var fs = require('fs');
var ngConstant = require('gulp-ng-constant');
var argv = require('yargs').argv;
var environment = argv.env || 'server';
var rename = require("gulp-rename");


//var ENV = JSON.parse(fs.readFileSync('src/app/config-' + environment + '.json', 'utf8')).ENV;


gulp.task('config-hostname', function () {
  gulp.src('src/app/config-' + environment + '.json')
    .pipe(ngConstant({
      name: 'NourritureServices',
      dest: 'config.js',
      merge: true
    }))
    .pipe(rename("index.constants.js"))
    .pipe(gulp.dest('src/app/'));
});


/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function (file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
