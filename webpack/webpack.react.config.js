var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: [
        './resources/assets/js/my-react.js',
        './resources/assets/js/test.js'
    ],

    output: {
        filename: 'testbundle.js',
        path: path.join(__dirname, '../public/js')
    }

};