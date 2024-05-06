const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line import/no-extraneous-dependencies
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      { test: /\.(woff|woff2)$/, use: { loader: "url-loader" } },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `./src/assets`,
          to: "assets",
        },
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "./dist"),
  },
  mode: "development",
  devtool: "source-map",
};
