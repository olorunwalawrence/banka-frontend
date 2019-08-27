const merge = require('webpack-merge');
const common = require('../webpack.common.js'); 

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    host: 'https://pro-banka-react-app.herokuapp.com',
    port: 4000,
    proxy: {
      '/api/v1/*': {
        target: 'https://pro-banka-react-app.herokuapp.com/',
        secure: false,
        changeOrigin: true,
      },
    },
  }
});
