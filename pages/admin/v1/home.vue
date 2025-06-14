<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ໜ້າຫຼັກ',['ໜ້າຫຼັກ'])
    })
</script>

<template>
    <h1>home</h1>
</template>