'use strict'

import { app, BrowserWindow, ipcMain, screen, Notification } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow, mainScreen, dimensions

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 500,
    useContentSize: true,
    width: 300,
    frame: false,
    webPreferences: {
      backgroundThrottling: false
    }
  })

  mainScreen = screen.getPrimaryDisplay()
  dimensions = mainScreen.size

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  setInterval(() => {
    app.setAppUserModelId('com.example.yourapp')
    let nt = new Notification({
      title: 'test',
      body: 'body'
    })
    nt.show()
    console.log('Notification show.')
  }, 3000)
}

ipcMain.on('mini', (event, arg) => {
  mainWindow.minimize()
})
ipcMain.on('max', (event, arg) => {
  mainWindow.maximize()
})
ipcMain.on('close', (event, arg) => {
  mainWindow.close()
})
ipcMain.on('setSize', (event, arg) => {
  // set position to the middle of screen before set size. There is a center() function
  // obviously, we should setSize() first then make it center, but an ugly moving will appear.
  mainWindow.setPosition(dimensions.width / 2 - 150, dimensions.height / 2 - 250)
  mainWindow.setSize(300, 500)
})

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
