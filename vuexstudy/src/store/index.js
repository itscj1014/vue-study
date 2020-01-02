import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.store({
  state:{
    court:0
  },
  mutations:{
    increment(court){
      court++
    },
    decrement(court){
      court--
    }
  }
})


export default store
