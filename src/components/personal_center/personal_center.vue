<template>
    <div class="personal_content">
        <div class="personal_bj">
            <div class="xinxi">
                <div class="xinxi_content">
                    <div class="touxiang ">
                        <img src="../../static/images/gerenzhongxintouxiang@2x.png">
                    </div>
                    <div class="nickname ">执念的艺术家</div>
                    <div class="signature ">待我强大之时，便是你噩梦的开始</div>
                    <div class="info_content jiange" @click="gengduoziliao">
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
                        <img class="lcon" src="../../static/images/banquan@2x.png" >
                        <span class="word">版权</span>
                    </div>
                    <p class="xian"></p>
                    <div class="menu wangdian" @click="wangdian">
                        <img class="lcon"   src="../../static/images/gerenw@2x.png" >
                        <span class="word">网店</span>
                    </div>
                    <p class="xian"></p>
                    <div class="menu dingdan" @click="dingdan">
                        <img class="lcon" src="../../static/images/dingdan@2x.png">
                        <span class="word">订单</span>
                    </div>
                    <p class="xian"></p>
                    <div class="menu gouwuche" @click="gouwuche" >
                        <img class="lcon" src="../../static/images/gouwuche@2x.png" >
                        <span class="word">购物车</span>
                    </div>
                    <div class="menu jiange" @click="yaoqing">
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
import BScroll from 'better-scroll'

    export default {
        mounted () { 
        },
        methods:{
            
            wangdian(){
                console.log('111111111111111111111')
                this.$router.push('/switch')
            },
            dingdan(){
                this.$router.push('/order_list_buyer')
            },
            gouwuche(){
                this.$router.push('/shopping-cart')
            },
            gengduoziliao(){
                this.$router.push('/more_info')
            },
            yaoqing(){
                this.$router.push('/invite')
            },
            set_up(){
                this.$router.push('/set_up')
            }
        }
    }
</script>


