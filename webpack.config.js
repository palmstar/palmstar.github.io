'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const config = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
        app: [
            path.resolve(__dirname, './_source/_vue/app.js')
        ],
        essential: [
            path.resolve(__dirname, './_source/_sass/essential.scss'),
        ]
    },
    output: {
        path: path.resolve(__dirname, './_site/assets/'),
        publicPath: '/',
        filename: '[name].js'
    },
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: ExtractTextPlugin.extract({
                            use: [
                                'css-loader',
                                'sass-loader',
                                {
                                    loader: 'sass-resources-loader',
                                    options: {
                                        indentedSyntax: false, // Set to true to use indented SASS syntax.
                                        resources: [
                                            path.resolve(__dirname, './_source/_sass/variables.scss')
                                        ]
                                    }
                                }
                            ],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // If you are having trouble with urls not resolving add this setting.
                                // See https://github.com/webpack-contrib/css-loader#url
                                // url: false,
                                minimize: process.env.NODE_ENV === 'production',
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [
                                    path.resolve(__dirname, './_source/_sass/variables.scss')
                                ]
                            }
                        }
                    ]
                }),
                include: path.resolve(__dirname, './_source/_sass')
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?.*$|$)/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        context: path.resolve(__dirname, './_source/'),
                        name: '[name].[ext]',
                        useRelativePath: true
                    }
                },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 90
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        gifsicle: {
                            optimizationLevel: 3
                        }
                    }
                }
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // {
            //     test: /\.(svg|woff|woff2|ttf|eot)(\?.*$|$)/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 context: path.resolve(__dirname, './_source/'),
            //                 name: '[name].[ext]',
            //                 useRelativePath: true
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'css/[name].css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: process.env.NODE_ENV === 'production'
        }),
        new FileManagerPlugin({
            onEnd: [
                {
                    delete: [
                        path.resolve(__dirname, './_site/assets/essential.js')
                    ],
                    copy: [
                        { source: path.resolve(__dirname, './_source/images/*.{svg,ico,xml,webmanifest}'), destination: path.resolve(__dirname, './_site/assets/images') },
                    ],
                }
            ]
        })
    ],
    resolve: {
        extensions: ['*', '.js', '.css', '.scss', '.vue', 'scss'],
        alias: {
            $scss: path.resolve(__dirname, './_source/_sass'),
            'vue$': 'vue/dist/vue.common.js'
        },
        modules: [
            path.resolve(__dirname, './_source'),
            path.resolve(__dirname, './node_modules')
        ]
    },
    performance: {
        hints: false //'error'
    },
    optimization: {
        minimize: process.env.NODE_ENV === 'production',
        splitChunks: {
            chunks: 'all'
        }
    }
};

module.exports = config;
