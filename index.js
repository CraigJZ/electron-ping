const {app, Menu, Tray} = require('electron')
const notify = require('electron-main-notification')

let tray = null
app.on('ready', () => {
  tray = new Tray('tray_icon_black.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'click', click(){console.log('clicked the button')}},
    {label: 'changecolor', click(){tray.setImage('tray_icon_purple.png')}},
    {role: 'quit'}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})


app.on('ready', () => {
  notify('This is a notification!', { body: 'See? Really easy to use!' }, () => {
    console.log('The notification got clicked on!')
  })
})
