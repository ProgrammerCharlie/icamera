<template>
  <div class="overflow-hidden">
    <h1 class="text-slate-900 text-center font-mono bg-slate-400">Setting</h1>
    <div class="settings h-screen w-screen p-10 flex flex-col gap-3 bg-slate-700">
      <el-select
        v-model="formData.deviceId"
        placeholder="请选取摄像设备"
        size="small"
        clearable
        filterable
      >
        <el-option
          v-for="camera in cameras"
          :key="camera.deviceId"
          :label="camera.label"
          :value="camera.deviceId"
        />
      </el-select>
      <el-input 
        v-model="formData.borderWidth"
        placeholder="边框宽度"
        size="small"
      />
      <el-input 
        v-model="formData.borderColor"
        placeholder="边框颜色"
        size="small"
      />

      <el-button
        @click="saveConfig"
        size="small"
        class="bg-slate-400
         text-slate-900 
         hover:bg-slate-800 
         hover:text-teal-50 
         hover:border-slate-400"
      >
        提交
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useConfigStore } from '@renderer/store/config'
const formData = reactive({
  deviceId: '',
  borderWidth: '',
  borderColor: ''
})
const configStore = useConfigStore()

// 已有视频设备
const cameras = ref<MediaDeviceInfo[]>([])
navigator.mediaDevices.enumerateDevices().then(devices => {
  cameras.value = devices.filter(val => val.kind.includes('video')) 
})

const saveConfig = () => {
  configStore.config.deviceId = formData.deviceId
  configStore.config.borderWidth = formData.borderWidth
  configStore.config.borderColor = formData.borderColor
  configStore.config.page = 'camera'
}
</script>

<style scoped lang="scss">
.settings {
  -webkit-app-region: no-drag;
}
</style>
