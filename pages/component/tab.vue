<script setup>

    const activeTab = ref('tab1')
</script>

<template>
    <div class="w-full fontLao">
        <div role="tablist" class="tabs tabs-border">
            <a role="tab" class="tab" :class="{ 'tab-active': activeTab === 'tab1' }" @click="activeTab = 'tab1'">ແທັບ 1</a>
            <a role="tab" class="tab" :class="{ 'tab-active': activeTab === 'tab2' }" @click="activeTab = 'tab2'">ແທັບ 2</a>
            <a role="tab" class="tab" :class="{ 'tab-active': activeTab === 'tab3' }" @click="activeTab = 'tab3'">ແທັບ 3</a>
        </div>

        <div class="mt-4">
            <div v-if="activeTab === 'tab1'">
                <p>ນີ້ແມ່ນເນື້ອໃນແທັບ 1</p>
            </div>
            <div v-else-if="activeTab === 'tab2'">
                <p>ນີ້ແມ່ນເນື້ອໃນແທັບ 2</p>
            </div>
            <div v-else-if="activeTab === 'tab3'">
                <p>ນີ້ແມ່ນເນື້ອໃນແທັບ 3</p>
            </div>
        </div>
    </div>
</template>