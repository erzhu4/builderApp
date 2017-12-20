var webpack = require('webpack');
var path = require('path');

var vueModule = {

    entry: [
        './resources/assets/js/portfolio.js'
    ],

    output: {
        filename: 'portfolio.js',
        path: path.join(__dirname, '../public/portfoliovue/js')
    },

    module : {
        loaders : [
            {
                test : /\.js?/,
                loader : 'vue-loader'
            }
        ]
    }

};

module.exports = [vueModule];