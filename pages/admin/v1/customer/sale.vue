<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ຂໍ້ມູນຂາຍ',['ຂໍ້ມູນຂາຍ'])
    })
</script>

<template>
    <h1>Customer Sale</h1>
</template>