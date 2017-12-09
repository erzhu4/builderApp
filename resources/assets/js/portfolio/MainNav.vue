<template>
    <div class="main-nav">
        <div class="row nav-top">
            <div class="container">
                <div class="text-center"><img class="picture" src="/images/portfolio/eric-zhu.jpg"></div>
                <div class="name-div">ERIC ZHU</div>
            </div>
        </div>
        <div class="row nav-bottom" :class="{ 'fix-nav': fixTop }">
            <div class="container">
                <div class="row menu-row visible-md-block visible-lg-block">
                    <div class="col-lg-3 nav-button" @click="changeNav('overview')">
                        <div class="nav-text" :class="{ active: currentTab == 'overview' }"><i class="fa fa-users" aria-hidden="true"></i> Overview</div>
                    </div>
                    <div class="col-lg-3 nav-button" @click="changeNav('games')">
                        <div class="nav-text" :class="{ active: currentTab == 'games' }"><i class="fa fa-futbol-o" aria-hidden="true"></i> Games</div>
                    </div>
                    <div class="col-lg-3 nav-button" @click="changeNav('projects')">
                        <div class="nav-text" :class="{ active: currentTab == 'projects' }"><i class="fa fa-file-image-o" aria-hidden="true"></i> Projects</div>
                    </div>
                    <div class="col-lg-3 nav-button" @click="changeNav('contact')">
                        <div class="nav-text" :class="{ active: currentTab == 'contact' }"><i class="fa fa-paper-plane" aria-hidden="true"></i> Contact</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['currentTab', 'fixTop'],

        methods: {
            changeNav(val) {
                this.$emit('changeNav', val);
            }
        }
    }
</script>

<style scoped>
    .active {
        color: #19b1ee;
    }

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
        background: #383838;
        text-shadow: 1px 1px #19b1ee;
        cursor: pointer;
    }

    .nav-text {
        margin: auto;
    }

    .main-nav {

    }

    .fix-nav {
        top: 0;
        position: fixed;
        z-index: 9999;
    }

    .nav-top {
        background-image: url("/images/portfolio/mainnav.jpg");
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
        margin: 0;
        background: #313131;
    }
</style>