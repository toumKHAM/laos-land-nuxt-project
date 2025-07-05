<script setup>
    const toast = useToastStore()
    import { cloneDeep } from 'lodash'

    const formData = reactive({
        sub_type_id:'',
        service_id: '',
        province_id: '',
        district_id:'',
        village_id:'',
        area_id:'',
        link_location:'',
        size_text:'',
        shape_text:'',
        square:'',
        unit_id: 1,
        total_price:'',
        total_price_ccy: 1,
        price_per_square:'',
        price_per_square_ccy: 1,
        note_sale: '',
        price_rent:'',
        price_rent_ccy: 1,
        period: 1,
        period_unit: 'Y',
        note_rent: ''
    })
    let prev = cloneDeep(formData)

    const valid = reactive({
        sub_type_id: true,
        service_id: true,
        province_id: true,
        district_id: true,
        village_id: true,
        area_id: true,
        link_location: true,
        size_text: true,
        shape_text: true,
        square: true,
        total_price: true,
        price_per_square: true,
        price_rent: true,
        period:true,
    })

    const sub_type = [{id:1,name:'ດິນນາ'},{id:2,name:'ດິນສວນ'},{id:3,name:'ດິນປຸກສ້າງ'}]
    const service = [{id:1,name:'ຂາຍ'},{id:2,name:'ເຊົ່າ'},{id:3,name:'ຂາຍ-ເຊົ່າ'}]
    const province = [{id:1,lao_name:'ນະຄອນຫຼວງວຽງຈັນ'},{id:2,lao_name:'ຫຼວງພະບາງ'},{id:3,lao_name:'ຈຳປາສັກ'}]
    const district = [{id:1,name:'ນະຄອນຫຼວງວຽງຈັນd'},{id:2,name:'ຫຼວງພະບາງd'},{id:3,name:'ຈຳປາສັກd'}]
    const village = [{id:1,name:'ນະຄອນຫຼວງວຽງຈັນv'},{id:2,name:'ຫຼວງພະບາງv'},{id:3,name:'ຈຳປາສັກv'}]
    const area = [{id:1,name:'ນະຄອນຫຼວງວຽງຈັນa'},{id:2,name:'ຫຼວງພະບາງa'},{id:3,name:'ຈຳປາສັກa'}]
    const unit = [{id:1,la_name:'ຕາແມັດ'},{id:2,la_name:'ເຮັກຕາ'},{id:3,la_name:'ໄຮ່'}]
    const ccy = [{id:1,name:'LAK'},{id:2,name:'USD'},{id:3,name:'THB'},{id:4,name:'CNY'}]

    // function submit
    const handdleSubmit = ()=>{
        if(validateData()){
            console.log('submit');
            console.log(formData);
            return true
            
        }else{
            toast.show('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ', 'error')
            console.log('can not submit')
            return false
        }
    }
    // ຟັງຊັ້ນ validate
    const validateData = ()=>{
        let ok = true
        if(formData.sub_type_id==''){
            valid.sub_type_id=false;ok = false
        }
        if(formData.service_id==''){
            valid.service_id=false;ok = false
        }
        if(formData.province_id==''){
            valid.province_id=false;ok = false
        }
        if(formData.district_id==''){
            valid.district_id=false;ok = false
        }
        if(formData.village_id==''){
            valid.village_id=false;ok = false
        }
        if(formData.area_id==''){
            valid.area_id=false;ok = false
        }
        if(formData.link_location==''){
            valid.link_location=false;ok = false
        }
        if(formData.size_text==''){
            valid.size_text=false;ok = false
        }
        if(formData.shape_text==''){
            valid.shape_text=false;ok = false
        }
        if(formData.square==''){
            valid.square=false;ok = false
        }
        // 
        if(formData.service_id!=2){
            if(formData.total_price==''){
                valid.total_price=false;ok = false
            }
            if(formData.price_per_square==''){
                valid.price_per_square=false;ok = false
            }
        }
        // 
        if(formData.service_id!=1){
            if(formData.price_rent==''){
                valid.price_rent=false;ok = false
            }
            if(formData.period==''){
                valid.period=false;ok = false
            }
        }
        return ok
    }

    watch(formData,(newValue)=>{
        if(newValue.sub_type_id != prev.sub_type_id){
            valid.sub_type_id=true
        }
        if(newValue.service_id != prev.service_id){
            valid.service_id=true
        }
        if(newValue.province_id != prev.province_id){
            valid.province_id=true
        }
        if(newValue.district_id != prev.district_id){
            valid.district_id=true
        }
        if(newValue.village_id != prev.village_id){
            valid.village_id=true
        }
        if(newValue.area_id != prev.area_id){
            valid.area_id=true
        }
        if(newValue.link_location != prev.link_location){
            valid.link_location=true
        }
        if(newValue.size_text != prev.size_text){
            valid.size_text=true
        }
        if(newValue.shape_text != prev.shape_text){
            valid.shape_text=true
        }
        if(newValue.square != prev.square){
            valid.square=true
        }
        if(newValue.total_price != prev.total_price){
            valid.total_price=true
        }
        if(newValue.price_per_square != prev.price_per_square){
            valid.price_per_square=true
        }
        if(newValue.price_rent != prev.price_rent){
            valid.price_rent=true
        }
        if(newValue.period != prev.period){
            valid.period=true
        }
        prev = cloneDeep(newValue)
    },{deep:true})

    //--- function ສຳລັບຈັດການ ໂຕເລກ ---//
    const skipFormat = ref(false)
    const onKeyDown = (event) => {
        if (event.key === '.' || event.keyCode === 190 || event.keyCode === 110) {
            skipFormat.value = true
        }
    }
    const onInput = (key, event) => {
        let val = event.target.value.replace(/[^\d.]/g, '')
        if (skipFormat.value) {
            formData[key] = val
            skipFormat.value = false
            return
        }
        // normal flow: format number
        let number = parseFloat(val)
        if (!isNaN(number)) {
            const formatted = number.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 20 })
            formData[key] = formatted
            event.target.value = formatted
        } else {
            formData[key] = ''
            event.target.value = ''
        }
    }
    //--- ຈົບ function ສຳລັບຈັດການ ໂຕເລກ ---//
    // ກຳນົດຟັງຊັ້ນໃຫ້ export ໃຫ້ແມ່ເຂົ້າເຖິງ
    defineExpose({
        handdleSubmit
    })
