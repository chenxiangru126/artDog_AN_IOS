<template>
    <div class="page_content">
        <div class="img_content">
            <div class="img_big" >
                <div class="btn_content">
                    <div class="img_copy" ><a href="http://59.110.169.175:9011/#/explain"><img src="../../static/images/banquandengji@2x.png" ></a></div>
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
    export default {

        methods:{
            img_copy(){
                
            },
            img_shop(){
                // var that = this;
                this.$router.push('/goods-class')
            },
            personal(){
                this.$router.push('/personal_center')
            }
        }
    }
</script>


