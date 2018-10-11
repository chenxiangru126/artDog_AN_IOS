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
]
export default home_page;