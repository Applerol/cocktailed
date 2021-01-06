const path = require('path');

const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
  entry: './src/Server/app',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build/Server'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
      },
    ],
  },
};
