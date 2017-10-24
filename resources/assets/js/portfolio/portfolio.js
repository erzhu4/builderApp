window.Vue = require('vue');

var portfolioComponent = require('./portfolio.vue');

new Vue({
    el: '#portfolio-vue',
    components: {
        portfolio: portfolioComponent
    }
});