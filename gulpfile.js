'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var ngdocs = require('gulp-ngdocs');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

var buildDir = 'bin/';

var depsJS = ['public/library/jquery/dist/jquery.min.js',
    'public/library/semantic/dist/semantic.min.js',
    'public/library/angular/angular.min.js',
    'public/library/angular-route/angular-route.min.js',
    'public/library/angular-ui-router/release/angular-ui-router.min.js'];

var appJs = ['public/js/app.js',
    'public/js/controllers.js',
    'public/js/services.js',
    'public/js/routes.js'];

var devcss = ['public/library/semantic/dist/semantic.min.css',
    'public/css/app.css'];


/** tasks **/
gulp.task('devDeps', function () {
    var depsjs = gulp.src(depsJS);
    return depsjs
        .pipe(concat('modulos.js'))
        .pipe(sourcemaps.init({ loadMaps: true }))
        //.pipe(uglify())
        .pipe(gulp.dest('public'));
});

gulp.task('icons', function () {
    return gulp.src('public/library/semantic/dist/themes/material/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('devApps', function () {
    var depsjs = gulp.src(appJs);
    return depsjs
        .pipe(concat('angular.js'))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(gulp.dest('public'));
});

gulp.task('devCss', function () {
    var depsjs = gulp.src(devcss);
    return depsjs
        .pipe(concat('modulo.css'))
        .pipe(sourcemaps.init({ loadMaps: true }))
        //.pipe(uglify())
        .pipe(gulp.dest('public'));
});

/** initialize **/
gulp.task('default', function (callback) {	//'devDeps','devCss'
    runSequence('devCss', 'devDeps', 'devApps', 'icons', callback);
});

/** watch **/
gulp.task('escute', function () {
    gulp.watch('public/js/**/*.js', ['devApps']);
    gulp.watch('public/library/**/*.css', ['buildStyles']);
});