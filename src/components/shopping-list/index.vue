<template>
    <div class="shop_b_list">
        <div class="ser_img" v-if="showBlack">
            <div class="_black"></div>
        </div>
        <div class="cart_m" v-if="emptylist">
            <em></em>
            <p>你的购物车里空空如也</p>
            <div class="but" @click="browse">去 逛 逛</div>
        </div>
        <div class="shop-lib"  @scroll="onScroll" ref="viewbox" >
            <list :it='it' :select_status='select_status' :delete_items='delete_items' v-for='(it,i) in items' :key='i'>
    
            </list> 
             <div v-if="nulldata" style="text-align: center">没有更多数据...</div>
         </div>
        <div class="submit-btn-1-fix" v-if="delete_All">
                <div class="submit-btn-1-fixed"  @click='all_delete'>
                    全部删除
                </div>
            </div>
            <div class="zongji">
                <div class="d_but" v-show="butdisplay">
                    <p>   总计   ¥ {{total.toFixed(2)}} <span @click="settlement">结 算</span></p>
                </div>
            </div>
         
    </div>
</template> 

<style lang="less">
    @import './index.less';
    .ser_img{
        position: fixed;
        display: flex;
        z-index: 9999999;
        top: 1.6rem;
        right: .866667rem;
        ._black{
            background: #232323;
            width: 3.666667rem;
            height: 1.666667rem;
        }
    }
</style>

