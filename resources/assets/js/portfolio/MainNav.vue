<template>
    <div class="main-nav">
        <div class="row nav-top">
            <div class="container">
                <div class="row">
                    TOP PART OF THE THING
                </div>
            </div>
        </div>
        <div class="row nav-bottom" :class="{ 'fix-nav': fixTop }">
            <div class="container">
                <div class="row menu-row">
                    <div class="col-lg-2 nav-button" @click="changeNav('home')">
                        Home
                    </div>
                    <div class="col-lg-2 nav-button" @click="changeNav('about')">
                        About
                    </div>
                    <div class="col-lg-2 nav-button" @click="changeNav('games')">
                        Games
                    </div>
                    <div class="col-lg-2 nav-button" @click="changeNav('projects')">
                        Projects
                    </div>
                    <div class="col-lg-2 nav-button" @click="changeNav('contact')">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['fixTop'],

        methods: {
            changeNav(val) {
                this.$emit('changeNav', val);
            }
        }
    }
</script>

<style scoped>
    .menu-row {
        height: 100%;
    }

    .nav-button {
        text-align: center;
    }

    .nav-button:hover {
        cursor: pointer;
    }

    .main-nav {
        background: green;
    }

    .fix-nav {
        top: 0;
        position: fixed;
        z-index: 9999;
    }

    .nav-top {
        height:200px;
    }

    .nav-bottom {
        width: 100%;
        height:50px;
        background: green;
    }
</style>