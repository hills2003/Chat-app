(this.webpackJsonpinit=this.webpackJsonpinit||[]).push([[0],{286:function(e,t,r){},287:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(14),i=r.n(s),c=r(11),l=(r(54),r(99),r(326)),o=(r(338),r(345),r(340),r(68)),d=(r(344),r(339),r(329)),j=(r(330),r(343)),u=r(332),b=r(145),p=(r(175),r(288),r(177),b.a.initializeApp({apiKey:"AIzaSyBRXU_CxKhYCDwdN5UlQDWBkEDa9vggM8E",authDomain:"lewek-b57c3.firebaseapp.com",projectId:"lewek-b57c3",storageBucket:"lewek-b57c3.appspot.com",messagingSenderId:"661612329725",appId:"1:661612329725:web:b4205de10ded3ad3d2dc94"})),x=p.auth(),h=(p.storage(),p.database(),r(3)),m=n.a.createContext(),O=function(){return Object(a.useContext)(m)};function f(e){var t=e.children,r=Object(a.useState)(""),n=Object(c.a)(r,2),s=n[0],i=n[1],l=Object(a.useState)(!0),o=Object(c.a)(l,2),d=o[0],j=o[1];Object(a.useEffect)((function(){return x.onAuthStateChanged((function(e){i(e),j(!1)}))}),[]);var u={currentUser:s,signup:function(e,t){return x.createUserWithEmailAndPassword(e,t)},login:function(e,t){return x.signInWithEmailAndPassword(e,t)},passwordreset:function(e){return x.sendPasswordResetEmail(e)},updatePassword:function(e){return s.updatePassword(e)},updateEmail:function(e){return s.updateEmail(e)},Logout:function(){return x.signOut()},anonymous:function(){return x.signInAnonymously()}};return Object(h.jsx)(m.Provider,{value:u,children:!d&&t})}r(349),Object(l.a)({para1:{background:"blue",color:"white",maxWidth:"350px",padding:"10px",borderRadius:"18px"},para2:{background:"magenta",color:"white",maxWidth:"350px",padding:"10px",borderRadius:"18px"},left:{display:"flex",justifyContent:"flex-start"},right:{display:"flex",justifyContent:"flex-end"}});r(347),r(150),Object(l.a)({card:{width:"450px",maxWidth:"450px"},flow:{overflow:"auto",margin:"15px"},position:{position:"fixed",bottom:"30px"},ref:{marginTop:"150px"}});r(154),r(28);var v=r(15),g=r.n(v),w=r(26);r(333),r(334),r(335),r(336),r(348),r(151),r(152);var y=r(337);r(95);var S=r(16),C=r(153),k=r.n(C);var B=function(e){var t=O().Logout,r=Object(S.g)(),n=Object(a.useState)(""),s=Object(c.a)(n,2),i=s[0],l=s[1],o=function(){var e=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:r.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l("failed to log out");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[i?Object(h.jsx)("div",{children:i}):"",Object(h.jsx)(y.a,{edge:"end",onClick:o,children:Object(h.jsx)(k.a,{})})]})};Object(l.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},status:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"50px"},chats:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}}));var I=r(341),q=r(65),E=r(32),z=r(25),A=r(331),D=r(77),N=r.n(D),P=r(78),U=r.n(P),W=r(346),L=Object(l.a)({center:{display:"flex",justifyContent:"center",alignItems:"center"}});var R=function(e){var t=L(),r=Object(a.useState)(""),n=Object(c.a)(r,2),s=n[0],i=n[1],l=Object(a.useState)(!1),j=Object(c.a)(l,2),b=j[0],p=j[1],x=Object(S.g)(),m=O().signup,f=Object(a.useState)(!0),v=Object(c.a)(f,2),y=v[0],C=v[1],k=Object(a.useState)(!0),B=Object(c.a)(k,2),D=B[0],P=B[1],R=function(){C(!y)},F=function(){P(!D)},V=Object(q.a)({initialValues:{email:"",password:"",passwordconfig:""},validationSchema:E.a({email:E.b().email("invalid email type").required("email is required"),password:E.b().required("password is required"),passwordconfig:E.b().required("required")}),onSubmit:function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V.values.password===V.values.passwordconfig){e.next=2;break}return e.abrupt("return",i("passwords do not match"));case 2:return e.prev=2,i(""),p(!0),e.next=7,m(V.values.email,V.values.password);case 7:x.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),i("failed to sign up");case 13:p(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()});return Object(h.jsx)("div",{className:t.center,children:Object(h.jsxs)(d.a,{children:[Object(h.jsxs)("form",{onSubmit:V.handleSubmit,children:[Object(h.jsx)(o.a,{children:"Sign up "}),s?Object(h.jsx)(W.a,{severity:"error",children:s}):"",Object(h.jsxs)(I.a,{container:!0,children:[Object(h.jsxs)(I.a,{item:!0,xs:2,children:[" ",Object(h.jsx)("label",{style:{fontSize:"18px"},children:" Email:"})," "]}),Object(h.jsxs)(I.a,{item:!0,xs:10,children:[Object(h.jsx)(A.a,{label:"email",name:"email",onBlur:V.handleBlur,style:{margin:"20px"},variant:"outlined",color:"primary",value:V.values.email,onChange:V.handleChange}),V.touched.email&&V.errors.email?Object(h.jsx)(W.a,{severity:"error",children:V.errors.email}):""]}),Object(h.jsxs)(I.a,{item:!0,xs:2,children:[" ",Object(h.jsx)("label",{style:{fontSize:"18px"},children:" password: "})]}),Object(h.jsxs)(I.a,{item:!0,xs:10,children:[Object(h.jsx)(A.a,{name:"password",label:"password",type:y?"password":"text",endAdornment:y?Object(h.jsx)(N.a,{onClick:R}):Object(h.jsx)(U.a,{onClick:R}),onBlur:V.handleBlur,variant:"outlined",style:{margin:"20px"},color:"primary",value:V.values.password,onChange:V.handleChange}),V.touched.password&&V.errors.password?Object(h.jsx)(W.a,{severity:"error",children:V.errors.password}):""]}),Object(h.jsx)(I.a,{item:!0,xs:2,children:Object(h.jsx)("label",{style:{fontSize:"18px"},children:"password-confirm:"})}),Object(h.jsxs)(I.a,{item:!0,xs:10,children:[Object(h.jsx)(A.a,{label:"password-confirm",type:D?"password":"text",endAdornment:D?Object(h.jsx)(N.a,{onClick:F}):Object(h.jsx)(U.a,{onClick:F}),name:"passwordconfig",onBlur:V.handleBlur,style:{margin:"20px"},variant:"outlined",color:"primary",value:V.values.passwordconfig,onChange:V.handleChange}),V.touched.passwordconfig&&V.errors.passwordconfig?Object(h.jsx)(W.a,{severity:"error",children:V.errors.passwordconfig}):""]}),Object(h.jsx)("br",{}),Object(h.jsx)(I.a,{item:!0,xs:2,children:Object(h.jsx)(u.a,{disabled:b,variant:"outlined",color:"primary",type:"submit",children:"Sign up"})})]})]}),Object(h.jsxs)("h5",{children:[" ",Object(h.jsx)(z.b,{to:"/signin",children:"already have an account "})]})]})})},F=Object(l.a)({center:{display:"flex",justifyContent:"center",alignItems:"center"}});var V=function(e){var t=F(),r=O().passwordreset,n=Object(a.useState)(""),s=Object(c.a)(n,2),i=s[0],l=s[1],o=Object(a.useState)(""),b=Object(c.a)(o,2),p=b[0],x=b[1],m=Object(a.useState)(!1),f=Object(c.a)(m,2),v=f[0],y=f[1],S=(O().currentUser,Object(q.a)({initialValues:{email:""},validationSchema:E.a({email:E.b().email("invalid email type").required("email is required")}),onSubmit:function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(""),x(""),y(!0),e.next=6,r(S.values.email);case 6:l("check mail for email reset link"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x("failed to reset email");case 12:y(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}));return Object(h.jsx)("div",{className:t.center,children:Object(h.jsxs)(d.a,{children:[Object(h.jsxs)("form",{onSubmit:S.handleSubmit,children:[p?Object(h.jsx)(W.a,{severity:"error",children:p}):"",i?Object(h.jsx)(W.a,{severity:"info",children:i}):"",Object(h.jsxs)(I.a,{container:!0,children:[Object(h.jsxs)(I.a,{item:!0,xs:2,children:[" ",Object(h.jsx)("label",{style:{fontSize:"18px"},children:" Email:"})," "]}),Object(h.jsxs)(I.a,{item:!0,xs:10,children:[Object(h.jsx)(j.a,{label:"email",name:"email",onBlur:S.handleBlur,style:{margin:"20px"},variant:"outlined",color:"primary",value:S.values.email,onChange:S.handleChange}),S.touched.email&&S.errors.email?Object(h.jsx)(W.a,{severity:"error",children:S.errors.email}):""]}),Object(h.jsx)("br",{}),Object(h.jsx)(I.a,{item:!0,xs:2,children:Object(h.jsx)(u.a,{disabled:v,variant:"outlined",color:"primary",type:"submit",children:"submit"})})]})]}),Object(h.jsx)(z.b,{to:"/signin",children:"Sign in"})]})})},J=r(342),K=Object(l.a)({center:{display:"flex",justifyContent:"center",alignItems:"center"}});var T=function(e){var t=K(),r=Object(S.g)(),n=O(),s=n.login,i=(n.currentUser,Object(a.useState)("")),l=Object(c.a)(i,2),o=l[0],j=l[1],b=Object(a.useState)(!1),p=Object(c.a)(b,2),x=p[0],m=p[1],f=Object(a.useState)(!0),v=Object(c.a)(f,2),y=v[0],C=v[1],k=function(e){C(!y)},B=Object(q.a)({initialValues:{email:"",password:""},validationSchema:E.a({email:E.b().email("invalid email type").required("email is required"),password:E.b().required("password is required")}),onSubmit:function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(""),m(!0),e.next=5,s(B.values.email,B.values.password);case 5:r.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j("failed to login");case 11:m(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()});return Object(h.jsx)("div",{className:t.center,children:Object(h.jsxs)(d.a,{style:{width:"500px"},children:[Object(h.jsxs)("form",{onSubmit:B.handleSubmit,children:[Object(h.jsx)("bold",{children:"Log In"}),o?Object(h.jsxs)(W.a,{severity:"error",children:[o," "]}):"",Object(h.jsxs)(I.a,{container:!0,children:[Object(h.jsxs)(I.a,{item:!0,xs:2,children:[" ",Object(h.jsx)("label",{style:{fontSize:"18px"},children:" Email:"})," "]}),Object(h.jsxs)(I.a,{item:!0,xs:10,children:[Object(h.jsx)(A.a,{label:"email",name:"email",onBlur:B.handleBlur,style:{margin:"20px"},variant:"outlined",color:"primary",value:B.values.email,onChange:B.handleChange}),B.touched.email&&B.errors.email?Object(h.jsx)(W.a,{severity:"error",children:B.errors.email}):""]}),Object(h.jsxs)(I.a,{item:!0,xs:2,children:[" ",Object(h.jsx)("label",{style:{fontSize:"18px"},children:" password: "})]}),Object(h.jsxs)(I.a,{item:!0,xs:10,children:[Object(h.jsx)(A.a,{label:"password",type:y?"password":"text",endAdornment:Object(h.jsx)(J.a,{children:y?Object(h.jsx)(N.a,{onClick:k}):Object(h.jsx)(U.a,{onClick:k})}),name:"password",onBlur:B.handleBlur,variant:"outlined",style:{margin:"20px"},color:"primary",value:B.values.password,onChange:B.handleChange}),B.touched.password&&B.errors.password?Object(h.jsx)(W.a,{severity:"error",children:B.errors.password}):""]}),Object(h.jsx)(I.a,{item:!0,xs:2,children:Object(h.jsx)(u.a,{disabled:x,size:"small",variant:"outlined",color:"primary",type:"submit",children:"Log In"})})]})]}),Object(h.jsxs)("h5",{children:["  ",Object(h.jsx)(z.b,{to:"/signup",children:"Need an account "})," "]}),Object(h.jsxs)("h5",{children:[" ",Object(h.jsx)(z.b,{to:"/forgot-password",children:"Forgotten password "})]})]})})};r(286);var G=function(e){return Object(h.jsx)("p",{className:"p",children:"hello world "})};var M=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(z.a,{children:Object(h.jsx)(f,{children:Object(h.jsxs)(S.d,{children:[Object(h.jsx)(S.b,{exact:!0,path:"/",component:G}),Object(h.jsx)(S.b,{path:"/signin",component:T}),Object(h.jsx)(S.b,{path:"/signup",component:R}),Object(h.jsx)(S.b,{path:"/signout",component:B}),Object(h.jsx)(S.b,{path:"/forgot-password",component:V})]})})})})};i.a.render(Object(h.jsx)(M,{}),document.getElementById("root"))}},[[287,1,2]]]);
//# sourceMappingURL=main.9604d5de.chunk.js.map