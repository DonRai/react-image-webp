const path = require('path');
const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    entry: {
        app: './modules/index',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', 'modules']
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'modules'),
            exclude: [/node_modules/]
        }, {
            test: /\.(png|jpg|webp)$/,
            use: ['url-loader?limit=100000']
        }]
    }
};
