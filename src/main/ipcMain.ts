import { ipcMain } from 'electron'
import ContextMenu from './menu/contextmenu'

// 右键菜单
ipcMain.on('contextmenu', () => {
  ContextMenu.popup()
})
