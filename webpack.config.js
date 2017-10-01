const path = require('path');

module.exports = {
  entry: './src/App.jsx',
    output: {
      filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    devServer: {
        inline: true,
        contentBase: './public',
        port: 8080
    },

    module: {
      loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'react-hot-loader!babel-loader'
		},
		{
			test: /\.scss?$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		},
		{
			test: /\.css$/,
			loader: "style-loader!css-loader!autoprefixer-loader",
			exclude: [/node_modules/, /public/]
		},
		{
			test: /\.gif$/,
			loader: "url-loader?limit=10000&mimetype=image/gif"
		},
		{
			test: /\.jpg$/,
			loader: "url-loader?limit=10000&mimetype=image/jpg"
		},
		{
			test: /\.png$/,
			loader: "url-loader?limit=10000&mimetype=image/png"
		},
		{
			test: /\.svg/,
			loader: "url-loader?limit=26000&mimetype=image/svg+xml"
		},
		{
			test: /\.json$/,
			loader: "json-loader"
		}
      ]
    },

    devtool: 'eval-source-map',

    resolve: {
        extensions: ['.js', 'RecordItem.jsx', '.json', '*']
    }
};
