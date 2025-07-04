<script setup>
    const toast = useToastStore()
</script>

<template>
    <div v-if="toast.visible" class="toast toast-center toast-middle z-50">
      <div :class="`alert alert-${toast.type} fontLao text-white`">
        <span>{{ toast.message }}</span>
      </div>
    </div>
</template>
  