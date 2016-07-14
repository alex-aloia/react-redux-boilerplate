var gulp = require('gulp'),
    path = require('path'),
    browserSync = require('browser-sync'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');

var webpackSettings = require('./webpack.config'),
    bundler = webpack(webpackSettings);


gulp.task('dev', function(){
    browserSync({
        // server: 'app',
        open: false,
        logFileChanges: false,
        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: webpackSettings.output.publicPath,
                stats: {colors: true}
            }),
            webpackHotMiddleware(bundler)
        ]
    });
});
