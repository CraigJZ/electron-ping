const {app, Menu, Tray} = require('electron')
const notify = require('electron-main-notification')
var ping = require('ping');

let tray = null
app.on('ready', () => {
  tray = new Tray('tray_icon_black.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Change Icon Color to Purple', click(){tray.setImage('tray_icon_purple.png')}},
    {label: 'Change Icon Color to Black', click(){tray.setImage('tray_icon_black.png')}},
    {role: 'quit'}
  ])
  tray.setToolTip('Electron Ping')
  tray.setContextMenu(contextMenu)
})

app.on('ready', () => {
  notify('This is a notification!', { body: 'See? Really easy to use!', silent: true}, () => {
    console.log('The notification got clicked on!')
  })
})

var hosts = ['google.com'];

hosts.forEach(function (host) {
    ping.promise.probe(host)
        .then(function (res) {
            console.log(res);
        });
});
