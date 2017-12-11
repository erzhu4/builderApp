<template>
    <div class="galaxy-container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <h2 class="section-title">Galaxy</h2>
            </div>
            <div class="col-md-2">
                <div class="close-window" @click="$emit('closeWindow')"><i class="fa fa-window-close" aria-hidden="true"></i></div>
            </div>
        </div>
        <div class="score-container">Score: <div class="galaxy-score">0</div></div>
        <canvas></canvas><br>
        <button class="start-button" @click="startGame">Start</button>
        <button class="reset" @click="startGame">Reset</button>
    </div>
</template>

<script>
    import './lib/util.js';
    import './lib/movingObject.js';
    import './lib/expandingObject.js';
    import './lib/enemy.js';
    import './lib/ship.js';
    import './lib/bullet.js';
    import './lib/explosion.js';
    import './lib/bigExplosion.js';
    import './lib/bigenemy.js';
    import './lib/spark.js';
    import './lib/puff.js';
    import './lib/game.js';
    import './lib/gameView.js';

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
    }

    .score-container{
        text-align: left;
    }

    .close-window {
        display: inline-block;
        font-size: 2rem;
    }

    .close-window:hover {
        cursor: pointer;
    }
</style>