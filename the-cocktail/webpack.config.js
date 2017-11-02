var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {test : /\.js?/, include : APP_DIR, loader : 'babel-loader'},
            {test : /\.jsx?/, include : APP_DIR, loader : 'babel-loader'},
            {test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader']},
            {test: /\.css$/, include: /node_modules/,use: ['style-loader', 'css-loader']},
            {test : /\.(png|svg|jpg|gif)$/, include: APP_DIR, loader: 'file-loader' },
            {test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/, include: APP_DIR, loader: 'file-loader'}
        ]
    }
};

module.exports = config;
