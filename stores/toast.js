import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    message: '',
    type: 'success', // success, error, warning, info
    visible: false
  }),
  actions: {
    show(message, type = 'error', duration = 2000) {
      this.message = message
      this.type = type
      this.visible = true

      setTimeout(() => {
        this.visible = false
      }, duration)
    }
  }
})