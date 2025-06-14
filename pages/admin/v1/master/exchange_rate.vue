<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ຂໍ້ມູນອັດຕາແລກປ່ຽນ',['ຈັດການຂໍ້ມູນທົ່ວໄປ','ຂໍ້ມູນອັດຕາແລກປ່ຽນ'])
    })
</script>

<template>
    <h1>Exchange_rate</h1>
</template>