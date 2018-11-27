<template>
    <div class="setUp_content">
        <div>
            <div class="setUp_box">
                <div class="help" @click="help">
                    <span class="word"  >用户帮助</span>
                </div>
            </div>
            <div class="setUp_box">
                <div class="help" @click="feedback">
                    <span class="word" >意见反馈</span>
                </div>
            </div>
            <div class="setUp_box">
                <div class="help" @click="retrieve_password">
                    <span class="word" >修改密码</span>
                </div>
            </div>
            <div class="setUp_box">
                <div class="help" @click="about_we">
                    <span class="word" >关于我们</span>
                </div>
            </div>
        </div>
        <div class="tuichu_btn"  @click="Logout">
            <div class="btn_word">退出登录</div>
        </div>
    </div>
</template>

<style lang="less">
    @import 'set_up.less';
</style>

<script>
import '../../znt.js' ;
export default {
    methods: {
        //跳帮助我们
        help(){
            this.$router.push('/help')
        },
        //跳修改密码
        retrieve_password(){
            this.$router.push('/retrieve_password')
        },
        //跳关于我们
        about_we(){
            this.$router.push('/about_we')
        },
        //跳意见反馈
        feedback(){
            this.$router.push('/feedback')
        },
        // 退出登录
        Logout(){
            let _this=this
            znt.logout({
                success:function(res){
                alert("成功"+res.msg);
                _this.$router.push('/home_page')
                },
                fail:function(res){
                alert("失败"+res.msg)
                },
                cancel:function(){
                }
                });
        },

    }
}
</script>

