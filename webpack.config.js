const webpack = require("webpack");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                loader: "file-loader",
                test: /\.(jpeg|jpg|png|gif|svg|woff|woff2|eot|ttf|wav|mp3|ico)$/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "styles.css"}),
        new webpack.ProvidePlugin({
            React: "react",
            update: "react-addons-update",
            axios: "axios",
        })

    ],
    mode: 'development'
}

module.exports = config;
