<template>
    <div class="invite_content">
        <div class="invite_box">
            <img src="../../static/images/yaoqinggou@2x.png">
        </div>
        <div class="word_content">
            <div class="word_top">·&nbsp;&nbsp;邀请好友&nbsp;&nbsp;·</div>
            <img src="../../static/images/xianxian@x2.png" >
            <div class="word_bottom">分享给好友，邀请加入艺术世界</div>
        </div>
        <div class="fenxiang_box">
            <p class="pp1"></p>
            <span class="word_fenxiang">分享到</span>
            <p class="pp1"></p>
        </div>
        <div class="fenxiang_pic">
            <span @click='inviteFriends'><img src="../../static/images/pengyouquan@2x.png" ></span>
            <span @click='inviteWx'><img src="../../static/images/weixin@2x.png" ></span>
            <!-- <span @click='inviteQQ'><img src="../../static/images/QQ@2x.png" ></span>
            <span @click='inviteSina><img src="../../static/images/weibo@2x.png" ></span> -->
        </div>
    </div>
</template>

<style lang="less">
    @import 'invite.less';
</style>

<script>
import '../../znt.js' ;
export default {
    methods:{
        inviteFriends(){
            znt.share({
                platForm:'wx_circle',
                title:'艺狗APP',
                desc:'一个专为设计家打造的艺术品电商平台，涵盖艺术类、版权产品、平台服务的电子商务平台',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542694415495&di=0ace189b351584bdb4466032dccde7bc&imgtype=0&src=http%3A%2F%2Fpic.downcc.com%2Fupload%2F2018-1%2F201818959246216.jpg',
                link:'www.baidu.com',
                success:function(res){
                    alert(res.msg)
                },
                fail:function(res){
                    alert(res.msg)
                }
            });
        },
        inviteWx(){
            znt.share({
                platForm:'wx',
                title:'艺狗APP',
                desc:'一个专为设计家打造的艺术品电商平台，涵盖艺术类、版权产品、平台服务的电子商务平台',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542694415495&di=0ace189b351584bdb4466032dccde7bc&imgtype=0&src=http%3A%2F%2Fpic.downcc.com%2Fupload%2F2018-1%2F201818959246216.jpg',
                link:'www.baidu.com',
                success:function(res){
                    alert(res.msg)
                },
                fail:function(res){
                    alert(res.msg)
                }
            });
        },
    }
}
</script>

