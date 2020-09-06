const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 构建默认输出到dist目录
const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        // 链式传递:从后向前，先将sass预编译成css，再将css解析成style（样式文件），最后转换成js能处理的文件
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  devServer:{
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //dist目录下生成的html文件名
      template: './template.html' //项目目录下的html文件名可以给filename传递页面参数登信息
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 该插件可以自动清楚dist文件下无用的文件
    new CleanWebpackPlugin(), 
    // 该插件可以将静态资源拷贝到dist目录下
    new CopyWebpackPlugin({
      patterns:[
        {
          from: path.join(__dirname, 'asset'),
          to: 'assets'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
}

module.exports = config