<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ຜູ້ໃຊ້ລະບົບ',['ຈັດການຂໍ້ມູນທົ່ວໄປ','ຜູ້ໃຊ້ລະບົບ'])
    })
</script>

<template>
    <h1>User</h1>
</template>