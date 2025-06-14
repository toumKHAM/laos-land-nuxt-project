<script setup>

</script>
<template>
    <div>
      <div class="bg-base-100 drawer lg:drawer-open">
          <input id="drawer" type="checkbox" class="drawer-toggle">
          <div class="drawer-content">
              <div class=" bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm">
                  <!-- navbar -->
                  <AdmNavbar></AdmNavbar>
              </div>
  
              <div class="max-w-[100vw] px-2 pt-2 pb-6 xl:pr-2">
                  <!-- Browser -->
                  <div class="mockup-browser border border-base-300 px-3" style="padding-bottom: 12px;">
                      <!-- title -->
                      <div class="mockup-browser-toolbar">
                        <AdmBreadcrumbs></AdmBreadcrumbs>
                      </div>
                      <div class="border-t border-base-300"></div>
                      <!-- body -->
                      <slot></slot>
  
                      
                  </div>
                  <AdmFooter></AdmFooter>
              </div>
          </div>
  
          <AdmSidebar></AdmSidebar>
          
      </div>
    </div>
</template>