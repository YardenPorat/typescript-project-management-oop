const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/app.ts', //source js file
  output: {
    path: path.resolve(__dirname, 'dist'), //output folder
    filename: 'bundle.js', //output file
    publicPath: 'dist',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
