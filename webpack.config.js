const path = require("path");
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./frontend/app.jsx",
  output: {
    path: path.join(__dirname, './public/'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', `react`, 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx"]
  }
};