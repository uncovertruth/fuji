import * as ExtractTextPlugin from 'extract-text-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const { version, name: moduleName, author, license } = require('./package.json')

const date = new Date()

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src/index.ts')
  },
  output: {
    path: path.join(__dirname, 'dist/assets'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.css']
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true }
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { minimize: true } }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css' }),
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    }),
    new webpack.BannerPlugin({
      banner: `${moduleName} ${version} | Copyright (c) ${date.getFullYear()} ${author} | License ${license}`
    })
  ]
}
