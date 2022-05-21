import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Pagenotfound from '@/components/Pagenotfound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
{
    path: '/Aboutus',
    name: 'Aboutus',
    component: () => import(/* webpackChunkName: "about" */ '../components/Aboutus.vue')
  },
  {
    path: '/Services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "about" */ '../components/Services.vue')
  },
  {
    path: '/Address',
    name: 'Address',
    component: () => import(/* webpackChunkName: "about" */ '../components/Address.vue')
  },
  {
    path: '*',
    name: 'Pagenotfound',
   component: Pagenotfound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
