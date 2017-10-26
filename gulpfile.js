
var elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');

elixir(function(mix) {
    //copy images
    mix.copy('resources/images', 'public/images');

    mix.copy('resources/assets/css/bootstrap.css', 'public/css');

    mix.webpack('resources/assets/js/bootstrap.js', 'public/js');

    //compile portfolio
    mix.webpack('resources/assets/js/portfolio.js', 'public/js/portfolio');
});