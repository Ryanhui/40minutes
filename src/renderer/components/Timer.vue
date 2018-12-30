<template>
  <div>{{ count.minutes }} 分钟 {{ count.seconds }} 秒</div>
</template>

<script>
// const {ipcRenderer} = require('electron')

export default {
  name: 'timer',
  computed: {
    count () {
      let time = this.$store.state.Counter.time / 60
      // return `${Math.floor(time)} 分钟 ${((time - Math.floor(time)) * 60).toFixed()} 秒`
      return {
        minutes: String(Math.floor(time)),
        seconds: ((time - Math.floor(time)) * 60).toFixed()
      }
    }
  },
  watch: {
    count: function (newValue, oldVale) {
      if (newValue.minutes === '0' && newValue.seconds === '0') {
        let timeNotification = new Notification(this.$store.state.Counter.title, {
          body: this.$store.state.Counter.body
        })
        timeNotification.onclick = () => {
          console.log('Notification clicked')
        }
      }
    }
  }
}
</script>
