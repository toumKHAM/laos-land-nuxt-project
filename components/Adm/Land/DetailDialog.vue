<script setup>
    const props = defineProps({
        land_id: Number
    });

    onUpdated(()=>{
        console.log("Detail");
        console.log(props.land_id);
    })
</script>
<template>
    <dialog id="detail_dialog" class="modal ">
        <div class="modal-box w-9/12 h-11/12 max-w-none overflow-y-auto p-0">
            <div class="sticky top-0 z-10 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <h3 class="text-lg font-bold fontLao">ຂໍ້ມູນລາຍລະອຽດຂອງດິນ</h3>
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>

            <div class="p-4">
                text-base <br>
                text-base <br>
                text-base <br>
                text-base <br>
                
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>