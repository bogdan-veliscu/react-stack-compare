const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
      },

      { test: /\.txt$/, use: "raw-loader" },
    ],
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
  },
};
