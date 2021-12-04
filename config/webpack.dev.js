const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const paths = require("./paths");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  cache: {
    type: "memory",
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
