const {app, Menu, Tray} = require('electron')

let tray = null
app.on('ready', () => {
  tray = new Tray('tray_icon_black.png')
  const contextMenu = Menu.buildFromTemplate([
    {role: 'quit'},
    {label: 'click', click(){console.log('clicked the button')}},
    {label: 'changecolor', click(){tray.setImage('tray_icon_purple.png')}}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})
