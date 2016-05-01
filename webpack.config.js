// Configuration for Webpack
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/js/render.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: "app.js"
  },
  module: {
    loaders: [
        {
            test: /\.(js|jsx)$/,
            include: path.join(__dirname, 'src'),
            loader: ["babel-loader"],
        }
    ]
  },
  plugins: [
    new HtmlWebpackConfig({
        title: 'waartaa',
        template: 'src/index.html',
        scriptFilename: 'app.js'
    }),
  ]
};
