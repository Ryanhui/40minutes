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
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }
  .home {
    position: fixed;
    top: 10px;
    left: 20px;
  }
  .home a {
    text-decoration: none;
    color: #fff;
  }
  .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #fff;
  }
</style>

