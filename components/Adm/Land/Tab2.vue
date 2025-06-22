<script setup>
    const steps = ref(['step1','step2','step3'])
    const activeStep = ref('step1')
</script>

<template>
    <div class="flex justify-around my-3 text-white text-xl fontEng font-bold">
        <div v-for="step,index in steps" @click="activeStep=step"
            class="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
            :class="step== activeStep ? 'bg-primary': 'bg-gray-500'"
        >{{ index+1 }}</div>
    </div>
    <div class="card  bg-base-100 shadow-sm">
        <div class="card-body">
            <div v-show="activeStep=='step1'">step1</div>
            <div v-show="activeStep=='step2'">step2</div>
            <div v-show="activeStep=='step3'">step3</div>
        </div>
    </div>
</template>