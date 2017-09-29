const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const devServer = require('webpack-dev-server')

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	module: {
		rules:[
			{
				test: /\.vue/,
				loader: 'vue-loader'
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 8888,
	},
	plugins:[
		new htmlPlugin({
			title: 'Hello Vue',
			filename: 'index.html',
			template: './src/index.html',
			inject:true
		})
	]
}