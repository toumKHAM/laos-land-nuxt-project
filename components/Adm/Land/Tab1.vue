<script setup>
    const data = ref([
        { id: 1, ll_id: 'LL0001', product_id: 'LAND-001',sub_type:'ດິນນາ',service_id:'sale',address:'ບ.ໂພນທັນ, ມ.ສີນາກ, ນະຄອນຫຼວງວຽງຈັນ', auth:'11',create_by:'Toum' },
        { id: 2, ll_id: 'LL0002', product_id: 'LAND-001',sub_type:'ດິນປຸກສ້າງ',service_id:'rent',address:'ບ.ໂພນທັນ, ມ.ສີນາກ, ນະຄອນຫຼວງວຽງຈັນ', auth:'12',create_by:'Ker' },
    ])
</script>

<template>
    <div class="mx-4 my-3">
        <h1 class="fontLao text-lg font-bold">ເງື່ອນໄຂຄົ້ນຫາ</h1>
        <div class="flex flex-col md:flex-row w-full">
            <div class="flex-1">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Laos Land ID:</legend>
                    <input type="text" class="input" placeholder="Type here" />
                </fieldset>
            </div>
            <div class="flex-1 md:mx-3">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend fontLao">ແຂວງ:</legend>
                    <select class="select">
                        <option>Chrome</option>
                        <option>FireFox</option>
                        <option>Safari</option>
                    </select>
                </fieldset>
            </div>
            <div class="flex-1">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend fontLao">ເຂດ:</legend>
                    <select class="select">
                        <option>Chrome</option>
                        <option>FireFox</option>
                        <option>Safari</option>
                    </select>
                </fieldset>
            </div>
        </div>

        <!-- Table -->
        <div class="mt-3 h-90 overflow-x-auto rounded-box border border-base-content/8 bg-base-100  table-pin-rows table-pin-cols">
            <!-- table -->
            <table class="table table-zebra table-md table-pin-rows table-pin-cols fontLao">
                <thead>
                    <tr class="text-base font-bold">
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
                    <tr v-for="land,i in data" :key="land.id" class="hover:bg-base-300">
                        <td class="fontEng text-center">{{ land.ll_id }}</td>
                        <td class="fontEng text-center">{{ land.product_id }}</td>
                        <td class="">{{ land.sub_type }}</td>
                        <td class="">{{ land.service_id }}</td>
                        <td class="white-nowrap">{{ land.address }}</td>
                        <td class="">{{ land.create_by }}</td>

                        <td>
                            <div v-if="land.auth=='11'" class="badge badge-soft badge-success">ນໍາໃຊ້</div>
                            <div v-else-if="land.auth=='12'" class="badge badge-soft badge-error">ບໍ່ນໍາໃຊ້</div>
                        </td>
                        <td>
                            <i class="fa-solid fa-pen-to-square text-xl cursor-pointer text-primary mr-3" ></i>
                            <i class="fa-solid fa-trash text-xl cursor-pointer text-error" ></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            
        </div>

        <div class="text-center my-3">
            <span class="fontLao">ທັງໝົດ <span class="fontEng font-bold">{{ data?.length }}</span> ລາຍການ</span>
        </div>
    </div>
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