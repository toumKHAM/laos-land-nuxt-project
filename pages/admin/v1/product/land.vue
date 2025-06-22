<script setup>
    const layoutStore = useLayoutStore()
    onMounted(()=>{
        layoutStore.changeTitle('ຈັດການຂໍ້ມູນດິນ',['ຜະລິດຕະພັນ','ຈັດການຂໍ້ມູນດິນ'])
    })
    // ---------------------------------------------------- //
    
    const activeTab = ref('tab1')
    const clickTab = (tab)=>{
        activeTab.value = tab
    }
</script>

<template>
    <div role="tablist" class="tabs tabs-border mt-3 fontLao">
        <a role="tab" class="tab text-lg tab-active border-neutral" :class="{ 'tab-active text-primary border-primary': activeTab === 'tab1' }" @click="clickTab('tab1')">ຂໍ້ມູນດິນທັງໝົດ</a>
        <a role="tab" class="tab text-lg tab-active border-neutral mx-10" :class="{ 'tab-active text-primary border-primary': activeTab === 'tab2' }" @click="clickTab('tab2')"><i class="fa-solid fa-plus mr-2" style="font-size: 16px;"></i>ເພີ່ມໃໝ່</a>
        <a role="tab" class="tab text-lg tab-active border-neutral" :class="{ 'tab-active text-primary border-primary': activeTab === 'tab3' }" @click="clickTab('tab3')">ຂໍ້ມູນດິນທີ່ເກີນ3ເດືອນ</a>
    </div>

    <div class="mt-4">
        <div v-if="activeTab === 'tab1'">
            <AdmLandTab1></AdmLandTab1>
        </div>
        <div v-else-if="activeTab === 'tab2'">
            <AdmLandTab2></AdmLandTab2>
        </div>
        <div v-else-if="activeTab === 'tab3'">
            <AdmLandTab3></AdmLandTab3>
        </div>
    </div>
    
</template>