<script setup>
    import logo_icon from '@/assets/images/logo/logo_icon.png'

    const pre_fix = "/admin/v1"
    const menus = [
        // level 1 no sub 
        {
            main_menu: "ໜ້າຫຼັກ",
            main_icon: {icon:'fa-solid fa-house',color:'#000',sized:'18px'},
            sub: false,
            main_link: pre_fix+'/home'
        },
        // level 1 has sub
        {
            main_menu: "ຜະລິດຕະພັນ",
            main_icon: {icon:'fa-solid fa-cart-shopping',color:'#000',sized:'18px'},
            sub: true,
            sub1: [
                // level 2 no sub
                // {
                //     sub1_menu: "ຈັດການຂໍ້ມູນດິນ",
                //     sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                //     sub: false,
                //     sub2: [],
                //     sub1_link: pre_fix+'/product/land'
                // },
                // level 2 has sub
                {
                    sub1_menu: "ຈັດການຂໍ້ມູນດິນ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                    sub: true,
                    sub2: [
                        {
                            sub2_menu: "ເພີ່ມດິນ",
                            sub2_link: pre_fix+'/product/land/add_land'
                        },
                        {
                            sub2_menu: "ຂໍ້ມູນດິນທັງໝົດ",
                            sub2_link: pre_fix+'/product/land/all_land'
                        },
                        
                        {
                            sub2_menu: "ຂໍ້ມູນດີນເກີນ3ເດືອນ",
                            sub2_link: pre_fix+'/product/land/3month_land'
                        },
                        {
                            sub2_menu: "ກຳນົດສິດຂໍ້ມູນດິນ",
                            sub2_link: pre_fix+'/product/land/assign_land'
                        },
                    ],
                    sub1_link: ''
                },
                // level 2 no sub
                {
                    sub1_menu: "ຈັດການຂໍ້ມູນອາຄານ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: pre_fix+'/product/building'
                },
            ],
            main_link: ''
        },
        // level 1 has sub
        {
            main_menu: "ການບໍລິການ",
            main_icon: {icon:'fa-solid fa-share-from-square',color:'#000',sized:'18px'},
            sub: true,
            sub1: [
                // level 2 no sub
                {
                    sub1_menu: "ບັນທຶກການຂາຍ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: pre_fix+'/service/sale'
                },
                // level 2 no sub
                {
                    sub1_menu: "ບັນທຶກການເຊົ່າ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: pre_fix+'/service/rent'
                },
            ],
            main_link: ''
        },
        // level 1 has sub
        {
            main_menu: "ຈັດການຂໍ້ມູນທົ່ວໄປ",
            main_icon: {icon:'fa-solid fa-gear',color:'#000',sized:'18px'},
            sub: true,
            sub1: [
                // level 2 no sub
                {
                    sub1_menu: "ຜູ້ໃຊ້ລະບົບ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: pre_fix+'/master/user'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນລາຍລະອຽດບຸກຄົນ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: pre_fix+'/master/person'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນທີ່ຕັ້ງ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: pre_fix+'/master/location'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນອັດຕາແລກປ່ຽນ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: pre_fix+'/master/exchange_rate'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນລະຫັດອະສັງຫາ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: pre_fix+'/master/laosland_id'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນປະເພດຍ່ອຍຜະລິດຕະພັນ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: pre_fix+'/master/sub_type'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກຂອງຜະລິດຕະພັນ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'#666',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: pre_fix+'/master/advantage'
                },
            ],
            main_link: ''
        },
        // level 1 no sub 
        {
            main_menu: "ຂໍ້ມູນຂາຍ",
            main_icon: {icon:'fa-solid fa-calendar',color:'#000',sized:'18px'},
            sub: false,
            main_link: pre_fix+'/customer/sale'
        },
        // level 1 no sub 
        {
            main_menu: "ຂໍ້ມູນຊື້ແລ້ວ",
            main_icon: {icon:'fa-solid fa-calendar-check',color:'#000',sized:'18px'},
            sub: false,
            main_link: pre_fix+'/customer/buy'
        },
    ]
