(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{153:function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reg1_wrap"},[r("div",{staticClass:"header_b"},[r("div",{staticClass:"ios_log"}),t._v(" "),r("div",{staticClass:"w rela"},[r("div",{staticClass:"_left",on:{click:t.back_event}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1==t.shoptype,expression:"shoptype == 1"}],staticClass:"w t-c _center",staticStyle:{color:"#41BCA1"}},[t._v(t._s(t.title_name))]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:2==t.shoptype,expression:" shoptype == 2"}],staticClass:"w t-c _center",staticStyle:{color:"#92C25D"}},[t._v(t._s(t.title_name))])])]),t._v(" "),r("div",{staticClass:"reg1_detail"},[r("div",{directives:[{name:"show",rawName:"v-show",value:1==t.shoptype,expression:"shoptype == 1"}]},[r("h3",[t._v("开店资格")]),t._v(" "),r("span",[t._v("1、一个身份证只能创建一个艺狗网店")]),r("br"),t._v(" "),r("span",[t._v("2、个人网店，开店主体为自然人，该自然人需满16周岁")]),r("br"),t._v(" "),r("span",[t._v("3、在正常经营过程中，符合一定的要求可变更网店经营主体")]),r("br"),t._v(" "),r("span",[t._v("4、个人网店，包括自然人开店或自然人所登记的个体工商户开店的，该自然人即为店铺负责人")]),r("br"),t._v(" "),r("span",[t._v("5、网店负责人认证需按系统要求提供本人真实有效的身份信息，包括但不限于：身份信息有效联系方式、真实地址等")]),r("br"),t._v(" "),r("span",[t._v("6、开店需缴纳不同等级的保证金")]),r("br"),t._v(" "),r("span",[t._v("7. 如需保证金的级别调整请于平台联系 客服电话 010-5962 6817")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:2==t.shoptype,expression:"shoptype == 2"}]},[r("h3",[t._v("开店资格")]),t._v(" "),r("span",[t._v("1.除个体工商户外，其他基于营业执照信息通过认证的开店主体所开设的网店为企业网店")]),r("br"),t._v(" "),r("span",[t._v("2.企业网店的网店责任人包含但不限于：该企业的法人股东等，其需要对该店铺的运营及管理全面负责")]),r("br"),t._v(" "),r("span",[t._v("3.企业网店，其网店负责人需满18周岁")]),r("br"),t._v(" "),r("span",[t._v("4.网店负责人认证需按系统要求提供本人真实有效的身份信息，包括但不限于：身份信息、有效联系方式、真实地址等")]),r("br"),t._v(" "),r("span",[t._v("5.开店需缴纳不同等级的保证金")]),r("br"),t._v(" "),r("span",[t._v("6.如需保证金的级别调整请于平台联系客服电话 010-5962 6817")])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1==t.shoptype,expression:"shoptype == 1"}],staticClass:"detail"},[r("div",{staticClass:"wrap_two"},[r("p",[t._v("网店类型")]),t._v(" "),r("form",{staticClass:"reg1_lei"},[r("table",{staticClass:"table_wrap",attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[t._m(0),t._v(" "),t._l(t.list_person,function(e,i){return r("tr",{key:i},[r("td",{staticStyle:{"border-bottom":".0625rem solid #646464","border-left":".0625rem solid #646464"}},[t._v(t._s(e.model))]),t._v(" "),r("td",{staticStyle:{"border-bottom":".0625rem solid #646464","border-left":".0625rem solid #646464"}},[t._v(t._s(e.money))]),t._v(" "),r("td",{staticStyle:{"border-bottom":".0625rem solid #646464","border-left":".0625rem solid #646464","border-right":".0625rem solid #646464"}},[t._v(t._s(e.fomart1))]),t._v(" "),r("td",{staticStyle:{border:"0"}},[r("div",{staticClass:"circle",on:{click:function(r){t.dianji(i,t.model=e.model,t.shop_type_id=e.id)}}},[r("span",{staticClass:"dian",class:{active:t.isActive===i}})])])])})],2)])]),t._v(" "),r("button",{staticClass:"reg1_btn",on:{click:t.sure_person}},[t._v("确定")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:2==t.shoptype,expression:"shoptype == 2"}],staticClass:"detail"},[r("div",{staticClass:"wrap_two"},[r("p",[t._v("网店类型")]),t._v(" "),r("form",{staticClass:"reg1_lei"},[r("table",{staticClass:"table_wrap",attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[t._m(1),t._v(" "),t._l(t.list_coms,function(e,i){return r("tr",{key:i},[r("td",{staticStyle:{"border-bottom":".0625rem solid #646464","border-left":".0625rem solid #646464"}},[t._v(t._s(e.model))]),t._v(" "),r("td",{staticStyle:{"border-bottom":".0625rem solid #646464","border-left":".0625rem solid #646464"}},[t._v(t._s(e.money))]),t._v(" "),r("td",{staticStyle:{"border-bottom":".0625rem solid #646464","border-left":".0625rem solid #646464","border-right":".0625rem solid #646464"}},[t._v(t._s(e.fomart1))]),t._v(" "),r("td",{staticStyle:{border:"0"}},[r("div",{staticClass:"circle",on:{click:function(r){t.dianji(i,t.model=e.model,t.shop_type_id=e.id)}}},[r("span",{staticClass:"dian",class:{active:t.isActive===i}})])])])})],2)])]),t._v(" "),r("button",{staticClass:"reg1_btn",on:{click:t.sure_com}},[t._v("确定")])])])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{width:"17%","border-top":".0625rem solid #646464","border-left":".0625rem solid #646464","border-bottom":".0625rem solid #646464"}},[this._v("类别")]),this._v(" "),e("td",{staticStyle:{width:"17%","border-top":".0625rem solid #646464","border-left":".0625rem solid #646464","border-bottom":".0625rem solid #646464"}},[this._v("保证金")]),this._v(" "),e("td",{staticStyle:{width:"17%","border-top":".0625rem solid #646464","border-left":".0625rem solid #646464","border-right":".0625rem solid #646464","border-bottom":".0625rem solid #646464"}},[this._v("规格")]),this._v(" "),e("td",{staticStyle:{width:"15%",border:"0"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{width:"20%","border-top":".0625rem solid #646464","border-left":".0625rem solid #646464","border-bottom":".0625rem solid #646464"}},[this._v("类别")]),this._v(" "),e("td",{staticStyle:{width:"20%","border-top":".0625rem solid #646464","border-left":".0625rem solid #646464","border-bottom":".0625rem solid #646464"}},[this._v("保证金")]),this._v(" "),e("td",{staticStyle:{width:"28%","border-top":".0625rem solid #646464","border-left":".0625rem solid #646464","border-right":".0625rem solid #646464","border-bottom":".0625rem solid #646464"}},[this._v("规格")]),this._v(" "),e("td",{staticStyle:{width:"15%",border:"0"}})])}]},345:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".reg1_wrap{font-family:PingFangSC-Semibold;position:relative;bottom:1.333333rem}.reg1_wrap .reg1_detail{width:22rem;margin:1rem auto 3.125rem;-webkit-clip-path:polygon(13px 0,calc(100% - 13px) 0,100% 13px,100% calc(100% - 13px),calc(100% - 13px) 100%,13px 100%,0 calc(100% - 13px),0 13px);background:#424242;color:#9e9e9e;padding:.666667rem;box-sizing:border-box;line-height:1.066667rem;text-indent:2rem;text-align:justify}.reg1_wrap .reg1_detail>div>h3{font-size:1rem;text-align:center}.reg1_wrap .reg1_detail>div>span{font-size:.8rem;line-height:1.066667rem}.reg1_wrap .detail{position:relative;bottom:2.5rem}.reg1_wrap .detail .wrap_two>p{position:relative;font-size:1.125rem;color:#fff;margin:1rem auto .75rem;text-align:center}.reg1_wrap .detail .wrap_two .reg1_lei{width:22rem;margin:0 auto 3.125rem;-webkit-clip-path:polygon(13px 0,calc(100% - 13px) 0,100% 13px,100% calc(100% - 13px),calc(100% - 13px) 100%,13px 100%,0 calc(100% - 13px),0 13px);background:#424242;font-size:12px;color:#9e9e9e;letter-spacing:.12px;padding:.625rem 0;padding-left:.6875rem;box-sizing:border-box}.reg1_wrap .detail .wrap_two .reg1_lei .table_wrap{width:100%}.reg1_wrap .detail .wrap_two .reg1_lei .table_wrap>tr{height:3.125rem}.reg1_wrap .detail .wrap_two .reg1_lei .table_wrap>tr>td{text-align:center;vertical-align:middle}.reg1_wrap .detail .wrap_two .reg1_lei .table_wrap>tr>td .circle{width:1.125rem;height:1.125rem;border:.0625rem solid #9e9e9e;border-radius:50%;position:relative;margin:0 auto}.reg1_wrap .detail .wrap_two .reg1_lei .table_wrap>tr>td .circle .dian{width:.625rem;height:.625rem;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.reg1_wrap .detail .wrap_two .reg1_lei .table_wrap>tr>td .circle .active{background:#4a90e2}.reg1_wrap .detail .wrap_two .reg1_lei .table_wrap>tr:first-child{height:2.1875rem}.reg1_wrap .detail .reg1_btn{width:18.875rem;height:2.375rem;background:#d1324e;box-shadow:0 .125rem .625rem 0 rgba(0,0,0,.5);border-radius:5.4375rem;border:0;outline:none;display:block;font-size:1.25rem;color:#fff;letter-spacing:.625rem;text-align:center;margin:2.9375rem auto 0;position:fixed;bottom:0;margin-left:3rem}.reg1_wrap .show{display:none}",""])},346:function(t,e,r){var i=r(345);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,r(1).default)("35eec40b",i,!0,{})},471:function(t,e,r){"use strict";r.r(e);var i=r(69),o=r.n(i);for(var s in i)"default"!==s&&function(t){r.d(e,t,function(){return i[t]})}(s);var a=r(153),l=r(0);var d=function(t){r(346)},p=Object(l.a)(o.a,a.a,a.b,!1,d,null,null);e.default=p.exports},69:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=this,e=this.$route.query.shoptype;this.shoptype=e,this.title_name=1==e?"个人网店说明":"企业网店说明",this.util.ajax.post("/mall/shop_type/getList.do").then(function(e){var r=e.data,i=r.filter(function(t){if(2==t.shoptype)return t}),o=r.filter(function(t){if(1==t.shoptype)return t});t.list_coms=i,t.list_person=o}).catch()},data:function(){return{shoptype:null,list_person:[],isActive:0,list_coms:[],title_name:null,model:"A",shop_type_id:1}},methods:{back_event:function(){this.$router.push("/register")},dianji:function(t,e,r){this.isActive=t,this.model=e,this.shop_type_id=r},sure_person:function(){var t=this.model,e=this.shoptype,r=this.shop_type_id;this.$router.push("/register2?shoptype="+e+"&model="+t+"&shop_type_id="+r);var i={model:t,shoptype:e,shop_type_id:r};this.util.ajax.post("/mall/shop/editShop.do",i).then(function(t){})},sure_com:function(){var t=this.model,e=this.shoptype,r=this.shop_type_id;this.$router.push("/register2?shoptype="+e+"&model="+t+"&shop_type_id="+r);var i={model:t,shoptype:e,shop_type_id:r};this.util.ajax.post("/mall/shop/editShop.do",i).then(function(t){})}}}}}]);