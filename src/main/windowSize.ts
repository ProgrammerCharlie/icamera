import { BrowserWindow, IpcMainEvent, ipcMain } from "electron"

ipcMain.on('setWinSize', (event: IpcMainEvent, options: {width: number, height: number, aspectRatio: number}) => {
  const win = BrowserWindow.fromWebContents(event.sender)!

  win.setBounds({
    width: options.width,
    height: options.height
  })
  win.setAspectRatio(options.aspectRatio)
})
