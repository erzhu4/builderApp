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

//portfolio in vue
mix.copy('resources/images/portfolio', 'public/portfolio-vue/images');

mix.copy('resources/assets/css/bootstrap.css', 'public/portfolio-vue/css');

mix.copy('resources/assets/css/font-awesome', 'public/portfolio-vue/css/font-awesome');

mix.js('resources/assets/js/bootstrap.js', 'public/portfolio-vue/js');

mix.js('resources/assets/js/portfolio.js', 'public/portfolio-vue/js');