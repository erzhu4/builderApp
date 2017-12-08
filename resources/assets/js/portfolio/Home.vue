<template>
    <div class="container" style="height:1500px;">
        <title-section></title-section>
    </div>
</template>

<script>
    import TitleSection from './home/TitleSection.vue';

    export default {
        components: {TitleSection}
    }
</script>

<style scoped>
    .container {
        background: #fff;
    }
</style>