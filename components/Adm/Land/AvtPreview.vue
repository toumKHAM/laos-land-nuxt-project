<script setup>
    const props = defineProps({
        index: Number,
        avt: Object,
        updateAvt: Function,
        removeAvt: Function
    });

    const avt_id = ref('')
    const avt_value = ref('Y')

    onUpdated(() => {
        avt_id.value = props.avt.avt_id
        avt_value.value = props.avt.avt_value
    })
    watch([avt_id,avt_value], ([newA, newB], [oldA, oldB]) => {
        props.updateAvt(props.index,{avt_id:newA,avt_value:newB})
    })
</script>

<template>
    <div class="flex gap-3 items-center mt-3">
        <div class="flex-1">
            <select v-model="avt_id" class="select w-full">
                <option value="">ເລືອກສິ່ງອຳນວຍ</option>
                <option value="1">ໄຟຟ້າ</option>
                <option value="2">ນໍ້າປະປາ</option>
                <option value="3">ທາງປູຢາງ</option>
            </select>
        </div>
        <label class="label cursor-pointer mx-2">
            <input type="radio" v-model="avt_value" :name="`avt-${index}`" value="Y" class="radio radio-primary" checked="checked" />
            <span class="label-text text-base-content fontLao">ມີ</span> 
        </label>
        <label class="label cursor-pointer mr-2">
            <input type="radio" v-model="avt_value" :name="`avt-${index}`" value="N" class="radio radio-primary" />
            <span class="label-text text-base-content fontLao">ບໍ່ມີ</span> 
        </label>
        <div class="text-right" style="width: 20px;">
            <i class="fa-solid fa-trash text-xl cursor-pointer text-error" @click="props.removeAvt(props.index)"></i>
        </div>
    </div>
</template>