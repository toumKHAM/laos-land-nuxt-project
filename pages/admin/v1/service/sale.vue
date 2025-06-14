<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ບັນທຶກການຂາຍ',['ການບໍລິການ','ບັນທຶກການຂາຍ'])
    })
</script>

<template>
    <h1>Sale</h1>
</template>