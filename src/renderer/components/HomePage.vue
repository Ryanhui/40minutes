<template>
  <div id="wrapper">
    <ul class="shapes">
      <li class="shape1"></li>
      <li class="shape2"></li>
      <li class="shape3"></li>
    </ul>
    <main>
      <div class="center">
        <span class="title">
          Every 40 minutes
          <RenderShape title='1111'></RenderShape>
        </span>
      </div>
      <div class="setting">
        <router-link to="/setting"><span class="dot"/></router-link>
      </div>
    </main>
  </div>
</template>

<script>
  import RenderShape from './RenderShape.vue'
  export default {
    name: 'landing-page',
    components: {
      RenderShape
    }
  }
</script>

<style scoped>
  #wrapper {
    background:#f3db41;
    width: 100vw;
    height: 100vh;
    padding: 24px 16px 16px 16px;
  }

  main {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .center {
    z-index: 2;
  }

  .setting {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  
  .setting a {
    text-decoration: none;
    color: #fff;
  }

  .title {
    font-size: 18px;
    color: rgb(0, 41, 58);
  }

  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #fff;
  }

  .shapes {
    position: absolute;
    list-style-type: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .shape1 {
    background: red;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    left: 100px;
    top: 58px;
    position: relative;
  }
  .shape2 {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid greenyellow;
    position: relative;
    left: 34px;
    top: 50px;
  }
  .shape3 {
    background: orchid;
    width: 50px;
    height: 30px;
    position: relative;
    left: 134px;
    top: 150px;
  }
</style>
