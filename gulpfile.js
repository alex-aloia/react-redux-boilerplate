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
        server: {
            baseDir: './build',

            middleware: [
                webpackDevMiddleware(bundler, {
                    publicPath: webpackSettings.output.publicPath,
                    stats: {colors: true}
                }),
                webpackHotMiddleware(bundler)
            ]
        },
        open: true,
        logFileChanges: true,

        // no need to watch '*.js' here, webpack will take care of it for us,
        // including full page reloads if HMR won't work
        files: [
            './build/index.html'
        ]
    });
});
