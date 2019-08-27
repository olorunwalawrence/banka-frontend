const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
module.exports = () => {
  let envConfig;
  
  if (process.env.NODE_ENV !== 'production') {
    envConfig = require(`./webpack-build-utils/webpack.development`)
  } else {
    envConfig = require(`./webpack-build-utils/webpack.${process.env.NODE_ENV}`);
  }
  
  return webpackMerge(envConfig);
};
