<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ຂໍ້ມູນອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກຂອງຜະລິດຕະພັນ',['ຈັດການຂໍ້ມູນທົ່ວໄປ','ຂໍ້ມູນອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກຂອງຜະລິດຕະພັນ'])
    })


</script>

<template>
    <div class="m-3">
        <div class="">
            <button onclick="add_dialog.showModal()" class="btn btn-primary fontLao">ເພີ່ມໃໝ່</button>
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
                                <input type="text" placeholder="ພິມສິ່ງອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກ" class="input fontLao" />
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4 py-4">
                            <div></div>
                            <div>
                                <button class="btn btn-primary fontLao">ບັນທຶກ</button>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    </div>


    
</template>