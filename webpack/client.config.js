const path = require('path');
const webpack = require('webpack');

const { assetsPath, commonLoaders } = require('./common.config');

module.exports = {
    name: 'client',
    entry: ['./app/index.js'],
    output: {
        path: assetsPath,
        filename: 'assets/bundle.js'
    },
    module: {
        rules: commonLoaders.concat([
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }
                ],
            }
        ])
    }
}
