<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ຂໍ້ມູນອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກຂອງຜະລິດຕະພັນ',['ຈັດການຂໍ້ມູນທົ່ວໄປ','ຂໍ້ມູນອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກຂອງຜະລິດຕະພັນ'])
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
    function updateLoaing(status){
        loading.value = status
    }
    const clikId = ref(0)

    function showSuccessAlert(message) {
        Swal.fire({
            title: 'ສຳເລັດ!',
            text: message, //'ຂໍ້ມູນຖືກບັນທຶກແລ້ວ'
            icon: 'success',
            confirmButtonText: 'ຕົກລົງ'
        })
    }
    function showErrorAlert(message) {
        Swal.fire({
            title: 'ຜິດພາດ!',
            text: message, //'ການບັນທຶກຂໍ້ມູນເກີດຂໍ້ຜິດພາດ'
            icon: 'error',
            confirmButtonText: 'ຕົກລົງ'
        })
    }
    
    const clickEdit = (id)=>{
        clikId.value = id
        document.getElementById('edit_dialog').showModal()
    }

    function getAvt(){
        console.log("get All");
    }
    function getAvtById(id){
        console.log("get avt id:"+id);
    }
    function addAvt(avt_name){
        console.log("add avt_name:"+avt_name);
    }
    function updateAvt(avt){
        console.log("update avt:"+avt);
    }
    function deleteAvtById(id){
        console.log("delete id:"+id);
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
                            <i class="fa-solid fa-pen-to-square text-xl cursor-pointer text-primary mr-3" @click="clickEdit(avt.id)"></i>
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

    <AvtAddDialog 
        :addAvt="addAvt"
        :showSuccessAlert="showSuccessAlert"
        :showErrorAlert="showErrorAlert" 
        :updateLoaing="updateLoaing" >
    </AvtAddDialog>

    <AvtEditDialog 
        :clikId="clikId"
        :getAvtById="getAvtById"
        :updateAvt="updateAvt"
        :showSuccessAlert="showSuccessAlert"
        :showErrorAlert="showErrorAlert" 
        :updateLoaing="updateLoaing" >
    </AvtEditDialog>

    
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