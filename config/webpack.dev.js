const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        port: 9000,
    },
});
