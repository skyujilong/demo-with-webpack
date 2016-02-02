/**
 * Created by YU on 2015/8/3.
 */
var webpackConfig = require('./webpack-config');

var webpack = require('webpack-stream');

var gulp = require('gulp');

var plumber = require('gulp-plumber');

var gulpWatcher = require('gulp-watch');

var less = require('gulp-less');

var named = require('vinyl-named');

var tmodjs = require('gulp-tmod');

gulp.task('watch:less-dev',function(){
    return gulp.src(__dirname + '/css/*.less')
        .pipe(plumber())
        .pipe(gulpWatcher(__dirname + '/css/*.less'))
        .pipe(less({
            path:[__dirname + '/css/common']
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(__dirname + '/bundle/css/'));
});

gulp.task('watch:js-dev',function(){
    return gulp.src(/*__dirname + '/js/main*//*.js'*/__dirname + '/js/**/*.js')//dev模式下扫描业务js pro模式下扫描main文件夹下js
        .pipe(named())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(__dirname + '/bundle/js/'));
});

gulp.task('watch:all',['watch:less-dev','watch:js']);

gulp.task('watch:js',function(){
    return gulp.src(__dirname + '/js/main/*.js')
        .pipe(named())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(__dirname + '/bundle/js/'));
});

gulp.task('tmod',function(){
    return gulp.src(__dirname + '/tpl/**/*.html')
        .pipe(tmodjs({
            base:__dirname + '/tpl/',
            output:__dirname + '/dep/',
            charset:'utf-8',
            "syntax": "simple",
            //"helpers": "./public/plug/template-helper.js",
            "escape": true,
            "compress": true,
            "type": "default",
            "combo": true,
            "minify": true,
            "cache": false
        }));
});

