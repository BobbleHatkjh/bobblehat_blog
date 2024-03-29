export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: '绒球帽技术分享',
        htmlAttrs: {
            lang: 'zh-CN'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },


    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~assets/css/iconfont',
        '~assets/css/animate'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { // md 渲染
            src: '~plugins/mavon-editor', ssr: false
        }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // '@nuxtjs/markdownit'
    ],

    // markdownit: {
    //     preset: 'default',
    //     linkify: true,
    //     breaks: true,
    //     typographer: true,
    //     use: [
    //         'markdown-it-div',
    //         'markdown-it-attrs'
    //     ]
    // },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
