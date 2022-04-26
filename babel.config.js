const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    isDevelopment && require("react-refresh/babel"),
  ].filter(Boolean),
};
