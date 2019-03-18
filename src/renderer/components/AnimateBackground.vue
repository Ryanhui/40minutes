<template>
    <div class="canvasWrapper">
      <canvas class="canvas" v-insert-animate="animateBackground"/>
    </div>
</template>

<script>
export default {
  name: 'animateBackground',
  computed: {
    animateBackground () {
      return {
        time: this.$store.state.Counter.time
      }
    }
  },
  directives: {
    insertAnimate: function (canvasElement, binding) {
      let colors = ['#FFCCBC', '#9CCC65', '#009688', '#1E88E5', '#FFA000', '#F4511E', '4527A0', '#AD1457', '#e57373', '#1E88E5']

      // get window width and height
      let ctxWidth = window.innerWidth
      let ctxHeight = window.innerHeight

      canvasElement.width = ctxWidth
      canvasElement.height = ctxHeight

      function getRandomNumber (start, end) {
        return Math.floor(Math.random() * end + start)
      }

      function getRandomPosition (width, height) {
        return {
          x: getRandomNumber(0, width),
          y: getRandomNumber(0, height)
        }
      }

      let ctx = canvasElement.getContext('2d')
      ctx.clearRect(0, 0, ctxWidth, ctxHeight)

      for (let i = 0; i < 50; i++) {
        let position = getRandomPosition(ctxWidth, ctxHeight)
        ctx.beginPath()
        ctx.fillStyle = colors[getRandomNumber(0, colors.length - 1)]
        ctx.moveTo(position.x, position.y)
        ctx.lineTo(position.x - 5, position.y + 10)
        ctx.lineTo(position.x + 5, position.y + 10)
        ctx.fill()
      }
    }
  }
}
</script>

<style scaffold>
  .canvasWrapper {
    width: 100%;
    height: 100%;
  }
</style>
