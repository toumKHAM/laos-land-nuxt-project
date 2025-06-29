<script setup>
    import picture from '@/assets/images/admin-picture.png'
    import logo_icon from '@/assets/images/logo/logo_icon.png'
    const layoutStore = useLayoutStore()
    const router = useRouter()
    const dropdownMenu = ref(null);
    const closeDropdownMenu = (link) => {
        if (dropdownMenu.value) {
            dropdownMenu.value.blur();
        }
        router.push(link)
    };

</script>
<template>
    <nav class="navbar w-full">
        <div class="flex flex-1 md:gap-1 lg:gap-2">
            <span class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="Menu">
                <label aria-label="Open menu" for="drawer" class="btn btn-square btn-ghost drawer-button lg:hidden ">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </span>
            <div class="flex items-center gap-2 lg:hidden">
                <a href="/admin/v1/home" aria-current="page" aria-label="LAOSLAND.LA9" class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2">
                    <img class="h-6 w-6 md:h-8 md:w-8" width="32" height="32" :src="logo_icon">
                    <span class="font-title text-base-content text-primary text-md md:text-lg fontLao">LAOSLAND.LA</span>
                </a>
            </div>
            <div class="hidden w-full  lg:flex"><!-- max-w-sm -->
                <!-- search -->
                <div class="font-bold text-xl fontLao">{{ layoutStore.title }}</div>
                <!-- end search -->
            </div>
            
        </div>
        <div class="flex-1 px-3 text-right">
            <h1 class="fontEng">Admin</h1>
            <span class="fontLao">ຜູ້ຄຸ້ມຄອງລະບົບ</span>
        </div>
        <div class="flex-0">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" :src="picture" />
                    </div>
                </div>
                <ul tabindex="0" ref="dropdownMenu" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li> <a class="text-base fontLao" @click="closeDropdownMenu('/admin/v1/home')" > ຂໍ້ມູນໂປຣຟາຍ </a> </li>
                    <li> <a class="text-base fontLao" @click="closeDropdownMenu('/admin/v1/home')" >ປ່ຽນລະຫັດຜ່ານ</a> </li>
                    <li> <a class="text-base fontLao" @click="closeDropdownMenu('/admin')" >ອອກຈາກລະບົບ</a> </li>
                </ul>
            </div>
        </div>
    </nav>
</template>