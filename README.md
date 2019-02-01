## vueframe

 

\> 一个基本的vue架构

 

## Build Setup

 

```bash
# install dependencies

npm install

# serve with hot reload at localhost:8080

npm run dev

# build for test with minification

npm run test-build

# build for production with minification

npm run build

# build for production and view the bundle analyzer report

npm run build --report
```

## 文档结构

```
│  .babelrc  //Babel配置，可以将ES6代码转为ES5代码

|  .editorconfig  //编辑器配置

│  .gitignore  //忽略git提交的文件，配置之后提交时将不会加载忽略的文件

│  .postcssrc.js  //postcss插件配置

│  index.html  //入口文件

│  package-lock.json  //明确package.json各依赖版本号，实际安装的结构及逻辑树结构。

│  package.json  //本地的安装包管理文件，npm install安装的依赖及版本可以在此文件中看到    

├─build  //项目本地运行及打包配置

│      build.js

│      check-versions.js

│      test-build.js

│      utils.js

│      vue-loader.conf.js

│      webpack.base.conf.js

│      webpack.dev.conf.js

│      webpack.prod.conf.js

│      webpack.test.conf.js

├─config  //基础环境配置

│      dev.env.js

│      index.js

│      prod.env.js

│      test.env.js

├─src  //项目源码

│  │  App.vue

│  │  main.js

│  ├─api  //全局接口统一配置文件

│  │      index.js    

│  ├─assets  //静态资源，如公共css，js，img等

│  │      no_auth.jpg     

│  ├─components  //公共组件

│         .gitkeep

│  |─directives  //自定义指令

│  |─http  //基于axios请求方式封装

│  ├─libs  //自己封装的公共函数

│  │      date.js //时间格式化

│  │      util.js  //工具函数

│  ├─router  //路由配置

│  │      index.js     

│  ├─store  //vuex配置，包括公共用方式和分模块方式

│  │  │  actions.js

│  │  │  getters.js

│  │  │  index.js

│  │  │  mutation-types.js

│  │  │  mutations.js

│  │  │  state.js

│  │  └─modules

│  │          test.js      

│  └─views  //各页面组件分类

│      ├─error

│      │  │  error.vue  

│      │  │  error.less

│      │  │  index.js       

│      ├─test

│      │  │  test.vue  

│      │  │  test.less

│      │  │  test.js  

└─static  //存放第三方静态资源

        .gitkeep
```

## package.json

```
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
    //打包测试代码

    "test-build": "node build/test-build.js" 

    //打包正式代码

    "build": "node build/build.js" 

  },

  //生产依赖，安装时加--save写入此处

  "dependencies": {

    "axios": "^0.17.0",

    "echarts": "^4.2.0-rc.2",

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

    //连接数组并合并对象,创建一个新对象

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
```

## config/dev.env.js

```
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
//如果生产环境对象中的键和开发环境对象中的键相同则采用开发环境中的键值，如果开发环境中没有对应的键值则集成生产环境中的键值
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"开发api"'
})
```

## config/test.env.js

```
module.exports = {
  NODE_ENV: '"production"',
  API_ROOT: '"测试api"'
}
```

## config/prod.env.js

```
//npm run build时使用的此环境
module.exports = {
  NODE_ENV: '"production"',
  API_ROOT: '"正式api"'
}
```

## config/index.js

