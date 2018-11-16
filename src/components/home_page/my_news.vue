<template>
    <div class="news_cnt">
        <div class="news_cnt_bj">
            <div class="notice_cnt">
                <img src="../../static/images/tongzhixiaoxi@2x.png" alt="">
                <div class="notice_word" @click="notification">通知消息</div>
            </div>
            <div class="with_me">
                <img src="../../static/images/yuwoxiangguan@2x.png" alt="">
                <div class="with_word">与我相关</div>
             </div> 
        </div>
        <div class="tips">
            <div class="tips_left"></div>
            <div class="tips_right"></div>
        </div>
        <ul class="notice_list">
            <li class="notice_li">
                <div class="notice_head"></div>
                <div class="notice_box">
                    <div class="top">
                        <div class="notice_nickname">你是不是大头</div>
                        <div class="notice_time">2018/11/11</div>
                    </div>
                    <div class="bottom">今天你过得怎么样啊？</div>
                </div>
                <div ></div>
            </li>
           <li class="notice_li">
                <div class="notice_head"></div>
                <div class="notice_box">
                    <div class="top">
                        <div class="notice_nickname">你是不是大头</div>
                        <div class="notice_time">2018/11/11</div>
                    </div>
                    <div class="bottom">今天你过得怎么样啊？</div>
                </div>
                <div ></div>
            </li>
            
        </ul>
    </div>
</template>
<style lang="less">
    @import 'my_news';
</style>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        notification(){
            this.$router.push('/notification_message')
        }
    }
}
</script>
