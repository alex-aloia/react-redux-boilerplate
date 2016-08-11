var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: true,
    devtool: 'source-map',

    entry: [
        'webpack/hot/dev-server',
        // disable browser warning overlay
        'webpack-hot-middleware/client?overlay=false',
        path.join(__dirname, 'app/index.js'),
    ],

    output: {
        path: path.join(__dirname, 'build', 'js'),
        publicPath: '/js/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // cant use w/ es-lint
        // new webpack.NoErrorsPlugin()
    ],

    // eslint: {
    //     emitError: false
    // },

    module: {
        preLoaders: [
            {
                test: /\.jsx$|\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.jsx$|\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'react-hot',
            },
            {
                test: /\.jsx$|\.js$/,
                exclude: /(node_modules|bower_components)/,
                // loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,plugins[]=babel-plugin-transform-object-rest-spread'],

                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['babel-plugin-transform-object-rest-spread']
                }
            }
        ]
    }
};
