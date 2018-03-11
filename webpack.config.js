// import path from 'path';
const path = require("path");
// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const extractSass = new ExtractTextPlugin({
    filename: "index.css"
});

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
                // options: {
                //     presets: ['react', ['env', {
                //         targets: {
                //             browsers: ['last 2 versions']
                //         }
                //     }],
                //         'stage-2'
                //     ],
                //     env: {
                //         production: {
                //             presets: ['react-optimize']
                //         }
                //     }
                // }
            },
            {
                test: /\.scss?$/,
                use: extractSass.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'src/assets/images/[name].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogv|ogg)$/,
                loader: 'file-loader',
                options: {
                    name: 'src/assets/videos/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=src/assets/fonts/[name].[ext]'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
              }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Example',
            template: './src/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        extractSass
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".json"]
      }
}

// if (process.env.NODE_ENV === 'prod') {
//     Config.plugins.push(
//         new webpack.DefinePlugin({
//             'process.env': {
//                 'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
//             }
//         }),
//         new webpack.optimize.UglifyJsPlugin()
//     );
// }