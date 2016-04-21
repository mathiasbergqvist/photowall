var webpack = require('webpack');
var path = require('path');
var devServerPort = 9500;

module.exports = {
  entry: {
    app: path.resolve('./src/app/index.jsx')
  },
  output: {
    path: path.resolve('./build'),
    filename: "bundle.js"
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        // include : path.resolve('src/app'),
        exclude: /node_modules/,
        loader : 'babel'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "url"
      }
    ]
  },
  devServer: {
    port : devServerPort,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    inline: false,
    proxy: {
      '/getPhotos': {
        target: 'https://api.flickr.com/services/feeds/photos_public.gne/?tags=cat&format=json&api_key=fa16585b5d35839777dc45300b3ed2c3',
        secure: false
      }
    }
  }
};
