<template>
  <div id="app">
    <h2>最上面</h2>
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->

    <router-link to="/home" >首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userid">用户</router-link>
    <!-- 传递参数方式一：router-link -->
    <!-- <router-link 
      :to="{
        path:'/profile/'+profileid,
        query:{name:'scj',age:18}
        }">档案</router-link> -->
        <button @click="toProfile">档案</button>
        <router-link to="/count">数据</router-link>
        
    
    

    <!-- <button @click="linkToHome">首页</button>
    <button @click="linkToAbout">关于</button> -->
    <router-view/>
    <h2>最下面</h2>
    <h2>{{userid}}</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userid:'12345',
      profileid:'5656'
    }
  },
  methods:{
    linkToHome(){
      this.$router.push('/home')
    },
    linkToAbout(){
      this.$router.push('/about')
    },
    // 传递参数方式二：js代码
    toProfile(){
      this.$router.push({
        path:'/profile/'+this.profileid,
        query:{
          name:'htt',
          height:1.66
        }
      })
    }
  }
}
</script>

<style >
  .active{
    background-color:aquamarine
  }
</style>

