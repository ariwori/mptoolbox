(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"142":function(e,t,n){var c=n(16),a=n(146);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={"insert":("head","head"),"singleton":!1},r=(c(a,o),a.locals?a.locals:{});e.exports=r},"143":function(e,t,n){var c=n(16),a=n(148);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={"insert":("head","head"),"singleton":!1},r=(c(a,o),a.locals?a.locals:{});e.exports=r},"144":function(e,t,n){var c=n(16),a=n(150);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={"insert":("head","head"),"singleton":!1},r=(c(a,o),a.locals?a.locals:{});e.exports=r},"145":function(e,t,n){"use strict";n(142)},"146":function(e,t,n){(t=n(24)(!1)).push([e.i,".btn-fab{position:fixed;right:0.68267rem;bottom:0.68267rem;z-index:1100}",""]),e.exports=t},"147":function(e,t,n){"use strict";n(143)},"148":function(e,t,n){(t=n(24)(!1)).push([e.i,'.page{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:100vh;background-color:#f8f8f8}.doc-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:1.28rem;height:3.84rem}.doc-header__title{position:relative;height:1.92rem;color:#333;font-size:0.85333rem;font-weight:bold}.doc-header__title::after{content:"";position:absolute;left:0;bottom:0;display:inline-block;width:2.56rem;height:0.04267rem;border-radius:0.02133rem;background-color:#6190e8}.doc-body{min-height:calc(100vh - 3.84rem);background:#fff;-webkit-box-shadow:0 0.55467rem 3.47733rem 0 rgba(0,0,0,.11);box-shadow:0 0.55467rem 3.47733rem 0 rgba(0,0,0,.11);padding-bottom:1.28rem;padding-bottom:calc(constant(safe-area-inset-bottom) + 1.28rem);padding-bottom:calc(env(safe-area-inset-bottom) + 1.28rem)}.doc-body .panel{margin:0.68267rem 0 1.19467rem}.doc-body .panel__title{position:relative;margin-bottom:1.06667rem;padding-left:1.06667rem;color:#6a6a77;font-size:0.68267rem;font-weight:bold;line-height:1.5}.doc-body .panel__title::before{content:"";display:inline-block;position:absolute;left:0.512rem;top:50%;margin-top:-0.42667rem;width:0.04267rem;height:0.85333rem;background-color:#6190e8;-webkit-box-shadow:0 0.14933rem 0.256rem 0 rgba(97,144,232,.2);box-shadow:0 0.14933rem 0.256rem 0 rgba(97,144,232,.2);border-radius:0.02133rem}.doc-body .panel__content{padding:0 0.42667rem}.doc-body .panel__content.no-padding{padding:0}',""]),e.exports=t},"149":function(e,t,n){"use strict";n(144)},"150":function(e,t,n){(t=n(24)(!1)).push([e.i,".panel__content .example-item{margin-bottom:0.42667rem}.panel__content .example-item:last-child{margin-bottom:0}.panel__content .example-item .subitem{display:inline-block;margin-left:0.512rem}.panel__content .example-item__desc{margin-bottom:0.256rem;color:#333;font-size:0.512rem}",""]),e.exports=t},"151":function(e,t,n){"use strict";var c=n(11),a=n(0);var o=n(6),r=n(1),i=n(2),l=n(31);var b=n(141),u=Object(c.k)({"name":"NavButton","components":{"AtFab":b.o},"props":{"to":{"type":String,"default":"home"},"size":{"type":String,"default":"small"},"btnIcon":{"type":String,"default":"home"},"btnText":String},"setup":function setup(e,t){t.attrs;var n=Object(c.d)((function(){var t;return t={},Object(r.a)(t,"at-icon-".concat(e.btnIcon),Boolean(e.btnIcon)&&!Boolean(e.btnText)),Object(r.a)(t,"at-icon",Boolean(e.btnIcon)&&!Boolean(e.btnText)),Object(r.a)(t,"at-fab__icon",Boolean(e.btnIcon)&&!Boolean(e.btnText)),t}));return Object(o.a)(Object(o.a)({},Object(i.p)(e)),{},{"iconClasses":n,"handleClick":function handleClick(){switch(e.to){case"home":l.default.navigateTo({"url":"/pages/index/index"});break;case"back":l.default.navigateBack({"delta":1})}}})}});n(145);u.render=function NavButtonvue_type_template_id_94c9b3c2_render(e,t,n,o,r,i){var l=Object(c.x)("taro-text"),b=Object(c.x)("at-fab"),u=Object(c.x)("taro-view");return Object(c.u)(),Object(c.e)(u,Object(c.o)({"class":"btn-fab"},e.$attrs),{"default":Object(c.E)((function(){return[Object(c.j)(b,{"size":e.size,"onClick":e.handleClick},{"default":Object(c.E)((function(){return[e.btnText?(Object(c.u)(),Object(c.e)(l,{"key":0},{"default":Object(c.E)((function(){return[Object(c.i)(Object(a.I)(e.btnText),1)]})),"_":1})):Object(c.f)("",!0),e.btnIcon&&!e.btnText?(Object(c.u)(),Object(c.e)(l,{"key":1,"class":e.iconClasses},null,8,["class"])):Object(c.f)("",!0)]})),"_":1},8,["size","onClick"])]})),"_":1},16)};var s=u,d=Object(c.k)({"name":"Page","components":{"NavButton":s},"props":{"headerTitle":{"type":String,"default":"标题","required":!0}},"setup":function setup(e,t){t.slots;var n=t.attrs,a=Object(i.j)(0),b=Object(c.d)((function(){return Object(r.a)({"page":!0},"".concat(n.class),Boolean(n.class))})),u=Object(c.d)((function(){var e=Object(l.getSystemInfoSync)().windowWidth;return l.default.getEnv()===l.default.ENV_TYPE.WEB?{"width":e>=1024?"75%":"100%","margin":"auto"}:null}));return Object(c.r)((function(){var e=Object(l.createSelectorQuery)();setTimeout((function(){e.select("#home").boundingClientRect((function(e){a.value=e.height+30})).exec()}),300)})),Object(o.a)(Object(o.a)({},Object(i.p)(e)),{},{"bottomHeight":a,"rootClasses":b,"rootStyle":u})}});n(147);d.render=function render(e,t,n,o,r,i){var l=Object(c.x)("taro-view"),b=Object(c.x)("nav-button");return Object(c.u)(),Object(c.e)(l,{"class":e.rootClasses,"style":e.rootStyle},{"default":Object(c.E)((function(){return[Object(c.j)(l,{"class":"doc-header"},{"default":Object(c.E)((function(){return[Object(c.j)(l,{"class":"doc-header__title"},{"default":Object(c.E)((function(){return[Object(c.i)(Object(a.I)(e.headerTitle),1)]})),"_":1})]})),"_":1}),Object(c.j)(l,{"class":"doc-body","style":e.$attrs.style},{"default":Object(c.E)((function(){return[Object(c.w)(e.$slots,"default")]})),"_":3},8,["style"]),Object(c.w)(e.$slots,"extra"),Object(c.j)(b,{"to":"back","btn-icon":"chevron-left","style":{"bottom":"".concat(e.bottomHeight,"px")}},null,8,["style"]),Object(c.j)(b,{"id":"home","to":"home"})]})),"_":3},8,["class","style"])};var j=d;var f=Object(c.k)({"name":"Panel","props":{"title":{"type":String,"default":"","required":!0},"noPadding":Boolean},"setup":function setup(e,t){t.slots,t.attrs;var n=Object(c.d)((function(){return{"panel__content":!0,"no-padding":e.noPadding}}));return Object(o.a)(Object(o.a)({},Object(i.p)(e)),{},{"contentClasses":n})}});n(149);f.render=function Panelvue_type_template_id_3f59b537_render(e,t,n,o,r,i){var l=Object(c.x)("taro-view");return Object(c.u)(),Object(c.e)(l,{"class":"panel"},{"default":Object(c.E)((function(){return[e.title?(Object(c.u)(),Object(c.e)(l,{"key":0,"class":"panel__title"},{"default":Object(c.E)((function(){return[Object(c.i)(Object(a.I)(e.title),1)]})),"_":1})):Object(c.f)("",!0),Object(c.w)(e.$slots,"controller"),Object(c.j)(l,{"class":e.contentClasses,"style":e.$attrs.style},{"default":Object(c.E)((function(){return[Object(c.w)(e.$slots,"default")]})),"_":3},8,["class","style"])]})),"_":3})};var O=f;var m=Object(c.k)({"name":"ExampleItem"});m.render=function ExampleItemvue_type_template_id_46fa6f86_render(e,t,n,a,o,r){var i=Object(c.x)("taro-view");return Object(c.u)(),Object(c.e)(i,Object(c.o)({"class":"example-item"},e.$attrs),{"default":Object(c.E)((function(){return[Object(c.w)(e.$slots,"default")]})),"_":3},16)};var p=m;var _=Object(c.k)({"name":"PropItem","props":{"prop":String,"desc":String},"components":{"AtFlex":b.p,"AtFlexItem":b.q},"setup":function setup(e){return Object(o.a)({},Object(i.p)(e))}});_.render=function PropItemvue_type_template_id_009b35fa_render(e,t,n,o,r,i){var l=Object(c.x)("taro-view"),b=Object(c.x)("at-flex-item"),u=Object(c.x)("at-flex");return Object(c.u)(),Object(c.e)(u,{"direction":"column"},{"default":Object(c.E)((function(){return[Object(c.j)(b,{"is-wrap":""},{"default":Object(c.E)((function(){return[Object(c.j)(l,{"class":"example-item__desc"},{"default":Object(c.E)((function(){return[Object(c.j)(l,{"style":{"color":"red","font-style":"italic"}},{"default":Object(c.E)((function(){return[Object(c.i)(Object(a.I)(e.prop),1)]})),"_":1}),Object(c.j)(l,null,{"default":Object(c.E)((function(){return[Object(c.i)(Object(a.I)(e.desc),1)]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(b,null,{"default":Object(c.E)((function(){return[Object(c.w)(e.$slots,"default")]})),"_":3})]})),"_":1})};var g=_;n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return O})),n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return s}))},"207":function(e,t,n){var c=n(16),a=n(208);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={"insert":("head","head"),"singleton":!1},r=(c(a,o),a.locals?a.locals:{});e.exports=r},"208":function(e,t,n){(t=n(24)(!1)).push([e.i,".activity-indicator-page .panel__content .example-item{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-align:center}.activity-indicator-page .panel__content .example-item--center{height:4.26667rem;position:relative;background-color:#fafbfc;margin-bottom:0.42667rem}.activity-indicator-page .panel__content .example-item .subitem{margin-left:0.68267rem;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-flex:0}.activity-indicator-page .panel__content .example-item .subitem:first-child{margin-left:0}",""]),e.exports=t},"292":function(e,t,n){"use strict";n.r(t);var c=n(11);var a=n(2),o=n(141),r=n(151),i=(n(207),Object(c.k)({"name":"ActivityIndicatorDemo","components":{"Page":r.c,"Panel":r.d,"ExampleItem":r.a,"AtSwitch":o.U,"AtActivityIndicator":o.d},"setup":function setup(){var e=Object(a.j)(!0);return{"isOpened":e,"handleChange":function handleChange(t){e.value=t}}}}));i.render=function render(e,t,n,a,o,r){var i=Object(c.x)("at-activity-indicator"),l=Object(c.x)("taro-view"),b=Object(c.x)("example-item"),u=Object(c.x)("panel"),s=Object(c.x)("at-switch"),d=Object(c.x)("page");return Object(c.u)(),Object(c.e)(d,{"class":"activity-indicator-page","header-title":"Activity Indicator 活动指示器"},{"default":Object(c.E)((function(){return[Object(c.j)(u,{"title":"自定义尺寸"},{"default":Object(c.E)((function(){return[Object(c.j)(b,null,{"default":Object(c.E)((function(){return[(Object(c.u)(),Object(c.e)(c.b,null,Object(c.v)([40,48,64],(function(e,t){return Object(c.j)(l,{"key":t,"class":"subitem"},{"default":Object(c.E)((function(){return[Object(c.j)(i,{"size":e},null,8,["size"])]})),"_":2},1024)})),64))]})),"_":1})]})),"_":1}),Object(c.j)(u,{"title":"自定义颜色"},{"default":Object(c.E)((function(){return[Object(c.j)(b,null,{"default":Object(c.E)((function(){return[(Object(c.u)(),Object(c.e)(c.b,null,Object(c.v)(["#13CE66","#FF4949","#C9C9C9"],(function(e,t){return Object(c.j)(l,{"key":t,"class":"subitem"},{"default":Object(c.E)((function(){return[Object(c.j)(i,{"color":e},null,8,["color"])]})),"_":2},1024)})),64))]})),"_":1})]})),"_":1}),Object(c.j)(u,{"title":"自定义文字"},{"default":Object(c.E)((function(){return[Object(c.j)(b,null,{"default":Object(c.E)((function(){return[Object(c.j)(l,{"class":"subitem"},{"default":Object(c.E)((function(){return[Object(c.j)(i,{"content":"加载中..."})]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(u,{"title":"状态切换"},{"default":Object(c.E)((function(){return[Object(c.j)(s,{"border":!1,"title":e.isOpened?"开启中":"关闭中","checked":e.isOpened,"onChange":e.handleChange},null,8,["title","checked","onChange"]),Object(c.j)(b,null,{"default":Object(c.E)((function(){return[Object(c.j)(i,{"content":"加载中...","isOpened":e.isOpened},null,8,["isOpened"])]})),"_":1})]})),"_":1}),Object(c.j)(u,{"title":"垂直水平居中"},{"default":Object(c.E)((function(){return[Object(c.j)(b,{"class":"example-item--center"},{"default":Object(c.E)((function(){return[Object(c.j)(i,{"mode":"center"})]})),"_":1}),Object(c.j)(b,{"class":"example-item--center"},{"default":Object(c.E)((function(){return[Object(c.j)(i,{"mode":"center","content":"Loading..."})]})),"_":1})]})),"_":1})]})),"_":1})};t.default=i}}]);