<template>
    <div class="container" style="border:purple solid 1px; height:1500px;">
        <div class="game-header" @click="showGalaxyGame" v-if="!showGalaxy">
            <h3>Galaxy</h3>
        </div>
        <galaxy v-if="showGalaxy"></galaxy>
        <div class="game-header" @click="showSnakeGame" v-if="!showSnake">
            <h3>Snake</h3>
        </div>
        <snake v-if="showSnake"></snake>
    </div>
</template>

<script>
    import Snake from './games/snake/Snake.vue';
    import Galaxy from './games/galaxy/Galaxy.vue';

    export default {
        components: {Galaxy, Snake},

        data(){
            return {
                showGalaxy: false,
                showSnake: false
            };
        },

        methods: {
            showGalaxyGame(){
                this.showGalaxy = true;
            },

            showSnakeGame(){
                this.showSnake = true;
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