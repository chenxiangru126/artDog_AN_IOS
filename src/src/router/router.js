 /* 
 @1 goods：商品相关／购物车
 @2 order：我的订单
 @3 store_abouts：商店资料／店铺申请流程
 @4 wallet：钱包
 @5 recevie_address：地址管理
 */
 import goods from './routes/goods';
 import order from './routes/order';
 import store_abouts from './routes/store_abouts';
 import wallet from './routes/wallet';
 import register from './routes/register'
 import data from './routes/data';
 import dizhi from './routes/dizhi';
 import cuowu from './routes/teshu';
 import copyright from './routes/copyright';
 import home_page from './routes/home_page';//首页
 import personal_center from'./routes/personal_center';//个人中心
 import login from './routes/login';

 export default [
     ...goods,
     ...order,
     ...store_abouts,
     ...wallet,
     ...register,
     ...data,
     ...dizhi,
     ...cuowu,
     ...copyright,
     ...home_page,
     ...personal_center,
     ...login,
 ];
 