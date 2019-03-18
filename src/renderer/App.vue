<template>
  <div id="app">
    <div class="title-bar"></div>
    <div class="close" @click="close"></div>
    <div class="minimzie" @click="mini"></div>
    <div class="maximzie" @click="resize"></div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  const {ipcRenderer} = require('electron')

  export default {
    name: 'vue-electron',
    data: function () {
      return {
        maximize: false
      }
    },
    methods: {
      close () {
        ipcRenderer.send('close')
      },
      mini () {
        ipcRenderer.send('mini')
      },
      resize () {
        if (this.maximize) {
          ipcRenderer.send('setSize')
          this.maximize = false
        } else {
          ipcRenderer.send('max')
          this.maximize = true
        }
      }
    }
  }
</script>

<style>
  /* CSS */
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  body { font-family: 'Source Sans Pro', sans-serif; }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #app {
    background: transparent;
  }

  .title-bar {
    position: fixed;
    top: 0;
    height: 24px;
    width: 100%;
    -webkit-app-region: drag;
  }

  .slide-fade-enter-active {
    animation: bounce-in .3s;
  }

  .close,
  .minimzie,
  .maximzie {
    position: absolute;
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    -webkit-app-region: no-drag;
  }

  .close {
    top: 10px;
    left: 10px;
    background: #ff5e4c;
  }

  .minimzie {
    top: 10px;
    left: 30px;
    background: #fcbb00;
  }

  .maximzie {
    top: 10px;
    left: 50px;
    background: #00ce26;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
