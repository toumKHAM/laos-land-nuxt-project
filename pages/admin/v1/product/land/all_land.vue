<script setup>
    useHead({
        title: 'Admin LaosLand | ຂໍ້ມູນດິນທັງໝົດ'
    })
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ຂໍ້ມູນດິນທັງໝົດ',['ຜະລິດຕະພັນ','ຈັດການຂໍ້ມູນດິນ','ຂໍ້ມູນດິນທັງໝົດ'])
    })
    // ---------------------------------------------------- //
    const data = ref([
        { id: 1, ll_id: 'LL0001', product_id: 'LAND-001',sub_type:'ດິນນາ',service_id:'ຂາຍ',address:'ບ.ໂພນທັນ, ມ.ສີນາກ, ນະຄອນຫຼວງວຽງຈັນ', auth:'11',create_by:'Toum', interest:'0' },
        { id: 2, ll_id: 'LL0002', product_id: 'LAND-002',sub_type:'ດິນປຸກສ້າງ',service_id:'ເຊົ່າ',address:'ບ.ໂພນທັນ, ມ.ສີນາກ, ນະຄອນຫຼວງວຽງຈັນ', auth:'12',create_by:'Ker', interest:'1' },
        { id: 3, ll_id: 'LL0003', product_id: 'LAND-003',sub_type:'ດິນວ່າງເປົ່າ',service_id:'ຂາຍ-ເຊົ່າ',address:'ບ.ໂພນທັນ, ມ.ສີນາກ, ນະຄອນຫຼວງວຽງຈັນ', auth:'12',create_by:'Ker', interest:'2' },
        { id: 4, ll_id: 'LL0004', product_id: 'LAND-004',sub_type:'ດິນນາ',service_id:'ຂາຍ',address:'ບ.ໂພນທັນ, ມ.ສີນາກ, ນະຄອນຫຼວງວຽງຈັນ', auth:'11',create_by:'Toum', interest:'3' },
        { id: 5, ll_id: '', product_id: 'LAND-005',sub_type:'ດິນປຸກສ້າງ',service_id:'ເຊົ່າ',address:'ບ.ໂພນທັນ, ມ.ສີນາກ, ນະຄອນຫຼວງວຽງຈັນ', auth:'13',create_by:'Ker', interest:'0' },
        { id: 6, ll_id: 'LL0006', product_id: 'LAND-006',sub_type:'ດິນວ່າງເປົ່າ',service_id:'ຂາຍ-ເຊົ່າ',address:'ບ.ໂພນທັນ, ມ.ສີນາກ, ນະຄອນຫຼວງວຽງຈັນ', auth:'12',create_by:'Ker', interest:'2' },
        { id: 7, ll_id: 'LL0007', product_id: 'LAND-007',sub_type:'ດິນນາ',service_id:'ຂາຍ',address:'ບ.ໂພນທັນ, ມ.ສີນາກ, ນະຄອນຫຼວງວຽງຈັນ', auth:'11',create_by:'Toum', interest:'1' },
        { id: 8, ll_id: 'LL0008', product_id: 'LAND-008',sub_type:'ດິນປຸກສ້າງ',service_id:'ເຊົ່າ',address:'ບ.ໂພນທັນ, ມ.ສີນາກ, ນະຄອນຫຼວງວຽງຈັນ', auth:'12',create_by:'Ker', interest:'1' },
        { id: 9, ll_id: 'LL0009', product_id: 'LAND-009',sub_type:'ດິນວ່າງເປົ່າ',service_id:'ຂາຍ-ເຊົ່າ',address:'ບ.ໂພນທັນ, ມ.ສີນາກ, ນະຄອນຫຼວງວຽງຈັນ', auth:'12',create_by:'Ker', interest:'0' },
    ])

    const search_ii_id = ref('')
    const filteredData = computed(() =>
        data.value.filter(avt =>
            Object.values(avt).some( value =>
                String(value).toLowerCase().includes(search_ii_id.value.toLowerCase())
            )
        )
    )

    const land_id = ref(0)
    const clickDetail = (id)=>{
        land_id.value = id
        document.getElementById('detail_dialog').showModal()
    }
