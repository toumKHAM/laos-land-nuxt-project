import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    title: '',
    breadcrumbs : []
  }),
  actions: {
    changeTitle(newTitle,newBreadcrumbs){
      this.title = newTitle
      this.breadcrumbs = newBreadcrumbs
    }
  }
})