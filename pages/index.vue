<script setup>
    import map_img from '@/assets/images/map_img.jpeg'
</script>

<template>
  <NuxtLayout>
    <div class="container mx-auto">
      <div class="flex flex-col">
        <div class="relative h-96 bg-gray-400 w-full mx-auto div-1 mt-4">
          <!-- Background/map section -->
          <div class="w-full h-full bg-amber-300 div-2">
            <img class="w-full h-full object-cover" :src="map_img" alt="">
          </div>
          <!-- Fly-in tab search -->
          <CutTabSearcAbsolute />
        </div>
        <div>Content</div>
      </div>
    </div>
  </NuxtLayout>
</template>
