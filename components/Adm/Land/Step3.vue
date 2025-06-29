<script setup>
    // --- ສຳລັບ text input --- //
    const person = reactive({
        name:'',
        phonenumber:'',
        address:'',
        cardid:'',
        note:''
    })

    // --- ສຳລັບຮູບບັດປະຈຳຕົວ  --- //
    const idCardFile = ref(null)    //--- form-submit ---//
    const idCardUrl = ref(null)
    const input_idcard = ref(null)
    function onFileChangeForIdCard(event) {
        const file = event.target.files[0]
        if (file ) {
            idCardFile.value = file
            idCardUrl.value = URL.createObjectURL(file)
        }
    }
    
    // --- ສຳລັບເອກະສານ ຜູ້ຂາຍກັບບໍລິສັດ  --- //
    const comSaleFile = ref([])     //--- form-submit ---//
    const fileForComSale = ref(null)
    function onFileChangeForComSale(event) {
        const file = event.target.files[0]
        if (file ) {
            comSaleFile.value.push(file)
        }
    }
    function removeFile(index) {
        comSaleFile.value.splice(index, 1); 
    }
    // --- ຈົບເອກະສານ ຜູ້ຂາຍກັບບໍລິສັດ  --- //
</script>

<template>
    <div class="flex flex-col lg:flex-row gap-8 fontLao text-base">
        <div class="flex-1">
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ຊື່ ແລະ ນາມສະກຸນເຈົ້າຂອງດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input v-model="person.name" type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ເບີໂທຕິດຕໍ່ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input v-model="person.phonenumber" type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ທີ່ຢູ່ປັດຈຸບັນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input v-model="person.address" type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ບັດປະຈຳຕົວເລກທີ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input v-model="person.cardid" type="text" placeholder="" class="input w-full" />
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
                    <div v-if="idCardFile" class="indicator w-full">
                        <span class="indicator-item badge badge-error delete-img" @click="idCardFile=null">✕</span>
                        <div class="bg-base-300 grid h-45 w-full place-items-center">
                            <img 
                                :src="idCardUrl"
                                alt="Preview"
                                class="h-45 w-full object-cover border border-base-300"
                            />
                        </div>
                    </div>
                    <button v-else class="btn btn-soft btn-primary w-full" @click="input_idcard.click()">
                        ເລືອກຮູບພາບ
                    </button>
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ໝາຍເຫດ :</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input v-model="person.note" type="text" placeholder="ພິມຄຳອະທິບາຍອື່ນໆ(ຖ້າມີ)" class="input w-full" />
                </div>
            </div>
        </div>

        <div class="flex-1">
            <div class="flex flex-col md:flex-row lg:flex-col md:gap-3">
                <div class="md:flex-2 md:text-right lg:text-left">
                    <label>ເອກະສານສັນຍາລະຫວ່າງຜູ້ຂາຍ ກັບ ບໍລິສັດ <span class="dao">*</span>:</label>
                </div>
                <div class="md:flex-3">
                    <button class="btn btn-soft btn-primary w-full" @click="fileForComSale.click()">
                        <i class="fa-solid fa-plus mr-1" style="font-size: 14px;"></i>ເພີ່ມເອກະສານ
                    </button>
                    <input
                        type="file"
                        ref="fileForComSale"
                        accept="image/*,application/pdf"
                        @change="onFileChangeForComSale"
                        class="hidden"
                    />
                    <AdmLandFilePreview v-for="file,index in comSaleFile" 
                        :index="index"
                        :fileName="file.name"
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