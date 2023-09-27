const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "App.js"),
  output: {
    path: path.join(__dirname, "build"),
    assetModuleFilename: 'assets/[hash][ext][query]',
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      inject: true,
    }),
    new FaviconsWebpackPlugin(
      path.join(__dirname, "src/assets", "favicon.ico")
    ),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    // TODO: figure out how this thing actually works...
    // static: {
    //   directory: path.join(__dirname, 'build'),
    // },
    // compress: true,
    port: 9000,
  }
};
