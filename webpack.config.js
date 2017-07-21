const path = require('path');

module.exports = {
  entry: './client',
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
