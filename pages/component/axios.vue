<script setup>

const {$axios} = useNuxtApp()
const user = ref([])


onMounted(async ()=> {
    const response = await $axios.get('/test')
    user.value = response.data.datas
})
</script>

<template>
  <div>
    <h1>Axios</h1>
    <div v-for="item in user" :key="item.id">
        <span>{{ item.name }}</span>
    </div>
  </div>
</template>