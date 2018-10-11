<template>
<div>
    <div class="content_back">
        <div class="iponeXh"></div>
        <div class="header_if" >
            <div class="_back back_yes" @click="back_center"></div>
            <div class="_title">订单详情</div>
        </div> 
    </div>
     
    <div class="order_details_b">
        <div class="order_details-nav">
            <div class="list-order-details-lib" v-if="state">
                <div class="flex-h flex-j-c" v-if="state==5">
                    <img src="../../static/images/order-sure.png" alt="" class="order-dog">
                </div>
                <div class="flex-h flex-j-c" v-if="state==8">
                    <img src="../../static/images/order-tuihuo.png" alt="" class="order-dog"> 
                </div>
                <div class="flex-h flex-j-c" v-if="state==10||state==11">
                    <img src="../../static/images/order-shouhuo.png" alt="" class="order-dog">
                </div>
                <div v-if="state!=2 && state!=8 && state!=5 && state!=7 && state!=10 && state!=11">
                    <div v-show="orderDetail.orderType==0 ? true:false">
                    <div class="title-l">收货信息</div>
                    <div class="order-details-lib_b order-p-t-2 copy_event" >
                        <div class="flex-1 flex-h">
                            <p class="flex-1">收货地址：</p>
                            <p class="c4 flex-3">{{buyer.address}}</p>
                        </div>
                        <div class="flex-1 flex-h">
                            <p class="flex-1">详细地址：</p>
                            <p class="c4 flex-3">{{buyer.address_detail}}</p>
                        </div>
                        <div class="flex-1 flex-h">
                            <p class="flex-1">收货人：</p>
                            <p class="c4 flex-3">{{buyer.name}}</p>
                        </div>
                        <div class="flex-1 flex-h">
                            <p class="flex-1">联系方式：</p>
                            <p class="c4 flex-3">{{buyer.phone}}</p>
                        </div>
                        <div v-if="state>2">
                            <div class="flex-1 flex-h">
                                <p class="flex-1">快递公司：</p>
                                <p class="c4 flex-3">{{seller.express_name}}</p>
                            </div>
                            <div class="flex-1 flex-h">
                                <p class="flex-1">物流单号：</p>
                                <p class="c4 flex-3">{{seller.express_num}}</p>
                            </div>
                            <div class="copy-icon">复制单号</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="order-details-lib_b" style="margin-top:0.8rem" @click="go_goods_details">
                    <div class="order-details-lib_b_1 flex-h">
                        <div><img :src="goodsDetail.showUrl" alt=""></div>
                        <div class="c3 flex-v flex-j-c flex-1" >
                            <p class="font-3 ellipsis">{{goodsDetail.goodsName}}</p>
                            <p v-show="orderDetail.orderType==1 ? true:false">{{goodsDetail.shop_name}}</p>
                        </div>
    
                        <div class="flex-1 flex-v flex-j-c flex-a-e" v-if="state==2 && orderDetail.orderType==0" @click="send_goods_event">
                            <div class="lib-btn-2">一键发货</div>
                        </div>
                        <div class="flex-1 flex-v flex-j-c flex-a-e" v-if="state==2 && orderDetail.orderType==1" >
                            <div>
                                <div class=" lib-btn-2" @click="yes_sell">确认出售</div>
                                <div class="lib-btn-botton" @click="no_sell">暂不出售</div>   
                            </div>
                        </div>
                        <div class="flex-1 flex-v flex-j-c flex-a-e" v-if="state==0" @click="sure_get_goods">
                            <div class="lib-btn-2">确认收货</div>
                        </div>
                        <!-- <div class="flex-1 flex-v flex-j-c flex-a-e" v-if="state==5 && orderDetail.orderType==1" @click="see_copy"> -->
                            <!-- <div class="lib-btn-2">查看版权信息</div> -->
                        <!-- </div> -->
                        <div class="flex-1 flex-v flex-j-c flex-a-e" v-if="state==7" @click="go_audit">
                            <div class="lib-btn-2">去审核</div>
                        </div>
                    </div>
                    <p class="line_1"></p>
                    <!-- 0是普通，1是版权 -->
                    <div v-if='orderDetail.orderType==0'>
                        <div class="words-1 flex-h c5">
                            <p class="flex-1 flex-h"> 商品规格 <span class="c4 p-l">{{goodsDetail.format}}</span></p>
                            <p class="flex-1 flex-h"> 商品数量 <span class="c4 p-l">{{goodsDetail.count}}个</span></p>
                        </div>
                        <div class="words-2 flex-h c5">
                            <p class="flex-1 flex-h"> 商品单价 <span class="c4 p-l">¥{{goodsDetail.price}}</span></p>
                            <p class="flex-1 flex-h"> 商品总价 <span class="c4 p-l">¥{{goodsDetail.money}}</span></p>
                        </div>
                    </div>
                    <div v-else>
                        <div class="words-2 flex-h">
                            <p class="flex-1 flex-h c12"> 版权价格 <span class=" p-l">¥{{goodsDetail.copyright_price}}</span></p>
                        </div>
                    </div>
    
                </div>
                <div v-if="state==8||state==7||state==10||state==11">
                    <div class="title-l">退单信息</div>
                    <div class="order-details-lib_b order-p-t-2">
                        <p class="flex-1 flex-h"> 退单单号： <span class="c4 ">{{returnInfo.order_num}}</span></p>
                        <p class="flex-1 flex-h"> 退单状态：
                            <span class="c4 " v-if='state==1'>待付款</span>
                            <span class="c4 " v-else-if='state==2 && orderDetail.orderType==0'>待发货</span>
                            <span class="c4 " v-else-if='state==2 && orderDetail.orderType==1'>待确认</span>
                            <span class="c4 " v-else-if='state==3 && orderDetail.orderType==0'>已发货</span>
                            <span class="c4 " v-else-if='state==3 && orderDetail.orderType==1'>变更中</span>
                            <span class="c4 " v-else-if='state==4'>待评价</span>

                            <span class="c4 " v-else-if='state==5 && orderDetail.orderType==0'>已完成</span>
                            <span class="c4 " v-else-if='state==5 && orderDetail.orderType==1'>版权信息变更成功</span>
                            <span class="c4 " v-else-if='state==6'>已取消</span>
                            <span class="c4 " v-else-if='state==7'>待处理</span>
                            <span class="c4 " v-else-if='state==8'>待退货</span>
                            <span class="c4 " v-else-if='state==9||state==13'>已拒绝</span>
                            <span class="c4 " v-else-if='state==10'>待收货</span>
                            <span class="c4 " v-else-if='state==11'>退款成功</span>
                            <span class="c4 " v-else-if='state==12'>重新申请</span>
                        </p>
                        <p class="flex-1 flex-h"> 退单时间： <span class="c4 ">{{returnInfo.create_time}}</span></p>
                        <p class="flex-1 flex-h"> 退单原因： <span class="c4 ">{{returnInfo.return_reason}}</span></p>
                        <div class="flex-1 flex-h show-imgs">
                            <p class="w4"></p>
                            <img style="object-fit: cover " :src="i" @click='open_img(i)' alt="" v-for="i in returnInfo.urls" :key='i'>
                        </div>
                    </div>
                </div>
                <div v-if="state==2||state==5||state==10||state==11">
                    <div v-show=" orderDetail.orderType == 0 ? true:false">
                    <div class="title-l">买家信息</div>
                    <div class="order-details-lib_b order-p-t-2 copy_event">
                        <div class="flex-1 flex-h">
                            <p class="flex-1">收货地址：</p>
                            <p class="c4 flex-3">{{buyer.address+' '+buyer.address_detail}}</p>
                        </div>
                        <div class="flex-1 flex-h">
                            <p class="flex-1">收件人：</p>
                            <p class="c4 flex-3">{{buyer.name}}</p>
                        </div>
                        <div class="flex-1 flex-h">
                            <p class="flex-1">联系方式：</p>
                            <p class="c4 flex-3">{{buyer.phone}}</p>
                        </div>
                        <div class="flex-1 flex-h">
                            <p class="flex-1">快递公司：</p>
                            <p class="c4 flex-3">{{seller.express_name}}</p>
                        </div>
                        <div class="flex-1 flex-h">
                            <p class="flex-1">物流单号：</p>
                            <p class="c4 flex-3">{{seller.express_num}}</p>
                        </div>
                        <div class="copy-icon">复制单号</div>
                    </div>
                    </div>
                </div>
                <div v-if="state==8">
                    <div class="title-l">卖家信息</div>
                    <div class="order-details-lib_b order-p-t-2">
                        <div class="flex-1 flex-h">
                            <p class="flex-1">收货地址：</p>
                            <p class="c4 flex-3">{{seller.address}}</p>
                        </div>
                        <div class="flex-1 flex-h">
                            <p class="flex-1">详细地址：</p>
                            <p class="c4 flex-3">{{seller.address_detail}}</p>
                        </div>
                        <div class="flex-1 flex-h">
                            <p class="flex-1">收货人：</p>
                            <p class="c4 flex-3">{{seller.name}}</p>
                        </div>
                        <div class="flex-1 flex-h">
                            <p class="flex-1">联系方式：</p>
                            <p class="c4 flex-3">{{seller.phone}}</p>
                        </div>
                        <!-- <div class="flex-1 flex-h">
                            <p class="flex-1">退单状态：</p>
                            <p class="c4 flex-3">待退货</p>
                        </div>
                        <div class="flex-1 flex-h">
                            <p class="flex-1">退单时间：</p>
                            <p class="c4 flex-3">商品与描述不符合</p>
                        </div> -->
                    </div>
                </div>
                <div class="p font-0" v-if='state==3'>
                    【如果买家逾期不确认收货或评价，您可以提供买家已收货证明发送至平台邮箱：ags@auuidc.com，平台审核通过后，该笔订单会默认已完成。】
                </div>
                <div v-if="state!=7">
                    <div class="title-l">订单信息</div>
                    <div class="order-details-lib_b order-p-t-2 font-1">
                        <p class="flex-1 flex-h"> 订 单 号： <span class="c4 ">{{orderDetail.order_num}}</span></p>
                        <p class="flex-1 flex-h"> 订单状态：
                            <span class="c4 " v-if='state==1'>待付款</span>
                            <span class="c4 " v-else-if='state==2 && orderDetail.orderType==0'>待发货</span>
                            <span class="c4 " v-else-if='state==2 && orderDetail.orderType==1'>待确认</span>
                            <span class="c4 " v-else-if='state==3 && orderDetail.orderType==1'>变更中</span>
                            <span class="c4 " v-else-if='state==3 && orderDetail.orderType==0'>已发货</span>
                            <span class="c4 " v-else-if='state==4 && orderDetail.orderType==0'>待评价</span>
                            <span class="c4 " v-else-if='state==4  && orderDetail.orderType==1'>取消出售</span>
                            <span class="c4 " v-else-if='state==5 && orderDetail.orderType==0'>已完成</span>
                            <span class="c4 " v-else-if='state==5 && orderDetail.orderType==1'>已转让</span>
                            <span class="c4 " v-else-if='state==6'>已取消</span>
                            <span class="c4 " v-else-if='state==7'>待处理</span>
                            <span class="c4 " v-else-if='state==8'>待退货</span>
                            <span class="c4 " v-else-if='state==9||state==13'>已拒绝</span>
                            <span class="c4 " v-else-if='state==10'>待收货</span>
                            <span class="c4 " v-else-if='state==11'>退款成功</span>
                            <span class="c4 " v-else-if='state==12'>重新申请</span>
                        </p>
                        <p class="flex-1 flex-h"> 下单时间 ：<span class="c4 ">{{orderDetail.createTime}}</span></p>
                        <div v-if='state&&state==5 || orderDetail.orderType==1'>
                            <p class="line_2" ></p>
                            <p class="flex-1 flex-h"> 支付方式： <span class="c4 ">{{orderDetail.payWay}}</span></p>
                            <p class="flex-1 flex-h"> 支付时间： <span class="c4 ">{{orderDetail.payTime}}</span></p>
                            <p class="flex-1 flex-h"> 订单金额： <span class="c4 ">¥{{orderDetail.money}}</span></p>
                            <p class="flex-1 flex-h" v-show=" orderDetail.orderType == 0 ? true:false"> 平台费用： <span class="c4 ">{{orderDetail.flatMoney}}（已计于订单金额中）</span></p>
                            <div class="flex-1 flex-v c13" style="padding-left:4.5rem" v-show=" orderDetail.orderType == 0 ? true:false">
                                <p>收费规则：</p>
                                <p>好评5星，收取0% 好评4星，收取1%</p>
                                <p>好评3星，收取2% 好评2星，收取3%</p>
                                <p>好评1星，收取4% 好评0星，收取5%</p>
                            </div>
                        </div>
                        <div v-if='state==1' v-show=" orderDetail.orderType == 0 ? true:false">
                            <p class="flex-1 flex-h"> 订单金额： <span class="c4 ">¥{{orderDetail.money}}</span></p>
                        </div>
                    </div>
                </div>
                <div v-if="state>4" v-show=" orderDetail.orderType == 0 ? true:false">
                    <div class="w h3 line-h-3 flex-h star-manage flex-a-c">
                        <p class="font-1 c1 flex-1">商品评价</p>
                        <p class="star-lib" :class="handle_star_click_num(1)"></p>
                        <p class="star-lib" :class="handle_star_click_num(2)"></p>
                        <p class="star-lib" :class="handle_star_click_num(3)"></p>
                        <p class="star-lib" :class="handle_star_click_num(4)"></p>
                        <p class="star-lib" :class="handle_star_click_num(5)"></p>
                    </div>
                    <div class="order-details-lib_b order-p-t-1" style="min-height:9rem">
                        <p class="flex-1 flex-h"> {{discussDetail.content}}</p>
                        <!-- <p class="flex-1 flex-h"> {{discussDetail.discussTime}}</p> -->
                        <div style='float: left;margin: 20px 10px 10px 0;' v-for="(url,index) in discussDetail.flist" :key="index">
                           <img style='width="50px";height:50px;object-fit:cover' :src="url" alt=""> 
                        </div>
                    </div>
                </div>
                <div class="title-l">备注</div>
                <div class="order-details-lib_b order-p-t-1">
                    <p class="flex-1 flex-h"> {{details.remark}}</p>
                </div>
                <div class="h5"></div>
            </div>
        </div>
    
        <div class="dialog_layer" v-if="send_goods_show">
            <div class="layer_cont_1">
                <div class="flex-v flex-j-c" style="padding:2rem 0 4rem 0;">
                    <div class="layer_title">· 发货信息 ·</div>
                    <div class="c3 flex-h flex-j-c">
                        <p class="line-h-2">物流单号:</p>
                        <input orderDetail.orderType="text" placeholder="输入物流单号" v-model.trim="express_num">
                    </div>
                    <div class="c3 flex-h flex-j-c m-t-2">
                        <p class="line-h-2">物流公司:</p>
                        <input typorderDetail.orderTypee="text" placeholder="输入物流公司名称" v-model.trim="express_name">
                    </div>
                </div>
                <div class="layer_cont_btn">
                    <div class="layer_cont_confirm flex-h flex-j-c">
                        <p @click="send_goods_cancel " >取消</p>
                        <p @click="send_goods_sure">确定</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<style lang="less">
    @import 'order_details.less';
