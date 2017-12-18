var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: [
        './resources/assets/js/my-react.js',
        './resources/assets/jsx/portfolio-react.jsx'
    ],

    output: {
        filename: 'portfolio-react.js',
        path: path.join(__dirname, '../public/js/portfolio-react')
    },

    module : {
        loaders : [
            {
                test : /\.jsx?/,
                loader : 'babel-loader'
            }
        ]
    }

};