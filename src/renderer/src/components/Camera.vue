<template>
  <main 
    :class="`h-screen w-screen overflow-hidden ${configStore.config.isRoundedFull && 'rounded-full'}`" 
    :style="`border: ${configStore.config.borderWidth}px solid ${configStore.config.borderColor}; `"
  >
    <video ref="camera" :class="`object-cover h-full ${configStore.config.isRoundedFull && 'rounded-full'}`" />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useConfigStore } from '@renderer/store/config'
const configStore = useConfigStore()
const camera = ref<HTMLVideoElement>()
onMounted(() => {
  const constraints = {
    audio: false,
    video: {
      deviceId: configStore.config.deviceId
    }
  } as MediaStreamConstraints
  
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    camera.value!.srcObject = stream
    camera.value?.play()
  })
})
</script>
