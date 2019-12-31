import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载的方式
const Home  = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const ProFile = () => import('../components/Profile')
const Count = () => import('../components/Count')

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'',
      redirect:'/home',
    },
   {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'',
        redirect:'news'
      },
      // children中的path中不能写成 /news，必须写成news
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
   },
   {
     path:'/about',
     component:About,
     meta:{
       title:'关于'
     }
   },
   {
     path:'/user/:userid',
     component:User,
     meta:{
       title:"用户"
     }
   },
   {
     path:'/profile/:profileid',
     component:ProFile,
     meta:{
       title:'档案'
     }
   },
   {
     path:'/count',
     component:Count,
     meta:{
       title:'数据'
     }
   }
  ],
  mode:'history',
  linkActiveClass:'active'
},
)

router.beforeEach((to,from,next)=>{
  console.log(to.meta.title)
  const title = to.meta.title
  if(title===null || title=== undefined){
    window.document.title = '首页'
  }else{
    window.document.title = to.meta.title
  }
  //window.document.title = to.meta.title
  
  next()
})

export default router
