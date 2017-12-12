<template>
    <div class="container">
        <p class="text-center">Fun Projects:</p>
        <div class="row">
            <div class="col-md-4 col-sm-12">
                <div class="section-container small-project-container">
                    <h4>Galaxy Game</h4>
                    <div class="image" style="background-image: url('/images/portfolio/galaxy.png')"></div>
                    <div class="project-description">
                        <p>A mini JavaScript game made using canvas.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="section-container small-project-container">
                    <h4>Snake Game</h4>
                    <div class="image" style="background-image: url('/images/portfolio/snake.png')"></div>
                    <div class="project-description">
                        <p>JavaScript game made using CSS, HTML, and jQuery.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="section-container small-project-container">
                    <h4>AbleTo(Work)</h4>
                    <div class="image" style="background-image: url('/images/portfolio/ableto.png')"></div>
                    <div class="project-description">
                        <p>I work as a software developer for a health care company called AbleTo maintaining their primary care platform.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    p {
        font-size: 15px;
    }

    .container {
        min-height: 45rem;
    }

    .small-project-container {
        text-align: center;
    }

    .small-project-container:hover {
        cursor: pointer;
    }

    .small-project-container:hover .project-description {
        height: 6.5rem;
    }

    .project-description {
        overflow: hidden;
        height: 0;
        transition: height 0.5s;
    }

    .image {
        height: 22rem;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>