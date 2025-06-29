<script setup>
    // --- ສຳລັບຮູບໃບຕາດີນ  --- //
    const landNumberPicFile = ref(null)    //--- form-submit ---//
    const landNumberPicUrl = ref(null)
    const input_landNumberPic = ref(null)
    function onFileChangeForLandNumberPic(event) {
        const file = event.target.files[0]
        if (file ) {
            landNumberPicFile.value = file
            landNumberPicUrl.value = URL.createObjectURL(file)
        }
    }
    // --- ສຳລັບຮູບພາບໜ້າປົກ  --- //
    const thumbnailFile = ref(null)    //--- form-submit ---//
    const thumbnailUrl = ref(null)
    const input_thumbnail = ref(null)
    function onFileChangeForThumbnail(event) {
        const file = event.target.files[0]
        if (file ) {
            thumbnailFile.value = file
            thumbnailUrl.value = URL.createObjectURL(file)
        }
    }
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
    // -- ສຳລັບ Avt -- //
    const avts = ref([])
    const addAvt = ()=>{
        avts.value.push({avt_id:'',avt_value:'Y'})
    }
    const updateAvt = (index,avt)=>{
        avts.value[index] = avt
    }
    const removeAvt = (index) => {
        avts.value.splice(index, 1)
    }
</script>

<template>
    <div class="flex flex-col lg:flex-row gap-8 fontLao text-base">
        <div class="flex-1">
            <!-- 1 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ເລກທີໃບຕາດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <input type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <!-- 2 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ວັນທີອອກໃບຕາດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <input type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <!-- 3 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ຮູບພາບໃບຕາດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <input
                        type="file"
                        ref="input_landNumberPic"
                        accept="image/*"
                        @change="onFileChangeForLandNumberPic"
                        class="hidden"
                    />
                    <div v-if="landNumberPicFile" class="indicator w-full">
                        <span class="indicator-item badge badge-error delete-img" @click="landNumberPicFile=null">✕</span>
                        <div class="bg-base-300 grid h-45 w-full place-items-center">
                            <img 
                                :src="landNumberPicUrl"
                                alt="Preview"
                                class="h-45 w-full object-cover border border-base-300"
                            />
                        </div>
                    </div>
                    <button v-else class="btn btn-soft btn-primary w-full" @click="input_landNumberPic.click()">
                        ເລືອກຮູບພາບ
                    </button>
                </div>
            </div>
            <!-- 4 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ຮູບພາບແລະວີດີໂອດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <button class="btn btn-soft btn-primary w-full" @click="file_input.click()">
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
            <!-- 5 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right"></div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
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
            <!-- 6 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ຮູບພາບໜ້າປົກ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <input
                        type="file"
                        ref="input_thumbnail"
                        accept="image/*"
                        @change="onFileChangeForThumbnail"
                        class="hidden"
                    />
                    <div v-if="thumbnailFile" class="indicator w-full">
                        <span class="indicator-item badge badge-error delete-img" @click="thumbnailFile=null">✕</span>
                        <div class="bg-base-300 grid h-45 w-full place-items-center">
                            <img 
                                :src="thumbnailUrl"
                                alt="Preview"
                                class="h-45 w-full object-cover border border-base-300"
                            />
                        </div>
                    </div>
                    <button v-else class="btn btn-soft btn-primary w-full" @click="input_thumbnail.click()">
                        ເລືອກຮູບພາບ
                    </button>
                </div>
            </div>
            <!-- 7 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>Key word ສຳລັບຄົ້ນຫາ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <input  
                        v-model="input_tag"
                        @keydown.enter.prevent="addTag"
                        @keydown.,.prevent="addTag"
                        placeholder="ຂາຍດິນ, ...." class="input w-full" 
                    />
                </div>
            </div>
            <!-- 8 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
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
        <div class="flex-1">
            <div class="flex flex-col md:flex-row lg:flex-col md:gap-3">
                <div class="md:flex-2 md:text-right lg:text-left">
                    <label>ສິ່ງອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກ <span class="dao">*</span>:</label>
                </div>
                <div class="md:flex-3">
                    <button class="btn btn-soft btn-primary w-full" @click="addAvt">
                        <i class="fa-solid fa-plus mr-1" style="font-size: 14px;"></i>ເພີ່ມ
                    </button>
                    <AdmLandAvtPreview v-for="avt,index in avts" :key="`avt-${index}`"
                        :index="index"
                        :avt="avt"
                        :updateAvt="updateAvt"
                        :removeAvt="removeAvt"
                    ></AdmLandAvtPreview>
                    <button class="btn btn-primary" @click="console.log(avts)">Avts</button>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .dao{
        color: red;
    }
    .delete-img{
        border-radius: 5rem !important;
        padding: 7px !important;
        color: white;
        cursor: pointer;
    }
</style>