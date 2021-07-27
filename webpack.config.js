module.exports = {
  mode: 'development',
    entry: [
      './client/index.js'
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules | bower_componenets)/,
          loader: 'babel-loader',
          options: {
            presets: [
              'react', 'es2015'
            ]
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        }
      ]
    }
  } 