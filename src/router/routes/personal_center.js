const personal_center= [{
    path: '/personal_center',
    name: 'personal_center',
    meta: {
        title: "个人中心"
    },
    components: {
        default:resolve => require(['../../components/personal_center/personal_center.vue'], resolve),
        headers:resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/more_info',
    name: 'more_info',
    meta: {
        title: "个人资料"
    },
    components: {
        default: resolve => require(['../../components/more_info/more_info.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/invite',
    name: 'invite',
    meta: {
        title: "邀请好友"
    },
    components: {
        default: resolve => require(['../../components/personal_center/invite.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/set_up',
    name: 'set_up',
    meta: {
        title: "设置"
    },
    components: {
        default: resolve => require(['../../components/personal_center/set_up.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/ceshi1',
    name: 'ceshi1',
    meta: {
        title: "测试"
    },
    components: {
        default: resolve => require(['../../components/more_info/ceshi1.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
}
]
export default personal_center;