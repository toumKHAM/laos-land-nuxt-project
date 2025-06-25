<script setup>
    const props = defineProps({
        index: Number,
        imageUrl: String,
        fileType: String,
        removeImage: Function
    });
</script>

<template>
    <div class="indicator w-full">
        <span class="indicator-item badge badge-error delete-img" @click="removeImage(props.index)">✕</span>
        <div class="bg-base-300 grid h-45 w-full place-items-center">
            <img v-if="fileType=='img'"
                :src="props.imageUrl"
                alt="Preview"
                class="h-45 w-full object-cover border border-base-300"
            />
            <video v-else-if="fileType=='vdo'"
                :src="props.imageUrl"
                controls
                class="h-45 w-full border border-base-300"
            ></video>
        </div>
    </div>
</template>

<style scoped>
  .delete-img{
    border-radius: 5rem !important;
    padding: 7px !important;
    color: white;
    cursor: pointer;
  }
</style>