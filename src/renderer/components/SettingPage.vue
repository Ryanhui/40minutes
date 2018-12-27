<template>
  <div id="wrapper">
    <div>
      setTime<input v-model='initTime'>
    </div>
    <div class="home">
      <router-link to="/home"><span class="dot"/></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting-page',
  computed: {
    initTime: {
      get: function () {
        return this.$store.state.Counter.initTime / 60
      },
      set: function (initTime) {
        this.$store.dispatch('setTime', {
          initTime
        })
      }
    }
  }
}
</script>

<style scoped>
  #wrapper {
    background:#00ffdd;
    width: 100vw;
    height: 100vh;
    padding: 24px 16px 16px 16px;
  }
  .home {
    position: fixed;
    bottom: 20px;
    left: 20px;
  }
  .home a {
    text-decoration: none;
    color: #fff;
  }
  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #fff;
  }
</style>

