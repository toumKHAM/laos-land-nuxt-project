import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: useRuntimeConfig().public.apiBase, // ແກ້ໃຫ້ເປັນ URL ຂອງ API ເຈົ້າ
  })

  // ເພີ່ມລົງ context ເພື່ອໃຊ້ global
  nuxtApp.provide('axios', api)
})