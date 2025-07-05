<script setup>
    const toast = useToastStore()
    import { cloneDeep } from 'lodash'
    // --- ສຳລັບຮູບໃບຕາດີນ  --- //
    const landNumberPicFile = ref(null)    
    const input_landNumberPic = ref(null)
    function onFileChangeForLandNumberPic(event) {
        const file = event.target.files[0]
        if (file ) {
            landNumberPicFile.value = file
            // request to firebase
            formData.land_number_picture = URL.createObjectURL(file)
        }
    }
    function removeLandNumberPic(){
        landNumberPicFile.value = null
        // request to delete
        formData.land_number_picture = ''
    }
    // --- ສຳລັບຮູບພາບໜ້າປົກ  --- //
    const thumbnailFile = ref(null)    //--- form-submit ---//
    const input_thumbnail = ref(null)
    function onFileChangeForThumbnail(event) {
        const file = event.target.files[0]
        if (file ) {
            thumbnailFile.value = file
            // request to firebase
            formData.thumbnail = URL.createObjectURL(file)
        }
    }
    function removeThumbnailPic(){
        thumbnailFile.value = null
        // request to delete
        formData.thumbnail = ''
    }
    // -- ສຳລັບ ຮູບພາບແລະວີດີໂອດິນ -- //
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
        // request upload file to firebase
        formData.img_video.push(URL.createObjectURL(file))
    }
    function removeImage(index) {
        // remove from firebase
        formData.img_video.splice(index, 1); 
        fileType.value.splice(index, 1); 
    }
    // -- ຈົບ ສຳລັບ ຮູບພາບແລະວີດີໂອດິນ -- //
    // -- ສຳລັບ key word tag -- //
    const input_tag = ref('')
    const addTag = () => {
        const newTag = input_tag.value.trim().replace(',', '')
        if (newTag && !formData.keyword.includes(newTag)) {
            formData.keyword.push(newTag)
        }
        input_tag.value = ''
    }
    const removeTag = (index) => {
        formData.keyword.splice(index, 1)
    }

    // -- ຈົບ ສຳລັບ key word tag -- //
    // -- ສຳລັບ Avt -- //
    const addAvt = ()=>{
        formData.avts.push({avt_id:'',avt_value:'Y'})
    }
    const updateAvt = (index,avt)=>{
        formData.avts[index] = avt
    }
    const removeAvt = (index) => {
        formData.avts.splice(index, 1)
    }

    // ---- formData for submit ---- //
    const formData = reactive({
        land_address: '',
        land_number: '',
        land_number_date: '',
        land_number_picture: '',
        thumbnail: '',
        note: '',
        keyword: [],
        img_video: [],
        avts: []
    })
    let prev = cloneDeep(formData)
    const valid = reactive({
        land_address: true,
        land_number: true,
        land_number_date: true,
        land_number_picture: true,
        thumbnail: true,
        img_video: true,
        keyword: true
    })
    // ຟັງຊັ້ນ validate
    const validateData = ()=>{
        let ok = true
        if(formData.land_address==''){
            valid.land_address=false;ok = false
        }
        if(formData.land_number==''){
            valid.land_number=false;ok = false
        }
        if(formData.land_number_date==''){
            valid.land_number_date=false;ok = false
        }
        if(formData.land_number_picture==''){
            valid.land_number_picture=false;ok = false
        }
        if(formData.thumbnail==''){
            valid.thumbnail=false;ok = false
        }
        if(formData.keyword.length == 0){
            valid.keyword=false;ok = false
        }
        if(formData.img_video.length == 0){
            valid.img_video=false;ok = false
        }
        return ok
    }
    watch(formData,(newValue)=>{
        if(newValue.land_address != prev.land_address){
            valid.land_address=true
        }
        if(newValue.land_number != prev.land_number){
            valid.land_number=true
        }
        if(newValue.land_number_date != prev.land_number_date){
            valid.land_number_date=true
        }
        if(newValue.land_number_picture != prev.land_number_picture){
            valid.land_number_picture=true
        }
        if(newValue.thumbnail != prev.thumbnail){
            valid.thumbnail=true
        }
        if(newValue.img_video.length != prev.img_video.length){
            valid.img_video=true
        }
        if(newValue.keyword.length != prev.keyword.length){
            valid.keyword=true
        }
        prev = cloneDeep(newValue)
    },{deep:true})
    // function submit
    const handdleSubmit = ()=>{
        if(validateData()){
            console.log('submit');
            console.log(formData);
            return true
            
        }else{
            toast.show('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ', 'error')
            console.log('can not submit')
            console.log(formData);
            return false
        }
    }

    //--- function ສຳລັບຈັດການ ໂຕເລກ ---//
    const onInput = (key, event) => {
        let val = event.target.value.replace(/[^0-9\-]/g, '')
        formData[key] = val
    }
    //--- ຈົບ function ສຳລັບຈັດການ ໂຕເລກ ---//


    // ກຳນົດຟັງຊັ້ນໃຫ້ export ໃຫ້ແມ່ເຂົ້າເຖິງ
    defineExpose({
        handdleSubmit
    })
