module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      'whatwg-fetch',
      './source/index.js',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
    ],
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: '/app.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel?' + JSON.stringify({
        presets: ['react', 'es2015', 'stage-0'],
      })],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'autoprefixer'],
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
