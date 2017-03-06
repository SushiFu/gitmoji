// Core requires
const path = require('path')
const menubar = require('menubar')

// PugJS
require('electron-pug')({pretty: true})

// Menubar Init
const Menubar = menubar({
    width: 376,
    height: 576,
    resizable: false,
    title: 'gitmoji',
    index: 'file://' + path.join(__dirname, 'index.pug')
})
Menubar.on('ready', () => {})
