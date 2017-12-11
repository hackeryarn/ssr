const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { assetsPath, commonLoaders } = require('./common.config');

module.exports = {
    name: 'server',
    devtool: 'sourcemap',
    entry: ['./app/server/index.js'],
    target: 'node',
    node: {
        __dirname: false
    },
    output: {
        path: assetsPath,
        filename: 'server.js'
    },
    module: {
        rules: commonLoaders.concat([
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    ]
                })
            }
        ])
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'assets/styles.css',
            allChunks: true
        })
    ]
}
