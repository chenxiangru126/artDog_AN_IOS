<template>
    <div class="s1">
        <div class="search_hot">
            <div class="search_box_1" >
                <img src="../../static/images/sousuo@2x.png" ><input type="text"></div>
            <div class="personal_1" @click="cancel" >取消</div>
        </div>
        <div class="word_content">
            <div class="y1"></div>
            <div class="word">热门搜索</div>
            <div class="y1"></div>
        </div>
        <ul class="major_list">
            <li>平面设计</li>
            <li>景观设计</li>
            <li>产品设计</li>
            <li>家具设计</li>
            <li>装饰艺术</li>
            <li>首饰设计</li>
            <li>中国画</li>
            <li>版画</li>
            <li>摄影</li>
        </ul>
    </div>
</template>
<style lang="less">
@import 'search_hot.less';
</style>
<script>
export default {
    data(){
        return{

        }
        
    },
    methods:{
        cancel(){
            this.$router.push('/home_page')
        }
    }
}
</script>
