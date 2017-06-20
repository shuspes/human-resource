const path = require('path');

module.exports = {
    entry: './main.js',

    output: {
        path: path.resolve(__dirname, 'lib'),
        publicPath: "/lib/",
        filename: 'index.js',
    },

    // devServer: {
    //     inline: true,
    //     port: 3000
    // },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};