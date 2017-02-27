// Core requires
const path = require('path')
const menubar = require('menubar')

// Menubar Init
const Menubar = menubar({
    width: 400,
    height: 576,
    resizable: false,
    title: 'gitmoji',
    index: 'file://' + path.join(__dirname, 'app.html')
})
Menubar.on('ready', () => {})
