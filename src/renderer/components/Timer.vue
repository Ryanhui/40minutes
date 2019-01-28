<template>
  <div>
    <!-- {{ count.minutes }} 分钟 {{ count.seconds }} 秒 -->
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
        time: this.$store.state.Counter.time,
        minutes: Math.floor(time),
        seconds: Number(((time - Math.floor(time)) * 60).toFixed()),
        initTime: this.$store.state.Counter.initTime
      }
    }
  },
  directives: {
    insertTime: function (canvasElement, binding) {
      const progress = binding.value.time / binding.value.initTime
      let ctx = canvasElement.getContext('2d')
      ctx.strokeStyle = 'rgb(205,19,25)'
      ctx.lineCap = 'round'
      ctx.lineWidth = 8
      if (binding.value.time !== 0) {
        // draw circle of time
        ctx.clearRect(0, 0, 200, 200)
        ctx.beginPath()
        ctx.arc(100, 100, 70, 0 - Math.PI / 2, Math.PI * 2 * progress - Math.PI / 2, false)
        ctx.stroke()
      } else {
        let lineStartPoint = [100, 30]
        let lineCurrentPoint = [100, 30]
        let lineEndPoint = [100, 170]
        let lineMoveSpeed = 8

        let radiusX = 10
        let spinSpeed = 7
        let currentRadiusX = 70
        let circleRadius = 70

        // draw a line from top to bottom when the timer is done
        let drawLine = function () {
          let ctx = canvasElement.getContext('2d')
          ctx.clearRect(0, 0, 200, 200)
          ctx.beginPath()
          ctx.moveTo(lineStartPoint[0], lineStartPoint[1])
          ctx.lineTo(lineCurrentPoint[0], lineCurrentPoint[1])
          ctx.stroke()
          lineCurrentPoint[1] += lineMoveSpeed
          if (lineCurrentPoint[1] <= lineEndPoint[1]) {
            window.requestAnimationFrame(drawLine)
          } else {
            drawCricle()
          }
        }
        // draw a new circle after then line has showed
        let drawCricle = function () {
          let ctx = canvasElement.getContext('2d')
          currentRadiusX += 0
          if (radiusX >= currentRadiusX || radiusX <= 0) {
            spinSpeed = -spinSpeed
          }
          radiusX = radiusX + spinSpeed
          if (radiusX <= 0) radiusX = 0
          ctx.clearRect(0, 0, 200, 200)
          ctx.strokeStyle = 'rgb(205,19,25)'
          ctx.lineCap = 'round'
          ctx.lineWidth = 8
          ctx.beginPath()
          ctx.ellipse(100, 100, radiusX, circleRadius, 0, 0, 2 * Math.PI)
          ctx.stroke()
          if (currentRadiusX <= circleRadius && radiusX !== circleRadius) {
            window.requestAnimationFrame(drawCricle)
          }
        }
        window.setTimeout(drawLine, 200)
      }
    }
  },
  watch: {
    count: function (newValue, oldVale) {
      if (newValue.minutes === 0 && newValue.seconds === 0) {
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
