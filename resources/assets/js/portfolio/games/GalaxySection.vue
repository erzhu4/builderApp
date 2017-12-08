<template>
    <div class="game-container">
        <div class="game-start section-container" @click="showGalaxyGame" v-if="!showGalaxy">
            <h3>Galaxy</h3>
        </div>
        <galaxy v-if="showGalaxy"></galaxy>
    </div>
</template>

<script>
    import Galaxy from './galaxy/Galaxy.vue';

    export default {
        components: {Galaxy},

        data(){
            return {
                showGalaxy: false
            };
        },

        methods: {
            showGalaxyGame(){
                this.showGalaxy = true;
            },

            hideGalaxyGame(){
                this.showGalaxy = false;
            }
        }
    }
</script>

<style scoped>
    .game-container {
        background: transparent;
        text-align: center;
    }
</style>