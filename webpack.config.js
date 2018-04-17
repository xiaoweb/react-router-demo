const path = require('path');
const htmlWebpackPlgin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const package = require('./package');

module.exports = {
    output: {
        chunkFilename:'[chunkhash].js',
        filename: `[name].${package.version}.js`
    },
    devtool: "source-map",
    devServer: {
        contentBase:path.join('dist'),

    },
    cache: true,
    module: {
        rules: [
            {
                test:/\.js$/,
                use:'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(path.join(__dirname,'dist')),
        new htmlWebpackPlgin({}),
        new webpack.HashedModuleIdsPlugin(),
    ]

}