</style>

<script>
    //     1.未付款==待付款【卖家】
    // 2.待发货 ==待发货【卖家】
    // 3.已发货 ==已发货【卖家】
    // 4.待评价 ==待评价 【卖家】
    // 5.评价完成==已完成【卖家】
    // 6.取消订单==已取消【卖家】
    // 7.退货审核==待审核【卖家】
    // 8.退货待退货（同意退货）==退货-待退货【卖家】
    // 9.已拒绝（拒绝退货）===退货-已拒绝
    // 10.退货待收货==退货-待收货【卖家】
    // 11.退货完成==退货-退款成功【卖家】
    // 12.退货完成==重新申请退货【卖家】
    // 13.退货完成==拒绝重新申请退款【卖家】
    import ui from '../../libs/ui';
    import { Toast } from 'mint-ui';
    import util from '../../libs/util';
    
    export default {
        data() {
            return {
                share_log: false,
                nav_show: false,
                send_goods_show: false,
                buyer: {}, //买家信息
                goodsDetail: {}, //商品信息
                orderDetail: {}, //订单信息
                returnInfo: {}, //退单信息
                seller: {}, //卖家信息
                discussDetail: {}, //评价信息
                state: null, //订单状态
                details: {},
                express_id: null, //订单id
                express_num: null, //物流单号
                express_name: null, //物流公司名称
                no_sell_show:false,//暂不出售弹出框
                seller_banquan_show:false,//确定按钮隐藏弹框
                current_star_status: null, //0 空🌟 1半星🌟 2满星🌟
              
            }
        },
        created() {
            



            if (this.$route.query.show_send_goods) {
                this.send_goods_show = true;
            }
            this.initData();
        },
        mounted() {
            var that = this;
        },
        methods: {
            initData(a) {
                var that = this,
                    url = '/mall/orders/getOrderDetail.do',
                    _p = {
                        id: that.$route.query.id,
                    };
                    console.log('接口上传的参数'+_p)
                this.util.ajax.post(url, _p).then(e => {
                    that.details = e.data || {};
                    that.buyer = e.data.buyer || {};
                    that.goodsDetail = e.data.goodsDetail || {};
                    that.orderDetail = e.data.orderDetail || {};
                    that.returnInfo = e.data.returnInfo || {};
                    that.seller = e.data.seller || {};
                    that.discussDetail = e.data.discussDetail || {};
                    that.state = e.data.orderDetail.state;
                    that.express_id = e.data.orderId;
                    that.current_star_status = e.data.discussDetail.current_star_status;
                    
                }).catch()
            },
            go_goods_details() {
                var that = this;
                    if(that.state !== 5 ){
                        this.$router.push({
                            path: 'goods-details-gwc',
                            query: {
                                id: that.goodsDetail.id
                            }
                        })
                    }
                    else if (that.state == 5 && that.orderDetail.orderType==1){
                        that.Toast({
                            message:'该版权已转让',
                            position:'bottom',
                            className:'tt',
                            duration:'3000'
                        })
                    }
            },
            // 去审核
            go_audit() {
                this.$router.push({
                    name: 'order_return_goods_audit',
                    query: {
                        id: this.details.orderId
                    }
                });
                event.stopPropagation();
            },
            //发货信息弹层打开[一件发货]
            send_goods_event(a) {
                this.send_goods_show = true;
                event.stopPropagation();
            },
            // see_copy(){

            // },
            //暂不出售，
            no_sell(a){
                // debugger;
                 var that = this;
                _confrim({
                    content: '确定暂时不出售该版权么？', //必填
                    sureTxt:'确定',
                     yes() { //选填
                        var url = '/mall/orders/confirmReceipt.do';
                        that.util.ajax.get(url, {
                            params: {
                                id: that.details.orderId,
                            }            
                        }).then(e => {
                            if (e.code == 200) {
                                that.initData('update');
                            } else {
                                that._alert({
                                    content: e.message
                                });
                            }
                        }).catch()
                    },
                    no() {

                    }
                })
                event.stopPropagation();
                // debugger;
            }, 
            
             //确认出售
            yes_sell(){
            //   先调用获取买家和卖家的id还有交易的证书编号
//                  debugger;
                //  console.log(a)
               var that = this;
                that.userId = that.details.buyer.buyerId
               this.id = that.details.orderId
                // console.log(that.details);
                event.stopPropagation();
                // alert('000000000')
                this.util.ajax.get('/admin/users/zyzhuce.do?userId='+that.userId).then((e)=>{
//                    debugger;
                    // console.log('11111111：'+e.data.status);

                    if(e.data.status == 1){
                        this.util.ajax.get('/mall/orders/getOrderDetail.do?id='+this.id).then((e)=>{
//                            debugger;
                            event.stopPropagation();
                            if(e.code == 200){
                      let old_user_id = e.data.seller.sellerId
                                // let old_user_id  ='59d31948-8260-4707-8d86-2759e2bd71bd'
                      let new_user_id = e.data.buyer.buyerId
                                // let new_user_id  ='59d31948-8260-4707-8d86-2759e2bd71bd'

                      let block_cert_numbere  = e.data.goodsDetail.copyright_num
                                // let  block_cert_numbere = '22A60CC41878924AA027555230B3716D'
                                // console.log('old_user_id'+old_user_id,'new_user_id'+new_user_id,'block_cert_numbere'+block_cert_numbere)

                                let _p ={
                                    old_user_id,
                                    new_user_id,
                                    block_cert_numbere
                                }
//                                debugger;
                                this.util.ajax.post('/admin/copyrightChange/save.do',_p).then((e)=>{
//                                    debugger;
                                    if(e.code == 200){
                                        let id  = this.id
                                        let express_name =  ''
                                        let _p ={
                                            id,
                                            express_name
                                        }
//                                        debugger;
                                        this.util.ajax.post('/mall/orders/editOrder.do',_p).then((e)=>{
//                                            debugger;
                                            if(e.code == 200){
                                                this.Toast('您已确认该版权售出')
//                                                this.state = 3
                                                this.initData();
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }else if(e.data.status == 0){

                        that.Toast({
                            message:'您还未申请版权登记，请去申请版权登记证书',
                        })

                    }
                })
//                event.stopPropagation();
//                debugger;
            },
            //返回
            back_center(){
                // this.send_goods_show = false
                this.$router.push('/order_list_seller');    
                // this.close = function () {
                //     var layer = document.getElementsByClassName(this.el_dom)[0];
                //     document.getElementById("app").removeChild(layer);
                // }
                // this.close();
            },
            //发货信息取消
            send_goods_cancel() {
                this.send_goods_show = false;
            },
            //发货信息确定
            send_goods_sure() {
                var that = this,
                // debugger
                    url = '/mall/orders/editOrder.do';
                if (!that.express_name) {
                    that._alert({
                        content: '请输入物流公司'
                    });
                    return false;
                }
                if (!that.express_num) {
                    that._alert({
                        content: '请输入物流单号'
                    });
                    return false;
                }
                this.util.ajax.get(url, {
                    
                    params: {
                        
                        id: that.express_id,
                        express_name: that.express_name,
                        express_num: that.express_num,
                    }
                
                }).then(e => {
                    debugger
                    if (e.code == 200) {
                        // alert("200")
                        that.send_goods_cancel();
                        that.initData('update');
                    } else if (e.code == 501) {
                        // debugger
                        // alert("501")
                        that._alert({
                            content: e.message,
                            yes: function() {
                                that.$router.push({
                                    path: 'onceZhi',
                                    query: {
                                        state: 1
                                    }
                                })
                            }
                        });
                    } else {
                        that._alert({
                            content: e.message
                        });
                    }
                }).catch()
            },
            
            sure_get_goods() {
                //接口不确定？？？
                var that = this,
                    url = '/mall/orders/selleeConfirmReceipt.do',
                    _p = {
                        id: that.$route.query.id,
                    };
                that._confrim({
                    content: '请确定收到货后，确认收货。', //必填
                    yes() { //选填
                        that.util.ajax.post(url, _p).then(e => {
                            if (e.code == 200) {
                                that.initData();
                            } else {
                                that._alert({
                                    content: e.message
                                });
                            }
                        }).catch()
                    },
                    no(){

                    }
                });
                  event.stopPropagation();
            },
            handle_star_click_num(a) {

                if (this.discussDetail.score >= a) {
                    return 'real-stars'
                } else {
                    var score_all = Number(this.discussDetail.score) +1 ;
      
                    if(score_all >a ) {
                        return 'half-stars'
                    }else{
                           return 'empty-stars'
                    }
                }
            },
    
        }
    }
</script>


