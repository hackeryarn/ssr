const path = require('path');

module.exports = {
    assetsPath: path.join(__dirname, '..', 'build'),
    commonLoaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
    ]
};
