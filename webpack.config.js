const path = require('path');

module.exports = {
   entry: ['babel-polyfill', './lib/components/index.js'],
   output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         { 
            test: /\.js$/,
            exclude:/node_modules/,
            use: ['babel-loader']
         }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
         }
      ]
   }
};