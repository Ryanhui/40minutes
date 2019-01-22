<template>
  <div>
    {{ count.minutes }} 分钟 {{ count.seconds }} 秒
    <canvas width="200" height="200" v-insert-time="count"/>
  </div>
</template>

<script>

export default {
  name: 'timer',
  computed: {
    count () {
      let time = this.$store.state.Counter.time / 60
      return {
        time,
        minutes: Math.floor(time),
        seconds: Number(((time - Math.floor(time)) * 60).toFixed())
      }
    }
  },
  directives: {
    insertTime: function (canvasElement, binding) {
      let ctx = canvasElement.getContext('2d')
      ctx.clearRect(0, 0, 300, 150)
      ctx.fillStyle = 'black'
      console.log(binding)
      ctx.fillRect(50, 50, binding.value.time * 1000, binding.value.time * 1000)
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
