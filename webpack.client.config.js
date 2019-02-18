const webpack = require('webpack')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
    entry: './entry-client.js',
    output: {
        publicPath: '/dist/'
    },
    optimization: {
        splitChunks: {
            name: true,
            minChunks: Infinity
        }
    },
    plugins: [
        new VueSSRClientPlugin()
    ]
})