</script>

<template>
    <div class="drawer-side z-40" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
        <label for="drawer" class="drawer-overlay" aria-label="Close menu"></label>
        <aside class="bg-base-100 min-h-screen w-64 border-r-1 border-base-300">
            <div class="bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex shadow-sm" style="padding-bottom: 16px;padding-top: 16px;">
                <NuxtLink :to="`${pre_fix}/home`">
                    <div class="flex">
                        <img width="32" height="32" :src="logo_icon">
                        <div class="font-title font-bold inline-flex text-lg text-primary md:text-2xl" style="margin-left: 8px;">LaosLand.la</div>
                    </div>
                </NuxtLink>
            </div>

            <div class="h-4"></div>

            <ul class="menu px-4 py-0 w-auto fontLao">
                <!-- loop menu -->
                <li v-for="menu in menus">
                    <!-- level 1 has sub -->
                    <details open v-if="menu.sub">
                        <summary class="group ">
                            <span>
                                <MenuIcon :icons="menu.main_icon.icon" :colors="menu.main_icon.color" :sized="menu.main_icon.sized"></MenuIcon>
                            </span> 
                            {{ menu.main_menu }}
                        </summary>
                        <ul>
                            <li v-for="sub1 in menu.sub1">
                                <!-- level 2 has sub -->
                                <h2 v-if="sub1.sub" class=" flex items-center gap-4 px-1.5">
                                    <MenuIcon :icons="sub1.sub1_icon.icon" :colors="sub1.sub1_icon.color" :sized="sub1.sub1_icon.sized"></MenuIcon>
                                    {{ sub1.sub1_menu }}
                                </h2>
                                <ul v-if="sub1.sub">
                                    <li v-for="sub2 in sub1.sub2"> 
                                        <NuxtLink :to="sub2.sub2_link" class="group"> 
                                            <span>{{ sub2.sub2_menu }}</span> 
                                        </NuxtLink>
                                    </li>
                                </ul>

                                <!-- level 2 no sub -->
                                <NuxtLink v-else :to="sub1.sub1_link" class="group flex items-center gap-4 px-1.5">
                                    <span>
                                        <MenuIcon :icons="sub1.sub1_icon.icon" :colors="sub1.sub1_icon.color" :sized="sub1.sub1_icon.sized"></MenuIcon>
                                    </span> 
                                    <span>{{ sub1.sub1_menu }}</span> 
                                </NuxtLink>
                            </li>
                        </ul>

                    </details>

                    <!-- level 1 no sub -->
                    <NuxtLink v-else :to="menu.main_link" class="group fontLao ">
                        <span>
                            <MenuIcon :icons="menu.main_icon.icon" :colors="menu.main_icon.color" :sized="menu.main_icon.sized"></MenuIcon>
                        </span> 
                        <span>{{ menu.main_menu }}</span> 
                    </NuxtLink>

                </li>

                <li></li>
                
            </ul>
            <div class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"> </div>
        </aside>
    </div>
</template>

<style>
    ul li .router-link-exact-active{
        --tw-outline-style: none;
        /* color: var(--menu-active-fg); */
        color: #422ad5;
        /* background-color: var(--menu-active-bg); */
        background-color: #e0e7ff;
        background-size: auto, calc(var(--noise) * 100%);
        background-image: none, var(--fx-noise);
        outline-style: none;
        /* box-shadow: 0 2px calc(var(--depth) * 3px) -2px var(--menu-active-bg); */
        box-shadow: 0 2px calc(var(--depth) * 3px) -2px #e0e7ff;
    }
    ul li .router-link-exact-active i{
        color: #422ad5 !important;
    }
    .menu {
    & :where(li) {
        & > :not(ul, .menu-title, details, .btn):active, & > :not(ul, .menu-title, details, .btn).menu-active, & > details > summary:active {
            color: #422ad5;
            background-color: #e0e7ff;
        }
    }
}
</style>