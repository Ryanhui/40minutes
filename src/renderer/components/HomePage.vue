<template>
  <div id="wrapper">
    <div class="animateBackground">
      <AnimateBackground />
    </div>
    <main class="main">
      <div class="center">
        <span class="title">
          <RenderShape title='renderShapes'></RenderShape>
          <Timer></Timer>
        </span>
      </div>
      <div class="setting">
        <router-link to="/setting"><span class="dot"/></router-link>
      </div>
      <button v-on:click="stopCount" class="pause">
        <svgicon name="pause" width="24" height="24" color="#fff" class="pauseIcon"></svgicon>
      </button>
      <button v-on:click="startCount" class="start">
        <svgicon name="play" width="24" height="24" color="#fff"></svgicon>
      </button>
      <button v-on:click="reset" class="refresh">
        <svgicon name="refresh" width="24" height="24" color="#fff" class="refreshIcon"></svgicon>
      </button>
    </main>
  </div>
</template>

<script>
  import RenderShape from './RenderShape.vue'
  import Timer from './Timer.vue'
  import AnimateBackground from './AnimateBackground.vue'
  import '../icon'

  let clockTimer
  export default {
    name: 'home-page',
    components: {
      RenderShape,
      Timer,
      AnimateBackground
    },
    methods: {
      startCount () {
        window.clearInterval(clockTimer)
        clockTimer = window.setInterval(() => {
          if (this.$store.state.Counter.time <= 0) {
            window.clearInterval(clockTimer)
            return
          }
          this.$store.dispatch('startCount')
        }, 1000)
      },
      stopCount () {
        window.clearInterval(clockTimer)
      },
      reset () {
        this.$store.dispatch('reset')
      }
    }
  }
</script>

<style scoped>
  #wrapper {
    background: transparent;
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
    margin-top: -30vh;
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

  .start,
  .pause,
  .refresh {
    position: fixed;
    width: 50px;
    height: 50px;
    border: none;
    cursor: pointer;
  }

  /* .pause {
    right: 0;
    top: 55vh;
    height: 80px;
    width: 50px;
    border-bottom-left-radius: 80px;
    border-top-left-radius: 80px;
    background: #FF8811;
  } */
  .pause {
    right: 0;
    top: 55vh;
    background: inherit;
    width: 0; 
    height: 0; 
    border-top: 45px solid transparent;
    border-bottom: 45px solid transparent;
    border-right: 70px solid #FF8811;
  }
  .start{
    bottom: 0;
    right: 50vw;
    background: #9DD9D2;
  }
  .refresh {
    left: 0;
    top: 65vh;
    background: inherit;
    width: 0; 
    height: 0; 
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
    border-left: 50px solid #59CD90;
  }

  .pauseIcon {
    margin-top: -10px;
    margin-left: 35px;
  }
  .refreshIcon {
    position: relative;
    top: -12px;
    left: -45px;
  }

  .main{
    z-index: 100;
  }
  .animateBackground {
    position: absolute;
    top: 0;
    left: 0;
    background: #f3db41;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    z-index: -10;
  }
</style>
