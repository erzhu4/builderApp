<template>
    <div class="page-container" id="main-portfolio-container">
        <main-nav @changeNav="updateCurrentPage" :fix-top="fixTop"></main-nav>
        <home v-if="isActivePage('home')"></home>
        <about v-if="isActivePage('about')"></about>
        <games v-if="isActivePage('games')"></games>
        <projects v-if="isActivePage('projects')"></projects>
        <contact v-if="isActivePage('contact')"></contact>
    </div>
</template>

<script>
    import MainNav from './MainNav.vue';
    import Home from './Home.vue';
    import About from './About.vue';
    import Games from './Games.vue';
    import Projects from './Projects.vue';
    import Contact from './Contact.vue';

    export default {
        data() {
            return {
                fixTop: false,
                currentPage: 'home'
            };
        },

        mounted(){
            this.addScrollHandler();
        },

        components : {MainNav, Home, About, Games, Projects, Contact},

        methods: {
            addScrollHandler(){
                let scrollElement = window;
                var that = this;
                scrollElement.addEventListener('scroll', function(e){
                    if (window.pageYOffset > 188 && !that.fixTop){
                        console.log("FIX IT");
                        that.fixTop = true;
                    } else if (window.pageYOffset < 188 && that.fixTop) {
                        console.log("UNFIX IT");
                        that.fixTop = false;
                    }
                });
            },

            updateCurrentPage(val){
                this.currentPage = val;
            },

            isActivePage(page) {
                return this.currentPage == page;
            }
        }
    }
</script>