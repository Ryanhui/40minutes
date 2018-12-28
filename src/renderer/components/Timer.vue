<template>
  <div>{{ count }}</div>
</template>

<script>
export default {
  name: 'timer',
  computed: {
    count () {
      let time = this.$store.state.Counter.time / 60
      return `${Math.floor(time)} 分钟 ${((time - Math.floor(time)) * 60).toFixed()} 秒`
    }
  }
}
</script>
