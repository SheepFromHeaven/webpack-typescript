module.exports = {
  entry: './js/main.ts',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader?sourceMap=true!sass-loader?sourceMap=true' }
    ]
  }
}
