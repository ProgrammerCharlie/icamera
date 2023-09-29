import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      contextmenu: () => void,
      drag: (options: {x: number, y: number}) => void
    }
  }
}
