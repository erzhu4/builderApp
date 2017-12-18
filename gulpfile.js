
var elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');

elixir(function(mix) {
    //copy images
    mix.copy('resources/images', 'public/images');

    mix.copy('resources/assets/css/bootstrap.css', 'public/css');

    mix.copy('resources/assets/css/font-awesome', 'public/css/font-awesome');

    mix.webpack('resources/assets/js/bootstrap.js', 'public/js');

    //compile portfolio
    mix.webpack('resources/assets/js/portfolio.js', 'public/js/portfolio');

    //compile portfolio react
    // mix.webpack('resources/assets/js/my-react.js', 'public/js/portfolio-react/my-react.js');
    // mix.rollup('resources/assets/js/portfolio-react.jsx', 'public/js/portfolio-react/portfolio-react.js');
});