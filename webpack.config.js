var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer-core');

module.exports = {
  devtool: '#inline-source-map',
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './docs/index.jsx'
  ],
  output: {
    path: path.join(__dirname),
    filename: 'docs.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.js|jsx$/, exclude: /\.min\./, loaders: ['react-hot', 'babel']},
      { test: /\.md$/, loader: "html!markdown" },
      {
        test: /\.scss$/,
        loader: "style!css!postcss!sass?outputStyle=expanded&includePaths[]=" + 
            (path.resolve(__dirname, './node_modules')) + "&includePaths[]=" + (path.resolve(__dirname, './bower_components'))
      },
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 2 version'] }) ],
  resolve : {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};