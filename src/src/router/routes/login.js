const login = [{
    path: '/login',
    name: 'login',
    meta: {
        title: ""
    },
    components: {
        default:resolve => require(['../../components/login/login.vue'], resolve),
        headers:resolve => require(['../../components/common/header.vue'], resolve)
    }
}
]
export default login;