
var elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');

elixir(function(mix) {
    //copy images
    mix.copy('resources/images', 'public/images');

    //compile vue
    mix.webpack('resources/assets/js/portfolio/portfolio.js', 'public/js');
});