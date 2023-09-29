<script setup lang="ts">
import Camera from '@renderer/components/Camera.vue'
import Setting from '@renderer/components/Setting.vue'
import {Setting as SettingIcon, CameraFive, InnerShadowTopLeft} from '@icon-park/vue-next';
import { useConfigStore } from '@renderer/store/config'
import { onMounted } from 'vue'
import useDrag from '@renderer/hooks/useDrag'
const configStore = useConfigStore()
const {drag} = useDrag()

onMounted(() => {
  window.addEventListener('contextmenu', () => {
    window.api.contextmenu()
  })

  drag.run()
})
</script>

<template>
  <main class="relative group">
    <section>
      <CameraFive
        theme="outline"
        size="24"
        class="absolute text-2xl top-8 left-1/2 -translate-x-1/2 
        text-slate-200 cursor-pointer"
        v-if="configStore.config.page == 'setting'"
        @click="configStore.config.page = 'camera'"
      />
      <SettingIcon
        class="absolute text-2xl top-8 left-1/2 -translate-x-1/2 
        text-slate-200 cursor-pointer z-50 hidden group-hover:block"
        v-if="configStore.config.page == 'camera'"
        @click="configStore.config.page = 'setting'"
      />
      <InnerShadowTopLeft
        class="absolute text-2xl bottom-8 left-1/2 -translate-x-1/2 
        text-slate-200 cursor-pointer z-50 hidden group-hover:block"
        v-if="configStore.config.page == 'camera'"
        @click="configStore.config.isRoundedFull = !configStore.config.isRoundedFull"
      />
    </section>
    <section>
      <Camera v-if="configStore.config.page == 'camera'" />
      <Setting v-else />
    </section>
  </main>
</template>

<style scoped lang="scss">
.i-icon {
  -webkit-app-region: no-drag;
}
</style>
