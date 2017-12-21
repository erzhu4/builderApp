var webpack = require('webpack');
var path = require('path');
//
// mix.copy('resources/images/portfolio', 'public/portfolio-vue/images');
//
// mix.copy('resources/assets/css/bootstrap.css', 'public/portfolio-vue/css');
//
// mix.copy('resources/assets/css/font-awesome', 'public/portfolio-vue/css/font-awesome');


var images = {
    entry: [
        './resources/images/portfolio'
    ],
    output: {
        filename: 'bootstrap.js',
        path: path.join(__dirname, '../public/portfolio-myvue/images')
    }
};

var bootstrapModule = {
    entry: [
        './resources/assets/js/bootstrap.js'
    ],

    output: {
        filename: 'bootstrap.js',
        path: path.join(__dirname, '../public/portfolio-myvue/js')
    },

    module : {
        loaders : [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};

var vueModule = {
    entry: [
        './resources/assets/js/portfolio.js'
    ],

    output: {
        filename: 'portfolio.js',
        path: path.join(__dirname, '../public/portfolio-myvue/js')
    },

    module : {
        loaders : [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            }
        ]
    }
};

module.exports = [bootstrapModule,vueModule];