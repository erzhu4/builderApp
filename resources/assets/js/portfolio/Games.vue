<template>
    <div class="container" style="height:1500px;">
        <galaxy-section></galaxy-section>
        <snake-section></snake-section>
    </div>
</template>

<script>
    import Snake from './games/SnakeSection.vue';
    import Galaxy from './games/GalaxySection.vue';

    export default {
        components: {GalaxySection, SnakeSection}
    }
</script>

<style scoped>
    .container {
        background: transparent;
        text-align: center;
    }

    .game-header:hover {
        cursor: pointer;
    }
</style>