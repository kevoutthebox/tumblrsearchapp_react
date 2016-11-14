var webpack = require('webpack');
var path = require('path');

// NODE_ENV set to production in heroku, so defaulting to 'development' here
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  module: {
    loaders: [{
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-1'],
      },
    }],
  },
  resolve: {
    root: __dirname,
    //  this allows up to use aliases when we require from the following folders
    modulesDirectories: [
      'node_modules',
      './src/components',
      './src/reducers',
      './src/actions',
    ],
    extensions: ['', '.js', '.jsx'],
  },

  //excluding sourcemaps when on heroku
  devtool: process.env.NODE_ENV === "production" ? undefined : "cheap-module-eval-source-map"
};