</script>

<template>
    <div class="mx-2 my-1">
        <!-- <h1 class="fontLao text-lg font-bold">ເງື່ອນໄຂຄົ້ນຫາ</h1> -->
        <div class="flex flex-col md:flex-row md:items-end w-full">
            <div class="flex-1">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Laos Land ID:</legend>
                    <input type="text" v-model="search_ii_id" class="input w-full fontLao" placeholder="ພິມລະຫັດ Laos Land ID" />
                </fieldset>
            </div>
            <div class="flex-1 md:mx-3">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend fontLao">ແຂວງ:</legend>
                    <select class="select w-full">
                        <option>Chrome</option>
                        <option>FireFox</option>
                        <option>Safari</option>
                    </select>
                </fieldset>
            </div>
            <div class="flex-1 md:mr-3">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend fontLao">ເຂດ:</legend>
                    <select class="select w-full">
                        <option>Chrome</option>
                        <option>FireFox</option>
                        <option>Safari</option>
                    </select>
                </fieldset>
            </div>
        </div>
        
        <!-- <div class="divider"></div> -->
        <!-- Table -->
        <div class="mt-3 h-120 overflow-x-auto rounded-box border border-base-content/8 bg-base-100  table-pin-rows table-pin-cols">
            <!-- table -->
            <table class="table table-zebra table-md table-pin-rows table-pin-cols fontLao">
                <thead>
                    <tr>
                        <th class="th text-center fontEng">LaosLand ID</th>
                        <th class="th text-center ">ລະຫັດຜະລິດຕະພັນ</th>
                        <th class="th">ປະເພດ</th>
                        <th class="th">ບໍລິການ</th>
                        <th class="th">ທີ່ຕັ້ງ</th>
                        <th class="th">ຜູ້ບັນທຶກ</th>
                        <th class="th">ສະຖານະ</th>
                        <th class="th">ຈັດການ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="land,i in filteredData" :key="land.id" class="hover:bg-base-300 white-nowrap">
                        <td class="fontEng text-center">{{ land.ll_id }}</td>
                        <td class="fontEng text-center">{{ land.product_id }}</td>
                        <td class="">{{ land.sub_type }}</td>
                        <td class="">
                            <div class="badge badge-soft badge-primary">{{ land.service_id }}</div>
                        </td>
                        <td class="">{{ land.address }}</td>
                        <td class="">{{ land.create_by }}</td>

                        <td>
                            <div v-if="land.auth=='11'" class="badge badge-soft badge-warning">ລໍຖ້າອະນຸມັດ</div>
                            <div v-else-if="land.auth=='12'" class="badge badge-soft badge-success">ອະນຸມັດແລ້ວ</div>
                            <div v-else-if="land.auth=='13'" class="badge badge-soft badge-secondary">ລໍຖ້າຢືນຢັນການຂາຍ</div>
                        </td>
                        <td>
                            <button class="btn btn-sm btn-soft btn-primary mr-3 fontLao" @click="clickDetail(land.id)">ລາຍລະອຽດ</button>
                            <button v-if="land.interest > 0"  class="btn btn-soft btn-info btn-sm  mr-3 fontLao">
                                ສົນໃຈ <div class="red">({{ land.interest }})</div>
                            </button>
                        

                        </td>
                    </tr>
                </tbody>
            </table>
            
            
        </div>

        <div class="text-center my-3">
            <span class="fontLao">ທັງໝົດ <span class="fontEng font-bold">{{ data?.length }}</span> ລາຍການ</span>
        </div>
    </div>

    <!-- detail dialog -->
    <AdmLandDetailDialog :land_id="land_id"></AdmLandDetailDialog>
</template>

<style scoped>
    .white-nowrap {
        white-space: nowrap;
    }
    .th{
        background-color: #422ad5 !important;
        color: white;
    }
    .red{
        color: red;
    }
</style>