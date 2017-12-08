<template>
    <div class="game-container">
        <transition name="drawerSlide">
            <div class="game-start section-container" @click="showSnakeGame" v-if="!showSnake">
                <h3>Snake</h3>
            </div>
            <snake v-if="showSnake"></snake>
        </transition>
    </div>
</template>

<script>
    import Snake from './snake/Snake.vue';

    export default {
        components: {Snake},

        data(){
            return {
                showSnake: false
            };
        },

        methods: {
            showSnakeGame(){
                this.showSnake = true;
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