<template>
    <div class="more_info">
        <div class="more_info_content">
            <div class="touxiang_box m1">
                <div class="word word_1"  >头像</div>
                <div class="pic pic_1">
                    <img :src="avatar" style="width: 3.7rem;height: 3.7rem;border-radius:50%"  @click="trigger_file"  >
                </div>
            </div>
            <div class="nicheng m1">
                <div class="word ">昵称</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..."> 
                </div>
            </div>
            <div class="xingbie m1">
                <div class="word">性别</div>
                <div class="pic">
                    <span>男</span>
                    <span>></span>
                </div>
            </div>
            <div class="shoujihao m1">
                <div class="word">手机号</div>
                <div class="pic">
                    <span>未绑定</span>
                    <span>></span>
                </div>
            </div>
            <div class="qianming m1">
                <div class="word">个性签名</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..."> 
                </div>
            </div>
            <div class="leibie m1">
                <div class="word">类别</div>
                <div class="pic">
                    <span>学生</span>
                    <span>></span>
                </div>
            </div>
            <div class="xuexiao m1">
                <div class="word">学校名称</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..."> 
                </div>
            </div>
            <div class="aihao m1">
                <div class="word ">兴趣爱好</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..."> 
                </div>
            </div>
            <div class="xingming m1">
                <div class="word">真实姓名</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..."> 
                </div>
            </div>
            <div class="zhengjian m1">
                <div class="word">证件号码</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..."> 
                </div>
            </div>
        </div>
    <!-- <input type="file" class="hide file" accept="image/*" @change="upload_img"> -->
    </div>
</template>

<style  lang="less">

@import 'more_info.less';

</style>


<script>

import '../../znt.js' ;

export default {



    data(){
        return{
        avatar:null,
        }

    },
    methods:{
        trigger_file() {
            // debugger
            znt.selectImage({
                uploadUrl:"http://test.bjyishubiyeji.com:8080/admin/authCopyright/upload.do",
                success:function(res){
                    this.avatar= res.imgUrl; //
                    alert(res.imgUrl)
                    alert(this.avatar);
                },
                fail:function(res){
                    alert(res.msg)
                }
            });
}
            


    }
    
}
</script>


