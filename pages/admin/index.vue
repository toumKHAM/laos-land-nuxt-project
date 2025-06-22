<script setup>
    import bol_logo from '@/assets/images/bol_logo.png'
    const router = useRouter()
    const checkLogin = ()=>{
        router.push('/admin/v1/home') // ປ່ຽນໄປຫາໜ້າ 
    }
</script>

<template>
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left" style="visibility: hidden;">
                <h1 class="text-5xl font-bold">ເຂົ້າສູ່ລະບົບ</h1>
            
            </div>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div class="grid grid-flow-col justify-items-center mt-10">
                    <h2 class="card-title  text-3xl fontEng">LaosLand.la</h2>
                </div>
                <div class="grid grid-flow-col justify-items-center">
                    <img width="70" height="70" :src="bol_logo">
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
                    <fieldset class="fieldset">
                        <label class="label">Username</label>
                        <input type="text" class="input" placeholder="Username" />

                        <label class="label">Password</label>
                        <input type="password" class="input" placeholder="********" />

                        <div><a class="link link-hover fontLao">ລືມລະຫັດຜ່ານ?</a></div>
                        <button @click="checkLogin" class="btn btn-primary mt-4 fontLao">ເຂົ້າສູ່ລະບົບ</button>
                        
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</template>