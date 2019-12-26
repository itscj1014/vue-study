const path = require('path')

module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'

  },
  module:{
    rules:[
      { test: /\.less$/, 
        use: ['style-loader','css-loader','less-loader']
       },
    ]
  }


}