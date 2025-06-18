<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ຂໍ້ມູນອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກຂອງຜະລິດຕະພັນ',['ຈັດການຂໍ້ມູນທົ່ວໄປ','ຂໍ້ມູນອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກຂອງຜະລິດຕະພັນ'])
        getAvt()
    })
    // ----------------------------------- //
    import Swal from 'sweetalert2'
    const search = ref('')
    const data = ref([
        { id: 1, name: 'ມີໄຟຟ້າ', active: 'Y' },
        { id: 2, name: 'ມີນໍາປະປາ', active: 'Y' },
        { id: 3, name: 'ທາງເຂົ້າເປັນທາງປູຢາງ', active: 'Y' },
        { id: 4, name: 'ທາງເຂົ້າເປັນທາງດິນແດງ', active: 'N' },
        { id: 21, name: 'ມີໄຟຟ້າ', active: 'Y' },
        { id: 22, name: 'ມີນໍາປະປາ', active: 'Y' },
        { id: 23, name: 'ທາງເຂົ້າເປັນທາງປູຢາງ', active: 'Y' },
        { id: 24, name: 'ທາງເຂົ້າເປັນທາງດິນແດງ', active: 'N' },
        { id: 31, name: 'ມີໄຟຟ້າ', active: 'Y' },
        { id: 32, name: 'ມີນໍາປະປາ', active: 'Y' },
        { id: 43, name: 'ທາງເຂົ້າເປັນທາງປູຢາງ', active: 'Y' },
        { id: 44, name: 'ທາງເຂົ້າເປັນທາງດິນແດງ', active: 'N' }
    ])
    const filteredData = computed(() =>
        data.value.filter(avt =>
            Object.values(avt).some( value =>
                String(value).toLowerCase().includes(search.value.toLowerCase())
            )
        )
    )

    const loading = ref(false)
    const avt_name = ref('') // for add
    const avt = reactive({}) // for view and for update

    const showSuccessAlert = (message)=> {
        Swal.fire({
            title: 'ສຳເລັດ!',
            text: message, //'ຂໍ້ມູນຖືກບັນທຶກແລ້ວ'
            icon: 'success',
            confirmButtonText: 'ຕົກລົງ'
        })
    }
    const showErrorAlert = (message)=> {
        Swal.fire({
            title: 'ຜິດພາດ!',
            text: message, //'ການບັນທຶກຂໍ້ມູນເກີດຂໍ້ຜິດພາດ'
            icon: 'error',
            confirmButtonText: 'ຕົກລົງ'
        })
    }

    const getAvt = ()=> {
        console.log("get All");
    }
    const getAvtById = (id)=>{
        avt.id = id
        //----- request get avt ------//
        console.log("request get avt by id:",avt.id);
        document.getElementById('edit_dialog').showModal()
    }

    const addNewAvt = ()=> {
        if(avt_name.value != ''){
            //----- request save ------//
            console.log("request save avt by name:",avt_name.value);
            document.getElementById('add_dialog').close()
            showSuccessAlert('ຂໍ້ມູນຖືກບັນທຶກແລ້ວ')
            // showErrorAlert('ການບັນທຶກຂໍ້ມູນເກີດຂໍ້ຜິດພາດ')
            avt_name.value = ''
        }
    }
    const updateAvt = ()=> {
        //----- request update ------//
        console.log("request update avt :",avt);
        document.getElementById('edit_dialog').close()
        showSuccessAlert('ຂໍ້ມູນຖືກບັນທຶກແລ້ວ')
    }
    const deleteAvtById = (id)=> {
        Swal.fire({
            title: 'ຕ້ອງການລຶບແທ້ບໍ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'ຕົກລົງ',
            cancelButtonText: 'ຍົກເລີກ',
        }).then((result) => {
            if (result.isConfirmed) {
                //----- request get avt ------//
                console.log("request delete avt by id:",id);
                Swal.fire('ສຳເລັດ!', 'ຂໍ້ມູນໄດ້ຖືກລຶບແລ້ວ.', 'success')
            }
        })
    }

    // ----------
</script>

<template>
    <div class="mx-6 my-3">
        <div class="flex justify-between">
            <!-- add btn -->
            <button onclick="add_dialog.showModal()" class="btn btn-primary mb-3 fontLao">ເພີ່ມໃໝ່</button>
            <!-- search input -->
            <input v-model="search" type="text" placeholder="ພິມຄົ້ນຫາ..." class="input fontLao w-50" />
        </div>

        <div class="h-100 overflow-x-auto rounded-box border border-base-content/8 bg-base-100  table-pin-rows table-pin-cols">
            <!-- table -->
            <table class="table table-zebra table-md table-pin-rows table-pin-cols fontLao">
                <thead>
                    <tr class="text-base font-bold">
                        <th width="100px" class="th text-center">ລໍາດັບ</th>
                        <th class="th">ລາຍການ</th>
                        <th width="200px" class="th">ສະຖານະ</th>
                        <th width="200px" class="th">ຈັດການ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="avt,i in filteredData" :key="avt.id" class="hover:bg-base-300">
                        <th class="fontEng text-center">{{ i+1 }}</th>
                        <td class="white-nowrap">{{ avt.name }}</td>
                        <td>
                            <div v-if="avt.active=='Y'" class="badge badge-soft badge-success">ນໍາໃຊ້</div>
                            <div v-else-if="avt.active=='N'" class="badge badge-soft badge-error">ບໍ່ນໍາໃຊ້</div>
                        </td>
                        <td>
                            <i class="fa-solid fa-pen-to-square text-xl cursor-pointer text-primary mr-3" @click="getAvtById(avt.id)"></i>
                            <i class="fa-solid fa-trash text-xl cursor-pointer text-error" @click="deleteAvtById(avt.id)"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="text-center my-3">
            <span class="fontLao">ທັງໝົດ <span class="fontEng font-bold">{{ data?.length }}</span> ລາຍການ</span>
        </div>
        <div v-if="loading" class="text-center my-3">
            <span class="fontLao"> Loading ...</span>
        </div>

    </div>

    <!-- add dialog -->
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
                        <button @click="addNewAvt" class="btn btn-primary fontLao">ບັນທຶກ</button>
                    </div>
                </div>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>

    <!-- eidt dialog -->
    <dialog id="edit_dialog" class="modal">
        <div class="modal-box w-11/12 max-w-3xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-bold fontLao">ແກ້ໄຂຂໍ້ມູນອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກຂອງຜະລິດຕະພັນ</h3>
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
                            <input type="radio" name="active" value="Y" v-model="avt.active" class="radio radio-primary" />
                            <span class="label-text text-base-content fontLao">ນໍາໃຊ້</span> 
                        </label>
                        <label class="label cursor-pointer">
                            <input type="radio" name="active" value="N" v-model="avt.active" class="radio radio-error" />
                            <span class="label-text text-base-content fontLao">ບໍ່ນໍາໃຊ້</span> 
                        </label>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4 py-4">
                    <div></div>
                    <div>
                        <button @click="updateAvt" class="btn btn-primary fontLao">ບັນທຶກ</button>
                    </div>
                </div>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>

    
</template>

<style scoped>
    .white-nowrap {
    white-space: nowrap;
    }
    .th{
        background-color: #422ad5 !important;
        color: white;
    }
</style>