<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <h2>网站标题</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
      <router-view></router-view>
    <h2>网站底部</h2>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
