<template>
    <div class="container" style="border:purple solid 1px; height:1500px;">
        <a href="#" @click="$emit('showOverlay', 'galaxy')">Galaxy</a>
        <a href="#" @click="$emit('showOverlay', 'snake')">Snake</a>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .container {
        background: transparent;
    }
</style>