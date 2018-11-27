<template>
    <div class="news_cnt">
        <div class="ts_content">
            <div class="news_cnt_bj">
                <div class="notice_cnt" @click="notification">
                    <img src="../../static/images/tongzhixiaoxi@2x.png" alt="">
                    <div class="notice_word" >通知消息</div>
                </div>
                <div class="with_me">
                    <img src="../../static/images/yuwoxiangguan@2x.png" alt="">
                    <div class="with_word" >与我相关</div>
                </div> 
            </div>
            <div class="tips">
                <div class="tips_left" v-show="hide">
                    <div class="left_num" >{{count}}</div>
                </div>
                <div class="tips_right" style="display:none"></div>
            </div>
        </div>
        
        <ul class="notice_list">
            <li class="notice_li" v-for="it in list" :key="it.id" >
                <div class="notice_head" ><img v-bind:src="it.photo"></div>
                <div class="notice_box">
                    <div class="top">
                        <div class="notice_nickname">{{it.fromName}}</div>
                        <div class="notice_time">{{it.create_date}}</div>
                    </div>
                    <div class="bottom">{{it.content}}</div>
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
            // photo:null,
            // fromName:'',
            // content:'',
            // create_date:''
            list:[],
            count:'',//未读消息数量
            hide:false//未读消息显示与隐藏

        }
    },
    mounted(){
        this.util.ajax.get('/admin/chatroom/chatInfoList.do').then(e=>{
            for(let i in e.rows){
                this.list=e.rows
            }
            // this.content = e.rows[0].content
            // this.photo = e.rows[0].photo
            // this.fromName = e.rows[0].fromName
            // this.create_date = e.rows[0].create_date
        });
        this.util.ajax.get('/admin/feedback/dataListes.do').then(e=>{
            this.count=e.count
            console.log(e.count)
            // debugger
            if(e.count>0){
                this.hide=true
                console.log(this.hide)
            }else{
                this.hide=false
                console.log(this.hide)
            }
        })
    },
    methods:{
        notification(){
            this.$router.push('/notification_message')
        }
    }
}
</script>
