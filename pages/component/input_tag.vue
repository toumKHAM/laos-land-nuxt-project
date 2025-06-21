<template>
  <div class="form-control w-full max-w-xl">
    <label class="label">
      <span class="label-text">Tags</span>
    </label>
    <input
        v-model="input"
        @keydown.enter.prevent="addTag"
        @keydown.,.prevent="addTag"
        class="input input-sm border-none focus:outline-none grow"
        placeholder="Type a tag and press Enter or comma"
      />

    <div class="flex flex-wrap gap-2 p-2 border rounded-lg min-h-[3rem]">
      <span
        v-for="tag, index in tags"
        :key="index"
        class="badge badge-primary badge-lg gap-1 fontLao"
      >
        {{ tag }}
        <button class="ml-1" @click="() => removeTag(index)">×</button>
      </span>

      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref([])
const input = ref('')

const addTag = () => {
  const newTag = input.value.trim().replace(',', '')
  if (newTag && !tags.value.includes(newTag)) {
    tags.value.push(newTag)
  }
  input.value = ''
}

const removeTag = (index) => {
  tags.value.splice(index, 1)
}
</script>
