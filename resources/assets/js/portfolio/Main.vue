<template>
    <div class="page-container" id="main-portfolio-container">
        <main-nav @changeNav="updateCurrentPage" :current-tab="currentPage" :fix-top="fixTop"></main-nav>
        <transition name="drawerSlide">
            <home class="tab-container" v-if="isActivePage('home')"></home>
            <about class="tab-container" v-if="isActivePage('about')"></about>
            <games class="tab-container" v-if="isActivePage('games')" @showOverlay="showOverlay"></games>
            <projects class="tab-container" v-if="isActivePage('projects')"></projects>
            <contact class="tab-container" v-if="isActivePage('contact')"></contact>
        </transition>
        <overlay v-if="overlayVisible" @closeOverlay="closeOverlay"></overlay>
    </div>
</template>

<script>
    import MainNav from './MainNav.vue';
    import Home from './Home.vue';
    import About from './About.vue';
    import Games from './Games.vue';
    import Projects from './Projects.vue';
    import Contact from './Contact.vue';
    import Overlay from './overlay.vue';

    export default {
        data() {
            return {
                fixTop: false,
                currentPage: 'home',
                overlayVisible: false
            };
        },

        mounted(){
            this.addScrollHandler();
        },

        components : {MainNav, Home, About, Games, Projects, Contact, Overlay},

        methods: {
            addScrollHandler(){
                let scrollElement = window;
                var that = this;
                scrollElement.addEventListener('scroll', function(e){
                    if (window.pageYOffset > 188 && !that.fixTop){
                        that.fixTop = true;
                    } else if (window.pageYOffset < 188 && that.fixTop) {
                        that.fixTop = false;
                    }
                });
            },


            showOverlay(component){
                this.overlayVisible = true;
            },

            closeOverlay() {
                this.overlayVisible = false;
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
    p {
        color: #828282;
        font-size: 18px;
        line-height: 30px;
        font-weight: 300;
    }

    .tab-container {
        padding-top: 2rem;
    }

    .section-container {
        padding: 2rem;
        background: #fff;
        margin-bottom: 2rem;
    }

    .page-container {
        background-color: #f4f4f4;
    }

    .game-start:hover {
        cursor: pointer;
    }

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