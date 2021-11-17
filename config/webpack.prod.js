const fs = require("fs");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require("./paths");

module.exports = {
    mode: "production",
    cache: {
        type: "filesystem",
        store: "pack",
        buildDependencies: {
            config: [__filename],
            tsconfig: [paths.APP_JSCONFIG, paths.APP_TSCONFIG].filter(f => fs.existsSync(f))
            // 默认情况下 webpack 与 loader 是构建依赖。
        },
    },
    output: {
        path: paths.APP_BUILD,
        pathinfo: false,
        filename: "static/js/[name].[contenthash:8].js",
        chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
        assetModuleFilename: "static/media/[name].[hash][ext]",
        publicPath: "./",   // 后面从 env 读取
    },
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                // esbuild 是一款非常快速的 JavaScript 打包工具和压缩工具
                minify: TerserPlugin.esbuildMinify,
                // 启用/禁用多进程并发运行功能
                parallel: true,
                // 启用/禁用剥离注释功能
                extractComments: false,
            })
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: paths.APP_PUBLIC,
                    globOptions: {
                        ignore: [
                            "**/index.html",
                            "**/.DS_Store",
                        ]
                    }
                }
            ]
        }),
    ],
}