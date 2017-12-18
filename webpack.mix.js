const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy('resources/images', 'public/images');

mix.copy('resources/assets/css/bootstrap.css', 'public/css');

mix.copy('resources/assets/css/font-awesome', 'public/css/font-awesome');

mix.js('resources/assets/js/bootstrap.js', 'public/js');

mix.js('resources/assets/js/portfolio.js', 'public/js/portfolio');
// mix.react('resources/assets/jsx/portfolio-react.jsx', 'public/js/portfolio-react');