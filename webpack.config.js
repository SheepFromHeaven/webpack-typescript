module.exports = {
  entry: './js/main.ts',
  output: {
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
