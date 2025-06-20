<template>
    <div class="flex gap-4 p-4">
        <div class="flex-1">
            <ClientOnly>
                <QuillEditor
                    v-model:content="content"
                    contentType="html"
                    theme="snow"
                    class="h-96 bg-white fontLao"
                />
            </ClientOnly>
        </div>
        <div class="flex-1 fontLao">
            <p class="mt-4 text-sm text-gray-500">ຜົນທີ່ໄດ້:</p>
            <div class="p-2 mt-1" v-html="content"></div>
        </div>
    </div>
</template>
  
<script setup>
  const content = ref('<p>ເລີ່ມພິມໄດ້...</p>')
</script>
