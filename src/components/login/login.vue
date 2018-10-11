<template>
    <div class="login_content">
        <!-- <div class="znt"></div> -->
        <!-- <div class="back"></div>   -->
        <div class="logo"><img src="../../static/images/logo@2x.png" ></div>


        <!-- 登录、注册按钮 -->
        <div class="dlzc_btn">
            <span  @click="showToggle">登录</span>
            <span  @click="showZhu">注册</span>
        </div>
        <!-- 登录 -->
        <div v-show="isLoginShow" class="denglu" >
            <div class="denglu_bj">
                <div class="denglu_neirong">
                    <div class="neirong_box">
                        <div class="denglu_top">
                            <span class="call_pic"><img src="../../static/images/phone@2x.png" ></span>
                            <span class="phone l1">
                                <input type="text" placeholder="请输入手机号" maxlength="11" >
                            </span>
                        </div>
                        <div class="denglu_bottom">
                            <span class="mima_pic"><img src="../../static/images/password@2x.png"></span>
                            <span class="mima l1">
                                <input type="text" placeholder="请输入密码" maxlength="16">
                                <img src="../../static/images/xianshiyanjing@2x.png" >
                            </span>
                        </div>
                        <div class="forget">忘记密码？</div>
                        
                    </div>
                    <div class="denglu_btn">
                        <span @click="denglu_btn">登录</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 注册 -->
        <div v-show="isZhuShow" class="zhuce" >
            <div class="zhuce_bj">
                <div class="denglu_neirong">
                    <div class="neirong_box">
                        <div class="denglu_top">
                            <span class="call_pic"><img src="../../static/images/phone@2x.png" ></span>
                            <span class="phone l1">
                                <input type="text" placeholder="请输入手机号" maxlength="11" v-model="phone">
                                <span v-show="!get_code_show" @click="get_code">获取验证码</span>
                                <span  v-show="get_code_show">{{timers}}s</span>
                            </span>
                        </div>
                        <div class="zhuce_center">
                            <input type="text" placeholder="请输入验证码" maxlength="8" v-model="yan_code">
                        </div>
                        <div class="denglu_bottom">
                            <span class="mima_pic"><img src="../../static/images/password@2x.png"></span>
                            <span class="mima l1">
                                <input type="text" placeholder="请输入8-16位字母或数字" maxlength="16">
                                <img src="../../static/images/xianshiyanjing@2x.png" >
                            </span>
                        </div>
                        <!-- <div class="forget">忘记密码？</div> -->
                        
                    </div>
                    <div class="denglu_btn">
                        <span>注册</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="less">
    @import 'login.less';
</style>

<script>
import util from '../../libs/util'


export default {
    data(){
        return{
            isLoginShow:true,
            isZhuShow:false,
            phone:null,//手机号
            yan_code:null,//短信验证码
            password:null,//密码
            updateType:'1',
            timers:59,
            get_code_show:false
        }
    },
    methods: {
        //登录页
        showToggle() {
            this.isLoginShow=true
            this.isZhuShow=false
        },
        //登录页
        showZhu(){
            this.isZhuShow=true
            this.isLoginShow=false
        },
        //登录注册按钮
        denglu_btn(){

            let phone = this.phone
            let updateType = '1'
            let _p = {
                phone,
                updateType
            }
            this.util.ajax.post('/admin/sysUserReal/sendCode.do', _p).then(e=>{
                if(e.yan_code == 200){
                    
                }
            })
        },
        get_code(){
            //  要先判断是不是有电话号码还有格式是否正确
            let  myreg=/^[1][3,4,5,7,8][0-9]{9}$/
            let phone = this.phone
            if(phone != null && myreg.test(phone)){
                this.get_code_show = true;
                let timer = this.timers
                //  点击以后就要发送请求   
                //在进行时间判断
                let interTimer = setInterval(()=>{
                    if(timer== 0){
                        clearInterval(interTimer)
                        this.get_code_show=false;
                        this.timers = 59;
                        if(this.yan_code==null){
                            this.Toast('请从新获取验证码')
                        }
                    }else{
                        timer--;
                        this.timers = timer;
                    }
                    
                },1000)
                //这里发送请求
                    let _p = {
                        phone,
                        updateType:1
                    }
                    this.util.ajax.get('admin/sysUserReal/sendCode.do?updataType=1&phone='+phone).then(e=>{
                        if(yan_code == 200){
                            this.Toast('验证码发送成功')
                            this.yan_code= e.data;
                        }
                    })
            }else{
                this.Toast('请输入手机号')
            }
        },

    }
}
</script>
