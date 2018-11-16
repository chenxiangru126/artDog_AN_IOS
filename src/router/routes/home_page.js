//首页
const home_page = [{
    path: '/home_page',
    name: 'home_page',
    meta: {
        title: "艺狗往"
    },
    components: {
        default: resolve => require(['../../components/home_page/home_page.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
    
},
    {
        path: '/ceshi',
        name: 'ceshi',
        meta: {
            title: "测试"
        },
        components: {
            default: resolve => require(['../../components/home_page/testKe.vue'], resolve),
            headers: resolve => require(['../../components/common/header.vue'], resolve)
        },
    },
    {
        path: '/my_news',
        name: 'my_news',
        meta: {
            title: "我的消息"
        },
        components: {
            default: resolve => require(['../../components/home_page/my_news.vue'], resolve),
            headers: resolve => require(['../../components/common/header.vue'], resolve)
        },
    },
    {
        path: '/notification_message',
        name: 'notification_message',
        meta: {
            title: "通知消息"
        },
        components: {
            default: resolve => require(['../../components/home_page/notification_message.vue'], resolve),
            headers: resolve => require(['../../components/common/header.vue'], resolve)
        },
    },
    {
        path: '/search_hot',
        name: 'search_hot',
        meta: {
            title: ""
        },
        components: {
            default: resolve => require(['../../components/home_page/search_hot.vue'], resolve),
            headers: resolve => require(['../../components/common/header.vue'], resolve)
        },
    }
]
export default home_page;