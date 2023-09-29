import { BrowserWindow, ipcMain } from 'electron'

export default (win: BrowserWindow) => {
  ipcMain.handle('drag', (_, options: { x: number; y: number }) => {
    const [x, y] = win.getPosition()
    win.setPosition(x + options.x, y + options.y)
  })
}
