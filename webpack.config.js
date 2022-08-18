const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    watch: true,
    context: path.resolve(__dirname, 'src'),    //путь к исходным файлам
    entry: {                                    //тоже путь но уже без папки(без src)
        script: ['@babel/polyfill', './script.js'],
    },
    output: {                                   //название файла js
        filename: 'bundle.js',                  //путь для выхода
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [                                 //плагины массив!
        new HTMLWebpackPlugin({
            template: './index.html',          //путь к html 
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CssMinimizerPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
    ]
    }
}