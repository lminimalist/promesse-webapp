import Vue from 'vue'
import Router from 'vue-router'
import Returns from '@/views/Returns.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/returns',
      name: 'returns',
      component: Returns
    }
  ]
})
