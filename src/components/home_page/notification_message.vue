<template>
    <div class="my_msg">
        <ul class="notice_list">
            <li class="notice_li" v-for='it in list' :key='it.id'>
                <div class="notice_head" ><img src="../../static/images/gou2.png"></div>
                <div class="notice_box">
                    <div class="top">
                        <div class="notice_nickname">通知消息</div>
                        <div>
                            <div class="notice_time" v-if='news_type == 0'>{{it.create_time}}</div>
                            <div class="notice_time" v-else-if='news_type == 1'>{{it.deal_time}}</div>
                        </div>
                    </div>
                    <div class="bottom">{{it.deal_content}}</div>
                </div>
                <div ></div>
            </li>       
        </ul>
    </div>
</template>
<style lang="less">
@import 'notification_message.less';
</style>
<script>
export default {
    data(){
        return{
            list:[],
            news_type:'',//0是推送，1是反馈
        }
    },
    mounted(){
        let user_id = this.$route.query.id

        this.util.ajax.get('/admin/feedback/dataListes.do?alert=0&user_id='+user_id).then(e=>{
            this.id = e.rows[0].user_id
            for(let i in e.rows){
                this.list =e.rows
            }
        })
    }
}
</script>
