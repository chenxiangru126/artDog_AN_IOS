<template>
    <div class="setUp_content">
        <div>
            <div class="setUp_box">
                <div class="help">
                    <span class="word" @click="help" >用户帮助</span>
                </div>
            </div>
            <div class="setUp_box">
                <div class="help">
                    <span class="word">意见反馈</span>
                </div>
            </div>
            <div class="setUp_box">
                <div class="help">
                    <span class="word">修改密码</span>
                </div>
            </div>
            <div class="setUp_box">
                <div class="help">
                    <span class="word">关于我们</span>
                </div>
            </div>
        </div>
        <div class="tuichu_btn">
            <div class="btn_word">退出登录</div>
        </div>
    </div>
</template>

<style lang="less">
    @import 'set_up.less';
</style>

<script>
export default {
    methods: {
        help(){
            this.$router.push('/help')
        }
    }
}
</script>

