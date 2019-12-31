<template>
  <div>
    <button @click="increment">+1</button>{{count}}
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  name:'Count',
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    }
  }

}
</script>

<style>

</style>