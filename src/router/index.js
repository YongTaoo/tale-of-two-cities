import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/chapterList.vue')
  },
  {
    path: '/about/:chapter',
    name: 'text',
    props: true,
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import( '../views/createView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
