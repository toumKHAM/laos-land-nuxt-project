<template>
  <ClientOnly>
    <vue-good-table class="m-10 fontEng"
      :columns="columns" :rows="rows" 
      :search-options="{ enabled: true, placeholder: 'Search this table',}"
      :pagination-options="{ enabled: true, perPage: 2 }"/>
  </ClientOnly>
</template>

<script setup>
const columns = [
  {label: 'Name', field: 'name'}, 
  {label: 'Age', field: 'age', type: 'number'},
  {label: 'Created On', field: 'createdAt'},
  {label: 'Percent', field: 'score', type: 'percentage'}
]
const rows = [
  { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
  { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
  { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
  { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
  { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
  { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 }
]
</script>
