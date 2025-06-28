<script setup>
    const note_sale = ref('<p>ພິມລາຍລະອຽດ...</p>')
    const note_rent = ref('<p>ພິມລາຍລະອຽດ...</p>')
</script>
<template>
    <div class="grid lg:grid-cols-2 gap-8 fontLao text-base">
        <div>
            <!-- 1 -->
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ປະເພດດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-3">
                    <select class="select w-full">
                        <option>ດິນນາ</option>
                        <option>ດິນສວນ</option>
                        <option>ດິນປຸກສ້າງ</option>
                    </select>
                </div>
            </div>
            <!-- 2 -->
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ການບໍລິການ <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-3">
                    <select class="select w-full">
                        <option>ຂາຍ</option>
                        <option>ເຊົ່າ</option>
                        <option>ຂາຍ-ເຊົ່າ</option>
                    </select>
                </div>
            </div>
            <!-- 3 -->
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ທີ່ຕັ້ງດິນ (ແຂວງ) <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-3">
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 4 -->
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ທີ່ຕັ້ງດິນ (ເມືອງ) <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-3">
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 5 -->
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ທີ່ຕັ້ງດິນ (ບ້ານ) <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-3">
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 6 -->
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ທີ່ຕັ້ງດິນ (ເຂດ) <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-3">
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 7 -->
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ລິ້ງໂລເຄຊັ້ນ <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-3">
                    <label class="input w-full">
                        <i class="fa-solid fa-location-dot" style="color: #a1a1a1;"></i>
                        <input type="text" class="grow" placeholder="https://maps.app.goo.gl/D93aGCNmvjEXs1EU6..." />
                    </label>
                </div>
            </div>
            <!-- 8 -->
            <!-- <div>
                <label>ລາຍລະອຽດ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                
            </div> -->

        </div>

        <div>
            <!-- 1 -->
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ຂະໜາດ4ດ້ານ(ແມັດ) <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-3">
                    <input type="text" placeholder="10x25x30x15" class="input w-full" />
                </div>
            </div>
            <!-- 2 -->
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ຮູບຮ່າງດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-3">
                    <input type="text" placeholder="ເປັນຮູບສີ່ແຈສາກ" class="input w-full" />
                </div>
            </div>
            <!-- 3 -->
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ເນື້ອທີ່ດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-2">
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
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ລາຄາລວມ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-2">
                    <input type="text" placeholder="1,500,000" class="input text-right" />
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
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ລາຄາຕໍ່ຕາແມັດ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-2">
                    <input type="text" placeholder="1,500" class="input text-right" />
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
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ລາຄາ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-2">
                    <input type="text" placeholder="1,500" class="input text-right" />
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
            <div class="grid grid-cols-5 gap-3 flex items-center mb-3">
                <div class="text-right col-span-2">
                    <label>ໄລຍະເວລາ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-2">
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
    </div>

    <div class="flex sm:flex-col lg:flex-row gap-8 fontLao text-base">
        <div class="flex-1">
            <div class="grid grid-cols-5 gap-3 mb-2">
                <div class="text-right col-span-2">
                    <label>ລາຍລະອຽດ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                </div>
            </div>
            <div>
                <ClientOnly>
                    <QuillEditor
                        v-model:content="note_sale"
                        contentType="html"
                        theme="snow"
                        class="h-96 bg-white fontLao"
                    />
                </ClientOnly>
            </div>
        </div>
        <div class="flex-1">
            <div class="grid grid-cols-5 gap-3 mb-2">
                <div class="text-right col-span-2">
                    <label>ລາຍລະອຽດ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                </div>
            </div>
            <div>
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


    <!-- <div class="lg:col-span-2 mb-18">
        <div class="grid lg:grid-cols-2 gap-8 fontLao text-base">
            <div class="grid grid-cols-5 gap-3">
                <div class="col-span-2 text-right">
                    <label>ລາຍລະອຽດ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-3">
                    <ClientOnly>
                        <QuillEditor
                            v-model:content="note_sale"
                            contentType="html"
                            theme="snow"
                            class="h-96 bg-white fontLao"
                        />
                    </ClientOnly>
                </div>
            </div>

            <div class="grid grid-cols-5 gap-3 mt-10 lg:mt-1">
                <div class="col-span-2 text-right">
                    <label>ລາຍລະອຽດ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                </div>
                <div class="col-span-3">
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
    </div> -->
</template>

<style scoped>
    .dao{
        color: red;
    }
</style>