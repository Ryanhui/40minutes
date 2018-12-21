<template>
  <div>{{ count }}</div>
</template>

<script>
export default {
  name: 'timer',
  computed: {
    count () {
      return this.$store.state.Counter.main
    }
  }
}
</script>
