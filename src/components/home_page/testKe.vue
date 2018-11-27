<template>
  <div class="switch">
      <!-- 图片展示 -->
      <img style="width:50px;height:50px;display: block;" :src="avatar" alt="">
      <!-- 缓存数据按钮 -->
      <button @click='test1'>缓存数据</button>
      
      <!-- 获取缓存数据按钮 -->
      <button @click='test2'>获取缓存数据</button>
    
      <!-- 缓存文件按钮 -->
      <button @click='test3'>缓存文件</button>

      <!-- 添加用户名密码到缓存按钮 -->
      <button @click='addUser'>添加用户名密码</button>

      <!-- 退出登录按钮 -->
      <button @click='logout'>退出登录</button>

      <!-- 删除用户按钮 -->
      <button @click='deleteUser'>删除用户</button>

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
        
      <!-- 微信分享 -->
      <button @click='test17'>微信分享</button>

      <!-- 朋友圈分享 -->
      <button @click='testfriend'>朋友圈分享</button>
        
      <!-- 获取通讯录按钮 -->
      <button @click='test18'>获取通讯录</button>

      <!-- 打开地图按钮 -->
      <button @click='test19'>打开地图</button>

      <!-- 关闭APP按钮 -->
      <button @click='test20'>关闭APP</button>

     
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
        // znt.statusBarStyle({

        //         // userId:"111",
        //         style:'Light',
                
        //         success:function(res){

        //             alert(res.msg);
        //         },
        //         fail:function(res){
        //             alert(res.msg)
        //         },
        //         cancel:function(){
        //         }
        //         });

    },

    methods:{
        // 缓存数据方法
        test1(){
            znt.cacheUserInfo({

                // userId:"111",
                token:'fd1e37eb-b9a8-4744-908a-d32abd472eea',
                userId: 'fd1e37eb-b9a8-4744-908a-d32abd472eea',
                mobile: '15210602450',
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
        // 获取缓存数据
        test2(){
            znt.getCacheUserInfo({
                // userId:"111",
                success:function(res){
                alert("登录状态"+res.isLogin+"用户列表:::"+res.userList[0].account+res.userList[0].password+"用户信息"+res.userInfo.token+res.userInfo.userId+res.userInfo.mobile);
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
                // userId:"111",
                fileUrl:'http://test.bjyishubiyeji.com:8080/admin/authCopyright/upload.do',
                targetFilePath:'',
                success:function(res){
                console.log("成功"+res.msg);
                },
                fail:function(res){
                alert("失败"+res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 缓存用户名密码
        addUser(){
            znt.cacheUserAccount({
                account	:"ZRJ",
                password:'12345678',
                success:function(res){
                    console.log("成功"+res.msg);
                alert("成功"+res.msg);
                },
                fail:function(res){
                alert("失败"+res.msg)
                },
                cancel:function(){
                }
                });
        },
        // 退出登录
        logout(){
            znt.logout({
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
        // 删除用户
        deleteUser(){
            
            znt.deleteUserAccount({
                account	:"ZRJ",
                success:function(res){
                alert("成功"+res.msg);
                alert("列表"+res.userList);
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
                nonstop:1,
                soundType:'internet',
                pathUrl:"http://www.ytmp3.cn/down/54084.mp3",
                success:function(res){
                console.log(res.msg);
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
                console.log("x"+res.x+"y"+res.y+"z"+res.z);
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
                nonstop:'1',
                success:function(res){
                
                console.log('city'+res.city+'latitude'+res.latitude+'longitude'+res.longitude)
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
                uploadUrl:"http://59.110.169.175:8080/admin/authCopyright/upload.do",
                success:function(res){
                    console.log(res.imgUrl)
                    this.avatar= res.imgUrl; //
                    
                    // alert(this.avatar);
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
                    console.log(res.resCode)
                },
                fail:function(res){
                    alert(res.msg)
                }
            });
        },
        // 微信分享
        test17(){
            znt.share({
                platForm:'wx',
                title:'艺狗APP',
                desc:'一个专为设计家打造的艺术品电商平台，涵盖艺术类、版权产品、平台服务的电子商务平台',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542694415495&di=0ace189b351584bdb4466032dccde7bc&imgtype=0&src=http%3A%2F%2Fpic.downcc.com%2Fupload%2F2018-1%2F201818959246216.jpg',
                link:'www.baidu.com',
                success:function(res){
                    console.log(res.msg)
                },
                fail:function(res){
                    alert(res.msg)
                }
            });
        },
        // 朋友圈分享
        testfriend(){
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
        // 通讯录
        test18(){
            znt.contactList({
                success:function(res){
                    alert('联系人：：：'+res.list[0])
                    alert('xingming+++'+res.list[0].name,'手机+++'+res.list[0].phone)
                },
                fail:function(res){
                    alert(res.msg)
                }
            });
        },
        //打开地图
        test19(){
            znt.openMap({
                // success:function(res){
                //     alert('联系人：：：'+res.list[0])
                //     alert('xingming+++'+res.list[0].name,'手机+++'+res.list[0].phone)
                // },
                // fail:function(res){
                //     alert(res.msg)
                // }
            });
        },
        //打开地图
        test20(){
            znt.closeApp({
               
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