<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ຂໍ້ມູນຊື້ແລ້ວ',['ຂໍ້ມູນຊື້ແລ້ວ'])
    })
</script>

<template>
    <h1>Customer Buy</h1>
</template>