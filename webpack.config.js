const path = require('path');
var webpack = require('webpack');

/* const autoprefixer = require('autoprefixer')
const postCSSLoaderOptions = {
  // Necessary for external CSS imports to work
  // https://github.com/facebook/create-react-app/issues/2677
  ident: 'postcss',
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      flexbox: 'no-2009',
    }),
  ],
} */

module.exports = {
	plugins: [new webpack.EnvironmentPlugin(['NODE_ENV', 'cool'])],
	// plugins: [new BundleAnalyzerPlugin()],
	watch: true,
	// devtool: 'cheap-eval-source-map',
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
		// publicPath: "/public/"
	},
	resolve: {
		alias: {
			moment: 'dayjs',
			'@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js')
		},
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			}
		]
	},
	devServer: {
		watchContentBase: true,
		historyApiFallback: true
	}
	/* externals: {
    // react: 'React',
    // 'react-dom': 'ReactDOM',
    // 'prop-types': 'PropTypes',
    // firebase: 'firebase',
    'chart.js': 'Chart',
  }, */
};
