<script setup>
import Swal from 'sweetalert2'

function showAlert() {
    Swal.fire({
        title: 'ສຳເລັດ!',
        text: 'ຂໍ້ມູນຖືກບັນທຶກແລ້ວ',
        icon: 'success',
        confirmButtonText: 'ຕົກລົງ'
    })
    // Swal.fire({
    //     title: 'ທ່ານແນ່ໃຈບໍ?',
    //     text: 'ຂໍ້ມູນນີ້ຈະຖືກລຶບຖາວອນ!',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'ຕົກລົງ!',
    //     cancelButtonText: 'ຍົກເລີກ'
    //     }).then((result) => {
    //     if (result.isConfirmed) {
    //         // ໂຕຢ່າງ: ລຶບຂໍ້ມູນ
    //         Swal.fire('ລຶບແລ້ວ!', 'ຂໍ້ມູນຖືກລຶບ.', 'success')
    //     }
    // })
}
</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <button @click="showAlert" class="btn btn-primary">Save</button>
    </div>
  
</template>