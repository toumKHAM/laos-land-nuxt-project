<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ຂໍ້ມູນທີ່ຕັ້ງ',['ຈັດການຂໍ້ມູນທົ່ວໄປ','ຂໍ້ມູນທີ່ຕັ້ງ'])
    })
</script>

<template>
    <h1>Location</h1>
</template>