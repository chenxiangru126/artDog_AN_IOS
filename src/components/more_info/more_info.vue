<template>
    <div class="more_info">
        <!-- 头部分享按钮 -->
        <div class="header_if" >
            <div class="_save" @click="toSaveInfo">保存</div>

        </div>
        <div class="more_info_content">
            <div class="touxiang_box m1">
                <div class="word word_1"  >头像</div>
                <div class="pic pic_1">
                    <img v-if='!avatar'  @click="trigger_file" src="../../static/images/gerenzhongxintouxiang@3x.png" alt="">
                    <img v-else :src="'http://test.bjyishubiyeji.com:8080'+avatar" style="width: 3.7rem;height: 3.7rem;border-radius:50%"  @click="trigger_file"  >
                </div>
            </div>
            <div class="nicheng m1">
                <div class="word ">昵称</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..." style='color:#fff' v-model="nickName"> 
                </div>
            </div>
            <div class="xingbie m1">
                <div class="word">性别</div>
                <div class="pic">
                    <span style='color:#fff'>男</span>
                    <span>></span>
                </div>
            </div>
            <div class="shoujihao m1">
                <div class="word">手机号</div>
                <div class="pic">
                    <span v-if='!telephone' >未绑定</span>
                    <span v-else style='color:#fff'>{{telephone}}</span>
                    <span>></span>
                </div>
            </div>
            <div class="qianming m1">
                <div class="word">个性签名</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..."  v-model="signature">
                    <!-- <input v-if='!signature' type="text" placeholder="请输入..."> 
                    <input v-else type="text" v-model="signature">  -->
                </div>
            </div>
            <div class="leibie m1">
                <div class="word">类别</div>
                <div class="pic">
                    <span @click='chooseType' style='color:#fff'>学生</span>
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
        <!-- 类型选择框 -->
        <div class=""></div>
    <!-- <input type="file" class="hide file" accept="image/*" @change="upload_img"> -->
    </div>
</template>

<style  lang="less">

@import 'more_info.less';
.header_if{
    background: #232323;
    width:100%;
    position: fixed;
    z-index: 100;
    text-align: center;
    top:1.25rem;

    ._save{
        width: 4rem;
        height: 2.933333rem;
        position: absolute;
        right: 0;
        top: 0;
        color: #fff;
        line-height: 2.933333rem;
    }

}
</style>


<script>

import '../../znt.js' ;

export default {



    data(){
        return{
            avatar:null,
            nickName:'',
            telephone:'',
            signature:'',
        }

    },
    created(){
        // 初始化信息加载
        this.util.ajax.get('/admin/sysUser/getUserById.do?alert=0').then(e=> {
            this.nickName = e.bean.nickName
            this.telephone = e.bean.phone
            this.signature = e.bean.signature
            this.avatar = e.bean.photo	
            
         }) 
        
    },
    methods:{ 
        // 上传头像
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
        },
        // 选择类别
        chooseType(){

        },
        // 保存信息
        toSaveInfo(){

        }
            


    }
    
}
</script>


