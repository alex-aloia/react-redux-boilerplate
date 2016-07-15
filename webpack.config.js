var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: true,
    // devtool: '#eval-source-map',
    // context: path.join(__dirname, 'app', 'js'),

    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        path.join(__dirname, '/app/main.jsx'),
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
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
            }
        ]
    }
};
