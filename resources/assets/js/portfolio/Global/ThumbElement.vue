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
        width: 100%;
        height: 100%;
    }

    .secondary-slow-container {
        display: none;
        width: 100%;
        height: 100%;
    }

    .thumb-container:hover .main-slot-container {
        display: none;
    }

    .thumb-container:hover .secondary-slow-container{
        display: block;
    }

    .thumb-container {
        width: 100%;
        height: 9rem;
        margin-bottom: 2rem;
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
        background-repeat: no-repeat;
    }
</style>