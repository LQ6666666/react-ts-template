const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const paths = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  cache: {
    type: 'memory',
  },
  output: {
    path: paths.APP_BUILD,
    pathinfo: true,
    filename: 'js/bundle.js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '', // 后面从 env 读取
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: {
      directory: paths.APP_PUBLIC,
    },
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
  ],
};
