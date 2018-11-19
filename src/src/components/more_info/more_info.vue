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
                    <span style='color:#fff'>
                        <select  v-on:change="chooseSex" v-model="indexId" >
                            <option v-for="item in sexList" v-bind:value="item.indexId" :key='item.label'>{{item.name}}</option>
                        </select>
                    </span>
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
                    <input type="text" placeholder="请输入..." v-model="school_name" > 
                </div>
            </div>
            <div class="aihao m1">
                <div class="word ">兴趣爱好</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..." v-model="interest"> 
                </div>
            </div>
            <div class="xingming m1">
                <div class="word">真实姓名</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..." v-model="realname"> 
                </div>
            </div>
            <div class="zhengjian m1">
                <div class="word">证件号码</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..." v-model="IDCard"> 
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
            avatar:null,//头像
            nickName:'',//昵称
            telephone:'',//手机号
            signature:'',//个性标签
            sexList: [//性别
                        {
                            indexId: 0,
                            name: '女'
                        },
                        {
                            indexId: 1,
                            name: '男'
                        },
            ],
            sex_id:null,
            info_id:null,//用户ID
            realname:null,//真实姓名
            indexId:null,
            school_name:null,//学校
            interest:null,//兴趣爱好
            IDCard:null//身份证
        }

    },
    created(){
        // 初始化信息加载
        this.util.ajax.get('/admin/sysUser/getUserById.do?alert=0').then(e=> {
            this.nickName = e.bean.nickName
            this.telephone = e.bean.phone
            this.signature = e.bean.signature
            this.avatar = e.bean.photo	
            this.info_id = e.bean.id
            this.realname = e.bean.realname
            this.sex_id = e.bean.sex
            this.school_name = e.bean.sex
            this.interest = e.bean.interest
            this.IDCard = e.bean.IDCard
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
        //选择性别
        chooseSex(event){
            
            this.sex_id = event.target.value
            // if(this.sex_id==1){
            //     this.label = '男'
            // }
            // console.log(event)
        },
        // 选择类别
        chooseType(){

        },
        // 保存信息
        toSaveInfo(){
            let _p = {
                id:this.info_id,
                realname:this.realname,
                sex:this.sex_id,
                school_name:this.school_name,
                interest:this.interest,
                IDCard:this.IDCard
            }
            this.util.ajax.post('/admin/users/save.do',_p).then(e=> {
                if(e.success == true){
                    this.Toast(e.msg)
                    this.$router.push('/personal_center')
                    console.log(e.msg)
                }
            })
        }
            


    }
    
}
</script>


