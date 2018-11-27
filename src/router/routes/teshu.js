// 错误相关
const cuowu = [{
    path: '/404',
    name: '404',
    meta: {
        title: "个人中心"
    },
    components: {
        default: resolve => require(['../../components/teshu/404.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/nowifi',
    name: 'nowifi',
    meta: {
        title: "个人中心"
    },
    components: {
        default: resolve => require(['../../components/teshu/noWifi.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},
{
    path: '/nodata',
    name: 'nodata',
    meta: {
        title: "个人中心"
    },
    components: {
        default: resolve => require(['../../components/teshu/noData.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/help',
    name: 'help',
    meta: {
        title: "用户帮助"
    },
    components: {
        default: resolve => require(['../../components/teshu/help.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/binding',
    name: 'binding',
    meta: {
        title: "绑定手机号"
    },
    components: {
        default: resolve => require(['../../components/teshu/binding.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/retrieve_password',
    name: 'retrieve_password',
    meta: {
        title: "忘记密码"
    },
    components: {
        default: resolve => require(['../../components/teshu/retrieve_password.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/set_password',
    name: 'set_password',
    meta: {
        title: "修改密码"
    },
    components: {
        default: resolve => require(['../../components/teshu/set_password.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},
{
    path: '/about_we',
    name: 'about_we',
    meta: {
        title: "关于我们"
    },
    components: {
        default: resolve => require(['../../components/teshu/about_we.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/feedback',
    name: 'feedback',
    meta: {
        title: "意见反馈"
    },
    components: {
        default: resolve => require(['../../components/teshu/feedback.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
}
]
export default cuowu;