const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: "eval",
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './modules/index',
    ],
    output: {
        path: path.join(__dirname, 'src'),
        filename: 'bundle.min.js',
        publicPath: '/skin/frontend/ottica/mobile/react/src/'
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
            test: /\.scss$/,
            use: ['style-loader', 'css-loader?sourceMap=true&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader']
        }, {
            test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg)$/,
            use: ['url-loader?limit=100000']
        }]
    }
};