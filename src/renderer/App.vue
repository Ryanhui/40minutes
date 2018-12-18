<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'vue-electron'
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
    background:
      radial-gradient(
        ellipse at top left,
        rgba(229, 229, 229,0.9) 40%,
        rgba(255, 255, 255,1)100%
      );
  }
.slide-fade-enter-active {
  animation: bounce-in .3s;
}
/* .slide-fade-leave-active {
  animation: bounce-out .5s;
} */
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
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
