// File system path
const path = require('path')

// Menubar
const menubar = require('menubar')

// PugJS
require('electron-pug')({pretty: true})

// Menubar Constructor
const mb = menubar({
    width: 376,
    height: 576,
    resizable: false,
    title: 'gitmoji',
    index: 'file://' + path.join(__dirname, 'index.pug')
})

mb.on('ready', () => { })

global.menubar = mb
