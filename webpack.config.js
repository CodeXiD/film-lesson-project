const path = require('path');

module.exports = {
    mode: 'development',
    entry: './resource/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',

    devServer: {
        contentBase: path.resolve(__dirname, './'),
        watchContentBase: true
    }
};