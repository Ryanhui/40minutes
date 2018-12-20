<template>
  <div id="wrapper">
    <div class="home">
      <router-link to="/home"><span class="dot"/></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting-page'
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

