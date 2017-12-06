<template>
    <div style="border:solid red 5px;">
        <div class="score-container">Score: <div class="galaxy-score">0</div></div>
        <canvas></canvas><br>
        <button class="start-button">Start</button>
        <button class="reset">Reset</button>
        <div class="game-over hide"> GAME OVER!!!!! </div>
    </div>
</template>

<script>
    import Utils from './lib/util.js';
    import MovingObjects from './lib/movingObject.js';
    import ExpandingObjects from './lib/expandingObject.js';
    import Enemy from './lib/enemy.js';
    import Game from './lib/game.js';

    export default {
        mounted(){
            this.initialize();
        },

        methods: {
            initialize(){
                console.log("initialize");
                var canvasEl = document.getElementsByTagName("canvas")[0];
                canvasEl.width = Galaxy.Game.DIM_X;
                canvasEl.height = Galaxy.Game.DIM_Y;
                var ctx = canvasEl.getContext("2d");
//                var game = new Galaxy.Game();
//                var view = new Galaxy.GameView(game, ctx);
            }
        }
    }
</script>