(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports={title:"QuestionerPage_title__m94Rm",desc:"QuestionerPage_desc__jGZ-T",question_content:"QuestionerPage_question_content__32X03",question_answer:"QuestionerPage_question_answer__Fbb3U",buttons:"QuestionerPage_buttons__3RjMd",right:"QuestionerPage_right__3MSow",form_grid:"QuestionerPage_form_grid__3gOmc",quesion_input:"QuestionerPage_quesion_input__-U-nI"}},28:function(e,t,n){e.exports={title:"AnswerListPage_title__3E92v",desc:"AnswerListPage_desc__jvc4g",question_content:"AnswerListPage_question_content__ykFLU",question_answer:"AnswerListPage_question_answer__15q3O",buttons:"AnswerListPage_buttons__1w65u",right:"AnswerListPage_right__3dJJO"}},51:function(e,t,n){e.exports=n.p+"static/media/loading.c5590569.svg"},56:function(e,t,n){e.exports=n(81)},61:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),s=n.n(c),o=(n(61),n(23)),i=n(83),l=n(6),u=n.n(l),m=n(10),p=n(31),d=n(7),E=n(48),f=n.n(E),b=n(49),h=n.n(b),v=function(){return window.history.replaceState({},document.title,window.location.pathname)},g=r.a.createContext(),w=function(){return Object(a.useContext)(g)},O=function(e,t){return t.reduce(function(t,n){return!!e.some(function(e){return e===n})&&t},!0)},j=function(e){var t=e.component,n=e.path,c=e.requiredScope,s=void 0===c?[]:c,i=(e.history,Object(p.a)(e,["component","path","requiredScope","history"])),l=w(),d=l.isAuthenticated,E=l.loginWithRedirect,f=l.scope;if(Object(a.useEffect)(function(){!function(){var e=Object(m.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=3;break}return e.next=3,E({appState:{targetUrl:n}});case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[d,E,n]),!O(f,s))return r.a.createElement(o.a,{to:"/"});return r.a.createElement(o.b,Object.assign({path:n,render:function(e){return!0===d?r.a.createElement(t,e):null}},i))},k=n(51),q=n.n(k),x=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("img",{src:q.a,alt:"Loading"}))},y=n(9),_=n(14),N=n(82),S=n(84),T=n(85),P=n(86),C=n(87),L=n(88),D=n(52),A=n(99),R=n(100),F=n(101),I=n(89),U=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],s=w(),o=s.user,l=s.isAuthenticated,u=s.loginWithRedirect,m=s.logout,p=function(){return m({returnTo:window.location.origin})};return r.a.createElement("div",{className:"nav-container"},r.a.createElement(N.a,{color:"light",light:!0,expand:"md"},r.a.createElement(i.a,null,r.a.createElement(S.a,{onClick:function(){return c(!n)}}),r.a.createElement(T.a,{isOpen:n,navbar:!0},r.a.createElement(P.a,{className:"mr-auto",navbar:!0},r.a.createElement(C.a,null,r.a.createElement(L.a,{tag:y.b,to:"/questioners",exact:!0,activeClassName:"router-link-exact-active"},"Questioners")),r.a.createElement(C.a,null,r.a.createElement(L.a,{tag:y.b,to:"/answerlists",exact:!0,activeClassName:"router-link-exact-active"},"Answers"))),r.a.createElement(P.a,{className:"d-none d-md-block",navbar:!0},!l&&r.a.createElement(C.a,null,r.a.createElement(D.a,{id:"qsLoginBtn",color:"primary",className:"btn-margin",onClick:function(){return u({})}},"Log in")),l&&r.a.createElement(A.a,{nav:!0,inNavbar:!0},r.a.createElement(R.a,{nav:!0,caret:!0,id:"profileDropDown"},r.a.createElement("img",{src:o.picture,alt:"Profile",className:"nav-user-profile rounded-circle",width:"50"})),r.a.createElement(F.a,null,r.a.createElement(I.a,{header:!0},o.name),r.a.createElement(I.a,{id:"qsLogoutBtn",onClick:function(){return p()}},r.a.createElement(_.a,{icon:"power-off",className:"mr-3"})," Log out")))),!l&&r.a.createElement(P.a,{className:"d-md-none",navbar:!0},r.a.createElement(C.a,null,r.a.createElement(D.a,{id:"qsLoginBtn",color:"primary",block:!0,onClick:function(){return u({})}},"Log in"))),l&&r.a.createElement(P.a,{className:"d-md-none justify-content-between",navbar:!0,style:{minHeight:170}},r.a.createElement(C.a,null,r.a.createElement("span",{className:"user-info"},r.a.createElement("img",{src:o.picture,alt:"Profile",className:"nav-user-profile d-inline-block rounded-circle mr-3",width:"50"}),r.a.createElement("h6",{className:"d-inline-block"},o.name))),r.a.createElement(C.a,null,r.a.createElement(_.a,{icon:"user",className:"mr-3"}),r.a.createElement(y.b,{to:"/profile",activeClassName:"router-link-exact-active"},"Profile")),r.a.createElement(C.a,null,r.a.createElement(_.a,{icon:"power-off",className:"mr-3"}),r.a.createElement(y.b,{to:"#",id:"qsLogoutBtn",onClick:function(){return p()}},"Log out")))))))},Q=function(){return r.a.createElement("footer",{className:"bg-light p-3 text-center"},r.a.createElement("div",{className:"logo"}),r.a.createElement("p",null,"By ",r.a.createElement("a",{href:"https://github.com/semreg",target:"_blank",rel:"noopener noreferrer"},"Semreg")," with ",r.a.createElement("a",{href:"https://auth0.com"},"Auth0")))},B=n(17),W=Object(B.a)(),G=n(25),J=n(15);var z=function(){G.b.add(J.b),G.b.add(J.h),G.b.add(J.e)},M=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,a,r,c,s,o=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2?o[2]:void 0,r=o.length>3&&void 0!==o[3]?o[3]:{},"GET"!==n&&"DELETE"!==n){e.next=9;break}return e.next=6,fetch("".concat("http://localhost:3001","/api/").concat(a),{method:n,headers:{Authorization:"Bearer ".concat(t)}});case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,fetch("".concat("http://localhost:3001","/api/").concat(a),{method:n,headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify(r)});case 11:e.t0=e.sent;case 12:return c=e.t0,e.next=15,c.json();case 15:return s=e.sent,e.abrupt("return",s);case 17:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),H=n(94),V=n(90),K=n(91),X=n(92),Z=n(93),$=function(e){var t=e.id,n=e.title,a=e.description;return r.a.createElement(V.a,null,r.a.createElement(K.a,null,r.a.createElement(X.a,null,n),r.a.createElement(Z.a,null,a),r.a.createElement(y.a,{to:"/questioners/".concat(t)},r.a.createElement(D.a,null,"Respond"))))},Y=function(e){var t=e.questioners;return r.a.createElement(H.a,null,t.map(function(e){var t=e._id,n=e.title,a=e.description;return r.a.createElement($,{key:t,id:t,title:n,description:a})}))},ee=n(16),te=n.n(ee),ne=function(e){var t=e.scope,n=e.requiredScope,a=(e.callback,e.children);return O(t,n)?a:null},ae=function(){var e=w(),t=e.getTokenSilently,n=e.scope,c=Object(a.useState)(!0),s=Object(d.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)([]),p=Object(d.a)(l,2),E=p[0],f=p[1],b=Object(a.useState)(!1),h=Object(d.a)(b,2),v=h[0],g=h[1];return Object(a.useEffect)(function(){Object(m.a)(u.a.mark(function e(){var n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return n=e.sent,e.next=6,M(n,"GET","questioners");case 6:a=e.sent,f(a.questioners),i(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),g(!0);case 15:case"end":return e.stop()}},e,null,[[0,11]])}))()},[]),o?"Loading...":v?"Error":r.a.createElement(a.Fragment,null,r.a.createElement(ne,{scope:n,requiredScope:["update:questioners"]},r.a.createElement("div",{className:te.a.buttons},r.a.createElement(y.a,{to:"questioners/create"},r.a.createElement(D.a,{type:"submit",className:"btn-primary"},r.a.createElement(_.a,{icon:J.d,className:"mr-3"}),"New")))),r.a.createElement(Y,{questioners:E}))},re=n(55),ce=n(95),se=n(39),oe=n.n(se),ie=Object(o.g)(function(e){var t=e.mode,n=e.match,c=e.history,s=w().token,o=Object(a.useState)(""),l=Object(d.a)(o,2),p=l[0],E=l[1],f=Object(a.useState)(""),b=Object(d.a)(f,2),h=b[0],v=b[1],g=Object(a.useState)([]),O=Object(d.a)(g,2),j=O[0],k=O[1],q=Object(a.useState)(!0),x=Object(d.a)(q,2),N=x[0],S=x[1];Object(a.useEffect)(function(){"EDIT"===t?Object(m.a)(u.a.mark(function e(){var t,a,r,o,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(s,"GET","questioners/".concat(n.params.id));case 2:(t=e.sent).success?(a=t.questioner,r=a.title,o=a.description,i=a.questions,S(!1),E(r),v(o),k(i)):c.push("/questioners");case 4:case"end":return e.stop()}},e)}))():(S(!1),k([{_id:oe()(),content:""}]))},[]);var T=function(){var e=Object(m.a)(u.a.mark(function e(a){var r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r=j.map(function(e){var t=e._id;return{content:a.target[t].value}}),e.prev=2,e.next=5,M(s,"".concat("EDIT"===t?"PUT":"POST"),"questioners/".concat("EDIT"===t?"update/".concat(n.params.id):"new"),{title:p,description:h,questions:r});case 5:(o=e.sent).success||(alert("Failed to ".concat("UPDATE"===t?"update":"create"," questioner")),c.push("/questioners")),e.t0=t,e.next="EDIT"===e.t0?10:"CREATE"===e.t0?12:14;break;case 10:return c.push("/questioners/".concat(o.updatedQuestioner._id)),e.abrupt("break",14);case 12:return c.push("/questioners/".concat(o.questioner._id)),e.abrupt("break",14);case 14:e.next=19;break;case 16:e.prev=16,e.t1=e.catch(2),console.log(e.t1);case 19:case"end":return e.stop()}},e,null,[[2,16]])}));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(m.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure?")){e.next=11;break}return e.prev=1,e.next=4,M(s,"DELETE","questioners/delete/".concat(n.params.id));case 4:c.push("/questioners"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),alert("Unable to delete");case 11:case"end":return e.stop()}},e,null,[[1,7]])}));return function(){return e.apply(this,arguments)}}();return N?"Loading...":r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:te.a.buttons},r.a.createElement(y.a,{to:"/questioners/".concat("EDIT"===t?n.params.id:"")},r.a.createElement(D.a,{type:"submit"},r.a.createElement(_.a,{icon:J.a})," Back")),"EDIT"===t?r.a.createElement("div",{className:te.a.right},r.a.createElement(y.a,{to:"/questioners/".concat(n.params.id,"/edit")},r.a.createElement(D.a,{type:"submit",className:"btn-danger",onClick:P},r.a.createElement(_.a,{icon:J.g})," Remove"))):null),r.a.createElement(V.a,{className:"mt-4 mb-3"},r.a.createElement(K.a,null,"Title",r.a.createElement(ce.a,{className:"mb-2",value:p,onChange:function(e){return E(e.target.value)}}),"Description",r.a.createElement(ce.a,{value:h,onChange:function(e){return v(e.target.value)}}),r.a.createElement("hr",null),r.a.createElement(i.a,null,r.a.createElement("form",{className:te.a.form_grid,onSubmit:T,id:"questionsForm"},j?j.map(function(e){var t=e._id,n=e.content;return r.a.createElement("div",{className:te.a.quesion_input,key:t},r.a.createElement("input",{id:t,type:"text",className:"form-control",defaultValue:n,placeholder:"Enter your question..."}),r.a.createElement(D.a,{className:"btn-danger",onClick:function(){return e=t,k(j.filter(function(t){return t._id!==e}));var e}},r.a.createElement(_.a,{icon:J.g})))}):null,r.a.createElement(D.a,{className:"btn-primary",onClick:function(){return k([].concat(Object(re.a)(j),[{_id:oe()(),content:""}]))}},r.a.createElement(_.a,{icon:J.d})))))),r.a.createElement("div",{className:te.a.buttons},r.a.createElement("div",null,r.a.createElement(D.a,{type:"submit",className:"mt-1 btn-success",form:"questionsForm"},r.a.createElement(_.a,{icon:J.f})," Save"))))}),le=n(54),ue=n(96),me=n(97);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var de=Object(o.g)(function(e){var t=e.questions,n=void 0===t?[]:t,c=e.questionerId,s=e.history,o=w(),i=o.user,l=o.getTokenSilently,p=Object(a.useState)(n.map(function(e){return{_id:e._id,content:""}})),E=Object(d.a)(p,2),f=E[0],b=E[1],h=function(e){b(f.map(function(t){return t._id===e.target.id?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach(function(t){Object(le.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{content:e.target.value.trim()}):t}))},v=function(){var e=Object(m.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:return t=e.sent,e.next=5,M(t,"POST","answerLists/new",{questionerId:c,answers:f,responderEmail:i.email});case 5:(n=e.sent).success?(s.push("/answerlists/".concat(n.answerList._id)),window.alert("Thank you for responding!")):window.alert("Failed sending answers.");case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(ue.a,null,n.map(function(e){var t=e._id,n=e.content;return r.a.createElement(a.Fragment,{key:t},r.a.createElement(me.a,{className:"mt-3 mb-3",htmlFor:t},n),r.a.createElement(ce.a,{type:"textarea",name:"text",id:t,onChange:h,required:!0}))}),r.a.createElement(D.a,{type:"submit",className:"btn-lg btn-dark mt-3",onClick:function(){if(f.every(function(e){return e.content}))try{v()}catch(e){console.log(e),window.alert("Failed sending answers.")}else window.alert("Please, answer all the questions!")}},"Submit answer"))}),Ee=n(98),fe=function(e){var t=e.title,n=e.description,a=e.children;return r.a.createElement(V.a,{className:"mt-4 mb-5"},r.a.createElement(K.a,null,r.a.createElement(X.a,{className:te.a.title},t),r.a.createElement(Ee.a,{className:te.a.desc},n),r.a.createElement("hr",null),r.a.createElement(i.a,null,a)))},be=Object(o.g)(function(e){var t=e.match,n=e.history,c=Object(a.useState)(null),s=Object(d.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)(!0),p=Object(d.a)(l,2),E=p[0],f=p[1],b=Object(a.useState)(!1),h=Object(d.a)(b,2),v=h[0],g=h[1],O=w(),j=O.token,k=O.scope;if(Object(a.useEffect)(function(){Object(m.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(j,"GET","questioners/".concat(t.params.id));case 3:(a=e.sent).success||n.push("/questioners"),i(a.questioner),f(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),g(!0);case 13:case"end":return e.stop()}},e,null,[[0,9]])}))()},[]),E)return"Loading";if(v)return"Error";var q=o._id,x=o.title,N=o.description,S=o.questions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:te.a.buttons},r.a.createElement(y.a,{to:"/questioners"},r.a.createElement(D.a,{type:"submit"},r.a.createElement(_.a,{icon:J.a})," Back")),r.a.createElement("div",{className:te.a.right},r.a.createElement(ne,{scope:k,requiredScope:["update:questioners"]},r.a.createElement(y.a,{to:"/questioners/".concat(t.params.id,"/edit")},r.a.createElement(D.a,{type:"submit",className:"btn-primary"},r.a.createElement(_.a,{icon:J.c})," Edit"))))),r.a.createElement(fe,{title:x,description:N},r.a.createElement(de,{questionerId:q,questions:S})))}),he=function(e){var t=e.id,n=e.questionerTitle,a=e.responderEmail;return r.a.createElement(V.a,null,r.a.createElement(K.a,null,r.a.createElement(X.a,null,r.a.createElement("b",null,"Questioner: "),n),r.a.createElement(Z.a,null,r.a.createElement("b",null,"Responder's email: "),a),r.a.createElement(y.a,{to:"/answerlists/".concat(t)},r.a.createElement(D.a,null,"View"))))},ve=function(e){var t=e.answerLists;return r.a.createElement(H.a,null,t.map(function(e){var t=e._id,n=e.responderEmail,a=e.questioner;return r.a.createElement(he,{key:t,id:t,questionerTitle:a.title,responderEmail:n})}))},ge=function(){var e=w().getTokenSilently,t=Object(a.useState)(!0),n=Object(d.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)([]),i=Object(d.a)(o,2),l=i[0],p=i[1],E=Object(a.useState)(!1),f=Object(d.a)(E,2),b=f[0],h=f[1];return Object(a.useEffect)(function(){Object(m.a)(u.a.mark(function t(){var n,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:return n=t.sent,t.next=6,M(n,"GET","answerlists");case 6:a=t.sent,p(a.answerLists),s(!1),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),h(!0);case 14:case"end":return t.stop()}},t,null,[[0,11]])}))()},[]),c?"Loading...":b?"Error":r.a.createElement(a.Fragment,null,r.a.createElement(ve,{answerLists:l}))},we=n(28),Oe=n.n(we),je=Object(o.g)(function(e){var t=e.answers,n=e.questioner,c=t.map(function(e,t){var a=e._id,r=e.content;return{id:a,questionContent:n.questions[t].content,answerContent:r}});return r.a.createElement(ue.a,null,c.map(function(e){var t=e.id,n=e.questionContent,c=e.answerContent;return r.a.createElement(a.Fragment,{key:t},r.a.createElement(me.a,{className:"mt-3 mb-3",htmlFor:t},n),r.a.createElement(ce.a,{type:"textarea",name:"text",id:t,disabled:!0,value:c}))}))}),ke=Object(o.g)(function(e){var t=e.match,n=e.history,c=Object(a.useState)(null),s=Object(d.a)(c,2),o=s[0],l=s[1],p=Object(a.useState)(!0),E=Object(d.a)(p,2),f=E[0],b=E[1],h=Object(a.useState)(!1),v=Object(d.a)(h,2),g=v[0],O=v[1],j=w(),k=j.getTokenSilently,q=j.scope,x=j.token;Object(a.useEffect)(function(){Object(m.a)(u.a.mark(function e(){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:return a=e.sent,e.next=6,M(a,"GET","answerlists/".concat(t.params.id));case 6:(r=e.sent).success||n.push("/questioners"),l(r.answerList),b(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),O(!0);case 16:case"end":return e.stop()}},e,null,[[0,12]])}))()},[]);var N=function(){var e=Object(m.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Are you sure?")){e.next=5;break}return e.next=4,M(x,"DELETE","answerlists/delete/".concat(t.params.id));case 4:n.push("/answerlists");case 5:return e.prev=5,e.finish(5);case 7:case"end":return e.stop()}},e,null,[[0,,5,7]])}));return function(){return e.apply(this,arguments)}}();if(f)return"Loading...";if(g)return"Error";var S=o.questioner,T=o.answers,P=o.responderEmail;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Oe.a.buttons},r.a.createElement(y.a,{to:"/answerlists"},r.a.createElement(D.a,{type:"submit"},r.a.createElement(_.a,{icon:J.a})," Back")),r.a.createElement(ne,{scope:q,requiredScope:["delete:answerLists"]},r.a.createElement("div",{className:Oe.a.right},r.a.createElement(D.a,{type:"submit",className:"btn-danger",onClick:N},r.a.createElement(_.a,{icon:J.g})," Remove")))),r.a.createElement(V.a,{className:"mb-5"},r.a.createElement(K.a,null,r.a.createElement(X.a,{className:Oe.a.title},S.title),r.a.createElement(Ee.a,{className:Oe.a.desc},S.description),r.a.createElement("br",null),r.a.createElement(Ee.a,null,r.a.createElement("b",null,"Responder's email: "),P),r.a.createElement("hr",null),r.a.createElement(i.a,null,r.a.createElement(je,{questioner:S,answers:T})))))});z();var qe=function(){return w().loading?r.a.createElement(x,null):r.a.createElement(o.c,{history:W},r.a.createElement("div",{id:"app",className:"d-flex flex-column h-100"},r.a.createElement(U,null),r.a.createElement(i.a,{className:"flex-grow-1 mt-5"},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0,render:function(){return r.a.createElement(o.a,{to:"/questioners"})}}),r.a.createElement(j,{exact:!0,path:"/questioners",component:ae}),r.a.createElement(j,{exact:!0,path:"/questioners/create",render:function(){return r.a.createElement(ie,{mode:"CREATE"})},requiredScope:["create:questioners"]}),r.a.createElement(j,{exact:!0,path:"/questioners/:id",component:be}),r.a.createElement(j,{exact:!0,path:"/questioners/:id/edit",render:function(){return r.a.createElement(ie,{mode:"EDIT"})},requiredScope:["update:questioners"]}),r.a.createElement(j,{exact:!0,path:"/answerlists",component:ge}),r.a.createElement(j,{exact:!0,path:"/answerlists/:id",component:ke}))),r.a.createElement(Q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(function(e){var t=e.children,n=e.onRedirectCallback,c=void 0===n?v:n,s=Object(p.a)(e,["children","onRedirectCallback"]),o=Object(a.useState)(),i=Object(d.a)(o,2),l=i[0],E=i[1],b=Object(a.useState)(),w=Object(d.a)(b,2),O=w[0],j=w[1],k=Object(a.useState)(),q=Object(d.a)(k,2),x=q[0],y=q[1],_=Object(a.useState)(!0),N=Object(d.a)(_,2),S=N[0],T=N[1],P=Object(a.useState)(!1),C=Object(d.a)(P,2),L=C[0],D=C[1],A=Object(a.useState)([]),R=Object(d.a)(A,2),F=R[0],I=R[1],U=Object(a.useState)(null),Q=Object(d.a)(U,2),B=Q[0],W=Q[1];Object(a.useEffect)(function(){!function(){var e=Object(m.a)(u.a.mark(function e(){var t,n,a,r,o,i,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(s);case 2:if(t=e.sent,y(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,c(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,E(r),!r){e.next=27;break}return e.next=17,t.getUser();case 17:return o=e.sent,e.next=20,t.getTokenSilently();case 20:return i=e.sent,j(o),W(i),e.next=25,h()(i);case 25:l=e.sent,I(l.scope.split(" "));case 27:T(!1);case 28:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var G=function(){var e=Object(m.a)(u.a.mark(function e(){var t,n,a=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},D(!0),e.prev=2,e.next=5,x.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,D(!1),e.finish(10);case 13:return e.next=15,x.getUser();case 15:n=e.sent,j(n),E(!0);case 18:case"end":return e.stop()}},e,null,[[2,7,10,13]])}));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.next=3,x.handleRedirectCallback();case 3:return e.next=5,x.getUser();case 5:t=e.sent,T(!1),E(!0),j(t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(g.Provider,{value:{isAuthenticated:l,user:O,scope:F,token:B,loading:S,popupOpen:L,loginWithPopup:G,handleRedirectCallback:J,getIdTokenClaims:function(){return x.getIdTokenClaims.apply(x,arguments)},loginWithRedirect:function(){return x.loginWithRedirect.apply(x,arguments)},getTokenSilently:function(){return x.getTokenSilently.apply(x,arguments)},getTokenWithPopup:function(){return x.getTokenWithPopup.apply(x,arguments)},logout:function(){return x.logout.apply(x,arguments)}}},t)},{domain:"semreg-dev.eu.auth0.com",client_id:"H7DpuOhK61Dib9QkWAefsqo1uzR8EU5M",audience:"https://api.questioners.semreg.me/",redirect_uri:window.location.origin,onRedirectCallback:function(e){W.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(qe,null)),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,1,2]]]);
//# sourceMappingURL=main.2a9b2c26.chunk.js.map