</script>

<template>
    <Toast />
    <div class="flex flex-col lg:flex-row gap-8 fontLao text-base">
        <div class="flex-1">
            <!-- 1.1 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລະຫັດທີ່ຕັ້ງຕອນດິນ(ໃບຕາດິນ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <input type="text" 
                        v-model="formData.land_address"
                        @input="onInput('land_address', $event)" 
                        maxlength="10"
                        placeholder="010050058" 
                        class="input w-full" 
                        :class="{'input-error': valid.land_address==false}"
                    />
                </div>
            </div>
            <!-- 1.2 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ເລກທີໃບຕາດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <input type="text" 
                        v-model="formData.land_number"
                        @input="onInput('land_number', $event)" 
                        maxlength="10"
                        placeholder="0273" 
                        class="input w-full" 
                        :class="{'input-error': valid.land_number==false}"
                    />
                </div>
            </div>
            <!-- 2 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ວັນທີອອກໃບຕາດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <input type="date" 
                        v-model="formData.land_number_date" 
                        placeholder="5/7/2025" 
                        class="input w-full" 
                        :class="{'input-error': valid.land_number_date==false}"
                    />
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
                    <div v-if="formData.land_number_picture!=''" class="indicator w-full">
                        <span class="indicator-item badge badge-error delete-img" @click="removeLandNumberPic">✕</span>
                        <div class="bg-base-300 grid h-45 w-full place-items-center">
                            <img 
                                :src="formData.land_number_picture"
                                alt="Preview"
                                class="h-45 w-full object-cover border border-base-300"
                            />
                        </div>
                    </div>
                    <button v-else 
                        class="btn btn-soft btn-primary w-full" 
                        :class="{'text-error border border-red-500': valid.land_number_picture==false}"
                        @click="input_landNumberPic.click()"
                    >
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
                    <button class="btn btn-soft btn-primary w-full" 
                            :class="{'text-error border border-red-500': valid.img_video==false}"
                            @click="file_input.click()"
                    >
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
                        <AdmLandImgPreview v-for="image_url,index in formData.img_video" 
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
                    <div v-if="formData.thumbnail!=''" class="indicator w-full">
                        <span class="indicator-item badge badge-error delete-img" @click="removeThumbnailPic">✕</span>
                        <div class="bg-base-300 grid h-45 w-full place-items-center">
                            <img 
                                :src="formData.thumbnail"
                                alt="Preview"
                                class="h-45 w-full object-cover border border-base-300"
                            />
                        </div>
                    </div>
                    <button v-else 
                        class="btn btn-soft btn-primary w-full" 
                        :class="{'text-error border border-red-500': valid.thumbnail==false}"
                        @click="input_thumbnail.click()">
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
                        placeholder="ຂາຍດິນ, ...." 
                        class="input w-full" 
                        :class="{'input-error': valid.keyword==false}"
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
                            v-for="tag, index in formData.keyword"
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
                    <label>ສິ່ງອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກ :</label>
                </div>
                <div class="md:flex-3">
                    <button class="btn btn-soft btn-primary w-full" @click="addAvt">
                        <i class="fa-solid fa-plus mr-1" style="font-size: 14px;"></i>ເພີ່ມ
                    </button>
                    <AdmLandAvtPreview v-for="avt,index in formData.avts" :key="`avt-${index}`"
                        :index="index"
                        :avt="avt"
                        :updateAvt="updateAvt"
                        :removeAvt="removeAvt"
                    ></AdmLandAvtPreview>
                </div>
            </div>
            <div class="flex flex-col md:flex-row lg:flex-col md:gap-3 mt-5">
                <div class="md:flex-2 md:text-right lg:text-left">
                    <label>ຄຳອະທິບາຍອື່ນໆກ່ຽວກັບດິນຕອນນີ້ :</label>
                </div>
                <div class="md:flex-3">
                    <textarea rows="4" 
                        v-model="formData.note" 
                        class="textarea w-full" 
                        placeholder="ພິມຄຳອະທິບາຍອື່ນໆ..."
                    ></textarea>

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