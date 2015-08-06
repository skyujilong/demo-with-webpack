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
    return gulp.src(__dirname + '/js/main/*.js')
        //.pipe(plumber())
        .pipe(named())
        .pipe(webpack(webpackConfig))
        //.pipe(plumber.stop())
        .pipe(gulp.dest(__dirname + '/bundle/js/'));
});