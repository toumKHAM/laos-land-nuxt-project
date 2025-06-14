<script setup>
    // import { useLayoutStore } from '@/stores/layout'
    // const layoutStore = useLayoutStore()
</script>

<template>
    <div class="text-sm breadcrumbs">
        <ul>
            <!-- <li v-for="bread in layoutStore.breadcrumbs"><a>{{ bread }}</a></li> -->
            <li v-for="bread in ['level1','level2']"><a>{{ bread }}</a></li>

        </ul>
    </div>
</template>