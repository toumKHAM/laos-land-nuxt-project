<script setup>
    definePageMeta({
        layout: 'admin',
        middleware: 'auth'
    })

</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>