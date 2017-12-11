<template>
    <div>
        <p class="text-center">Relevant Web Technologies:</p>
        <div class="container clear-section-container">
            <div class="row">
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/laravel.png')"></div>
                        </section>
                        <section slot="secondary">
                            LARAVEL
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/rails.png')"></div>
                        </section>
                        <section slot="secondary">
                            RUBY ON RAILS
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/vue.png')"></div>
                        </section>
                        <section slot="secondary">
                            VUE.js
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/react.png')"></div>
                        </section>
                        <section slot="secondary">
                            REACT.js
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/mysql.png')"></div>
                        </section>
                        <section slot="secondary">
                            MySQL
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/postgres.png')"></div>
                        </section>
                        <section slot="secondary">
                            PostgreSQL
                        </section>
                    </skill>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/php.png')"></div>
                        </section>
                        <section slot="secondary">
                            PHP
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/ruby.png')"></div>
                        </section>
                        <section slot="secondary">
                            RUBY
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/javascript.png')"></div>
                        </section>
                        <section slot="secondary">
                            JAVASCRIPT
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/css.jpg')"></div>
                        </section>
                        <section slot="secondary">
                            CSS
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/vagrant.png')"></div>
                        </section>
                        <section slot="secondary">
                            VAGRANT
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" style="background-image: url('/images/portfolio/nginx.png')"></div>
                        </section>
                        <section slot="secondary">
                            NGINX
                        </section>
                    </skill>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Skill from '../Global/ThumbElement.vue';

    export default {
        components: {Skill}
    }
</script>