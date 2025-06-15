<script setup>
    const selected = ref('')
    
</script>

<template>
    <div class="flex m-5">
        <!-- select ຂອງ daisy ui -->
        <select class="select fontEng">
            <option selected>Pick a color</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
        </select>

        <!-- select ຂອງ nuxt ທີ່ມີ search -->
        <ClientOnly>
            <VSelect
                :options="['Laos', 'Thailand', 'Vietnam']"
                v-model="selected"
                class="w-50 ml-5 fontEng my-vselect"
                placeholder="Select Country"
            />
        </ClientOnly>
    </div>
    
</template>
<style scoped>
    :deep(.my-vselect .vs__dropdown-toggle) {
        height: 40px;
        min-height: 40px;
        line-height: 40px;
        padding-top: 0;
        padding-bottom: 0;
    }
    :deep(.fontEng){
        font-family:Eng;
        font-size: 0.875rem;
    }
</style>