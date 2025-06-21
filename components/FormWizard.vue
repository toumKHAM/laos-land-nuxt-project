<template>
  <div class="max-w-2xl mx-auto mt-10 p-6 border rounded-xl shadow bg-base-100">
    <!-- Stepper -->
    <div class="flex items-center justify-between mb-10 relative">
      <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-300 z-0"></div>
      
      <template v-for="n in 3" :key="n">
        <div class="z-10 relative flex flex-col items-center w-1/3">
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full border-2 text-white font-bold transition-all duration-300"
            :class="{
              'bg-primary border-primary': currentStep >= n,
              'bg-gray-300 border-gray-400': currentStep < n
            }"
          >
            {{ n }}
          </div>
          <span class="mt-2 text-sm text-center"
                :class="currentStep >= n ? 'text-primary' : 'text-gray-500'">
            Step {{ n }}
          </span>
        </div>
      </template>
    </div>

    <!-- Step Content -->
    <div class="mb-6">
      <div v-if="currentStep === 1">
        <p class="text-lg font-semibold"> This is Step 1</p>
      </div>
      <div v-else-if="currentStep === 2">
        <p class="text-lg font-semibold">This is Step 2</p>
      </div>
      <div v-else-if="currentStep === 3">
        <p class="text-lg font-semibold">This is Step 3</p>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex justify-between">
      <button class="btn" @click="prevStep" :disabled="currentStep === 1">Previous</button>
      <button class="btn btn-primary" @click="nextStep" :disabled="currentStep === 3">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentStep = ref(1)

const nextStep = () => {
  if (currentStep.value < 3) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}
</script>
