const math = require('./js/mathUtils')

console.log('hello less')
console.log(math.add(11,11))
console.log(math.mul(11,11))



//引入less
require('./css/special.less')


//为了查看less生效的代码，添加一个div
document.writeln('<div>Hello World 666</div>')