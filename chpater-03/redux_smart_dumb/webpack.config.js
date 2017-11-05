const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production'; // return true or false
const cssDev = ['style-loader','css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	use: ['css-loader', 'sass-loader'],
	publicPath: '/dist'
});
const cssConfig = isProd ? cssProd : cssDev;


module.exports = {
	// entry: './src/app.js',
	entry: {
		app: './src/index.js',
		// contact: './src/contact.js'
	},
	output: {
		// path: '/Users/eu-team/eu-work/self-practice/10_react-self-todo/react-todo/dist/',
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/, 
				use: cssConfig
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.pug$/,
				use: ['html-loader', 'pug-html-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg|eot|ttf|woff)$/i,
				use: [
					'file-loader?name=img/[name].[hash:6].[ext]',
					'image-webpack-loader'
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
  		compress: true,
  		port: 8103,
  		stats: 'errors-only',
  		hot: true,
  		open: true
	},
	plugins: [
	    new HtmlWebpackPlugin({
	        title: 'Project demo',
	        minify: {
	        	collapseWhitespace: true
	        },
	        hash: true,
	        excludeChunks: ['contact'],
	        template: './src/index.pug'
	    }),
	    // new HtmlWebpackPlugin({
	    //     title: 'Contact Page',
	    //     hash: true,
	    //     chunks: ['contact'],
					// filename: 'contact.html',
     //      template: './src/contact.html'
	    // }),
	    new ExtractTextPlugin({
	    	filename: 'app.css',
	    	disable: !isProd,
	    	allChunks: true
	    }),
	    new webpack.HotModuleReplacementPlugin()
	]
}