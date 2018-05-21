# vueframe

> 一个基本的vue架构

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
文档结构
│  .babelrc  //Babel配置，可以将ES6代码转为ES5代码
|  .editorconfig  //编辑器配置
│  .gitignore  //忽略git提交的文件，配置之后提交时将不会加载忽略的文件
│  .postcssrc.js  //postcss插件配置
│  index.html  //入口文件
│  package-lock.json  //明确package.json各依赖版本号，实际安装的结构及逻辑树结构。
│  package.json  //本地的安装包管理文件，npm install安装的依赖及版本可以在此文件中看到
│      
├─build  //项目本地运行及打包配置
│      build.js
│      check-versions.js
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│      
├─config  //基础环境配置
│      dev.env.js
│      index.js
│      prod.env.js
│      
├─src  //项目源码
│  │  App.vue
│  │  main.js
│  │  
│  ├─api  //请求方式封装
│  │      index.js
│  │      
│  ├─assets  //静态资源，如公共css，js，img等
│  │      no_auth.jpg
│  │      
│  ├─components  //公共组件
│         .gitkeep
│  ├─libs  //自己封装的公共函数
│  │      auth.js
│  │      
│  ├─router  //路由配置
│  │      index.js
│  │      
│  ├─store  //vuex配置，包括公共用方式和分模块方式
│  │  │  actions.js
│  │  │  getters.js
│  │  │  index.js
│  │  │  mutation-types.js
│  │  │  mutations.js
│  │  │  state.js
│  │  │  
│  │  └─modules
│  │          space.js
│  │          
│  └─views  //各页面组件分类
│      ├─error
│      │  │  Error.vue 
│      │  │  
│      │  └─styles
│      │          error.less
│      │          
│      ├─example
│      │  │  ExampleDetail.vue
│      │  │  ExampleList.vue
│      │  │  
│      │  └─styles
│      │          example-detail.less
│      │          example-list.less
│      │          
│      ├─layout
│      │  │  Layout.vue
│      │  │  
│      │  └─styles
│      │          layout.less
│      │          
│      └─login
│          │  Login.vue
│          │  
│          └─styles
│                  login.less
│                  
└─static  //存放第三方静态资源
        .gitkeep

package.json文件内容详解
{

  //项目名字

  "name": "vue-frame",

  //版本号

  "version": "1.0.0", 

  //项目描述

  "description": "A Vue.js project", 

  //项目作者

  "author": "klierbyck klierbyck@gmail.com", 

  //是否私有

  "private": true,

  "scripts": {

    //webpack-dev-server:启动了http服务器，实现实时编译

    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",  

    "start": "npm run dev",

    //打包代码

    "build": "node build/build.js" 

  },

  //生产依赖，安装时加--save写入此处

  "dependencies": {

    "axios": "^0.17.0",

    "vue": "^2.5.2",

    "vue-router": "^3.0.1",

    "vuex": "^3.0.1"

  },

  //开发依赖，安装时加--save-dev写入此处

  "devDependencies": {

    //解析CSS补充前缀，例如 display: flex会补充为display:-webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex。

    "autoprefixer": "^7.1.2",

    //es6解析的插件。用最新标准编写的 JavaScript 代码向下编译成可用的版本

    //babel的核心，把 js 代码分析成 ast ，方便各个插件分析语法进行相应的处理。

   "babel-core": "^6.22.1",

    //预制babel-template函数，提供给vue,jsx等使用 

    "babel-helper-vue-jsx-merge-props": "^2.0.3",

    //使项目运行使用Babel和webpack来传输js文件，使用babel-core提供的api进行转译 

    "babel-loader": "^7.1.1",

    //支持jsx 

    "babel-plugin-syntax-jsx": "^6.18.0",

    //避免编译输出中的重复，直接编译到build环境中 

    "babel-plugin-transform-runtime": "^6.22.0",

    //babel转译过程中使用到的插件，避免重复 

    "babel-plugin-transform-vue-jsx": "^3.5.0",

    //兼容ie9

    "babel-polyfill": "^6.26.0",

    //转为es5 

    "babel-preset-env": "^1.3.2",

      //ECMAScript第二阶段的规范  

    "babel-preset-stage-2": "^6.22.0",

    //用来在命令行输出不同颜色文字 

    "chalk": "^2.0.1",

     //拷贝资源和文件 

    "copy-webpack-plugin": "^4.0.1",

    //webpack先用css-loader加载器去解析后缀为css的文件，再使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里 

    "css-loader": "^0.28.11",

    //将一个以上的包里面的文本提取到单独文件中 

    "extract-text-webpack-plugin": "^3.0.0",

    //打包压缩文件 

    "file-loader": "^1.1.4",

    //识别某些类别的Webpack错误，以提供更好的开发经验 

    "friendly-errors-webpack-plugin": "^1.6.1",

    //简化了HTML文件的创建，引入了外部资源，创建html的入口文件，可通过此项进行多页面的配置 

    "html-webpack-plugin": "^2.30.1",

   //支持使用node发送跨平台的本地通知 

    "less": "^3.0.4",

    "less-loader": "^4.1.0",

    //支持使用node发送跨平台的本地通知 

    "node-notifier": "^5.1.2",

    //压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件) 

    "optimize-css-assets-webpack-plugin": "^3.2.0",

    //加载（loading）的插件 

    "ora": "^1.2.0",

    //查看进程端口 

    "portfinder": "^1.0.13",

    //使用import导入文件、模块

    "postcss-import": "^11.0.0",

    //css兼容插件

    "postcss-loader": "^2.0.8",

    //URL上重新定位、内联或复制 

    "postcss-url": "^7.2.1",

    //节点的UNIX命令RM—RF,强制删除文件或者目录的命令 

    "rimraf": "^2.6.0",

    //用来对特定的版本号做判断

    "semver": "^5.3.0",

    //使用它来消除shell脚本在UNIX上的依赖性，同时仍然保留其熟悉和强大的命令，即可执行Unix系统命令 

    "shelljs": "^0.7.6",

     //压缩js文件 

    "uglifyjs-webpack-plugin": "^1.1.1",

    //压缩文件，可将图片转化为base64 

    "url-loader": "^0.5.8",

    //VUE单文件组件的Webpack加载器，用来处理.vue文件

    "vue-loader": "^13.3.0",

    //类似于样式加载程序，您可以在CSS加载器之后将其链接，以将CSS动态地注入到文档中作为样式标签 

    "vue-style-loader": "^3.0.1",

    //这个包可以用来预编译VUE模板到渲染函数，以避免运行时编译开销和CSP限制 

    "vue-template-compiler": "^2.5.2",

    //webpack插件

    "webpack": "^3.6.0",

    //可视化webpack输出文件的大小 

    "webpack-bundle-analyzer": "^2.9.0",

    //提供一个实时重载的开发服务器 

    "webpack-dev-server": "^2.9.1",

    //它将数组或对象合并并创建一个新对象

    "webpack-merge": "^4.1.0"

  },

  //node和npm最低版本

  "engines": {

    "node": ">= 6.0.0",

    "npm": ">= 3.0.0"

  },

  //支持的浏览器版本限制

  "browserslist": [

    "> 1%",

    "last 2 versions",

    "not ie <= 8"

  ]

}
