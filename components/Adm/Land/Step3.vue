<script setup>
</script>

<template>
    <div class="flex flex-col lg:flex-row gap-8 fontLao text-base">
        <div class="flex-1">
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ຊື່ ແລະ ນາມສະກຸນເຈົ້າຂອງດິນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ເບີໂທຕິດຕໍ່ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ທີ່ຢູ່ປັດຈຸບັນ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ບັດປະຈຳຕົວເລກທີ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input type="text" placeholder="" class="input w-full" />
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ຮູບພາບບັດປະຈຳຕົວ <span class="dao">*</span>:</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <button class="btn btn-soft btn-primary w-full" >
                        ເລືອກຮູບພາບ
                    </button>
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-3 md:items-center mt-3">
                <div class="flex-1 md:flex-2 md:text-right">
                    <label>ໝາຍເຫດ :</label>
                </div>
                <div class="flex-1 md:flex-3">
                    <input type="text" placeholder="ພິມຄຳອະທິບາຍອື່ນໆ(ຖ້າມີ)" class="input w-full" />
                </div>
            </div>
        </div>
        <div class="flex-1">
            <div class="flex flex-col md:flex-row lg:flex-col md:gap-3">
                <div class="md:flex-2 md:text-right lg:text-left">
                    <label>ເອກະສານສັນຍາລະຫວ່າງຜູ້ຂາຍ ກັບ ບໍລິສັດ <span class="dao">*</span>:</label>
                </div>
                <div class="md:flex-3">
                    <button class="btn btn-soft btn-primary w-full" >
                        <i class="fa-solid fa-plus mr-1" style="font-size: 14px;"></i>ເພີ່ມເອກະສານ
                    </button>
                    <AdmLandFilePreview></AdmLandFilePreview>
                    <AdmLandFilePreview></AdmLandFilePreview>
                    <AdmLandFilePreview></AdmLandFilePreview>
                    
                </div>
                
            </div>
            <div></div>
        </div>
    </div>
</template>
<style scoped>
    .dao{
        color: red;
    }
</style>