```
const path = require('path')
module.exports = {
  // 开发环境下面的配置
  dev: {
    //子目录，一般存放css,js,image等文件
    assetsSubDirectory: 'static',
    //根目录
    assetsPublicPath: '/',
    //开发时跨域配置
    proxyTable: {},
    //域名地址
    host: 'localhost',
    //端口号
    port: 8089,
    //项目运行时自动在浏览器打开
    autoOpenBrowser: true,
    //浏览器错误提示
    errorOverlay: true,
    //跨平台错误提示
    notifyOnErrors: true,
    //使用文件系统(file system)获取文件改动的通知devServer.watchOptions
    poll: false,
    //增加调试，该属性为原始源代码（仅限行）不可在生产环境中使用
    devtool: 'cheap-module-eval-source-map',
    //缓存是否失效
    cacheBusting: true,
    //代码压缩后进行调bug定位将非常困难，于是引入sourcemap记录压缩前后的位置信息记录，当产生错误时直接定位到未压缩前的位置，将大大的方便我们调试
    cssSourceMap: true
  },
  // 生产环境下面的配置
  build: {
  	//index编译后生成的位置和名字，根据需要改变后缀，比如index.php
    index: path.resolve(__dirname, '../dist/index.html'),
    //编译后存放生产环境代码的位置
    assetsRoot: path.resolve(__dirname, '../dist'),
	//子目录，一般存放css,js,image等文件
    assetsSubDirectory: 'static',
    //发布的根目录，通常本地打包dist后打开文件会报错，此处修改为./。如果是上线的文件，可根据文件存放位置进行更改路径
    assetsPublicPath: '/',
    //是否生成后缀为.map的文件
    productionSourceMap: true,
    //打包代码同时创建一个新的sourcemap文件并在打包文件的末尾添加//#sourceURL注释行告诉JS引擎文件在哪
    devtool: '#source-map',
    //unit的gzip命令用来压缩文件，gzip模式下需要压缩的文件的扩展名有js和css
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
```

## build/build.js

```
//调用检查版本函数
require('./check-versions')()
//设置当前为生产环境
process.env.NODE_ENV = 'production'
//加载动画插件
const ora = require('ora')
//删除文件插件
const rm = require('rimraf')
//路径处理插件
const path = require('path')
//命令行输出彩色文字提示
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
//npm run build实现加载动画，优化用户体验
const spinner = ora('building for production...')
spinner.start()
//先删除dist文件再生成新文件，因为有时候会使用hash来命名，删除整个文件可避免冗余
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, 
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
```

## build/check-version.js

```
const chalk = require('chalk')
const semver = require('semver')
const packageConfig = require('../package.json')
const shell = require('shelljs')
//返回通过child_process模块的新建子进程，执行Unix系统命令后转成没有空格的字符串
function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    //使用semver格式化版本
    currentVersion: semver.clean(process.version),
    //获取package.json中设置的node版本
    versionRequirement: packageConfig.engines.node
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    / 自动调用npm --version命令，并且把参数返回给exec函数，从而获取纯净的版本号
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]
	
	//这个判断就是如果版本号不符合package.json文件中指定的版本号，就执行下面错误提示的代码
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }
  //输出警告信息
  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1)
  }
}
```

## build/utils.js

```
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
//导出文件的位置，根据环境判断开发环境和生产环境，为config文件中index.js文件中定义的build.assetsSubDirectory或dev.assetsSubDirectory
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  //path模块提供了一些用于处理文件路径的工具
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}
  //使用了css-loader和postcssLoader，通过options.usePostCSS属性来判断是否使用postcssLoader中压缩等方法 
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
		//Object.assign是es6语法的浅复制，后两者合并后复制完成赋值
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    if (options.extract) {
      //ExtractTextPlugin可提取出文本，代表首先使用上面处理的loaders，当未能正确引入时使用vue-style-loader
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      /返回vue-style-loader合并loaders的最终值
      return ['vue-style-loader'].concat(loaders)
    }
  }
  return {
	//需要css-loader 和 vue-style-loader
    css: generateLoaders(),
    //需要css-loader和postcssLoader  和 vue-style-loader
    postcss: generateLoaders(),
    //需要less-loader 和 vue-style-loader
    less: generateLoaders('less'),
    //需要sass-loader 和 vue-style-loader
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    //需要stylus-loader 和 vue-style-loader
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options) 
  //将各种css,less,sass等综合在一起得出结果输出output
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')
  //当报错时输出错误信息的标题，错误信息详情，副标题以及图标
  return (severity, errors) => {
    if (severity !== 'error') return
    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()
    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
```

## build/vue-loader.conf.js

