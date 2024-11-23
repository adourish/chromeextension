const path = require('path');


module.exports = {
  entry: './src/Pages/popup/index.jsx', // This is your main file
  output: {
    path: path.resolve(__dirname, 'dist'), // This is where the output file will be located
    filename: 'ctrlm.bundle.js', // This is the name of your output file
    library: 'ctrlm', // This is the name of your library
    libraryTarget: 'umd', // This will make your library compatible with other environments such as AMD and Node
    umdNamedDefine: true,
    globalObject: 'this' // This is necessary to make the library work in both NodeJS and web environments
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/, // This will exclude files within the node_modules directory
        use: {
          loader: 'babel-loader', // This is your transpiler
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  mode: 'production' // This will minify the output file
};

