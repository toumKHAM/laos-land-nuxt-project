<script setup>
    defineProps({
        icons: String,
        colors: String,
        sized:String
    })
</script>

<template>
    <!-- <i class="fa-solid fa-location-dot" style="color: #63E6BE;font-size: 18px;"></i> -->
    <i :class="icons" :style="[`font-size: ${sized}`,`color: ${colors}`]"></i>
    <!-- <font-awesome-icon :icon="icons" :style="['font-size: 18px',`color: ${colors}`]" /> -->
</template>