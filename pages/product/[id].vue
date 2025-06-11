<script setup>
    const params = useRoute().params
</script>

<template>
    <NuxtLayout>
        <h1>detail page</h1>
        <h1>ID: {{ params.id }}</h1>
    </NuxtLayout>
    
</template>