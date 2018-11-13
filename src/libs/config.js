let common_param = {};
let userToken ={}
import {isAndroidOrIos} from './tools';
const get_usr_info=resolve=>{
    if(isAndroidOrIos()==-1||/localhost/.test(location.href)){
        common_param = {
            // token: "096327b8-1cef-4103-bc6d-1dde3d594be300",
            // mobile:"15865126812",
            // token: "",
            // userId:"096327b8-1cef-4103-bc6d-1dde3d594be300",
            // mobile:""
        };
    }else{
        // try {
        //     if (!window.jsondata) {
        //       setTimeout(function(){
        //         var infos = iosObject.getUserInfo();
        //         let userInfo = infos;
        //         var json = eval('(' + userInfo + ')');
        //          window.jsondata = json;
        //          common_param = {
        //             token: json.token || '',
        //             userId: json.userId,
        //             mobile: json.phone
        //         };
        //         return common_param;
        //       },500)
        //     } else  {
        //         return {
        //             token: window.jsondata.token,
        //             userId: window.jsondata.userId,
        //             mobile: window.jsondata.phone
        //         };
        //     }
        // } catch (error) {
        //     alert(error);
        // }
        try {
            
            if (!window.jsondata) {
                znt.getCacheUserInfo({
                    // userId:"111",
                    success:function(res){
                        alert("登录状态"+"用户信息"+res.userInfo.token+res.userInfo.mobile);
                        // if(res.userInfo.token){
                            userToken = {
                                token: res.userInfo.token || '',
                                userId: res.userInfo.userId,
                                mobile: res.userInfo.mobile
                            };
                            // alert('如果没有tokeN__userToken'+userToken.token)
                            // return userToken;
                            var infos = userToken;
                            // alert('赋值给userInfo'+infos.userId)
                            let userInfo = infos;
                            // var json = eval('(' + userInfo + ')');
                            var json = eval(userInfo);
                             window.jsondata = json;
                             common_param = {
                                token: json.token || '',
                                userId: json.userId,
                                mobile: json.phone
                            };
                            // alert('调用的token'+common_param.token)
                            return common_param;
                        // }else{
                        //     alert('没有获取到缓存token')
                            
                        // }
                        // return common_param;
                        
                    },
                    fail:function(res){
                        alert(res.msg)
                        },
                    cancel:function(){
                    }
                            
                })

            // return common_param;
            } else {
                return {
                    token: window.jsondata.token,
                    userId: window.jsondata.userId,
                    mobile: window.jsondata.phone
                };
            }
            return common_param;
        } catch (error) {
            alert(error);
        }
    }
  
    return common_param;
}
export default get_usr_info;
