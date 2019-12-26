### 1.webpack定义

静态模块打包工具

- 模块

  帮我们进行模块化开发，并且处理模块之间的依赖关系

- 打包

  将多个资源模块进行打包合并成一个或者多个包bundle,并且在打包过程中，可以对资源进行处理，例如将ES6转成ES5语法

### 2.webpack安装

前提：安装node.js环境

- 全局安装

  ~~~shell
  npm install webpack@3.6.0
  ~~~

- 局部安装

  ~~~shell
  cd 到对应目录下
  npm install webpack@3.6.0 --save-dev
  ~~~

- 区别

  - 在终端直接执行webpack命令，使用的是全局安装的webpack

  - 当在package.json中定义了scripts时，其中包含了webpack命令，那么使用的就是局部webpack命令



### 3.webpack起步

~~~shell
webpack .\src\main.js .\dist\bundle.js
~~~



### 4.webpack配置



#### 4.1入口和出口

如果每次使用webpack命令都需要写上入口和出口参数，就会非常麻烦，下面考虑将两个参数卸载配置中，在运行时，直接读取

