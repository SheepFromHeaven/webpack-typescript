module.exports = {
  entry: './app/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
              sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
              sourceMap: true
          }
        }]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};
