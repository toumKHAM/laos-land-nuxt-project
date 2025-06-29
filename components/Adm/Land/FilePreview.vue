<script setup>
    const props = defineProps({
        index: Number,
        fileName: String,
        removeFile: Function
    });
</script>

<template>
    <div class="flex gap-3 items-center mt-3">
        <div class="flex-1">
            <label class="input w-full">
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    </g>
                </svg>
                <input type="text" class="grow" :value="props.fileName" disabled />
            </label>
        </div>
        <div class="text-right" style="width: 20px;">
            <i class="fa-solid fa-trash text-xl cursor-pointer text-error" @click="removeFile(props.index)"></i>
        </div>
    </div>
</template>
<style scoped>
.input {
    &:has(> input[disabled]), &:is(:disabled, [disabled]) {
        color: black;
        background-color: #f5f5f5;
    }
}
</style>