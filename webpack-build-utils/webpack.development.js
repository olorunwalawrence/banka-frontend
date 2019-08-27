const merge = require('webpack-merge');
const common = require('../webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    hot: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    host: 'localhost',
    port: 4000,
    proxy: {
      '/api/v1/*': {
        target: 'http://localhost:4000/',
        secure: false,
        changeOrigin: true,
      },
    },
  }
});