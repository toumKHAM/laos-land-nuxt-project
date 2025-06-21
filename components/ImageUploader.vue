<template>
  <div class="form-control w-full max-w-md">
    <label class="label">
      <span class="label-text">Select an Image</span>
    </label>

    <input
      type="file"
      accept="image/*"
      @change="onFileChange"
      class="file-input file-input-bordered w-full"
    />

    <div v-if="imageUrl" class="mt-4">
      <span class="label-text mb-1 block">Preview:</span>

      <div class="relative inline-block rounded-2xl overflow-hidden border border-base-300 shadow-lg max-h-64">
        <!-- Button X Inside Image -->
        <button
          @click="removeImage"
          class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-md z-10"
          aria-label="Remove image"
        >
          ✕
        </button>

        <!-- Image Preview -->
        <img
          :src="imageUrl"
          alt="Preview"
          class="rounded-2xl max-h-64 object-cover border border-base-300 shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const imageUrl = ref('')

function onFileChange(event) {
  const file = event.target.files[0]
  if (file && file.type.startsWith('image/')) {
    imageUrl.value = URL.createObjectURL(file)
  } else {
    imageUrl.value = ''
  }
}

function removeImage() {
  imageUrl.value = ''
}
</script>



