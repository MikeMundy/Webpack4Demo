const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isHot = true; // path.basename(require.main.filename) === 'webpack-dev-server.js';

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: './src/index02.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
        new HtmlWebpackPlugin({ title: 'Webpack 4 Demo' }),
        new webpack.NamedModulesPlugin(),
        // new ExtractTextPlugin("styles.css"),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            //filename: isHot ? 'css/[name].css' : 'css/[name].[contenthash].css',
            chunkFilename: 'css/[id].css'
            // filename: "[name].css",
            // chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                            // plugins: ['react-hot-loader/babel'],
                        },
                    },
                    'awesome-typescript-loader',
                ],
            },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: "css-loader"
            //     })
            // }
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, "css-loader"]
            // },
            // {
            //     test: /\.scss$/,
            //     use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            // },
            {
                test: /\.(scss|css)$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { minimize: { safe: true } }
                    },
                    {
                        loader: "sass-loader",
                        options: {}
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.csv$/,
                loader: 'csv-loader',
                options: {
                    dynamicTyping: true,
                    header: true,
                    skipEmptyLines: true
                }
            },
            {
                test: /\.xml$/, use: ['xml-loader']
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: '../dist',
        hot: true,
        historyApiFallback: true,
    },
};