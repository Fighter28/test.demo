const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    output: {
        filename: "index.[contenthash].js"
    },
    plugins: [new HtmlWebpackPlugin({
        title: "XDML-写代码啦",
        template: "src/assets/admin.html"
    })]

}

