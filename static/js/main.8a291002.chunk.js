(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{138:function(t,e,n){},139:function(t,e,n){},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"h",(function(){return d})),n.d(e,"b",(function(){return b})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"g",(function(){return j})),n.d(e,"f",(function(){return l}));var r=n(7),a="search/UPDATE_INPUT",c="search/SET_HELP_INPUT",i="search/CLEAR_INPUT_HELP",o="search/SET_HIDDEN_HELP",u="search/SET_MONTH",s="search/SET_IATA",p={originInput:"",originIata:"",originHelp:[],hiddenOriginHelp:!1,destinationInput:"",destinationIata:"",destinationHelp:[],hiddenDestinationHelp:!1,month:3};e.c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:return 1==e.id?Object(r.a)(Object(r.a)({},t),{},{originInput:e.value}):Object(r.a)(Object(r.a)({},t),{},{destinationInput:e.value});case c:return t.originInput||t.destinationInput?1==e.id?Object(r.a)(Object(r.a)({},t),{},{originHelp:e.data.map((function(t){return{name:t.name,code:t.code}}))}):Object(r.a)(Object(r.a)({},t),{},{destinationHelp:e.data.map((function(t){return{name:t.name,code:t.code}}))}):t;case i:return 1==e.id?Object(r.a)(Object(r.a)({},t),{},{originHelp:[]}):Object(r.a)(Object(r.a)({},t),{},{destinationHelp:[]});case o:return 1==e.id?Object(r.a)(Object(r.a)({},t),{},{hiddenOriginHelp:e.isHidden}):Object(r.a)(Object(r.a)({},t),{},{hiddenDestinationHelp:e.isHidden});case u:return Object(r.a)(Object(r.a)({},t),{},{month:e.number});case s:return Object(r.a)(Object(r.a)({},t),{},{originIata:e.originIata,destinationIata:e.destinationIata});default:return t}};var d=function(t,e){return{type:a,value:t,id:e}},b=function(t){return{type:i,id:t}},h=function(t,e){return{type:c,data:t,id:e}},f=function(t,e){return{type:o,id:t,isHidden:e}},j=function(t){return{type:u,number:t}},l=function(t,e){return{type:s,originIata:t,destinationIata:e}}},22:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return u}));var r=n(7),a="auth/SIGN_IN",c="auth/SIGN_SUCCESS",i={isLogin:!1,encryptedToken:"ikg\x97\x9bd\x95h\xdajgjgm\x97fn\xb0g\x9bhfg\x95\x98\x99\xdb\x9aeidl",token:null};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:return Object(r.a)(Object(r.a)({},t),{},{isLogin:!0,token:e.token});default:return t}};var o=function(t){return{type:a,data:t}},u=function(t){return{type:c,token:t}}},224:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(42),i=n.n(c),o=(n(138),n(139),n(17)),u=n(80),s=n(85),p=n(22),d=n(20),b=n(7),h="tickets/SET_TICKET",f={data:[]},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object(b.a)(Object(b.a)({},t),{},{data:e.tickets});default:return t}},l=function(t){return{type:h,tickets:t}},O=n(10),g=n.n(O),v=n(58),m=n(24),x=function(t,e){for(String.prototype.replaceAt=function(t,e){return this.substr(0,t)+e+this.substr(t+e.length)};t.length!=e.length;)t.length<e.length&&(t+=t),t.length>e.length&&(t=t.slice(0,t.length-1));for(var n=0;n<e.length;n++)e=e.replaceAt(n,String.fromCharCode(e.charCodeAt(n)-t.charCodeAt(n)));return e},k=n(33),y=n(34),_=n.n(y),I="https://intense-caverns-46819.herokuapp.com/",w=function(t){return Object(k.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("".concat(I,"http://api.travelpayouts.com/v1/prices/cheap?origin=MOW&destination=HKT&depart_date=2017-11&return_date=2017-12&token=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},S=function(t,e,n,r){return Object(k.a)(g.a.mark((function a(){var c;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.get("".concat(I,"http://api.travelpayouts.com/v2/prices/latest?currency=rub&origin=").concat(t,"&destination=").concat(e,"&beginning_of_period=2021-").concat(n,"-01&period_type=month&one_way=true&page=1&limit=10&show_to_affiliates=true&sorting=price&token=").concat(r));case 2:return c=a.sent,a.abrupt("return",c.data);case 4:case"end":return a.stop()}}),a)})))()},E=function(t){return Object(k.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(I,"http://autocomplete.travelpayouts.com/places2?term=").concat(t,"&locale=ru&types[]=city,airport,country"));case 2:return n=e.sent,e.abrupt("return",n.data.slice(0,5));case 4:case"end":return e.stop()}}),e)})))()},H=function(t,e){return Object(k.a)(g.a.mark((function n(){var r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_.a.get("".concat(I,"https://www.travelpayouts.com/widgets_suggest_params?q=\u0418\u0437%20").concat(t,"%20\u0432%20").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))()},T=n(50),L=g.a.mark(C);function C(t){var e,n,r,a;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return e=t.data,n=x(e.pass,e.encryptedToken),c.next=4,Object(m.a)(w,n);case 4:if(!((r=c.sent).error.length>0)){c.next=11;break}return a="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c\n"+r.error,c.next=9,Object(m.b)(Object(T.a)("login",{_error:a}));case 9:c.next=14;break;case 11:return c.next=13,Object(m.b)(Object(p.d)(n));case 13:sessionStorage.setItem("token",n);case 14:case"end":return c.stop()}}),L)}var N=n(18),A=g.a.mark(P);function P(t){var e,n,r;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=t.value,n=t.id,!e){a.next=9;break}return a.next=4,Object(N.a)(E,e);case 4:return r=a.sent,a.next=7,Object(N.b)(Object(d.d)(r,n));case 7:a.next=11;break;case 9:return a.next=11,Object(N.b)(Object(d.b)(n));case 11:case"end":return a.stop()}}),A)}var D=g.a.mark(F);function F(t){var e,n,r,a;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return e=t.data,n=t.token,c.next=3,Object(N.a)(H,e.origin,e.destination);case 3:return r=c.sent,c.next=6,Object(N.b)(Object(d.f)(r.origin.iata,r.destination.iata));case 6:return e.month<10&&(e.month="0"+e.month),c.next=9,Object(N.a)(S,r.origin.iata,r.destination.iata,e.month,n);case 9:return a=c.sent,c.next=12,Object(N.b)(l(a.data));case 12:case"end":return c.stop()}}),D)}var U=g.a.mark(G);function G(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.c)(p.a,C);case 2:return t.next=4,Object(m.c)(d.a,P);case 4:return t.next=6,Object(m.c)(v.a,F);case 6:case"end":return t.stop()}}),U)}var z=Object(s.a)(),M=Object(o.c)({auth:p.b,search:d.c,tickets:j,form:u.a}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,R=Object(o.e)(M,B(Object(o.a)(z)));window.__store=R,z.run(G);var J=R,K=n(44),X=n(26),q=n(9),V=n(81),W=n(76),Q=n(77),Y=n(82),Z=n(79),$=n(8),tt=a.a.lazy((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,298))})),et=a.a.lazy((function(){return Promise.all([n.e(6),n.e(4)]).then(n.bind(null,297))})),nt=Object(o.d)((function(t){var e=function(e){Object(Y.a)(r,e);var n=Object(Z.a)(r);function r(){return Object(W.a)(this,r),n.apply(this,arguments)}return Object(Q.a)(r,[{key:"render",value:function(){var e;e=this.props.isLogin?"/login"===this.props.location.pathname||"/"===this.props.location.pathname||"/SkyScanner"===this.props.location.pathname?"/search":this.props.location.pathname:"/login";var n=this.props,r=(n.isLogin,Object(V.a)(n,["isLogin"]));return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(t,Object(b.a)({},r)),Object($.jsx)(q.a,{to:e})]})}}]),r}(a.a.Component);return Object(q.g)(Object(X.b)((function(t){return{isLogin:t.auth.isLogin}}))(e))}))((function(t){return Object($.jsx)(r.Suspense,{fallback:Object($.jsx)("div",{children:"LOADING"}),children:Object($.jsxs)(q.d,{children:[Object($.jsx)(q.b,{path:"/login",component:tt}),Object($.jsx)(q.b,{path:"/search",component:et})]})})})),rt=Object(X.b)((function(t){return{isLogin:t.auth.isLogin}}),{isAuthorized:p.d})((function(t){return Object(r.useEffect)((function(){sessionStorage.getItem("token")&&t.isAuthorized(sessionStorage.getItem("token"))}),[t.isLogin]),Object($.jsx)($.Fragment,{children:Object($.jsx)(nt,{})})}));var at=function(){return Object($.jsx)("div",{className:"App",children:Object($.jsx)(X.a,{store:J,children:Object($.jsx)(K.a,{children:Object($.jsx)(rt,{})})})})},ct=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,296)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))};i.a.render(Object($.jsx)(a.a.StrictMode,{children:Object($.jsx)(at,{})}),document.getElementById("root")),ct()},58:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r="common/BEGINING_SEARCH",a=function(t,e){return{type:r,data:t,token:e}}}},[[224,1,2]]]);
//# sourceMappingURL=main.8a291002.chunk.js.map