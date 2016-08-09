var gulp = require('gulp'),
    path = require('path'),

    sass = require('gulp-sass'),
    sassIncl = require('sass-include-paths'),
    sourcemaps = require('gulp-sourcemaps'),

    browserSync = require('browser-sync'),

    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');

var webpackSettings = require('./webpack.config'),
    bundler = webpack(webpackSettings);

/**
 * SCSS tasks
 */
// auto imports packages instead of using relative import paths
// setup include paths from node_modules, bower_components, etc.
scssIncludePaths = []
    .concat(sassIncl.nodeModulesSync());

gulp.task('styles', function () {

    gulp.src('./app/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            includePaths: scssIncludePaths
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/styles/'));
});


gulp.task('dev', function () {
    browserSync({
        server: {
            baseDir: 'build',

            middleware: [
                webpackDevMiddleware(bundler, {
                    publicPath: webpackSettings.output.publicPath,
                    stats: {
                        colors: true,
                        chunks: false
                    }
                }),
                webpackHotMiddleware(bundler)
            ]
        },
        open: false,
        logFileChanges: true,

        // no need to watch '*.js' here, webpack will take care of it for us,
        // including full page reloads if HMR won't work
        files: [
            'build/index.html'
        ]
    });

    gulp.watch('./app/styles/**/*', ['styles']);

});


gulp.task('build', function(done) {
    webpack(webpackSettings).run(function(err, stats) {
        if(err) {
            console.log('Error', err);
        }
        else {
            console.log(stats.toString());
        }
        done();
    });
});


gulp.task('default', ['dev']);
