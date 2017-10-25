<template>
    <div class="main-nav">
        <div class="row" style="height:200px;">
            <div class="container">
                <div class="row">
                    TOP PART OF THE THING
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                        <a @click="changeNav('home')">Home</a>
                    </div>
                    <div class="col-lg-2">
                        <a @click="changeNav('about')">About</a>
                    </div>
                    <div class="col-lg-2">
                        <a @click="changeNav('games')">Games</a>
                    </div>
                    <div class="col-lg-2">
                        <a @click="changeNav('projects')">Projects</a>
                    </div>
                    <div class="col-lg-2">
                        <a @click="changeNav('contact')">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [],

        methods: {
            changeNav(val) {
                this.$emit('changeNav', val);
            }
        }
    }
</script>

<style scoped>
    a:hover {
        cursor: pointer;
    }

    .main-nav {
        background:green;
    }
</style>