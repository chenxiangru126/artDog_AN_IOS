<template>
    <div class="login_content">
        <!-- <div class="znt"></div> -->
        <!-- <div class="back"></div>   -->
        <div class="logo"><img src="../../static/images/logo@2x.png" ></div>

        <!--不孬不孬-->
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
                                <input type="text" placeholder="请输入手机号" maxlength="11"  v-model="dl_phone">
                            </span>
                        </div>
                        <div class="denglu_bottom">
                            <span class="mima_pic"><img src="../../static/images/password@2x.png"></span>
                            <span class="mima l1">
                                <input type="password" id="input_pwd" placeholder="请输入密码" maxlength="16"  v-model="dl_mima" />
                                <img v-show="is_show"  @click="handle_click_show"  src="../../static/images/xianshiyanjing@2x.png" >
                                <img v-show="!is_show" @click="handle_click_hide"  src="../../static/images/yincangyanjing@2x.png" >
                            </span>
                        </div>
                        <div class="forget" @click="retrieve_password">忘记密码？</div>
                        
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
                                <input type="text" placeholder="请输入手机号" maxlength="11" v-model="tel_phone">
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
                                <input type="password" id="input_pwd1" placeholder="请输入8位字母或数字" maxlength="16"  v-model="mi_code" />
                                <img v-show="is_show1"  @click="handle_click_show1"  src="../../static/images/xianshiyanjing@2x.png" >
                                <img v-show="!is_show1" @click="handle_click_hide1"  src="../../static/images/yincangyanjing@2x.png" >
                            </span>
                        </div>
                        <!-- <div class="forget">忘记密码？</div> -->
                        
                    </div>
                    <div class="denglu_btn">
                        <span @click="zhuce_btn">注册</span>
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
import '../../znt.js' ;

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
            get_code_show:false,
            tel_phone:null,//注册的手机号
            mi_code:null,//注册的密码
            dl_phone:'',//登录手机号
            dl_mima:null,//登录密码
            is_show:false,//密码显示隐藏
            is_show1:false//密码显示隐藏
        }
    },
    methods: {
        //登录页
        //显示密码
        handle_click_show(){
            this.is_show = !this.is_show;
          $("#input_pwd").attr('type','password')
        },
        //密码隐藏
        handle_click_hide(){
            this.is_show = !this.is_show;
           $("#input_pwd").attr('type','text')
        },
        //注册页
        //显示密码
        handle_click_show1(){
            this.is_show1 = !this.is_show1;
            $("#input_pwd1").attr('type','password')
        },
        //密码隐藏
        handle_click_hide1(){
            this.is_show1 = !this.is_show1;
            $("#input_pwd1").attr('type','text')
        },
//
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
        //登录按钮
        denglu_btn(){
            let _this = this
            let phone = this.dl_phone
            let password = this.dl_mima
            // let updateType = '1'
            
            let _p = {
                phone,
                password,
                // updateType
            }
            console.log(this.dl_phone)
            console.log(this.dl_mima)
            this.util.ajax.get('/admin/users/toDenglu.do?phone='+this.dl_phone+'&password='+this.dl_mima).then(e=>{
                let _this = this
                if(e.success == true){
                    this.Toast(e.msg)
                    // console.log('昵称：：：'+e.user.nickName)
                    console.log('手机号：：：'+phone)
                    // znt.cacheUserAccount({
                    //     account	:e.user.nickName,
                    //     password:password,
                    //     success:function(res){
                    //     //   console.log("成功"+res.msg);
                    //       alert("保存用户名密码成功"+res.msg);
                          znt.cacheUserInfo({ // userId:"111",
                            token:e.token,
                            userId: e.token,
                            mobile: phone,
                            success:function(res){

                                alert(res.msg);
                                _this.$router.push('/home_page')
                                    
                            },
                            fail:function(res){
                                alert(res.msg)
                            },
                            cancel:function(){
                            }
                        });
                        
                        // },
                        // fail:function(res){
                        // alert("失败"+res.msg)
                        // },
                        // cancel:function(){
                    }else{
                        this.Toast('手机号或密码错误')
                    }
                });
                

                      
                    
                // }
            // })
        },
        get_code(){
            //  要先判断是不是有电话号码还有格式是否正确
            let myreg=/^[1][3,4,5,7,8][0-9]{9}$/
            let phone = this.tel_phone
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
                    let phone = this.tel_phone;
                    let updateType = 1
                    let _p = {
                        updateType,
                        phone                       
                    }
                    
                    // this.util.ajax.get('/admin/users/sendCode02.do?phone='+this.tel_phone+'&updateType='+updateType).then(e=>{                       
                    //     this.Toast('验证码发送成功')
                    //     this.get_yan_code= e.data;
                    //     console.log(e.data)                       
                    // })
                this.util.ajax.get('admin/sysUserReal/sendCode.do?updataType=1&phone='+phone).then(e=>{  
                if(e.code ==200){
                    this.Toast('验证码发送成功')
                    this.get_yan_code = e.data;  
                    }
                })
            }else{
                this.Toast('请输入手机号')
            }
        },
        zhuce_btn(){
            let _this = this
            let phone = this.tel_phone;
            let code = this.yan_code;
            let password = this.mi_code;
            let get_yan_code = this.get_yan_code;
            // let updateType = '1'
            if(code != get_yan_code || get_yan_code ==null){  
                this.Toast('请输入正确的验证码') ; 
                return false;    
            }else if(password ==null){
              this.Toast('请输入密码')
              return false;    
            }else{
                let updateType = '1'
                let _p = {
                   phone,
                   code,
                   password,
                   updateType
                }
              this.util.ajax.get('/admin/users/regOrUpdate.do?phone='+phone+'&code='+code+'&password='+password+'&updateType='+updateType).then(e=>{
                    
                    if(e.success == true){
                        this.Toast(e.msg)
                        znt.cacheUserInfo({ // userId:"111",
                            token:e.token,
                            userId: e.token,
                            mobile: phone,
                            success:function(res){

                                alert(res.msg);
                                _this.$router.push('/home_page')
                                    
                            },
                            fail:function(res){
                                alert(res.msg)
                            },
                            cancel:function(){
                            }
                        });
                        // this.$router.push('/home_page')    
                    }else{
                        alert('注册失败')
                    }

              })

            }
        },
        retrieve_password(){
            this.$router.push('/retrieve_password')
        }

    }
}
</script>
