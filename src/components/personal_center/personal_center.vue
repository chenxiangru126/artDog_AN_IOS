<template>
    <div class="personal_content">
        <div class="personal_bj">
            <div class="xinxi">
                <div class="xinxi_content">
                    <div class="touxiang ">
                        <img v-if='!avatar' src="../../static/images/gerenzhongxintouxiang@2x.png">
                        <img v-else :src="'http://test.bjyishubiyeji.com:8080'+avatar" style="width: 4.7rem;height: 4.7rem;border-radius:50%" >
                    </div>
                    <div class="nickname ">{{nickName}}</div>
                    <div v-if='!signature' class="signature ">待我强大之时，便是你噩梦的开始</div>
                    <div v-else class="signature ">{{signature}}</div>
                    <div class="info_content jiange" @click="moreInfo">
                        <span class="info">查看更多资料</span>
                        <span class="drop-down">
                            <img src="../../static/images/xialasanjiao@2x.png" >
                        </span>
                    </div>
                </div>
            </div>           
            <div class="menu_content ">
                <div class="content_caidan">
                    <div class="menu content">
                        <a href="http://59.110.169.175:9011/copyright/index.html#/reg_list"></a>
                        <img class="lcon" src="../../static/images/banquan@2x.png" >
                        <span class="word">版权</span>
                    </div>
                    <p class="xian"></p>
                    <div class="menu wangdian" @click="shop">
                        <img class="lcon"   src="../../static/images/gerenw@2x.png" >
                        <span class="word">网店</span>
                    </div>
                    <p class="xian"></p>
                    <div class="menu dingdan" @click="order">
                        <img class="lcon" src="../../static/images/dingdan@2x.png">
                        <span class="word">订单</span>
                    </div>
                    <p class="xian"></p>
                    <div class="menu gouwuche" @click="shoppingCart" >
                        <img class="lcon" src="../../static/images/gouwuche@2x.png" >
                        <span class="word">购物车</span>
                    </div>
                    <div class="menu jiange" @click="invite">
                        <img class="lcon" src="../../static/images/yaoqing@2x.png" >
                    <span class="word">邀请</span>
                    </div>
                    <p class="xian"></p>
                    <div class="menu" @click="set_up">
                        <img class="lcon" src="../../static/images/shezhi@2x.png" >
                        <span class="word">设置</span>
                    </div>
                    <p class="xian"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
   @import 'personal_center.less';
</style>

<script>
// import BScroll from 'better-scroll'

    export default {
        data(){
            return{
                avatar:null,//头像
                nickName:'',//昵称
                signature:'',//个性签名
                userId:''//用户id
            }
        },
        mounted(){
            // 获取缓存中userId
            this.userId = this.route.query.id
            // 初始化信息加载
            this.util.ajax.get('/admin/sysUser/getUserById.do?alert=0&id='+this.userId).then(e=> {
                this.nickName = e.bean.nickName
                this.avatar = e.bean.photo	
                this.signature = e.bean.signature
                
            }) 
            
        },
        // mounted () { 
        // },
        methods:{
            // 网店
            shop(){
                // console.log('111111111111111111111')
                this.$router.push('/switch')
            },
            // 订单
            order(){
                this.$router.push('/order_list_buyer')
            },
            // 购物车
            shoppingCart(){
                this.$router.push('/shopping-cart')
            },
            // 查看更多信息
            moreInfo(){
                this.$router.push('/more_info')
            },
            // 邀请
            invite(){
                this.$router.push('/invite')
            },
            // 设置
            set_up(){
                this.$router.push('/set_up')
            },
        }
    }
</script>


