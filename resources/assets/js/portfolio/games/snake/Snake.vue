<template>
    <div class="snake-container">
        <h1>Welcome to snake!!</h1>
        <figure id="snake"></figure>
        <button class="start-button" @click="startGame">Start</button>
        <button class="reset" @click="startGame">Reset</button>
    </div>
</template>

<script>
    import './lib/snake.js';
    import './lib/board.js';
    import './lib/snakeView.js';

    export default {
        methods: {
            startGame(){
                var board = new SnakeGame.Board();
                var view = new SnakeGame.View(board, $('#snake'));
            }
        }
    }
</script>

<style>
    .snake-container {
        text-align: center;
        border: 1px solid red;
    }

    .snake-grid {
        list-style: none;
        margin: auto;
        display: block;
        width: 500px;
        height: 500px;
    }

    h1 {
        font-size: 50px;
        font-family: sans-serif;
        text-align: center;
    }

    .snake-grid > .snake-li {
        height: 18px;
        width: 18px;
        border: 1px solid #000;
        float: left;
    }

    .snake-grid > .snake {
        background: green;
    }

    .snake-grid > .apple {
        background: red;
    }
</style>