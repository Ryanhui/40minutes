// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let myNotification = new Notification('Title', {
  body: 'Lorem Ipsum Dolor Sit Amet'
})
console.log('there should be a notification')
myNotification.onclick = () => {
  console.log('Notification clicked')
}