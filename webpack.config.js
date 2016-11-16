module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/Components/Main.jsx',
      Nav: 'app/Components/Nav.jsx',
      Weather: 'app/Components/Weather.jsx',
      About: 'app/Components/About.jsx',
      Examples: 'app/Components/Examples.jsx',
      WeatherForm: 'app/Components/WeatherForm.jsx',
      WeatherMessage: 'app/Components/WeatherMessage.jsx',
      OpenWeatherMap: 'app/api/OpenWeatherMap.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules | bower_components)/
      }
    ]
  },
  devtool: 'inline-eval-source-map'
};
