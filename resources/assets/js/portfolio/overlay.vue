<template>
    <div class="background-overlay" @click="$emit('closeOverlay')">
        <div class="overlay-modal">
            asdfsdafsaf
        </div>
    </div>
</template>

<style scoped>
    .background-overlay {
        background: black;
        position: absolute;
        text-align: center;
        opacity: 0.5;
        z-index: 10;
        width: 100%;
        height: 120%;
        top: 0;
    }

    .overlay-modal {
        background: white;
        position: absolute;
        z-index: 20;
    }
</style>