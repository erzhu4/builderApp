var webpack = require('webpack');
var path = require('path');

// var mix = require('laravel-mix');
//
// mix.copy('resources/images/portfolio', '../public/portfolio-myvue/images');
//
// mix.copy('resources/assets/css/bootstrap.css', '../public/portfolio-myvue/css');
//
// mix.copy('resources/assets/css/font-awesome', '../public/portfolio-myvue/css/font-awesome');

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