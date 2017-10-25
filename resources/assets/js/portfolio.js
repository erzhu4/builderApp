window.Vue = require('vue');

var portfolioComponent = require('./portfolio/Main.vue');

new Vue({
    el: '#portfolio-vue',
    components: {
        portfolio: portfolioComponent
    }
});