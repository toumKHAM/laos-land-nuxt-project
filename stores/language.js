import { defineStore } from 'pinia'
import laoImage from '@/assets/images/laos.png'
import engImage from '@/assets/images/english.png'
import chiImage from '@/assets/images/china.png'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    languages :[
      { short: 'LA', name: 'ພາສາລາວ',img:laoImage,font :'fontLao' },
      { short: 'EN', name: 'English',img:engImage,font :'fontEng' },
      { short: 'ZH', name: 'Chinese',img:chiImage,font:'fontEng' },
    ],
    selectedLang : 'LA',
    selectedLangImg:laoImage,
  }),
  actions: {
    changeLanguage(lang){
      this.selectedLang = lang
      this.selectedLangImg = this.languages.find(item => item.short == lang).img
    }
  }
})