```
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap
//处理项目中的css文件，生产环境和测试环境默认是打开sourceMap，而extract中的提取样式到单独文件只有在生产环境中才需要
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  
	// 在模版编译过程中，编译器可以将某些属性，如 src 路径，转换为require调用，以便目标资源可以由 webpack处理.
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
```

## build/webpack.base.conf.js

```
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
//拼接出绝对路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  //以/开始的路径作为根目录，在此之前的路径将会被丢弃
  context: path.resolve(__dirname, '../'),
  entry: {
    //配置入口，默认为单页面所以只有app一个入口，babel-polyfill兼容ie浏览器
    app: ['babel-polyfill','./src/main.js']
  },
  output: {
    //配置出口，默认是/dist作为目标文件夹的路径
    path: config.build.assetsRoot,
    //输出文件名
    filename: '[name].js',
    //输出公共目录static
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    //自动的扩展后缀，比如一个js文件，则引用时书写可不要写.js
    extensions: ['.js', '.vue', '.json'],
    //创建路径的别名，比如增加'components': resolve('src/components')等
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      //使用vue-loader将vue文件转化成js的模块
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      //js文件需要通过babel-loader进行编译成es5文件以及压缩等操作
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      //图片、音像、字体都使用url-loader进行处理，超过10000会编译成base64
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  //以下选项是Node.js全局变量或模块，这里主要是防止webpack注入一些Node.js的东西到vue中 
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
```

## build/webpack.dev.conf.js

```
'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//美化webpack的错误信息和日志的插件
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// 查看空闲端口位置，默认情况下搜索8000这个端口
const portfinder = require('portfinder')
//processs为node的一个全局对象获取当前程序的环境变量，即host及port
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
//通过webpack-merge实现webpack.dev.conf.js对wepack.base.config.js的继承
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    //规则是工具utils中处理出来的styleLoaders，生成了css，less,postcss等规则
    rules: utils.styleLoaders({
    	sourceMap: config.dev.cssSourceMap,
        usePostCSS: true 
    })
  },
  //增强调试友好提示
  devtool: config.dev.devtool,
  //此处的配置都是在config的index.js中设定好的
  devServer: {
    clientLogLevel: 'warning',
	//当使用 HTML5 History API时，任意的 404 响应都可能需要被替代为index.html
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    //热加载
    hot: true,
    contentBase: false,
    //压缩
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    //调试时自动打开浏览器
    open: config.dev.autoOpenBrowser,
    // warning 和 error 都要显示
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    //接口代理
    proxy: config.dev.proxyTable,
    //控制台是否禁止打印警告和错误,若用FriendlyErrorsPlugin 此处为 true
    quiet: true,
    // 文件系统检测改动
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    //模块热替换插件，修改模块时不需要刷新页面
    new webpack.HotModuleReplacementPlugin(),
    // 显示文件的正确名字
    new webpack.NamedModulesPlugin(),
	//当webpack编译错误的时候，显示终端打包进程，防止错误代码打包到文件中
    new webpack.NoEmitOnErrorsPlugin(),
	// 该插件可自动生成一个 html5 文件或使用模板文件将编译好的代码注入进去
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    //复制插件
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  //查找端口号
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      //端口被占用时就重新设置evn和devServer的端口
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      //友好地输出信息
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))
      resolve(devWebpackConfig)
    }
  })
})

```

## build/webpack.prod.conf.js

