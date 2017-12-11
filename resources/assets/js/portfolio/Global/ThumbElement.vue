<template>
    <div class="thumb-container">
        <div class="main-slot-container"><slot name="main"></slot></div>
        <div class="secondary-slow-container"><slot name="secondary"></slot></div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .main-slot-container {
        opacity: 1;
        width: 100%;
        height: 100%;
        transition: opacity 0.5s;
    }

    .secondary-slow-container {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        transition: opacity 0.5s;
    }

    .thumb-container:hover .main-slot-container {
        opacity: 0;
        transition: opacity 0.5s;
    }

    .thumb-container:hover .secondary-slow-container{
        opacity: 1;
        transition: opacity 0.5s;
    }

    .thumb-container {
        width: 9rem;
        height: 12rem;
        margin: auto;
    }

    .main-slot-container section {
        width: 100%;
        height: 100%
    }

    .main-slot-container .image {
        -webkit-background-size: 100%;
        -moz-background-size: 100%;
        -o-background-size: 100%;
        background-size: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>