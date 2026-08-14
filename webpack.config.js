var webpack = require('webpack');

module.exports = {
    entry: [
        './main.ls',
        './js/jquery-migrate-3.0.0.min.js',
        './js/jquery-ui-1.10.4.custom.min.js',
        './js/jquery.hoverIntent.js',
        './js/bootstrap.js',
        './js/phantomjs-shims.js',
        './js/console-polyfill.js',
        './js/howler.min.js'
    ],
    output: {
        path: __dirname + '/js/',
        filename: 'deps.js',
        publicPath: '/js/'
    },
    plugins: [ new webpack.optimize.UglifyJsPlugin() ],
    module: {
        loaders: [
            { test: /\.ls$/, loader: 'livescript', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel?stage=0', exclude: /node_modules/ },
            { test: /\.json$/, loader: 'json' }
        ]
    },
}
