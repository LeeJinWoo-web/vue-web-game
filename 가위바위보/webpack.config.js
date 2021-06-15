const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports = {
    // mode: 'production',
    // devtool: 'hidden-source-map',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue']
    },
    entry: {
        app: path.join(__dirname,'main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader',
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader',
            ]
        }],
    },
    plugins: [//아웃풋이 나오기전에 몇가지 작업을 해주는 애들
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    },
};