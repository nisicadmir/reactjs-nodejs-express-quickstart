import path from 'path';


export default {
  entry: [
      path.join(__dirname, '/client/src/Index.jsx')
    ],
  output: {
    path: '/',
    publicPath: '/client/public/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
}