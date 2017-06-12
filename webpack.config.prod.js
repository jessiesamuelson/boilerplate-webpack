module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },

};
