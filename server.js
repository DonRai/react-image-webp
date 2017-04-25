const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const host = 'localhost';
const port = 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 700
    },
    headers: {"Access-Control-Allow-Origin": "*"},
    historyApiFallback: true
}).listen(port, host, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log(`Listening at ${host}:${port}`);
});