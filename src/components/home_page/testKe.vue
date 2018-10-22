<template>
  <div class="switch">
      <img style="width:50px;height:50px;display: block;" :src="'http://test.bjyishubiyeji.com:8080'+avatar" alt="">
      <!-- 缓存数据按钮 -->
      <button @click='test1'>缓存数据</button>
      
      <!-- 获取缓存数据按钮 -->
      <button @click='test2'>获取缓存数据</button>
    
      <!-- 缓存文件按钮 -->
      <button @click='test3'>缓存文件</button>

      <!-- 添加用户名密码到缓存按钮 -->
      <button @click='addUser'>添加用户名密码</button>

      <!-- 打电话按钮 -->
      <button @click='test4'>打电话</button>

      <!-- 获取手机标识按钮 -->
      <button @click='test5'>获取手机标识</button>

      <!-- 播放声音按钮 -->
      <button @click='test6'>播放声音</button>

      <!-- 陀螺仪按钮 -->
      <button @click='test7'>陀螺仪</button>
        
      <!-- 关闭陀螺仪按钮 -->
      <button @click='test8'>关闭陀螺仪</button>
        
      <!-- 指纹验证按钮 -->
      <button @click='test9'>指纹验证</button>
        
      <!-- 获取位置按钮 -->
      <button @click='test10'>获取位置</button>
        
      <!-- QQ登录按钮 -->
      <button @click='test11'>QQ登录</button>
        
      <!-- 微信登录按钮 -->
      <button @click='test12'>微信登录</button>
        
      <!-- 网络状态按钮 -->
      <button @click='test13'>网络状态</button>
        
      <!-- 相机按钮 -->
      <button @click='test14'>相机相册</button>
        
      <!-- 震动按钮 -->
      <button @click='test15'>震动</button>
        
      <!-- 扫码按钮 -->
      <button @click='test16'>扫码</button>
  </div>
  
</template>

<script>
  import util from '../../libs/util.js'
  import '../../znt.js' ;
  export default {
    data(){
       return{
           avatar:null
       } 
    },

    //判断是否有店铺
    mounted(){
    
    },

    methods:{
        // 缓存数据方法
        test1(){
            znt.cacheUserInfo({

                // userId:"111",
                nickName:'小花',
                phone:'15574637892',
                success:function(res){

                    alert(res.nickName+res.phone);
                },
                fail:function(res){
                    alert(res.msg)
                },
                cancel:function(){
                }
                });

        },
        // 获取缓存数据
        test2(){
            znt.getCacheUserInfo({
                // userId:"111",
                success:function(res){
                alert("nickName"+res.nickName+"phone"+res.phone);
                },
                fail:function(res){
                alert(res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 缓存文件
        test3(){
            znt.cacheFile({
                userId:"111",
                fileUrl:'http://test.bjyishubiyeji.com:8080/admin/authCopyright/upload.do',
                targetFilePath:'',
                success:function(res){
                alert("成功"+res.msg);
                },
                fail:function(res){
                alert("失败"+res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 缓存文件
        addUser(){
            znt.cacheUserAccount({
                account	:"ZRJ",
                password:'12345678',
                targetFilePath:'',
                success:function(res){
                alert("成功"+res.msg);
                },
                fail:function(res){
                alert("失败"+res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 打电话功能
        test4(){
            znt.call({
                phone:'15275063520',
                success:function(res){
                alert(res.msg);
                },
                fail:function(res){
                alert(res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 获取手机标识
        test5(){
            znt.uniquelyIdentifies({
                success:function(res){
                alert(res.equipment+res.uniquelyIdentifies);
                },
                fail:function(res){
                alert(res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 播放声音
        test6(){
            znt.playSound({
                nonstop:'1',
                soundType:'internet',
                pathUrl:'http://www.abstractpath.com/files/audiosamples/sample.mp3',
                success:function(res){
                alert(res.msg);
                },
                fail:function(res){
                alert(res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 陀螺仪
        test7(){
            znt.gyro({
                nonstop:1,
                
                success:function(res){
                alert("x"+res.x+"y"+res.y+"z"+res.z);
                },
                fail:function(res){
                alert(res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 关闭陀螺仪
        test8(){
            znt.closeGyro({
                
                // success:function(res){
                //  alert('成功关闭')
                // },
                // fail:function(res){
                //  alert('错误')
                // },
                // cancel:function(){
                // }
                });
        },
        // 指纹验证
        test9(){
            znt.fingerprintVerification({
                
                success:function(res){
                 alert(res.msg)
                },
                fail:function(res){
                 alert(res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 获取位置
        test10(){
            znt.getLocation({
                
                success:function(res){
                
                 alert('city'+res.city+'latitude'+res.latitude+'longitude'+res.longitude)
                },
                fail:function(res){
                 alert(res.msg)
                },
                cancel:function(){
                }
                });
        },
        // QQ登录按钮
        test11(){
            znt.thirdLogin({
                third:'qq',
                success:function(res){
                 alert(res.nickname)
                },
                fail:function(res){
                 alert(res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 微信登录按钮
        test12(){
            znt.thirdLogin({
                third:'wx',
                success:function(res){
                 alert(res.nickname)
                },
                fail:function(res){
                 alert(res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 网络状态
        test13(){
            znt.netWorkStatus({
                nonstop:1,
                success:function(res){
                 alert(res.networkStatus)
                },
                fail:function(res){
                 alert(res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 相机相册
        test14(){
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
        // 震动
        test15(){
            znt.phoneVibration({
                success:function(res){
                    alert(res.msg)
                },
                fail:function(res){
                    alert(res.msg)
                }
            });
        },
        // 扫码
        test16(){
            znt.scanCode({
                success:function(res){
                    alert(res.resCode)
                },
                fail:function(res){
                    alert(res.msg)
                }
            });
        },

    }
  }
</script>

<style lang="less">
    .switch{
        width: 100%;
        height: 100%;
        >button{
            // display: block;
            margin-top: 20px;
            width: 100px;
            margin-left: 55px;
            height: 30px;
        }
    }
</style>