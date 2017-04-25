const path = require('path');
const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    entry: [
        './dist/index',
    ],
    output: {
        path: path.join(__dirname, 'src'),
        filename: 'bundle.min.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', 'dist']
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'dist'),
            exclude: [/node_modules/]
        }]
    }
};