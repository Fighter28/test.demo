const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    "css-loader"
                ]
            },
        ],
    },
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    output: {
        filename: "index.[contenthash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: "XDML-写代码啦",
        template: "src/assets/admin.html"
    }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        })]

}

