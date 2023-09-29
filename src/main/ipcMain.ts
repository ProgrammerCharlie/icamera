import { ipcMain } from 'electron'
// @ts-ignore
import ContextMenu from './menu/contextmenu'

// 右键菜单
ipcMain.on('contextmenu', () => {
  ContextMenu.popup()
})