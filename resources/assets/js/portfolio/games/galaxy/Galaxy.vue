<template>
    <div class="galaxy-container">
        <div class="score-container">Score: <div class="galaxy-score">0</div></div>
        <canvas></canvas><br>
        <button class="start-button" @click="startGame">Start</button>
        <button class="reset" @click="startGame">Reset</button>
    </div>
</template>

<script>
    import Utils from './lib/util.js';
    import MovingObjects from './lib/movingObject.js';
    import ExpandingObjects from './lib/expandingObject.js';
    import Enemy from './lib/enemy.js';
    import Ship from './lib/ship.js';
    import Bullet from './lib/bullet.js';
    import Explosion from './lib/explosion.js';
    import BigExplosion from './lib/bigExplosion.js';
    import BigEnemy from './lib/bigenemy.js';
    import Spark from './lib/spark.js';
    import Puff from './lib/puff.js';
    import Game from './lib/game.js';
    import GameView from './lib/gameView.js';

    export default {
        data(){
            return {
                ctx: {},
                game: {},
                view: {}
            };
        },

        mounted(){
            this.initialize();
        },

        methods: {
            initialize(){
                var canvasEl = document.getElementsByTagName("canvas")[0];
                canvasEl.width = Galaxy.Game.DIM_X;
                canvasEl.height = Galaxy.Game.DIM_Y;
                this.ctx = canvasEl.getContext("2d");
                this.game = new Galaxy.Game();
                this.view = new Galaxy.GameView(this.game, this.ctx);
            },

            startGame(){
                this.view.start();
            }
        }
    }
</script>

<style scoped>
    .galaxy-container {
        text-align: center;
        border: 1px solid red;
    }

    .score-container{
        text-align: left;
    }
</style>