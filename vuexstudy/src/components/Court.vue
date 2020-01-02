<template>
  <div>
    <h2>{{court}}</h2>
    <button @click="incrementClick">+1</button>
    <button @click="derementClick">-1</button>
  </div>
</template>

<script>
export default {
  name:'Court',
  data(){
    return {
      court:0
    }
  }

}
</script>

<style>

</style>