'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var ngdocs = require('gulp-ngdocs');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlReplace = require('gulp-html-replace');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

var buildDir = 'build/';
var buildDirJs = buildDir + 'js/';
var buildDirCss = buildDir + 'css/';
var buildDirHtml = buildDir + 'views/';

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
gulp.task('front.devDeps', function () {
    var depsjs = gulp.src(depsJS);

    return depsjs
        .pipe(concat('modulos.min.js'))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(gulp.dest(buildDirJs));

});

gulp.task('front.icons', function () {
    return gulp.src('public/library/semantic/dist/themes/material/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('front.devApps', function () {
    var depsjs = gulp.src(appJs);
    return depsjs
        .pipe(concat('angular.min.js'))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(gulp.dest(buildDirJs));
});

gulp.task('front.devCss', function () {
    var depsCss = gulp.src(devcss);
    return depsCss
        .pipe(concat('modulo.min.css'))
        .pipe(sourcemaps.init({ loadMaps: true }))
        //.pipe(uglify())
        .pipe(gulp.dest(buildDirCss))
});

gulp.task('replaceHtml', function () {
    var depsjs = gulp.src('public/index.html');
    return depsjs
        .pipe(htmlReplace({
            'js': ['js/angular.min.js', 'js/modulos.min.js'],
            'css': ['css/modulo.min.css']
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(buildDir));
});

gulp.task('copyHtml', function () {
    var depshtml = gulp.src('public/views/**/*.html');

    return depshtml
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(buildDirHtml));
});

/** initialize **/
gulp.task('default', function (callback) {	//'front.devDeps','front.devCss'
    runSequence('front.devCss', 'front.devDeps', 'front.devApps', 'front.icons', callback);
});


gulp.task('build', function (callback) {
    runSequence('front.devCss', 'front.devDeps', 'front.devApps', 'front.icons', 'replaceHtml', 'copyHtml', callback);
});

/** watch **/
gulp.task('escute', function () {
    gulp.watch('public/js/**/*.js', ['front.devApps']);
    gulp.watch('public/library/**/*.css', ['buildStyles']);
});