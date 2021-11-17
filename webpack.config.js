const { merge } = require("webpack-merge");

// const baseConfig = require("./config/webpack.base");
const productionConfig = require("./config/webpack.prod");
const developmentConfig = require("./config/webpack.dev");

// @ts-ignore
module.exports = (env, args) => {
    process.env.NODE_ENV = args.mode;

    const baseConfig = require("./config/webpack.base");
    // console.log(process.env.NODE_ENV);

    switch (args.mode) {
        case "development":
            // @ts-ignore
            return merge(baseConfig, developmentConfig);
        case "production":
            // @ts-ignore
            return merge(baseConfig, productionConfig);
        default:
            throw new Error("No matching configuration was found!");
    }
};