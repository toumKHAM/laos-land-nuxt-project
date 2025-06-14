<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ບັນທຶກການເຊົ່າ',['ການບໍລິການ','ບັນທຶກການເຊົ່າ'])
    })
</script>

<template>
    <h1>Rent</h1>
</template>