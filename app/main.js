// Core requires
const electron = require('electron');
const Menubar = require('menubar');
const path = require('path')

// Menubar Init
const menubar = Menubar({
    width: 400,
    height: 576,
    index: 'file://' + path.join(__dirname, 'app.html'),
    alwaysOnTop: true,
    icon: __dirname + '/menubar_icon@2x.png',
    resizable: false,
    title: "gitmoji"
});
menubar.on('ready', () => {});
menubar.on('after-create-window', () => {
    menubar.window.openDevTools()
})