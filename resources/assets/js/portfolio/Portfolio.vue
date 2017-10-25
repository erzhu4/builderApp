<template>
    <div class="page-container">
        <main-nav @changeNav="updateCurrentPage"></main-nav>
    </div>
</template>

<script>
    import MainNav from './MainNav.vue';

    export default {
        data() {
            return {
                currentPage: 'home'
            };
        },
        components : {MainNav},
        methods: {
            updateCurrentPage(val){

            }
        }
    }
</script>