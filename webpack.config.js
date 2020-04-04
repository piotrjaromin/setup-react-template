const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './lib/components/index.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    }
};