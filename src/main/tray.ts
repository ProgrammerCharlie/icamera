import { Tray } from 'electron'
import contextmenu from './menu/contextmenu'
import path from 'path'

const createTray = () => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/icameraTemplate@2x.png'
        : '../../resources/icamera.png'
    )
  )

  tray.setToolTip('ICamera')
  tray.setContextMenu(contextmenu)
}

export default createTray
