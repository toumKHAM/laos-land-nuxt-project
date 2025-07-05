<script setup>
    const toast = useToastStore()
    import { cloneDeep } from 'lodash'

    const formData = reactive({
        name:'',
        phonenumber:'',
        address:'',
        cardid:'',
        cardid_picture:'',
        note:'',
        document: []
    })
    let prev = cloneDeep(formData)
    const valid = reactive({
        name: true,
        phonenumber: true,
        address: true,
        cardid: true,
        cardid_picture: true,
        document:  true
    })
    // ຟັງຊັ້ນ validate
    const validateData = ()=>{
        let ok = true
        if(formData.name==''){
            valid.name=false;ok = false
        }
        if(formData.phonenumber==''){
            valid.phonenumber=false;ok = false
        }
        if(formData.address==''){
            valid.address=false;ok = false
        }
        if(formData.cardid==''){
            valid.cardid=false;ok = false
        }
        if(formData.cardid_picture==''){
            valid.cardid_picture=false;ok = false
        }
        if(formData.document.length == 0){
            valid.document=false;ok = false
        }
        return ok
    }
    watch(formData,(newValue)=>{
        if(newValue.name != prev.name){
            valid.name=true
        }
        if(newValue.phonenumber != prev.phonenumber){
            valid.phonenumber=true
        }
        if(newValue.address != prev.address){
            valid.address=true
        }
        if(newValue.cardid != prev.cardid){
            valid.cardid=true
        }
        if(newValue.cardid_picture != prev.cardid_picture){
            valid.cardid_picture=true
        }
        if(newValue.document.length != prev.document.length){
            valid.document=true
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

    // --- ສຳລັບຮູບບັດປະຈຳຕົວ  --- //
    const input_idcard = ref(null)
    function onFileChangeForIdCard(event) {
        const file = event.target.files[0]
        if (file ) {
            // request upload file to firebase
            formData.cardid_picture = URL.createObjectURL(file)
        }
    }
    function removeCardidPic(){
        // remove from firebase
        formData.cardid_picture = ''
    }
    // --- ສຳລັບເອກະສານ ຜູ້ຂາຍກັບບໍລິສັດ  --- //
    const comSaleFileName = ref([])     
    const fileForComSale = ref(null)
    function onFileChangeForComSale(event) {
        const file = event.target.files[0]
        if (file ) {
            comSaleFileName.value.push(file.name)
            // request upload file to firebase
            formData.document.push(`file-url-${file.name}`)
        }
    }
    function removeFile(index) {
        comSaleFileName.value.splice(index, 1); 
        formData.document.splice(index, 1); 
    }
    // --- ຈົບເອກະສານ ຜູ້ຂາຍກັບບໍລິສັດ  --- //
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
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ຊື່ ແລະ ນາມສະກຸນເຈົ້າຂອງດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input type="text" 
                        v-model="formData.name" 
                        placeholder="ພິມຊື່ ແລະ ນາມສະກຸນ" 
                        class="input w-full" 
                        :class="{'input-error': valid.name==false}"
                    />
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ເບີໂທຕິດຕໍ່ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input type="text" 
                        v-model="formData.phonenumber" 
                        @input="onInput('phonenumber', $event)" 
                        maxlength="15"
                        placeholder="020...." 
                        class="input w-full" 
                        :class="{'input-error': valid.phonenumber==false}"
                    />
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ທີ່ຢູ່ປັດຈຸບັນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input type="text" 
                        v-model="formData.address" 
                        placeholder="ພິມບ້ານ, ເມືອງ, ແຂວງ ..." 
                        class="input w-full" 
                        :class="{'input-error': valid.address==false}"
                    />
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ບັດປະຈຳຕົວເລກທີ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input type="text"  
                        v-model="formData.cardid" 
                        @input="onInput('cardid', $event)" 
                        maxlength="15"
                        placeholder="ພິມເລກບັດປະຈຳຕົວ" 
                        class="input w-full" 
                        :class="{'input-error': valid.cardid==false}"
                    />
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ຮູບພາບບັດປະຈຳຕົວ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input
                        type="file"
                        ref="input_idcard"
                        accept="image/*"
                        @change="onFileChangeForIdCard"
                        class="hidden"
                    />
                    <div v-if="formData.cardid_picture!=''" class="indicator w-full">
                        <span class="indicator-item badge badge-error delete-img" @click="removeCardidPic">✕</span>
                        <div class="bg-base-300 grid h-45 w-full place-items-center">
                            <img 
                                :src="formData.cardid_picture"
                                alt="Preview"
                                class="h-45 w-full object-cover border border-base-300"
                            />
                        </div>
                    </div>
                    <button v-else 
                        class="btn btn-soft btn-primary w-full" 
                        :class="{'text-error border border-red-500': valid.cardid_picture==false}"
                        @click="input_idcard.click()"
                    >
                        ເລືອກຮູບພາບ
                    </button>
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ໝາຍເຫດ :</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input type="text" 
                        v-model="formData.note" 
                        placeholder="ພິມຄຳອະທິບາຍອື່ນໆ(ຖ້າມີ)" 
                        class="input w-full" 
                    />
                </div>
            </div>
        </div>

        <div class="flex-1">
            <div class="flex flex-col md:flex-row lg:flex-col md:gap-3">
                <div class="md:flex-2 md:text-right lg:text-left">
                    <label>ເອກະສານສັນຍາລະຫວ່າງຜູ້ຂາຍ ກັບ ບໍລິສັດ <span class="dao">*</span>:</label>
                </div>
                <div class="md:flex-3">
                    <button @click="fileForComSale.click()"
                        class="btn btn-soft btn-primary w-full" 
                        :class="{'text-error border border-red-500': valid.document==false}"
                    >
                        <i class="fa-solid fa-plus mr-1" style="font-size: 14px;"></i>ເພີ່ມເອກະສານ
                    </button>
                    <input
                        type="file"
                        ref="fileForComSale"
                        accept="image/*,application/pdf"
                        @change="onFileChangeForComSale"
                        class="hidden"
                    />
                    <AdmLandFilePreview v-for="name,index in comSaleFileName" 
                        :index="index"
                        :fileName="name"
                        :removeFile="removeFile"
                    ></AdmLandFilePreview>
                </div>
                
            </div>
            <div></div>
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