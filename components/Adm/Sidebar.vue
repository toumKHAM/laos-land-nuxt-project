<script setup>
    import bol_logo from '@/assets/images/bol_logo.png'
    // import MenuIcon from '@/components/icons/MenuIcon.vue'

    // import { useRouter } from 'vue-router'
    // const router = useRouter()

    // const onClickMenu = (event)=>{
    //     // go to router link
    //     const link_path = event.currentTarget.getAttribute('href');
    //     router.push({path:link_path})
    // }

    const menus = [
        // level 1 no sub 
        {
            main_menu: "ໜ້າຫຼັກ",
            main_icon: {icon:'fa-solid fa-house',color:'',sized:'18px'},
            sub: false,
            main_link: '/'
        },
        // level 1 has sub
        {
            main_menu: "ຜະລິດຕະພັນ",
            main_icon: {icon:'fa-solid fa-cart-shopping',color:'',sized:'18px'},
            sub: true,
            sub1: [
                // level 2 no sub
                {
                    sub1_menu: "ຈັດການຂໍ້ມູນດິນ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: '/test'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຈັດການຂໍ້ມູນອາຄານ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: '/build/vueapp'
                },
            ],
            main_link: ''
        },
        // level 1 has sub
        {
            main_menu: "ການບໍລິການ",
            main_icon: {icon:'fa-solid fa-share-from-square',color:'',sized:'18px'},
            sub: true,
            sub1: [
                // level 2 no sub
                {
                    sub1_menu: "ບັນທຶກການຂາຍ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: '/test'
                },
                // level 2 no sub
                {
                    sub1_menu: "ບັນທຶກການເຊົ່າ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: '/build/vueapp'
                },
            ],
            main_link: ''
        },
        // level 1 has sub
        {
            main_menu: "ຈັດການຂໍ້ມູນທົ່ວໄປ",
            main_icon: {icon:'fa-solid fa-gear',color:'',sized:'18px'},
            sub: true,
            sub1: [
                // level 2 no sub
                {
                    sub1_menu: "ຜູ້ໃຊ້ລະບົບ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: '/test'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນລາຍລະອຽດບຸກຄົນ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: '/build/vueapp'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນທີ່ຕັ້ງ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: '/build/vueapp'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນອັດຕາແລກປ່ຽນ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: '/build/vueapp'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນລະຫັດອະສັງຫາ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: '/build/vueapp'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນປະເພດຍ່ອຍຜະລິດຕະພັນ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: '/build/vueapp'
                },
                // level 2 no sub
                {
                    sub1_menu: "ຂໍ້ມູນອຳນວຍຄວາມສະດວກແລະຫຍຸ້ງຍາກຂອງຜະລິດຕະພັນ",
                    sub1_icon: {icon:'fa-solid fa-circle',color:'',sized:'8px'},
                    sub: false,
                    sub2: [],
                    sub1_link: '/build/vueapp'
                },
            ],
            main_link: ''
        },
        // level 1 no sub 
        {
            main_menu: "ຂໍ້ມູນຕ້ອງການຂາຍ",
            main_icon: {icon:'fa-solid fa-calendar',color:'',sized:'18px'},
            sub: false,
            main_link: '/'
        },
        // level 1 no sub 
        {
            main_menu: "ຂໍ້ມູນຂາຍແລ້ວ",
            main_icon: {icon:'fa-solid fa-calendar-check',color:'',sized:'18px'},
            sub: false,
            main_link: '/'
        },

        // // level 1 has sub
        // {
        //     main_menu: "System Process",
        //     main_icon: {icon:'list-check',color:'#63E6BE'},
        //     sub: true,
        //     sub1: [
        //         // level 2 has sub
        //         {
        //             sub1_menu: "Master Data",
        //             sub1_icon: {icon:'gear',color:'rgb(43 52 64)'},
        //             sub: true,
        //             sub2: [
        //                 {
        //                     sub2_menu: "User",
        //                     sub2_link: "/masterdata/user"
        //                 },
        //                 {
        //                     sub2_menu: "Role",
        //                     sub2_link: "/masterdata/role"
        //                 }
        //             ],
        //             sub1_link: ''
        //         },
        //         // level 2 has sub
        //         {
        //             sub1_menu: "Report",
        //             sub1_icon: {icon:'chart-simple',color:'rgb(43 52 64)'},
        //             sub: true,
        //             sub2: [
        //                 {
        //                     sub2_menu: "Report 1",
        //                     sub2_link: "/report/report1"
        //                 },
        //                 {
        //                     sub2_menu: "Report 2",
        //                     sub2_link: "/report/report2"
        //                 }
        //             ],
        //             sub1_link: ''
        //         },
        //     ],
        //     main_link: ''
        // }
    ]
</script>

<template>
    <div class="drawer-side z-40" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
        <label for="drawer" class="drawer-overlay" aria-label="Close menu"></label>
        <aside class="bg-base-100 min-h-screen w-64">
            <div class="bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex shadow-sm">
                <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2">
                    <img width="32" height="32" :src="bol_logo">
                        
                    <div class="font-title inline-flex text-lg md:text-2xl fontLao">ລະບົບ</div>
                </a>
            </div>

            <div class="h-4"></div>

            <ul class="menu px-4 py-0 fontLao">
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
                                <h2 v-if="sub1.sub" class="menu-title flex items-center gap-4 px-1.5">
                                    <MenuIcon :icons="sub1.sub1_icon.icon" :colors="sub1.sub1_icon.color" :sized="sub1.sub1_icon.sized"></MenuIcon>
                                    {{ sub1.sub1_menu }}
                                </h2>
                                <ul v-if="sub1.sub">
                                    <li v-for="sub2 in sub1.sub2"> 
                                        <a :href="sub2.sub2_link" class="group"
                                            @click.prevent="onClickMenu"> 
                                            <span>{{ sub2.sub2_menu }}</span> 
                                        </a>
                                    </li>
                                </ul>

                                <!-- level 2 no sub -->
                                <a v-else :href="sub1.sub1_link" class="group flex items-center gap-4 px-1.5"
                                    @click.prevent="onClickMenu">
                                    <span>
                                        <MenuIcon :icons="sub1.sub1_icon.icon" :colors="sub1.sub1_icon.color" :sized="sub1.sub1_icon.sized"></MenuIcon>
                                    </span> 
                                    <span>{{ sub1.sub1_menu }}</span> 
                                </a>
                            </li>
                        </ul>

                    </details>

                    <!-- level 1 no sub -->
                    <a v-else :href="menu.main_link" class="group fontLao"
                        @click.prevent="onClickMenu">
                        <span>
                            <MenuIcon :icons="menu.main_icon.icon" :colors="menu.main_icon.color" :sized="menu.main_icon.sized"></MenuIcon>
                        </span> 
                        <span>{{ menu.main_menu }}</span> 
                    </a>

                </li>

                <li></li>
                
            </ul>
            <div class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"> </div>
        </aside>
    </div>
</template>