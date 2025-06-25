<script setup>
    const layoutStore = useLayoutStore()
</script>

<template>
    <div class="text-base breadcrumbs fontLao">
        <ul>
            <li v-for="bread in layoutStore.breadcrumbs"><a>{{ bread }}</a></li>
        </ul>
    </div>
</template>