module.exports = {
  entry: './js/main.ts',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
