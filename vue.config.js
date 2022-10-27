const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
    //引入path模块   用chainWebpack配置alias使用'@'别名
const path = require('path')

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: '/',

    devServer: {
        hot: true,
        proxy: {
            '^/api': {
                // target: 'http://152.136.185.210:5000',
                target: 'http://localhost:51315/',
                changeOrigin: true,
                // 注意路径重写并不会在真实请求内体现出来
                //如果本身的接口地址就有'/api'这种通用前缀，就可以把pathRewrite 删掉。注意这个方式只能在开发环境中使用。
                // pathRewrite: {
                //     '^/api': '',
                // },
            },
        },
    },
    // element-plus在vue3.0中按需自动导入
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
    // 用chainWebpack配置alias使用'@'别名
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src'))
            .set('views', '@/views')
    },
})