</script>

<template>
    <Toast />
    <div class="flex flex-col lg:flex-row gap-8 fontLao text-base">
        <div class="flex-1">
            <!-- 1 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ປະເພດດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full" :class="{'select-error': valid.sub_type_id==false}" v-model="formData.sub_type_id">
                        <option disabled value="">ກະລຸນາເລືອກ</option>
                        <option v-for="option in sub_type" :key="`sub_type-${option.id}`" :value="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- 2 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ການບໍລິການ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full" :class="{'select-error': valid.service_id==false}" v-model="formData.service_id">
                        <option disabled value="">ກະລຸນາເລືອກ</option>
                        <option v-for="option in service" :value="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- 3 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ທີ່ຕັ້ງດິນ (ແຂວງ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full" :class="{'select-error': valid.province_id==false}" v-model="formData.province_id">

                        <option disabled value="">ກະລຸນາເລືອກ</option>
                        <option v-for="option in province" :value="option.id">
                            {{ option.lao_name }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- 4 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ທີ່ຕັ້ງດິນ (ເມືອງ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full" :class="{'select-error': valid.district_id==false}" v-model="formData.district_id">
                        <option disabled value="">ກະລຸນາເລືອກ</option>
                        <option v-for="option in district" :value="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- 5 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ທີ່ຕັ້ງດິນ (ບ້ານ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full" :class="{'select-error': valid.village_id==false}" v-model="formData.village_id">
                        <option disabled value="">ກະລຸນາເລືອກ</option>
                        <option v-for="option in village" :value="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- 6 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ທີ່ຕັ້ງດິນ (ເຂດ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full" :class="{'select-error': valid.area_id==false}" v-model="formData.area_id">

                        <option disabled value="">ກະລຸນາເລືອກ</option>
                        <option v-for="option in area" :value="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- 7 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລິ້ງໂລເຄຊັ້ນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <label class="input w-full" :class="{'input-error': valid.link_location==false}">
                        <i class="fa-solid fa-location-dot" style="color: #a1a1a1;"></i>
                        <input type="text" v-model="formData.link_location" class="grow" placeholder="https://maps.app.goo.gl/D93aGCNmvjEXs1EU6..." />
                    </label>
                </div>
            </div>
        </div>

        <div class="flex-1">
            <!-- 1 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ຂະໜາດ4ດ້ານ(ແມັດ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <input type="text" v-model="formData.size_text" placeholder="10x25x30x15" class="input w-full" :class="{'input-error': valid.size_text==false}"/>
                </div>
            </div>
            <!-- 2 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ຮູບຮ່າງດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <input type="text" v-model="formData.shape_text" placeholder="ເປັນຮູບສີ່ແຈສາກ" class="input w-full" :class="{'input-error': valid.shape_text==false}"/>
                </div>
            </div>
            <!-- 3 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ເນື້ອທີ່ດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-3">
                            <input type="text" v-model="formData.square" 
                                @keydown="onKeyDown" 
                                @input="onInput('square', $event)" 
                                placeholder="400" 
                                class="input w-full text-right" :class="{'input-error': valid.square==false}"
                            />
                        </div>
                        <div class="col-span-2">
                            <select class="select w-full" v-model="formData.unit_id">
                                <option v-for="option in unit" :value="option.id">
                                    {{ option.la_name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 4 -->
            <div v-show="formData.service_id!=2" class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລາຄາລວມ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-3">
                            <input type="text" v-model="formData.total_price" 
                                @keydown="onKeyDown" 
                                @input="onInput('total_price', $event)" 
                                placeholder="1,500,000" 
                                class="input w-full text-right" :class="{'input-error': valid.total_price==false}"

                            />
                        </div>
                        <div class="col-span-2">
                            <select class="select w-full" v-model="formData.total_price_ccy">
                                <option v-for="option in ccy" :value="option.id">
                                    {{ option.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 5 -->
            <div v-show="formData.service_id!=2" class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລາຄາຕໍ່ຕາແມັດ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-3">
                            <input type="text" v-model="formData.price_per_square" 
                                @keydown="onKeyDown" 
                                @input="onInput('price_per_square', $event)" 
                                placeholder="250,000" 
                                class="input w-full text-right" :class="{'input-error': valid.price_per_square==false}"
                            />
                        </div>
                        <div class="col-span-2">
                            <select class="select w-full" v-model="formData.price_per_square_ccy">
                                <option v-for="option in ccy" :value="option.id">
                                    {{ option.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 6 -->
            <div v-show="formData.service_id!=1" class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລາຄາ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-3">
                            <input type="text" v-model="formData.price_rent" 
                                @keydown="onKeyDown" 
                                @input="onInput('price_rent', $event)" 
                                placeholder="2,500" 
                                class="input w-full text-right" :class="{'input-error': valid.price_rent==false}"
                            />
                        </div>
                        <div class="col-span-2">
                            <select class="select w-full" v-model="formData.price_rent_ccy">
                                <option v-for="option in ccy" :value="option.id">
                                    {{ option.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 7 -->
            <div v-show="formData.service_id!=1" class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ໄລຍະເວລາ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-3">
                            <input type="text" v-model="formData.period" 
                                @keydown="onKeyDown" 
                                @input="onInput('period', $event)" 
                                placeholder="1" 
                                class="input text-center w-full" :class="{'input-error': valid.period==false}"
                            />
                        </div>
                        <div class="col-span-2">
                            <select class="select w-full" v-model="formData.period_unit">
                                <option value="M">ເດືອນ</option>
                                <option value="Y">ປີ</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-8 fontLao text-base mt-5" :class="{'lg:flex-row-reverse':formData.service_id==2}">
        <div class="flex-1">
            <div v-show="formData.service_id!=2" class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລາຍລະອຽດ(ສຳລັບຂາຍ) :</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <textarea rows="4" v-model="formData.note_sale" class="textarea w-full" placeholder="ພິມລາຍລະອຽດ..."></textarea>
                </div>
            </div>
        </div>
        <div class="flex-1">
            <div v-show="formData.service_id!=1" class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລາຍລະອຽດ(ສຳລັບເຊົ່າ) :</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <textarea rows="4" v-model="formData.note_rent" class="textarea w-full" placeholder="ພິມລາຍລະອຽດ..."></textarea>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>
    .dao{
        color: red;
    }
</style>