<template>
    <div class="background-overlay">
        <div class="overlay-modal">

        </div>
    </div>
</template>

<style scoped>
    .background-overlay {
        background: black;
        position: absolute;
        opacity: 0.5;
        z-index: 10;
        width: 100%;
        height: 120%;
        top: 0;
    }

    .overlay-modal {
        background: white;
        z-index: 20;
    }
</style>