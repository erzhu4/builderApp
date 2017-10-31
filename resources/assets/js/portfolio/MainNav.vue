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
                    <div class="col-lg-2 nav-button">
                        <a @click="changeNav('home')">Home</a>
                    </div>
                    <div class="col-lg-2 nav-button">
                        <a @click="changeNav('about')">About</a>
                    </div>
                    <div class="col-lg-2 nav-button">
                        <a @click="changeNav('games')">Games</a>
                    </div>
                    <div class="col-lg-2 nav-button">
                        <a @click="changeNav('projects')">Projects</a>
                    </div>
                    <div class="col-lg-2 nav-button">
                        <a @click="changeNav('contact')">Contact</a>
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
        z-index: 9999;
    }

    .fix-nav {
        top: 0;
        position: fixed;
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