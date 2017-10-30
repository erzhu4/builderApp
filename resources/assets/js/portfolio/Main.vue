<template>
    <div class="page-container" id="main-portfolio-container">
        <main-nav @changeNav="updateCurrentPage" :fix-top="fixTop"></main-nav>
        <transition name="drawerSlide">
            <home v-if="isActivePage('home')"></home>
            <about v-if="isActivePage('about')"></about>
            <games v-if="isActivePage('games')"></games>
            <projects v-if="isActivePage('projects')"></projects>
            <contact v-if="isActivePage('contact')"></contact>
        </transition>
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

<style>
    .drawerSlide-enter-active,
    .drawerSlide-leave-active {
        opacity: 0;
        max-height: 2000px;
    }
    .drawerSlide-enter-active {
        transition: all 1.0s;
    }
    .drawerSlide-leave-active {
        transition: all 0.5s;
    }
    .drawerSlide-enter-to {
        opacity: 1;
    }
    .drawerSlide-enter,
    .drawerSlide-leave-to {
        max-height: 0px;
    }
</style>