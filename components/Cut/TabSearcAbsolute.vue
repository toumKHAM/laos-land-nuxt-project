<script setup>
import { ref } from "vue";

const activeTab = ref("ALL");
const dataTab = [
  {
    name: "ALL",
    label: "All",
  },
  {
    name: "SALE",
    label: "Sale",
  },
  {
    name: "RENT",
    label: "Rent",
  },
];
</script>

<template>
  <div
    class="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 md:w-1/2 p-2 sm:p-4 rounded animate-fly-in div-3 bg-gray-200 opacity-90" 
  >
    <div role="tablist" class="tabs tabs-border justify-center fontLao">
      <a
        v-for="tab in dataTab"
        role="tab"
        :class="
          tab.name === activeTab
            ? 'tab-active tab font-bold text-xl text-primary'
            : 'tab font-bold text-xl'
        "
        @click="activeTab = tab.name"
        >{{ tab.label }}</a
      >
    </div>
  </div>
</template>
