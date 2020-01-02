import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Court from '@/components/Court'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/court'
    },
    {
      path: '/court',
      name: 'Court',
      component: Court
    }
  ]
})
