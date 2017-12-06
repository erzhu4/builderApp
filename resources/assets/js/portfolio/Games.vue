<template>
    <div class="container" style="border:purple solid 1px; height:1500px;">
        <a href="#" @click="$emit('showOverlay', 'galaxy')">Galaxy</a>
        <galaxy></galaxy>
        <a href="#" @click="$emit('showOverlay', 'snake')">Snake</a>
    </div>
</template>

<script>
    import Galaxy from './games/galaxy/Galaxy.vue';

    export default {
        components: {Galaxy}

    }
</script>

<style scoped>
    .container {
        background: transparent;
    }
</style>