<template>
    <div class="container" style="border:purple solid 1px; height:1500px;">
        <div class="game-header" @click="showGalaxyGame" v-if="!showGalaxy">
            <h3>Galaxy</h3>
        </div>
        <galaxy v-if="showGalaxy"></galaxy>
        <h3>Snake</h3>
    </div>
</template>

<script>
    import Galaxy from './games/galaxy/Galaxy.vue';

    export default {
        components: {Galaxy},

        data(){
            return {
                showGalaxy: false,
                showSnake: false
            };
        },

        methods: {
            showGalaxyGame(){
                this.showGalaxy = true;
            }
        }
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