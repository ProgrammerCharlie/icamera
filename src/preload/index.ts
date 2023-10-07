import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  contextmenu: () => {
    electronAPI.ipcRenderer.send('contextmenu')
  },
  drag: (options: {x: number, y: number}) => {
    // console.log(options);
    electronAPI.ipcRenderer.invoke('drag', options)
  },
  setWinSize: (options: {width: number, height: number, aspectRatio: number}) => {
    electronAPI.ipcRenderer.send("setWinSize", options)
  }
}

if (process.contextIsolated) {
  try {
    // ipcRenderer + webFrame + process
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
