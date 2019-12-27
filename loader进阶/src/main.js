const math = require('./js/mathUtils')


console.log('Hello WebPack')
console.log(math.add(10,20))
console.log(math.mul(10,10))



require('./css/normal.css')

require('./css/special.less')

document.writeln('<h2>111,你好啊</h2>')


import Vue from 'vue'

var app = new Vue({
  el:"#app",
  data:{
    message:"Hello SCJ"
  }
})
