const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
 module.exports = { 
    entry: './src/index.js',
    mode: "none",
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options:{
                presets:['@babel/preset-env'],
                plugins:['transform-class-properties']
                
              }
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        ]
    },
    plugins:[
        new TerserPlugin()
    ],
    resolve: {
    extensions: ['*', '.js']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};