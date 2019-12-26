const math = require('./js/mathUtils')

console.log('Hello Loader')
console.log(math.add(1,1))
console.log(math.mul(10,10))



// 在入口文件中引用一次css文件
require('./css/normal.css')
