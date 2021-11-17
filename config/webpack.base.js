const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./paths');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: paths.APP_INDEX_JS,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: paths.APP_SRC,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.css$/,
        include: paths.APP_SRC,
        exclude: /node_modules/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        include: paths.APP_SRC,
        exclude: /node_modules/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg)$/,
        type: 'asset',
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 2 ** 10 * 100,
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: paths.moduleFileExtensions.map(ext => `.${ext}`),
    alias: {
      '@': paths.APP_SRC,
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.APP_HTML,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
};
