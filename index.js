const {app, Menu, Tray} = require('electron')

let tray = null
app.on('ready', () => {
  tray = new Tray('tray_icon_black.png')
  const contextMenu = Menu.buildFromTemplate([
    {role: 'quit'},
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})
