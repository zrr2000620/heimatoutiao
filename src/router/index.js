import Vue from 'vue'

import VueRouter from 'vue-router'

import Login from '@/views/login.vue'

var router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    }
  ]
})

Vue.use(VueRouter)

export default router
