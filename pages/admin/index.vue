<script setup>
    import logo_icon from '@/assets/images/logo/logo_icon.png'
    import logo_login from '@/assets/images/logo/logo_login.png'
    useHead({
        title: 'Admin LaosLand | ເຂົ້າສູ່ລະບົບ'
    })
    const router = useRouter()
    const checkLogin = ()=>{
        router.push('/admin/v1/home') // ປ່ຽນໄປຫາໜ້າ 
    }
</script>

<template>
    <div class="flex flex-col md:flex-row items-center justify-center bg-base-200 min-h-screen">
        <div class="hidden md:flex md:w-1/2 h-screen bg-gradient-to-b from-blue-200 to-blue-700 text-center justify-center items-center">
            <div class="flex flex-row items-center">
                <div>
                    <img width="80" :src="logo_icon">
                </div>
                <div class="text-white text-2xl">LAOSLAND.LA</div>
            </div>
        </div>
        <div class="w-full md:w-1/2 justify-center">
            <div class="flex items-center justify-center px-3">
                <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div class="grid grid-flow-col justify-items-center mt-10 mb-5">
                        <img class=" md:hidden" width="200" :src="logo_login">
                        <img class="hidden md:flex " width="60" :src="logo_icon">
                    </div>
                    <div class="grid grid-flow-col justify-items-center">
                        <p class="text-xl fontEng font-bold">
                            Admin
                            <i class="fa-solid fa-users-gear" style="font-size: 18px;color: #000"></i>
                        </p>
                        <p class="text-lg fontLao"> 
                            <i class="fa-solid fa-key" :style="[`font-size: 18px`,`color: #000`]"></i>
                            ເຂົ້າສູ່ລະບົບ
                        </p>
                    </div>

                    <div class="card-body">
                        <fieldset class="fieldset px-3">
                            <label class="label">Username</label>
                            <input type="text" class="input w-full" placeholder="Username" />

                            <label class="label">Password</label>
                            <input type="password" class="input w-full" placeholder="********" />

                            <div><a class="link link-hover fontLao">ລືມລະຫັດຜ່ານ?</a></div>
                            <button @click="checkLogin" class="btn btn-primary mt-4 fontLao">ເຂົ້າສູ່ລະບົບ</button>
                            
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>