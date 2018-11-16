<template>
    <div class="page_content">
        <div class="img_content">
            <div class="img_big" >
                <div class="btn_content">
                    <div class="img_copy" ><a href="http://59.110.169.175:9011/copyright/index.html#/explain"><img src="../../static/images/banquandengji@2x.png" ></a></div>
                    <div class="img_shop" @click="img_shop" ><img src="../../static/images/jiaoyidianshang@2x.png" ></div>
                </div>    
            </div>
            
        </div>
        <div class="search_content">
            <div class="search_box"><img src="../../static/images/sousuo@2x.png" ></div>
            <div class="xiaoxi"><img src="../../static/images/xiaoxi@2x.png" ></div>
            <div class="personal" @click="personal" ><img src="../../static/images/wode@2x.png" ></div>
        </div>

    </div>
</template>
<style lang="less">
    @import  'home_page.less';

</style>

<script>
    import '../../znt.js' ;
    export default {
        data(){
            return {
                token:'',
                userId:'',
                mobile:''
            }
        },
        created(){
           znt.statusBarStyle({

                // userId:"111",
                style:'Light',
                
                success:function(res){

                    alert(res.msg);
                },
                fail:function(res){
                    alert(res.msg)
                },
                cancel:function(){
                }
            });
            
 
        },
        mounted(){
            
        },

        methods:{
            img_copy(){
                
            },
            img_shop(){
            //     znt.statusBarStyle({

            //     // userId:"111",
            //     style:'Light',
                
            //     success:function(res){

            //         alert(res.msg);
            //     },
            //     fail:function(res){
            //         alert(res.msg)
            //     },
            //     cancel:function(){
            //     }
            // });
                // var that = this;
                // this.$router.push('/goods-class')22
                this.$router.push('/ceshi')
            },
            personal(){
                var _this = this;
                znt.getCacheUserInfo({
                    // userId:"111",
                    success:function(res){
                        // alert('token是否有值'+_this.token)
                        alert("登录状态:::"+res.isLogin+"用户信息"
                        +res.userInfo.token+res.userInfo.mobile);
                        _this.token = res.userInfo.token
                        _this.userId = res.userInfo.userId
                        _this.mobile = res.userInfo.mobile
                        if(_this.token == '' || _this.token == undefined){
                            _this.$router.push('/login')
                        }else{
                             _this.$router.push({
                                path:'/personal_center',
                                query:{
                                    id:_this.userId
                                }
                            })
                        }
                    },
                    
                    fail:function(res){
                    alert(res.msg)
                    },
                    cancel:function(){
                    }
                })
                
                
                
            }
        }
    }
</script>


