<template>
  <div>
    <h2>USER</h2>
    <p>USER</p>
    <div>
      <h2>{{$route.params}}</h2>
      <p>{{userId}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'User',
  computed:{
    userId(){
      return this.$route.params
    }
  }
}
</script>

<style>

</style>