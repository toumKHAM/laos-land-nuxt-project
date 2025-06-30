<script setup>
    useHead({
        title: 'Admin LaosLand | ເພີ່ມຂໍ້ມູນດິນ'
    })
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ເພີ່ມດິນ',['ຜະລິດຕະພັນ','ຈັດການຂໍ້ມູນດິນ','ເພີ່ມດິນ'])
    })
    // ---------------------------------------------------- //
    import Swal from 'sweetalert2'
    const activeStep = ref('step1')
    const nextStep = ()=>{
        if(activeStep.value=='step1') {
            activeStep.value = 'step2'
        }
        else if(activeStep.value=='step2'){
            activeStep.value = 'step3'
        }
    }
    const prevStep = ()=>{
        if(activeStep.value=='step3') {
            activeStep.value = 'step2'
        }
        else if(activeStep.value=='step2'){
            activeStep.value = 'step1'
        }
    }
    const clickSave = ()=>{
        Swal.fire('ສຳເລັດ!', 'ຂໍ້ມູນໄດ້ຖືກບັນທຶກແລ້ວ.', 'success')
        activeStep.value = 'step1'
    }
</script>


<template>
    <div class="flex justify-around my-3 text-white text-sm fontEng font-bold">
        <div class="grid grid-cols-2 gap-3">
            <div v-show="activeStep=='step1'" style="height: calc(var(--spacing) * 8);" class="w-8 rounded-full flex items-center justify-center bg-primary">1</div>
            <div v-show="activeStep!='step1'" style="height: calc(var(--spacing) * 8);" class="w-8 rounded-full flex items-center justify-center"><i class="fa-solid fa-circle-check" style="color: #00d390;font-size: 2rem;"></i></div>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <div v-show="activeStep!='step3'" style="height: calc(var(--spacing) * 8);" class="w-8 rounded-full flex items-center justify-center" :class="activeStep=='step2'?'bg-primary':'bg-gray-400'">2</div>
            <div v-show="activeStep=='step3'" style="height: calc(var(--spacing) * 8);" class="w-8 rounded-full flex items-center justify-center"><i class="fa-solid fa-circle-check" style="color: #00d390;font-size: 2rem;"></i></div>
        </div>
        <div>
            <div style="height: calc(var(--spacing) * 8);" class="w-8 rounded-full flex items-center justify-center" :class="activeStep=='step3'?'bg-primary':'bg-gray-400'">3</div>
        </div>
        
    </div>
    <div class="card bg-base-100 shadow-sm" style="box-shadow: 0 0px 3px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.15);">
        <div class="card-body">
            <div v-show="activeStep=='step1'">
                <AdmLandStep1></AdmLandStep1>
            </div>
            <div v-show="activeStep=='step2'">
                <AdmLandStep2></AdmLandStep2>
            </div>
            <div v-show="activeStep=='step3'">
                <AdmLandStep3></AdmLandStep3>
            </div>
        </div>
    </div>
    <div class="my-5 flex justify-between text-base fontLao">
        <div><button class="btn btn-primary" :class="{ 'btn-disabled': activeStep === 'step1' }" @click="prevStep"> <i class="fa-solid fa-arrow-left"></i> ກັບຄືນ</button></div>
        <div v-if="activeStep === 'step3'"><button class="btn btn-primary" @click="clickSave">ບັນທຶກ</button></div>
        <div v-else><button class="btn btn-primary" @click="nextStep">ຂັ້ນຕອນຕໍ່ໄປ <i class="fa-solid fa-arrow-right"></i></button></div>
    </div>
</template>

<style scoped>
</style>