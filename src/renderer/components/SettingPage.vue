<template>
  <div id="wrapper">
    <div>
      <div class="item">
        <p class="name">{{this.language === 'chinese' ? '设置时间' : 'set time'}}</p>
        <div class="inputWrapper" style="display: flex">
          <input v-model='initTime' class="input" style="flex: 10">
          <span style="fontSize: 12px; flex: 2; lineHeight: 30px;textAlign: center">{{this.language === 'chinese' ? '分钟' : 'mins'}}</span>
        </div>
      </div>
      <div class="item">
        <p class="name">{{this.language === 'chinese' ? '标题' : 'title'}}</p>
        <div class="inputWrapper">
          <input v-model="title" class="input">
        </div>
      </div>
      <div class="item">
        <p class="name">{{this.language === 'chinese' ? '内容' : 'content'}}</p>
        <div class="inputWrapper">
          <input v-model="body" class="input">
        </div>
      </div>
    </div>
    <div class="language">
      <span v-on:click="setLanauage('chinese')">中文</span> | <span v-on:click="setLanauage('english')">Eng</span>
    </div>
    <div class="home">
      <router-link to="/home"><span class="dot"/></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting-page',
  data: function () {
    return {
      language: this.$store.state.Counter.language
    }
  },
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
    },
    title: {
      get: function () {
        return this.$store.state.Counter.title
      },
      set: function (title) {
        this.$store.dispatch('setTitle', {
          title
        })
      }
    },
    body: {
      get: function () {
        return this.$store.state.Counter.body
      },
      set: function (body) {
        this.$store.dispatch('setBody', {
          body
        })
      }
    }
  },
  methods: {
    setLanauage: function (value) {
      this.$store.dispatch('setLangauage', value)
      this.language = value
    }
  }
}
</script>

<style scoped>
  #wrapper {
    background:rgb(44, 189, 233);
    width: 100vw;
    height: 100vh;
    padding: 24px 16px 16px 16px;
    color: #383838;
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
  .item {
    margin-top: 14px;
  }
  .inputWrapper {
    height: 30px;
    width: 100%;
    margin-top: 4px;
    border: none;
    border-radius: 3px;
    background: #fff;
  }
  .name {
    padding-left: 4px;
    font-size: 14px;
  }
  .input {
    width: 100%;
    height: 100%;
    padding: 5px;
    font-size: 12px;
    border: none;
    border-radius: 3px;
    color: #383838;
  }
  .language {
    font-size: 14px;
    text-align: center;
    margin-top: 36px;
    cursor: pointer;
  }
</style>

