<script setup>
    const note_sale = ref('<p>ພິມລາຍລະອຽດ...</p>')
    const note_rent = ref('<p>ພິມລາຍລະອຽດ...</p>')
</script>
<template>
    <div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8 fontLao text-base">
        <div>
            <!-- 1 -->
            <div class="grid grid-cols-2 gap-3 flex items-center mb-3">
                <div class="text-right">
                    <label>ປະເພດດິນ <span class="dao">*</span>:</label>
                </div>
                <div>
                    <select class="select w-full">
                        <option>ດິນນາ</option>
                        <option>ດິນສວນ</option>
                        <option>ດິນປຸກສ້າງ</option>
                    </select>
                </div>
            </div>
            <!-- 2 -->
            <div class="grid grid-cols-2 gap-3 flex items-center mb-3">
                <div class="text-right">
                    <label>ການບໍລິການ <span class="dao">*</span>:</label>
                </div>
                <div>
                    <select class="select w-full">
                        <option>ຂາຍ</option>
                        <option>ເຊົ່າ</option>
                        <option>ຂາຍ-ເຊົ່າ</option>
                    </select>
                </div>
            </div>
            <!-- 3 -->
            <div class="grid grid-cols-2 gap-3 flex items-center mb-3">
                <div class="text-right">
                    <label>ທີ່ຕັ້ງດິນ (ແຂວງ) <span class="dao">*</span>:</label>
                </div>
                <div>
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 4 -->
            <div class="grid grid-cols-2 gap-3 flex items-center mb-3">
                <div class="text-right">
                    <label>ທີ່ຕັ້ງດິນ (ເມືອງ) <span class="dao">*</span>:</label>
                </div>
                <div>
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 5 -->
            <div class="grid grid-cols-2 gap-3 flex items-center mb-3">
                <div class="text-right">
                    <label>ທີ່ຕັ້ງດິນ (ບ້ານ) <span class="dao">*</span>:</label>
                </div>
                <div>
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 6 -->
            <div class="grid grid-cols-2 gap-3 flex items-center mb-3">
                <div class="text-right">
                    <label>ທີ່ຕັ້ງດິນ (ເຂດ) <span class="dao">*</span>:</label>
                </div>
                <div>
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 7 -->
            <div class="grid grid-cols-2 gap-3 flex items-center mb-3">
                <div class="text-right">
                    <label>ລິ້ງໂລເຄຊັ້ນ <span class="dao">*</span>:</label>
                </div>
                <div>
                    <label class="input w-full">
                        <i class="fa-solid fa-location-dot" style="color: #a1a1a1;"></i>
                        <input type="text" class="grow" placeholder="https://maps.app.goo.gl/D93aGCNmvjEXs1EU6..." />
                    </label>
                </div>
            </div>
            <!-- 8 -->
            <!-- <div class="mb-3">
                <label class="input w-full">
                    <i class="fa-solid fa-location-dot" style="color: #a1a1a1;"></i>
                    <input type="text" class="grow" placeholder="https://maps.app.goo.gl/D93aGCNmvjEXs1EU6..." />
                </label>
            </div> -->
        </div>

        <div>
            <!-- 1 -->
            <div class="grid grid-cols-2 gap-3 flex items-center mb-3">
                <div class="text-right">
                    <label>ຂະໜາດ4ດ້ານ(ແມັດ) <span class="dao">*</span>:</label>
                </div>
                <div>
                    <input type="text" placeholder="10x25x30x15" class="input w-full" />
                </div>
            </div>
            <!-- 2 -->
            <div class="grid grid-cols-2 gap-3 flex items-center mb-3">
                <div class="text-right">
                    <label>ຮູບຮ່າງດິນ <span class="dao">*</span>:</label>
                </div>
                <div>
                    <input type="text" placeholder="ເປັນຮູບສີ່ແຈສາກ" class="input w-full" />
                </div>
            </div>
            <!-- 3 -->
            <div class="grid grid-cols-4 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ເນື້ອທີ່ດິນ <span class="dao">*</span>:</label>
                </div>
                <div>
                    <input type="text" placeholder="400" class="input text-right" />
                </div>
                <div>
                    <select class="select">
                        <option>ຕາແມັດ</option>
                        <option>ເຮັກຕາ</option>
                        <option>ໄຮ່</option>
                    </select>
                </div>
            </div>
            <!-- 4 -->
            <div class="grid grid-cols-4 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ລາຄາລວມ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                </div>
                <div>
                    <input type="text" placeholder="1,500,000" class="input text-right" style="padding-left: 8px;padding-right: 5px;"/>
                </div>
                <div>
                    <select class="select">
                        <option>LAK</option>
                        <option>USD</option>
                        <option>THB</option>
                        <option>CNY</option>
                    </select>
                </div>
            </div>
            <!-- 5 -->
            <div class="grid grid-cols-4 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ລາຄາຕໍ່ຕາແມັດ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                </div>
                <div>
                    <input type="text" placeholder="1,500" class="input text-right" style="padding-left: 8px;padding-right: 5px;"/>
                </div>
                <div>
                    <select class="select">
                        <option>LAK</option>
                        <option>USD</option>
                        <option>THB</option>
                        <option>CNY</option>
                    </select>
                </div>
            </div>
            <!-- 6 -->
            <div class="grid grid-cols-4 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ລາຄາ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                </div>
                <div>
                    <input type="text" placeholder="1,500" class="input text-right" style="padding-left: 8px;padding-right: 5px;"/>
                </div>
                <div>
                    <select class="select">
                        <option>LAK</option>
                        <option>USD</option>
                        <option>THB</option>
                        <option>CNY</option>
                    </select>
                </div>
            </div>
            <!-- 7 -->
            <div class="grid grid-cols-4 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ໄລຍະເວລາ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                </div>
                <div>
                    <input type="text" placeholder="1" value="1" class="input text-center" />
                </div>
                <div>
                    <select class="select">
                        <option>ເດືອນ</option>
                        <option>ປີ</option>
                    </select>
                </div>
            </div>
        </div>

        <div>
            <div class="mb-8">
                <label>ລາຍລະອຽດ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                <ClientOnly>
                    <QuillEditor
                        v-model:content="note_sale"
                        contentType="html"
                        theme="snow"
                        class="h-96 bg-white fontLao"
                    />
                </ClientOnly>
            </div>
            <div>
                <label>ລາຍລະອຽດ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                <ClientOnly>
                    <QuillEditor
                        v-model:content="note_rent"
                        contentType="html"
                        theme="snow"
                        class="h-96 bg-white fontLao"
                    />
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .dao{
        color: red;
    }
</style>