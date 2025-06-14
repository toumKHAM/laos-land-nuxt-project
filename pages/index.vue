<script setup>
</script>

<template>
    <NuxtLayout>
        <div>
            <h1>Laos land index</h1>
            <NuxtLink to="/product/123">
                <button class="btn btn-warning">details</button>
            </NuxtLink>
        </div>
    </NuxtLayout>
    <br>
    <NuxtLink to="/admin">
        <button class="btn btn-primary"> <Icon name="mdi:account" /> Admin</button> <br>
        <Icon name="hugeicons:location-08" size="50"/>
        <!-- https://icon-sets.iconify.design/ -->
        <br>
        <i class="fas fa-user"></i>
        <br>
        <i class="fa-solid fa-location-dot" style="color: #63E6BE;font-size: 50px;"></i>
        <!-- https://fontawesome.com/search -->
    </NuxtLink>
    
</template>