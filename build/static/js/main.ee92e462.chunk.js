(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{63:function(e,t,r){},90:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(22),a=r.n(c),s=(r(63),r(122)),i=r(121),o=r(125),u=r(57),d=Object(o.a)(Object(u.a)()),j=r(39),O=r(9),p=r(126),b=r(124),h=r(123),l=r(120),v=r(119),S=r(118),_=(r(66),r(127)),T=r(34),f=r(116),m=Object(f.a)((function(e){return{root:Object(T.a)({},e.breakpoints.up("sm"),{width:"50vh"}),media:{backgroundSize:"contain",height:"50vh"}}})),E="HOME_GET",x="HOME_SET",P=r(37),g=r(8),w=Object(P.b)((function(e){return{TVShow:e.TVShow}}),(function(e,t){return{getTVShow:function(t){return e({type:E,id:t})}}}))(Object(b.a)()((function(e){var t,r,c=m();return Object(n.useEffect)((function(){e.getTVShow(1)}),[]),Object(g.jsxs)(p.a,{className:c.root,children:[Object(g.jsxs)(h.a,{children:[Object(g.jsx)(S.a,{className:c.media,image:Object(b.b)("sm",e.width)?"https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",title:"Contemplative Reptile"}),Object(g.jsxs)(v.a,{children:[Object(g.jsx)(_.a,{gutterBottom:!0,variant:"h5",component:"h2",children:null===(t=e.TVShow.data)||void 0===t?void 0:t.name}),Object(g.jsx)(_.a,{variant:"body2",color:"textSecondary",component:"p",children:null===(r=e.TVShow.data)||void 0===r?void 0:r.summary})]})]}),Object(g.jsxs)(l.a,{children:["tobe cnfitiu",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_LINK]})]})})));function y(){return Object(g.jsx)(O.c,{children:Object(g.jsx)(O.a,{exact:!0,path:"/",children:Object(g.jsx)(w,{})})})}function C(){return Object(g.jsx)(j.a,{children:Object(g.jsx)(y,{})})}var A=r(24),R=r(58),H=r(25),k=r(17),K=r.n(k),D=r(53),F=r(54),I=r(55),N=r(56),L=r.n(N);console.log("process.env.REACT_APP_API_LINK",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_LINK);var V=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(F.a)(this,e),this.HTTPService=L.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_LINK||"/",timeout:1e4}),this.HTTPService.interceptors.request.use(t.requestSuccess||this.requestSuccess,t.requestFail||this.requestFail),this.HTTPService.interceptors.response.use(t.responseSuccess||this.responseSuccess,t.responseFail||this.responseFail),this.HTTPService}return Object(I.a)(e,[{key:"requestSuccess",value:function(){var e=Object(D.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.assign(t,{withCredentials:!0,rejectUnauthorized:!1,requestCert:!0,agent:!1}),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"requestFail",value:function(e){return Promise.reject(e)}},{key:"responseSuccess",value:function(e){return e}},{key:"responseFail",value:function(e){return Promise.reject(e)}}]),e}()),W=function(){return{status:"none",isloading:!1,error:""}},q=function(){return{status:"fetching",isloading:!0,error:""}},U=function(){return{status:"success",isloading:!1,error:""}},B=function(e){return{status:"failure",isloading:!1,error:e}},z=V,J=Object(H.a)({data:{}},W),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case x:return Object(H.a)(Object(H.a)({},e),n);default:return e}},G=Object(A.b)({TVShow:M}),Q=r(23),X=function(e){return z.get("shows/".concat(e))},Y=K.a.mark($),Z=K.a.mark(ee);function $(e){var t,r;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.prev=1,n.next=4,Object(Q.c)({type:x,payload:q()});case 4:return n.next=6,Object(Q.b)(X,t);case 6:return r=n.sent,n.next=9,Object(Q.c)({type:x,payload:Object(H.a)(Object(H.a)({},U()),{},{data:r})});case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(1),n.next=15,Object(Q.c)({type:x,payload:B(n.t0.message)});case 15:case"end":return n.stop()}}),Y,null,[[1,11]])}function ee(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.d)(E,$);case 2:case"end":return e.stop()}}),Z)}var te=K.a.mark(re);function re(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.a)([ee()]);case 2:case"end":return e.stop()}}),te)}var ne=Object(R.a)(),ce=[ne],ae=Object(A.d)(G,A.a.apply(void 0,ce));ne.run(re);var se=ae;a.a.render(Object(g.jsx)(P.a,{store:se,children:Object(g.jsxs)(i.a,{theme:d,children:[Object(g.jsx)(s.a,{}),Object(g.jsx)(C,{})]})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.ee92e462.chunk.js.map