```
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const env = require('../config/prod.env')
//通过webpack-merge实现webpack.prod.conf.js对wepack.base.config.js的继承
const webpackConfig = merge(baseWebpackConfig, {
  module: {
    //规则是工具utils中处理出来的styleLoaders，生成了css，less,postcss等规则
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  // 是否开启 sourceMap
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    // 编译输出的静态资源根路径 创建dist文件夹
    path: config.build.assetsRoot,
    // 编译输出的文件名
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    //非入口文件的文件名，而又需要被打包出来的文件命名配置,如按需加载的模块
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // 配置全局环境为生产环境
    new webpack.DefinePlugin({
      'process.env': env
    }),
    //js压缩
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
		//警告：true保留警告，false不保留
          warnings: false
        }
      },
      // 生成sourceMap文件
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    //将js中引入的css分离的插件
    new ExtractTextPlugin({
      // 分离出的css文件名
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      allChunks: true,
    }),
	// 压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    // 将 index.html 作为入口，注入 html 代码后生成 index.html文件 引入css文件和js文件
    new HtmlWebpackPlugin({
      // 生成的html的文件名
      filename: config.build.index,
      // 依据的模板
      template: 'index.html',
      inject: true,
      //压缩配置
      minify: {
        //删除注释
        removeComments: true,
        //删除空格
        collapseWhitespace: true,
        //删除引号
        removeAttributeQuotes: true
      },
      // 必须通过CommonsChunkPlugin一致地处理多个chunks，按dependency的顺序引入
      chunksSortMode: 'dependency'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    //抽取公共的js模块到独立的文件vendor中
    new webpack.optimize.CommonsChunkPlugin({
      //文件名
      name: 'vendor',
      //声明公共的模块来自node_modules文件夹
      minChunks (module) {
      	// node_modules中的任何所需模块都提取到vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    /*
    上面虽然已经分离了第三方库,每次修改编译都会改变vendor的hash值，导致浏览器缓存失效。原因是vendor包含了webpack在打包过程中会产生一些运行时代码，运行时代码中实际上保存了打包后的文件名。当修改业务代码时,业务代码的js文件的hash值必然会改变。一旦改变必然会导致vendor变化。vendor变化会导致其hash值变化。
    */
	//将运行时代码提取到单独的manifest文件中，防止其影响vendor.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),
    //复制，比如打包完之后需要把打包的文件复制到dist里面
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})
// 配置文件开启了gzip压缩
if (config.build.productionGzip) {
  // 引入压缩文件的组件,该插件会对生成的文件进行压缩，生成一个.gz文件
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  // 向webpackconfig.plugins中加入下方的插件
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      // 目标文件名
      asset: '[path].gz[query]',
      // 使用gzip压缩
      algorithm: 'gzip',
      // 满足正则表达式的文件会被压缩
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      // 资源文件大于10kB时会被压缩
      threshold: 10240,
      // 最小压缩比达到0.8时才会被压缩
      minRatio: 0.8
    })
  )
}
// 开启包分析的情况时，给 webpack plugins添加 webpack-bundle-analyzer 插件
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
```

## 补充-关于移动端

```
移动端布局需要使用到rem+百分比，因此对于px自动转换为rem还是很有必要的
1.安装以下两个插件
npm install lib-flexible px2rem-loader --save
2.在main.js中引入lib-flexible
import 'lib-flexible/flexible'
3.在build下的utils.js中找到exports.cssLoaders方法，在该方法中添加以下代码。
  const px2remLoader = {
    loader: 'px2rem-loader',
    options: {
      baseDpr: 2, //dpr设置为2
      remUnit: 75, //1rem=75px
      remPrecision: 4 //转为rem后保留4位小数
    }
  }
  4.在build下的utils.js中找到exports.cssLoaders方法，在该方法中找到generateLoaders方法后添加该插件。
  const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoader] : [cssLoader, px2remLoader]
  5.直接写px，编译后会直接转化成rem
    在px后面添加/*no*/，不会转化px，会原样输出，一般border需用这个
    在px后面添加/*px*/,会根据dpr的不同，生成三套代码，一般字体需用这个
    示例代码：
	编译前（自己写的代码）
    .box {
        width: 150px;
        height: 64px; /*px*/
        font-size: 28px; /*px*/
        border: 1px solid #ddd; /*no*/
    }
    编译后（打包后的代码）
    .box {
        width: 2rem;
        border: 1px solid #ddd;
    }
    [data-dpr="1"] .box {
        height: 32px;
        font-size: 14px;
    }
    [data-dpr="2"] .box {
        height: 64px;
        font-size: 28px;
    }
    [data-dpr="3"] .box {
        height: 96px;
        font-size: 42px;
    }
```

