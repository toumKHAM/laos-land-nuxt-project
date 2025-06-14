<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ຂໍ້ມູນລາຍລະອຽດບຸກຄົນ',['ຈັດການຂໍ້ມູນທົ່ວໄປ','ຂໍ້ມູນລາຍລະອຽດບຸກຄົນ'])
    })
</script>

<template>
    <h1>Person</h1>
</template>