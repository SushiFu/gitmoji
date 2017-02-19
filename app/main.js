// Core requires
const path = require('path')
const menubar = require('menubar')

// Menubar Init
const Menubar = menubar({
    width: 400,
    height: 576,
    index: 'file://' + path.join(__dirname, 'app.html'),
    icon: 'file://' + path.join(__dirname, '/menubar_icon@2x.png'),
    resizable: false,
    title: 'gitmoji'
})
Menubar.on('ready', () => {})
