<script setup>
    const props = defineProps({
        clikId: Number,
        getAvtById: Function,
        updateAvt: Function,
        showSuccessAlert: Function,
        showErrorAlert: Function,
        updateLoaing: Function
    })

    const avt = reactive({
        id: 0,
        name: '',
        active: ''
    })

    watch(props.clikId, (id) => {
        if(id != 0){
            avt.id = id
            props.getAvtById(avt.id)
        }
    })


    const handleSave = ()=>{
        if(avt.name != ''){
            console.log(avt);
            props.updateLoaing(true)

            props.updateAvt(avt)

            props.updateLoaing(false)
            document.getElementById('edit_dialog').close()
            props.showSuccessAlert('ຂໍ້ມູນຖືກບັນທຶກແລ້ວ')
            // props.showErrorAlert('ການບັນທຶກຂໍ້ມູນເກີດຂໍ້ຜິດພາດ')
            avt.id = ''
            avt.name = ''
            avt.active = ''
            console.log(avt);
        }
    }

</script>

<template>
    <dialog id="edit_dialog" class="modal">
        <div class="modal-box w-11/12 max-w-3xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-bold fontLao">ແກ້ໄຂຂໍ້ມູນອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກຂອງຜະລິດຕະພັນ{{ props.clikId }}</h3>
            <div class="py-4">
                <div class="grid grid-cols-3 gap-4 items-center">
                    <div class="text-right fontLao">
                        <label>ຊື່ <span class="text-red-600">*</span> :</label>
                    </div>
                    <div class="col-span-2">
                        <input type="text" v-model="avt.name" placeholder="ພິມສິ່ງອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກ" class="input fontLao" />
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4 items-center mt-4">
                    <div class="text-right fontLao">
                        <label>ສະຖານະ <span class="text-red-600">*</span> :</label>
                    </div>
                    <div class="col-span-2">
                        <label class="label cursor-pointer mr-5">
                            <input type="radio" name="active" v-model="avt.active" class="radio radio-primary" checked />
                            <span class="label-text text-base-content fontLao">ນໍາໃຊ້</span> 
                        </label>
                        <label class="label cursor-pointer">
                            <input type="radio" name="active" v-model="avt.active" class="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" />
                            <span class="label-text text-base-content fontLao">ບໍ່ນໍາໃຊ້</span> 
                        </label>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4 py-4">
                    <div></div>
                    <div>
                        <button @click="handleSave" class="btn btn-primary fontLao">ບັນທຶກ</button>
                    </div>
                </div>
            </div>
            
        </div>

        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>