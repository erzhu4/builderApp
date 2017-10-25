<template>
    <div class="page-container">
        <main-nav @changeNav="updateCurrentPage"></main-nav>
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
                currentPage: 'home'
            };
        },

        components : {MainNav, Home, About, Games, Projects, Contact},

        methods: {
            updateCurrentPage(val){
                this.currentPage = val;
            },

            isActivePage(page) {
                return this.currentPage == page;
            }
        }
    }
</script>