<script>
import util from "../../libs/util";
// import {InfiniteScroll} from 'mint-ui';
// import Vue from 'vue';
//  Vue.use(InfiniteScroll);
import list from './list.vue';
    export default {
        data() {
            return {
                emptylist:false,
                items:[],
                showCount:20,
                currentPage:1,
                total:0,
                ids:[],
                goodsIds:[],
                counts:[],
                types:[], 
                nulldata:false,
                butdisplay:false,
                show_delete:false,
                select_status: false, //false 全不选  true 全选
                hasSelect: false, //是否有选中状态
                delete_items: [], //删除的数组
                delete_All:false,
                Allprice:0,
                showBlack:false
            }
        },
        components: {
            list: list
        },
        created(){
            // debugger
            this.$root.eventHup.$on('receive_shopping_check', this.process_data);
            this.$root.eventHup.$emit('childEvent', {
                shopping_checked: false
            })

        },
        watch: {
            select_status: function(new_value, old_value) {
                if (new_value) {//全选
                   this.items.forEach(e => {

                        e.check = false;
                    })
                } else {
                     this.items.forEach(e => {

                        e.check = true; 
                    })
                    
                }
            },
            items: {　　　　
                handler(newValue, oldValue) {　　
                    
                    var that = this;　　
                    that.delete_items = [];　
                    
                    if (that.select_status) {//全选择
                    
                        // console.log("that.select_status:items里"+that.select_status)
                        that.items.forEach(e => {
                            if (!e.check) {
                                that.delete_items.push(e.id)
                                e.check = false
                                this.delete_All=true
                            }
                        })　
                        if (that.delete_items.length == 0) {
                            that.hasSelect = false;
                            that.butdisplay= false; //9_13
                            that.emptylist = true;//9_13
                            that.showBlack = true
                            that.delete_All = false
                            that.$root.eventHup.$emit('childEvent', {//9_13
                              shopping_checked: false
                            })
                        } else {
                            that.hasSelect = true;
                        }　

                        
                        if (that.delete_items.length == that.items.length) {
                            
                                    that.total = 0
                                    that.items.forEach(e => {
                                        that.total += Math.abs(e.count*e.price);
                                        
                                    })
                                
                              
                            that.$root.eventHup.$emit('childEvent', {
                                shopping_checked: true
                            })
                        } else {

                            this.delete_All=false
                            that.$root.eventHup.$emit('childEvent', {
                                shopping_checked: false
                            })
                        }
                    }else{
                        // console.log('yijingweitruele')
                        that.delete_All=false
                        
                    }
                },

                deep: true　　
            }
        },
        mounted() {
        //     let that = this;
        //     setTimeout(() => {
        //         that.initData()
        //    }, 450);
             this.userGetinfo();//jia
            // if(location.href.indexOf('localhost')>-1){
//                this.initData()
            // }
        },
        methods: {
            userGetinfo(){//jia
                var _this = this;
                setTimeout(function(){
                    try{
                        let objdata = iosObject.getUserInfo();
                        let jsondata = eval('(' + objdata + ')');
                        window.jsondata = jsondata;
                        if(window.jsondata.token){
                            _this.initData();
                        }else{
                            _this.userGetinfo();
                        }
                    }catch(e){
                        _this.userGetinfo();
                    }
                },300)
            },
            initData() {
                var that = this;
                let data ={
                    showCount:20,
                    currentPage:this.currentPage,
                }
                util.ajax.post("/mall/cart/getCartData.do",data).then(e=>{
                    if(e.data.list&&e.data.list.length==0){
                        if(this.currentPage==1){
                             this.emptylist = true;  //空空如也
                             this.butdisplay= false; //结算
                             this.showBlack = true
                        }else{
                            this.nulldata = true;
                        }
                        return false;
                    }else{
                        this.butdisplay= true;
                        this.emptylist = false;
                        this.showBlack = false
                    for(let i in e.data.list){
                        e.data.list[i].check = true;
               
                    }
                   
                    that.items =  that.items.concat(e.data.list||[]); 
                    }
                    
                }).catch(
                   
                )
            },
           
            browse(){
                 this.$router.push({path: 'goods-ls-class'});
            },
            onScroll(){
                var offsetHeight = event.target.offsetHeight,
                    scrollHeight = event.target.scrollHeight-1,//滚动区域高度
                    scrollTop = event.target.scrollTop,//滚动位置
                    scrollBottom = offsetHeight + scrollTop;//滚动最下方位置

                if(scrollBottom >= scrollHeight){
                    this.currentPage++;
                    this.initData();
                }
            },
            process_data(a) {
                var that = this;
                // console.log('传入的process_data', a);
                that.select_status = null;
                if(a){
                    that.select_status = true
                    that.items.forEach(e => {
                            if (e.check) {
                                that.delete_items.push(e.id)
                                e.check = false
                                this.delete_All=true
                            }
                    })　
                   
                }else{
                    // console.log( 'that.select_status为false')
                }
               
    
            },
            all_delete(){
                var that = this,
                    url = '/mall/cart/deleteCart.do';
                this.util.ajax.post(url, {
                    ids: that.delete_items.join(",")
                }).then(e => {
                    if (e.code == 200) {
                        that.Toast('删除成功');
                        setTimeout(() => {
                            var index =  that.items.indexOf(that.it);
                            this.items=[]
                            that.items.splice(index, 1);
                            that.initData();
                        }, 1000)
                        this.delete_All=false
                    }

                }).catch()
            },
            // loadMore() {
            //     this.currentPage++;
            //     this.initData();
            // },
            settlement(){
                // console.log(this.count)
                if(this.ids.length==0){
                    this.Toast('请选择商品');
                    return false
                }
                if(this.counts.length==1){
                    let data ={
                        ids:this.ids.join(','),
                        count:this.counts.join(','),
                        type:this.types.join(','),
                    }
                    util.ajax.post("/mall/cart/getMoney.do",data).then(e=>{
                        this.$router.push({path: '/order_create',query:{ id:this.goodsIds.join(','),count:this.counts.join(','), type:this.types.join(',')}});
                    }).catch()
                }else{
                    let data ={
                        ids:this.ids.join(','),
                        count:this.counts.join(','),
                        type:this.types.join(','),
                    }
                    util.ajax.post("/mall/cart/getMoney.do",data).then(e=>{
                        this.$router.push({path: '/order_create',query:{ id:this.ids.join(','),count:this.counts.join(','), type:this.types.join(',')}});
                    }).catch()
                }

            }
            
        }
    }
</script>


