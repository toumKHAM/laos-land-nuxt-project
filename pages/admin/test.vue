
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
                  <div class="mockup-browser border border-base-300">
                      <!-- title -->
                      <div class="mockup-browser-toolbar">
                        <AdmBreadcrumbs></AdmBreadcrumbs>
                      </div>
                      <!-- body -->
                      <div style="min-height: 70vh;"><h1>5555</h1></div>
                      
                      <slot></slot>
  
                      <AdmFooter></AdmFooter>
                  </div>
              </div>
          </div>
  
          <AdmSidebar></AdmSidebar>
          
      </div>
    </div>
  </template>