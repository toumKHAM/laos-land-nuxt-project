<script setup>
    const isLoading = ref(false)
    function loadData() {
        isLoading.value = true
        setTimeout(() => {
            isLoading.value = false
        }, 2000)
    }
</script>

<template>
    <div>
        <button class="btn btn-primary" @click="loadData">Load Something</button>
        <ClientOnly>
            <LoadingOverlay :active="isLoading" :is-full-page="true" :can-cancel="true" :color="'#422ad5'"
                :loader="'spinner'" />
        </ClientOnly>
    </div>
</template>
