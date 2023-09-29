import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      page: 'camera',
      deviceId: '',
      borderWidth: '1',
      borderColor: '#67568C',
      isRoundedFull: false
    })

    return {
      config,
    }
  },
  {
    persist: {
      paths: ['config']
    }
  }
)
