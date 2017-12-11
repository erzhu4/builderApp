<template>
    <div class="home-container" style="height:1500px;">
        <title-section></title-section>
        <h2 class="section-header">AT A GLANCE</h2>
        <skills-section></skills-section>
    </div>
</template>

<script>
    import TitleSection from './overview/TitleSection.vue';
    import SkillsSection from './overview/SkillsSection.vue';

    export default {
        components: {TitleSection, SkillsSection}
    }
</script>