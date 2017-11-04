<template>
    <div class="main-nav">
        <div class="row nav-top">
            <div class="container">
                <div class="text-center"><img class="picture" src="/images/eric-zhu.jpg"></div>
                <div class="name-div">ERIC ZHU</div>
            </div>
        </div>
        <div class="row nav-bottom" :class="{ 'fix-nav': fixTop }">
            <div class="container">
                <div class="row menu-row visible-md-block visible-lg-block">
                    <div class="col-lg-2 nav-button" @click="changeNav('home')">
                        <div style="margin:auto;">Home</div>
                    </div>
                    <div class="col-lg-2 nav-button" @click="changeNav('about')">
                        <div style="margin:auto;">About</div>
                    </div>
                    <div class="col-lg-2 nav-button" @click="changeNav('games')">
                        <div style="margin:auto;">Games</div>
                    </div>
                    <div class="col-lg-2 nav-button" @click="changeNav('projects')">
                        <div style="margin:auto;">Projects</div>
                    </div>
                    <div class="col-lg-2 nav-button" @click="changeNav('contact')">
                        <div style="margin:auto;">Contact</div>
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
        color: white;
        min-height: 100%;
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    .nav-button:hover {
        font-style: italic;
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
        background-image: url("/images/mainnav.jpg");
        background-size: 100%;
        background-position: center;
        min-height: 100%;
        font-weight: bold;
        display: flex;
        align-items: center;
        height:200px;
    }

    .picture {
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }

    .name-div {
        font-size: 50px;
        color: white;
        text-align: center;
        text-shadow: 2px 2px #5c6ac4;
    }

    .nav-bottom {
        width: 100%;
        height:50px;
        margin: 0px;
        background: #5c6ac4;
    }
</style>