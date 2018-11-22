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
                <div class="word">昵称</div>
                <div class="pic">
                    <input type="text" placeholder="请输入..." style='color:#fff' v-model="nickName"> 
                </div>
            </div>
            <div class="xingbie m1">
                <div class="word">性别</div>
                <div class="pic">
                    <span v-if="!state_name" style='color:#fff' @click="text">请选择</span>
                    <span v-else-if="state_name" style='color:#fff' @click="text">{{sex == 1 ? '男':'女'}}</span>
                    <span>></span>
                    <transition name="boom">
                        <div class="thickness" v-show="isSex">
                            <p class="thickness_name">性别<img @click="cl_img2" src="../../static/images/guanbi.png"/> </p>
                            <!-- 这里是发表状态的标题 -->
                            <p class="thickness_fl">
                                <span :class=" choose_co ?'th_xz':''">{{pleaseChoose}}</span>
                            </p>
                            <!-- 这里是发表状态的内容 -->
                            <div class="thickness_m">
                            <p v-for="(item, index ) in listState" :key="index" @click="click_in_state(index)">{{item.name}}</p>  
                            </div>
                        </div>
                    </transition>
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
                    <span v-if="!identity" style='color:#fff' @click="text_Lb">请选择</span>
                    <span v-else-if="identity" style='color:#fff' @click="text_Lb">{{identity}}</span>
                    <span>></span>
                    <transition name="boom">
                        <div class="thickness" v-show="isShowLb">
                            <p class="thickness_name">类别<img @click="cl_img3" src="../../static/images/guanbi.png"/> </p>
                            <!-- 这里是发表状态的标题 -->
                            <p class="thickness_fl">
                                <span :class=" choose_co1 ?'th_xz':''">{{Choose_Lb}}</span>
                            </p>
                            <!-- 这里是发表状态的内容 -->
                            <div class="thickness_m">
                            <p v-for="(item, index ) in listLb" :key="index" @click="chooseType(index)">{{item.name}}</p>  
                            </div>
                        </div>
                    </transition>
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
.boom-enter-active{//boom 是过渡名称 in,out是两个动画，动画写到进入和离开结束的class中
animation:in .5s;
}
.boom-leave-active{
animation:out .5s;
}
@keyframes  in {//in动画
0% {
    // transform: scale(2);
    left:0px; bottom:-150px;
    animation-timing-function: ease;
  opactity:0;
  animation-duration: .2s;
  }
//   50% {
//       left:0px; bottom:-80px;
//       animation-timing-function: linear;
//       animation-duration: 1s;
//     // transform: scale(1.5);
// opactity:0.5;
//   }
  100% {
      left:0px; bottom:0px;
      animation-duration: .2s;
      animation-timing-function: ease;
    // transform: scale(1);
opactity:1;
  }
}
@keyframes  out {//out 动画
0% {
      left:0px; bottom:0px;
      animation-duration: .2s;
      animation-timing-function: ease;
      opactity:1;
  }
  100% {
     left:0px; bottom:-400px;
     animation-timing-function: ease;
     animation-duration: .2s;
     opactity:0;
  }
}
</style>


<script>
// import { Picker } from 'mint-ui';
// Vue.component(Picker.name, Picker);

 

import '../../znt.js' ;

export default {



    data(){
        return{
            avatar:null,//头像
            nickName:'',//昵称
            telephone:'',//手机号
            signature:'',//个性标签
            sex_id:null,
            info_id:null,//用户ID
            realname:null,//真实姓名
            indexId:null,
            school_name:'',//学校
            interest:null,//兴趣爱好
            IDCard:null,//身份证
            identity:null,//类别
            //
            //选择性别
            pleaseChoose:'请选择',
            isSex:false,//
            choose_co:true,
            sex:null,
            listState:null,
            state_name: this.sex == 0 ? '女' : '男',
            

            //选择类别
            isShowLb:false,
            Choose_Lb:'请选择',
            choose_co1:true,
            listLb:null,


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
            this.sex = e.bean.sex
            this.school_name = e.bean.school_name
            this.interest = e.bean.interest
            this.IDCard = e.bean.IDCard
            this.identity = e.bean.identity
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
        
        //选择性别
        // chooseSex(){
            
            // this.sex_id = event.target.value
            
            // if(this.sex_id==1){
            //     this.label = '男'
            // }
            // console.log(event)
        // },
       // 以下是选择性别弹出层
           cl_img2(){
               this.isSex = false
           },
           text(){
              this.isSex = true;
              this.flstate = '请选择';
              this.choose_co = true;
              let  state_list =[
                  {id:0,name:'女'},
                  {id:1,name:'男'}
              ];
              
              
              this.listState = state_list;

           },
           click_in_state(e){
            //  选择的index获取name在显示
              let list = this.listState;
             this.state_name =list[e].name;
             this.sex =list[e].id;
              this.isSex = false;

           },
           //以下是选择类别弹出层
           cl_img3(){
               this.isShowLb = false
           },
           text_Lb(){
              this.isShowLb = true;
              this.flstate = '请选择';
              this.choose_co1 = true;
              let  Lb_list =[
                  {id: 0, name: '学生'},
                  {id:1,name:'社会'},
                  {id:2,name:'企业'},
              ];
              
              
              this.listLb = Lb_list;

           },
           chooseType(e){
            //  选择的index获取name在显示
              let list1 = this.listLb;
             this.identity =list1[e].name;
              this.isShowLb = false;

           },
           // 保存信息
        toSaveInfo(){
            let _p = {
                id:this.info_id,
                realname:this.realname,
                sex:this.sex,
                school_name:this.school_name,
                interest:this.interest,
                IDCard:this.IDCard,
                phone:this.telephone,
                identity:this.identity,
                nickName:this.nickName,
                signature:this.signature
                
            }
            this.util.ajax.get('/admin/users/save.do?realname='+this.realname+'&sex='+this.sex+'&id='+this.info_id+'&school_name='
            +this.school_name+'&interest='+this.interest+'&IDCard='+this.IDCard+'&phone='+this.telephone+'&identity='+this.identity+
            '&nickName='+this.nickName+'&signature='+this.signature).then(e=> {
                if(e.success == true){
                    this.Toast(e.msg)
                    // this.$router.push('/personal_center')
                    // console.log(e.msg)
                }
            })
        },
                


    }
    
}
</script>


