<script setup>
  const imageFile = ref([])
  const imageUrl = ref([])
  const fileType = ref([])
  const file_input = ref(null)

  function onFileChange(event) {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      fileType.value.push('img')
    } else if (file && file.type.startsWith('video/')) {
      fileType.value.push('vdo')
    }
    imageFile.value.push(file)
    imageUrl.value.push(URL.createObjectURL(file))
  }

  function removeImage(index) {
    imageUrl.value.splice(index, 1); 
    fileType.value.splice(index, 1); 
  }
</script>

<template>
  <div class="p-6">
    <ImageUploader />
  </div>
  <h4>New</h4>
  <div class="m-10">
    
    <div class="grid grid-cols-4 gap-3">
      <AdmLandImgPreview v-for="image_url,index in imageUrl" 
        :index="index" 
        :imageUrl="image_url" 
        :fileType="fileType[index]"
        :removeImage="removeImage"
      ></AdmLandImgPreview>
    </div>
    
  </div>

  <div class="m-10">
    <button class="btn fontLao" @click="file_input.click()">
      <i class="fa-solid fa-plus mr-1" style="font-size: 14px;"></i>ເພີ່ມຮູບພາບ
    </button>
    <input
      type="file"
      ref="file_input"
      accept="image/*,video/*"
      @change="onFileChange"
      class="hidden"
    />
    <br>
    <button class="btn fontLao" @click="console.log(imageFile)">
      log file
    </button>
  </div>
</template>
<style scoped>
  .delete-img{
    border-radius: 5rem !important;
    padding: 7px !important;
    color: white;
    cursor: pointer;
  }
</style>