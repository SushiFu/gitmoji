// Core requires
const electron = require('electron');
const Menubar = require('menubar');
const path = require('path')

// Menubar Init
const menubar = Menubar({
    width: 400,
    height: 576,
    index: 'file://' + path.join(__dirname, 'app.html'),
    icon: 'file://' + path.join(__dirname, 'menubar_icon.png'),
    alwaysOnTop: true,
    resizable: false,
    title: "gitmoji"
});
menubar.on('ready', () => {});
menubar.on('after-create-window', () => {
    menubar.window.openDevTools()
})