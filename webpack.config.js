const path = require('path');

module.exports = function(env) {
  return ({
    entry: [ './src/index.tsx' ],
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname + '/dist'),
      filename: 'app.[hash].js'
    },
    plugins: [
      new (require('html-webpack-plugin'))(),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'awesome-typescript-loader'
          }
        }
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
  });
}

