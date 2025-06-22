<script setup>
    import Swal from 'sweetalert2'
    const steps = ref(['step1','step2','step3'])
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
    <div class="flex justify-around my-3 text-white text-xl fontEng font-bold">
        <div v-for="step,index in steps" @click="activeStep=step"
            class="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
            :class="step== activeStep ? 'bg-primary': 'bg-gray-500'"
        >{{ index+1 }}</div>
    </div>
    <div class="card bg-base-100 shadow-sm" style="box-shadow: 0 0px 3px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.15);">
        <div class="card-body">
            <div v-show="activeStep=='step1'">
                <AdmLandStep1></AdmLandStep1>
            </div>
            <div v-show="activeStep=='step2'"><AdmLandStep2></AdmLandStep2></div>
            <div v-show="activeStep=='step3'">step3</div>
        </div>
    </div>
    <div class="my-5 flex justify-between text-base fontLao">
        <div><button class="btn btn-primary" :class="{ 'btn-disabled': activeStep === 'step1' }" @click="prevStep"> <i class="fa-solid fa-arrow-left"></i> ກັບຄືນ</button></div>
        <div v-if="activeStep === 'step3'"><button class="btn btn-primary" @click="clickSave">ບັນທຶກ</button></div>
        <div v-else><button class="btn btn-primary" @click="nextStep">ຂັ້ນຕອນຕໍ່ໄປ <i class="fa-solid fa-arrow-right"></i></button></div>
    </div>
</template>