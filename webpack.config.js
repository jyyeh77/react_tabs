const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './browser/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './browser/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
