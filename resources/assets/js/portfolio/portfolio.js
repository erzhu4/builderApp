window.Vue = require('vue');

var portfolioComponent = require('./Portfolio.vue');

new Vue({
    el: '#portfolio-vue',
    components: {
        portfolio: portfolioComponent
    }
});