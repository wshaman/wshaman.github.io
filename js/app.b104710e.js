(function(t){function e(e){for(var r,i,u=e[0],s=e[1],a=e[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);b&&b(e);while(f.length)f.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},c=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e8a58316"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t);var a=new Error;c=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",a.name="ChunkLoadError",a.type=r,a.request=c,n[1](a)}o[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var b=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"6acc":function(t,e,n){},"6e63":function(t){t.exports=JSON.parse('{"b":["#1 won!","#2 won!","#3 won!","#4 won!","#5 won!"],"a":[{"q":"Left or right? 1","answerLeft":[0,0,2,0,0],"answerRight":[0,1,0,1,0],"leftBtn":"Left","rightBtn":"Right"},{"q":"Left or right? 2","answerLeft":[0,0,2,3,0],"answerRight":[0,1,1,0,1],"leftBtn":"Left","rightBtn":"Right"},{"q":"Left or right? 3","answerLeft":[0,3,0,1,3],"answerRight":[0,1,1,0,0],"leftBtn":"Left","rightBtn":"Right"},{"q":"Left or right? 4","answerLeft":[1,1,0,0,2],"answerRight":[0,0,1,0,1],"leftBtn":"Left","rightBtn":"Right"}]}')},"9e22":function(t,e,n){"use strict";n("6acc")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["f"])("Home"),i=Object(r["f"])(" | "),u=Object(r["f"])("About");function s(t,e){var n=Object(r["w"])("router-link"),s=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",o,[Object(r["g"])(n,{to:"/"},{default:Object(r["B"])((function(){return[c]})),_:1}),i,Object(r["g"])(n,{to:"/about"},{default:Object(r["B"])((function(){return[u]})),_:1})]),Object(r["g"])(s)],64)}n("9e22");const a={};a.render=s;var l=a,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),f=n("cf05"),p=n.n(f),d={class:"home"},h=Object(r["g"])("img",{alt:"Vue logo",src:p.a},null,-1);function O(t,e,n,o,c,i){var u=Object(r["w"])("Poll");return Object(r["p"])(),Object(r["d"])("div",d,[h,Object(r["g"])(u)])}var j=Object(r["C"])("data-v-1a77ce9a");Object(r["s"])("data-v-1a77ce9a");var g={key:0,class:"question"},v=Object(r["f"])(" PP "),m={class:"message"},w={class:"buttons"},y=Object(r["f"])("  "),L={key:1,class:"answer"},P={class:"result"},q={class:"results table table-striped table-bordered table-sm"};Object(r["q"])();var R=j((function(t,e,n,o,c,i){return Object(r["p"])(),Object(r["d"])("div",null,[t.pollActive?(Object(r["p"])(),Object(r["d"])("div",g,[v,Object(r["g"])("div",m,Object(r["y"])(t.currentQuestion.q),1),Object(r["g"])("div",w,[Object(r["g"])("button",{id:"q-btn-left",class:"btn btn-primary",onClick:e[1]||(e[1]=function(e){return t.answer(1)})},Object(r["y"])(t.currentQuestion.leftBtn),1),y,Object(r["g"])("button",{id:"q-btn-right",class:"btn btn-primary",onClick:e[2]||(e[2]=function(e){return t.answer(0)})},Object(r["y"])(t.currentQuestion.rightBtn),1)])])):Object(r["e"])("",!0),t.pollActive?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("div",L,[Object(r["g"])("div",P,[Object(r["g"])("table",q,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(t.points,(function(e,n){return Object(r["p"])(),Object(r["d"])("tr",{key:n},[Object(r["g"])("td",null,Object(r["y"])(n),1),Object(r["g"])("td",null,Object(r["y"])(t.results[n]),1),Object(r["g"])("td",null,Object(r["y"])(e),1)])})),128))])])]))])})),B=n("6e63"),k=Object(r["h"])({name:"Poll",data:function(){return{cnt:0,numResults:0,results:B["b"],points:[],pollActive:!0,currentQuestion:{},questions:B["a"]}},created:function(){this.numResults=this.results.length;for(var t=0;t<this.numResults;t++)this.points[t]=0;this.loadQuestion()},methods:{answer:function(t){if(this.pollActive){for(var e=0===t?this.currentQuestion.answerRight:this.currentQuestion.answerLeft,n=0;n<this.numResults;n++)this.points[n]+=e[n];this.cnt++,this.loadQuestion()}},loadQuestion:function(){this.cnt>=this.questions.length?this.pollActive=!1:this.currentQuestion=this.questions[this.cnt]}}});k.render=R,k.__scopeId="data-v-1a77ce9a";var Q=k,_=Object(r["h"])({name:"Home",components:{Poll:Q}});_.render=O;var x=_,A=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],S=Object(b["a"])({history:Object(b["b"])("/"),routes:A}),C=S,M=(n("f9e3"),Object(r["c"])(l));M.use(C),M.mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.b104710e.js.map