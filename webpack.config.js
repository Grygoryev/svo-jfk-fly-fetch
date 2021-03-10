const path = require('path')

module.exports = {
  entry: {
    App: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build/js"),
    filename: "[name].js"
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  // mode: 'development'
  mode: 'production'
}