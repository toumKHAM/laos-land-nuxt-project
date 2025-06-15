<script setup>

    const search = ref('')
    const data = ref([
        { id: 1, name: 'Alice', job: 'Engineer', location: 'Vientiane' },
        { id: 2, name: 'Bob', job: 'Designer', location: 'Pakse' },
        { id: 3, name: 'Charlie', job: 'Teacher', location: 'Luang Prabang' },
        { id: 4, name: 'Alice', job: 'Engineer', location: 'Vientiane2' },
        { id: 5, name: 'Bob', job: 'Designer', location: 'Pakse3' },
        { id: 6, name: 'Charlie', job: 'Teacher', location: 'Luang Prabang4' }
    ])

    const filteredData = computed(() =>
        data.value.filter(person =>
            Object.values(person).some( value =>
                String(value).toLowerCase().includes(search.value.toLowerCase())
            )
        )
    )
</script>

<template>
    <input v-model="search" type="text" placeholder="Search..." class="input ml-10 mt-10" />
    <div class="m-10 overflow-x-auto rounded-box border border-base-content/8 bg-base-100  table-pin-rows table-pin-cols">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in filteredData" :key="person.id">
            <td>{{ person.name }}</td>
            <td>{{ person.job }}</td>
            <td>{{ person.location }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<style scoped>
    th{
        color: #000000 !important;
        background-color: #dcf1ff !important;
    }
</style>
