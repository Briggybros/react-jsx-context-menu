const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'lib', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-context-menu.min.js',
    },
    module: {
        loaders: [{
            test: /\.j(s|sx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'stage-0', 'react'],
            },
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
        },
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: true,
        }),
    ],
};
