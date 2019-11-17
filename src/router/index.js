import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Retrieve from '../views/Retrieve.vue'
import Upload from '../views/Upload.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/retrieve',
    name: 'Retrieve',
    component: Retrieve
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
