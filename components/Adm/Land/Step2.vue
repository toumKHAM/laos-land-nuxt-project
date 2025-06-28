<script setup>
    const note_land = ref('<p>ພິມລາຍລະອຽດ...</p>')
    // -- ສຳລັບ ຮູບພາບແລະວີດີໂອດິນ -- //
    const imageFile = ref([])
    const imageUrl = ref([])
    const fileType = ref([])
    const file_input = ref(null)

    function onFileChangeForLand(event) {
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
    // -- ຈົບ ສຳລັບ ຮູບພາບແລະວີດີໂອດິນ -- //

    // -- ສຳລັບ key word tag -- //
    const tags = ref([])
    const input_tag = ref('')
    const addTag = () => {
        const newTag = input_tag.value.trim().replace(',', '')
        if (newTag && !tags.value.includes(newTag)) {
            tags.value.push(newTag)
        }
        input_tag.value = ''
    }
    const removeTag = (index) => {
        tags.value.splice(index, 1)
    }
    // -- ຈົບ ສຳລັບ key word tag -- //
</script>
<template>
    <div class="grid lg:grid-cols-2 gap-8 fontLao text-base">
        <div>
            <!-- 1 -->
            <div class="grid grid-cols-6 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ເລກທີໃບຕາດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-2">
                    <input type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <!-- 2 -->
            <div class="grid grid-cols-6 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ວັນທີອອກໃບຕາດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-2">
                    <input type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <!-- 3 -->
            <div class="grid grid-cols-6 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ຮູບພາບໃບຕາດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-2">
                    <input type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <!-- 4 ຮູບພາບແລະວີດີໂອດິນ -->
            <div class="grid grid-cols-6 gap-3 mb-3">
                <div class="text-right col-span-2">
                    <label>ຮູບພາບແລະວີດີໂອດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-4">
                    <div class="grid grid-cols-2 gap-2">
                        <AdmLandImgPreview v-for="image_url,index in imageUrl" 
                            :index="index" 
                            :imageUrl="image_url" 
                            :fileType="fileType[index]"
                            :removeImage="removeImage"
                        ></AdmLandImgPreview>
                    </div>
                </div>
            </div>
            <!-- 5 -->
            <div class="grid grid-cols-6 gap-3 mb-3">
                <div class="col-span-2"></div>
                <div class="col-span-2">
                    <button class="btn w-full" @click="file_input.click()">
                        <i class="fa-solid fa-plus mr-1" style="font-size: 14px;"></i>ເພີ່ມຮູບພາບ
                    </button>
                    <input
                        type="file"
                        ref="file_input"
                        accept="image/*,video/*"
                        @change="onFileChangeForLand"
                        class="hidden"
                    />
                </div>
            </div>
            <!-- 6 -->
            <div class="grid grid-cols-6 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ຮູບພາບໜ້າປົກ <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-2">
                    <button class="btn btn-soft btn-primary w-full" >
                        ເລືອກຮູບພາບ
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-6 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>Key word ສຳລັບຄົ້ນຫາ <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-2">
                    <input  
                        v-model="input_tag"
                        @keydown.enter.prevent="addTag"
                        @keydown.,.prevent="addTag"
                        placeholder="ຂາຍດິນ, ...." class="input w-full" 
                    />
                </div>
            </div>
            <div class="grid grid-cols-6 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                </div>
                <div class="col-span-4">
                    <div class="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md min-h-[3rem]">
                        <span
                            v-for="tag, index in tags"
                            :key="index"
                            class="badge badge-soft badge-primary badge-lg gap-1 fontLao"
                        >
                            {{ tag }}
                            <button class="ml-1 cursor-pointer" @click="() => removeTag(index)">×</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <!-- 1 -->
            <div class="grid grid-cols-6 gap-3 mb-3">
                <div class="col-span-4">
                    <label>ສິ່ງອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກ <span class="dao">*</span>:</label>
                </div>
                <div class="text-center">ມີ</div>
                <div class="text-center">ບໍ່ມີ</div>
            </div>
            <!-- 2: add dynamic -->
            <div class="grid grid-cols-6 gap-3 mb-3">
                <div class="col-span-4">
                    <select class="select w-full">
                        <option selected>ໄຟຟ້າ</option>
                        <option>ນໍ້າປະປາ</option>
                        <option>ທາງປູຢາງ</option>
                    </select>
                </div>
                <div class="text-center"><input type="radio" name="radio-1" class="radio radio-primary" checked="checked" /></div>
                <div class="text-center"><input type="radio" name="radio-1" class="radio radio-primary" /></div>
            </div>
            <div class="grid grid-cols-6 gap-3 mb-3">
                <div class="col-span-4">
                    <select class="select w-full">
                        <option>ໄຟຟ້າ</option>
                        <option selected>ນໍ້າປະປາ</option>
                        <option>ທາງປູຢາງ</option>
                    </select>
                </div>
                <div class="text-center"><input type="radio" name="radio-2" class="radio radio-primary" checked="checked" /></div>
                <div class="text-center"><input type="radio" name="radio-2" class="radio radio-primary" /></div>
            </div>
            <!-- 3 -->
            <div class="grid grid-cols-6 gap-3 mb-3">
                <div class="col-span-4">
                    <button class="btn">
                        <i class="fa-solid fa-plus mr-1" style="font-size: 14px;"></i>ເພີ່ມສິ່ງອຳນວຍ
                    </button>
                </div>
            </div>
            <!-- 4 -->
            <div class="grid grid-cols-6 gap-3 mb-3 mt-3">
                <div class="col-span-4">
                    <label>ຄຳອະທິບາຍອື່ນໆກ່ຽວກັບດິນຕອນນີ້ <span class="dao">*</span>:</label>
                </div>
            </div>
            <div class="mb-3">
                <ClientOnly>
                    <QuillEditor
                        v-model:content="note_land"
                        contentType="html"
                        theme="snow"
                        class="h-96 bg-white fontLao"
                    />
                </ClientOnly>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .dao{
        color: red;
    }
</style>