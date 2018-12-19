<template>
  <div id="wrapper">
    <main>
      <div class="center">
        <div class="setting">
          <router-link to="/setting"><span class="dot"/></router-link>
        </div>
        <span class="title">
          Every 40 minutes
        </span>
      </div>
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  export default {
    name: 'landing-page',
    components: { SystemInformation }
  }
</script>

<style scoped>
  #wrapper {
    background:#f3db41;
    height: 100vh;
    padding: 16px;
    width: 100vw;
  }

  main {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .setting {
    position: fixed;
    top: 10px;
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
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #fff;
  }
</style>
