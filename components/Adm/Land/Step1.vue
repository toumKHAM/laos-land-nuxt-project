<script setup>
    const note_sale = ref('<p>ພິມລາຍລະອຽດ...</p>')
    const note_rent = ref('<p>ພິມລາຍລະອຽດ...</p>')
</script>

<template>
    <div class="flex flex-col lg:flex-row gap-8 fontLao text-base">
        <div class="flex-1">
            <!-- 1 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ປະເພດດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full">
                        <option>ດິນນາ</option>
                        <option>ດິນສວນ</option>
                        <option>ດິນປຸກສ້າງ</option>
                    </select>
                </div>
            </div>
            <!-- 2 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ການບໍລິການ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full">
                        <option>ຂາຍ</option>
                        <option>ເຊົ່າ</option>
                        <option>ຂາຍ-ເຊົ່າ</option>
                    </select>
                </div>
            </div>
            <!-- 3 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ທີ່ຕັ້ງດິນ (ແຂວງ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 4 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ທີ່ຕັ້ງດິນ (ເມືອງ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 5 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ທີ່ຕັ້ງດິນ (ບ້ານ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 6 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ທີ່ຕັ້ງດິນ (ເຂດ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <select class="select w-full">
                        <option>ນະຄອນຫຼວງວຽງຈັນ</option>
                        <option>ຫຼວງພະບາງ</option>
                        <option>ສະຫວັນນະເຂດ</option>
                        <option>ຈຳປາສັກ</option>
                    </select>
                </div>
            </div>
            <!-- 7 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລິ້ງໂລເຄຊັ້ນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <label class="input w-full">
                        <i class="fa-solid fa-location-dot" style="color: #a1a1a1;"></i>
                        <input type="text" class="grow" placeholder="https://maps.app.goo.gl/D93aGCNmvjEXs1EU6..." />
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
                    <input type="text" placeholder="10x25x30x15" class="input w-full" />
                </div>
            </div>
            <!-- 2 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ຮູບຮ່າງດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <input type="text" placeholder="ເປັນຮູບສີ່ແຈສາກ" class="input w-full" />
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
                            <input type="text" placeholder="400" class="input w-full text-right" />
                        </div>
                        <div class="col-span-2">
                            <select class="select w-full">
                                <option>ຕາແມັດ</option>
                                <option>ເຮັກຕາ</option>
                                <option>ໄຮ່</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 4 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລາຄາລວມ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-3">
                            <input type="text" placeholder="1,500,000" class="input w-full text-right" />
                        </div>
                        <div class="col-span-2">
                            <select class="select w-full">
                                <option>LAK</option>
                                <option>USD</option>
                                <option>THB</option>
                                <option>CNY</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 5 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລາຄາຕໍ່ຕາແມັດ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-3">
                            <input type="text" placeholder="250,000" class="input w-full text-right" />
                        </div>
                        <div class="col-span-2">
                            <select class="select w-full">
                                <option>LAK</option>
                                <option>USD</option>
                                <option>THB</option>
                                <option>CNY</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 6 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລາຄາ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-3">
                            <input type="text" placeholder="2,500" class="input w-full text-right" />
                        </div>
                        <div class="col-span-2">
                            <select class="select w-full">
                                <option>LAK</option>
                                <option>USD</option>
                                <option>THB</option>
                                <option>CNY</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 7 -->
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center mt-3">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ໄລຍະເວລາ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-3">
                            <input type="text" placeholder="1" value="1" class="input text-center w-full" />
                        </div>
                        <div class="col-span-2">
                            <select class="select w-full">
                                <option>ເດືອນ</option>
                                <option>ປີ</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-8 fontLao text-base mt-5">
        <div class="flex-1">
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລາຍລະອຽດ(ສຳລັບຂາຍ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <textarea rows="4" class="textarea w-full" placeholder="ພິມລາຍລະອຽດ..."></textarea>
                </div>
            </div>
        </div>
        <div class="flex-1">
            <div class="flex flex-col md:gap-3 xl:gap-3 md:flex-row lg:flex-col xl:flex-row xl:items-center">
                <div class="flex-1 text-left md:flex-2 md:text-right lg:flex-1 lg:text-left xl:flex-2 xl:text-right">
                    <label>ລາຍລະອຽດ(ສຳລັບເຊົ່າ) <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3 lg:flex-1 xl:flex-3">
                    <textarea rows="4" class="textarea w-full" placeholder="ພິມລາຍລະອຽດ..."></textarea>
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