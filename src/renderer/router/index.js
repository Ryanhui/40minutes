import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: require('@/components/HomePage').default
    },
    {
      path: '/setting',
      name: 'setting-page',
      component: require('@/components/SettingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
