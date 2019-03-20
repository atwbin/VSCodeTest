const CompressionPlugin = require("compression-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


/*
_externals 、cdn 、 chainWebpack 配置，需要搭配index.html 页面中输出（现已注释）
*/
const _externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'axios': 'axios'
}

const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  build: {
    css: [],
    js: [
      'https://cdn.bootcss.com/vue/2.5.17/vue.min.js',
      'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
      'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
    ]
  }
}

module.exports = {

  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: '/dist/',

  // where to output built files
  // 打包后的输出目录
  //outputDir: 'dist',
  assetsDir: 'static',

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // webpack 配置~
  //chainWebpack: () => {},
  chainWebpack: config => {
    // 去除页面prefetch
    // config.plugins.delete('prefetch');
    // 修复HMR
    config.resolve.symlinks(true);
    // 
    config.externals = _externals;
    config.plugin('html').tap(args => {
        if (process.env.NODE_ENV === 'production') {
          args[0].cdn = cdn.build
        }
        // if (process.env.NODE_ENV === 'development') {
        //   args[0].cdn = cdn.dev
        // }
        return args
      })
  },
  //configureWebpack: () => {},
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      //压缩插件
      config.plugins.push(new CompressionPlugin({
        test: /\.js$|\.html$|.\css/, //匹配文件名
        threshold: 10240, //对超过10k的数据压缩
        deleteOriginalAssets: false //不删除源文件
      }));

      // js 压缩自定义配置（去console插件）
      config.plugins.push(new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      }));
    } else {
      // 为开发环境修改配置...
    }

  },

  // generate sourceMap for production build?
  // 生产环境的sourceMap 要不要？
  productionSourceMap: false,

  // configure webpack-dev-server behavior
  // Webpack dev server
  devServer: {
    open: process.platform === 'darwin',
    host: 'pj.njfae.cn',
    port: 8092,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: {
      '/common-info': {
        target: 'http://pp-m.njfae.com.cn/',
      },
      '/cm/': {
        target: 'http://pp-m.njfae.com.cn/',
      },
      '/site/': {
        target: 'http://pp-m.njfae.com.cn/',
      },
      '/user/': {
        target: 'http://pp-m.njfae.com.cn/',
      },
      '/': {
        target: 'http://pj.njfae.cn/',
        ws: false,
      },
    }
  }

}