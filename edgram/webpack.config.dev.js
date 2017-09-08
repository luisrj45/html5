const webpack = require('webpack'),
  path = require('path'),
  srcDir = path.resolve( __dirname, 'src' ),
  publicDir = path.resolve( __dirname, 'public' ),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ReloadPlugin = require('reload-html-webpack-plugin'),
  WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
  context: srcDir,
  devtool: 'source-map',
  entry: {
    script: './index.js'
  },
  output: {
    path: publicDir,
    filename: '[name].js',
    publicPath: './',
    sourceMapFilename: 'main.map'
  },
  devServer: {
    contentBase: srcDir,
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    open: true,
    hot: true,
    stats: 'errors-only',
    port: 4000,
    openPage: ''
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: 'json-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
	        'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml)$/,
        use: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ReloadPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'template.html'),
      filename: 'index.html',
      favicon: './assets/img/favicon.ico',
      chunks: ['script']
    }),
    new WebpackPwaManifest({
      name: 'EDgram por EDteam',
      short_name: 'EDgram',
      description: 'Aplicación Web Progresiva inspirada en Instagram con fines educativos.',
      orientation: 'portrait',
      display: 'standalone',
      start_url: 'index.html?utm=homescreen',
      scope: './',
      lang: 'es',
      background_color: '#D24F56',
      theme_color: '#2279D7',
      icons: [
        {
          src: path.resolve('src/assets/img/edgram-icon-black.png'),
          sizes: [16, 32, 64, 96, 128, 192, 256, 384, 512, 1024],
          type: 'image/png'
        }
      ],
      fingerprints: false
    })
  ]
}
