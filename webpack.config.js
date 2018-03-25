const path = require('path');
const htmlWebpackPlgin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    output: {
        chunkFilename:'[chunkhash].js'
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
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(path.join(__dirname,'dist')),
        new htmlWebpackPlgin({}),
    ]

}