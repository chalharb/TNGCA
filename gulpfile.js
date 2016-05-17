/**
 * Created by Logan on 5/1/2016
 */

var elixir = require('laravel-elixir');

elixir.config.assetsPath = '_dev';
elixir.config.publicPath = 'assets';

elixir(function(mix) {
    mix.rubySass('styles.scss')
        .rubySass('vendor-styles/vendor-styles.scss','assets/css/vendor-styles.css')
        .scripts('app.js')
        .scripts([
            'vendor/jquery/jquery-2.1.4.js',
            'vendor/bootstrap/bootstrap.js',
            'vendor/slick/slick.js'
        ],'assets/js/vendor-scripts.js');
});