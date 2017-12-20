import Vue from 'vue';

import PortfolioComponent from './portfolio/Main.vue';

new Vue({
    el: '#portfolio-vue',
    components: {
        portfolio: PortfolioComponent
    }
});