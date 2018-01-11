const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        // publicPath: path.resolve(__dirname, 'dist'),
        open: true,
        // contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        port: 8080
    },
    // основной файл приложения
    entry: [
        path.resolve(__dirname, 'index.js')
    ],
    output:{
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'), // путь к каталогу выходных файлов
        filename: "[name].bundle.js"  // название создаваемого файла
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // какие файлы обрабатывать
                exclude: /node_modules/, // какие файлы пропускать
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: { loader: 'css-loader' }
                // extractCSS.extract({
                //     use: ["css-loader"]
                // })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html')
        }),
        // new ExtractTextPlugin({
        //     filename: "bundle.css"
        // })
    ]
}