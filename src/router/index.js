import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from "@/views/detail/Detail";

Vue.use(VueRouter)

const home = () => import('@/views/home/Home')
const category = () => import('@/views/category/Category')
const cart = () => import('@/views/cart/Cart')
const profile = () => import('@/views/profile/Profile')
const detail = () => import('@/views/detail/Detail')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail',
    component: detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
