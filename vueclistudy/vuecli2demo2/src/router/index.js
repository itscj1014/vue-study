import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home.vue'
import About from '../components/about.vue'


// 注入路由
Vue.use(VueRouter)

//定义路由
const routers =[
  {
    path:'/home',
    component:Home
  },
  {
    path:'/about',
    component:About
  }
]

//创建路由对象
const router = new VueRouter({
  routers
})

//导出router对象
export default router

