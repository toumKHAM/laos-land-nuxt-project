<script setup>
    const props = defineProps({
        addAvt: Function,
        showSuccessAlert: Function,
        showErrorAlert: Function,
        updateLoaing: Function
    })
    const avt_name = ref('')

    const handleSave = ()=>{
        if(avt_name.value != ''){
            props.updateLoaing(true)

            props.addAvt(avt_name.value)

            props.updateLoaing(false)
            document.getElementById('add_dialog').close()
            props.showSuccessAlert('ຂໍ້ມູນຖືກບັນທຶກແລ້ວ')
            // props.showErrorAlert('ການບັນທຶກຂໍ້ມູນເກີດຂໍ້ຜິດພາດ')
            avt_name.value = ''
        }
    }
</script>

<template>
    <dialog id="add_dialog" class="modal">
        <div class="modal-box w-11/12 max-w-3xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-bold fontLao">ເພີ່ມຂໍ້ມູນອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກຂອງຜະລິດຕະພັນ</h3>
            <div class="py-4">
                <div class="grid grid-cols-3 gap-4 items-center">
                    <div class="text-right fontLao">
                        <label>ຊື່ <span class="text-red-600">*</span> :</label>
                    </div>
                    <div class="col-span-2">
                        <input type="text" v-model="avt_name" placeholder="ພິມສິ່ງອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກ" class="input fontLao" />
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