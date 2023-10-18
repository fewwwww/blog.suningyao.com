"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(n),k=i,c=d["".concat(o,".").concat(k)]||d[k]||s[k]||a;return n?r.createElement(c,p(p({ref:t},u),{},{components:n})):r.createElement(c,p({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var m=2;m<a;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_label:"\u26a1\ufe0f Vue\u9879\u76ee\u9996\u5c4f\u6253\u5f00\u901f\u5ea6\u7684\u4f18\u5316",sidebar_position:3},p="\u26a1 Vue\u9879\u76ee\u9996\u5c4f\u6253\u5f00\u901f\u5ea6\u7684\u4f18\u5316",l={unversionedId:"Code/vue-performance",id:"Code/vue-performance",title:"\u26a1 Vue\u9879\u76ee\u9996\u5c4f\u6253\u5f00\u901f\u5ea6\u7684\u4f18\u5316",description:"\u9879\u76ee\u7684\u60c5\u51b5",source:"@site/docs/Code/vue-performance.md",sourceDirName:"Code",slug:"/Code/vue-performance",permalink:"/docs/Code/vue-performance",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"\u26a1\ufe0f Vue\u9879\u76ee\u9996\u5c4f\u6253\u5f00\u901f\u5ea6\u7684\u4f18\u5316",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd2c CSS\u5e27\u6846\u5185\u90e8\u5185\u5bb9\u8fc7\u5927\u548c\u6ee4\u955c",permalink:"/docs/Code/iframe-size"},next:{title:"\ud83e\udd35\ud83c\udffb\u200d\u2642\ufe0f React Web3\u4f18\u96c5\u7684\u767b\u5f55\u9a8c\u8bc1",permalink:"/docs/Code/auth"}},o={},m=[{value:"\u9879\u76ee\u7684\u60c5\u51b5",id:"\u9879\u76ee\u7684\u60c5\u51b5",level:2},{value:"\u56fe\u7247\u52a0\u8f7d\u5bfc\u81f4\u7684\u6027\u80fd\u95ee\u9898",id:"\u56fe\u7247\u52a0\u8f7d\u5bfc\u81f4\u7684\u6027\u80fd\u95ee\u9898",level:2},{value:"\u61d2\u52a0\u8f7dLazy Loading",id:"\u61d2\u52a0\u8f7dlazy-loading",level:3},{value:"\u56fe\u7247\u5927\u5c0f\u538b\u7f29",id:"\u56fe\u7247\u5927\u5c0f\u538b\u7f29",level:3},{value:"JS\u52a0\u8f7d\u5bfc\u81f4\u7684\u6027\u80fd\u95ee\u9898",id:"js\u52a0\u8f7d\u5bfc\u81f4\u7684\u6027\u80fd\u95ee\u9898",level:2},{value:"Prerender?",id:"prerender",level:3},{value:"Code Splitting",id:"code-splitting",level:3},{value:"\u5206\u5272\u5927\u6587\u4ef6",id:"\u5206\u5272\u5927\u6587\u4ef6",level:3},{value:"\u4f18\u5316\u6210\u679c",id:"\u4f18\u5316\u6210\u679c",level:2},{value:"\u8bfe\u4ee3\u8868\u603b\u7ed3",id:"\u8bfe\u4ee3\u8868\u603b\u7ed3",level:2}],u={toc:m};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-vue\u9879\u76ee\u9996\u5c4f\u6253\u5f00\u901f\u5ea6\u7684\u4f18\u5316"},"\u26a1 Vue\u9879\u76ee\u9996\u5c4f\u6253\u5f00\u901f\u5ea6\u7684\u4f18\u5316"),(0,i.kt)("h2",{id:"\u9879\u76ee\u7684\u60c5\u51b5"},"\u9879\u76ee\u7684\u60c5\u51b5"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u6211\u6700\u8fd1\u51e0\u4e2a\u6708\u4e00\u76f4\u5728\u53c2\u4e0e",(0,i.kt)("a",{parentName:"p",href:"https://violegacy.org/"},"VioLegacy"),"\u7f51\u7ad9\u7684\u5efa\u8bbe. \u524d\u7aef\u7684\u6280\u672f\u6808\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"Vue"),". \u8bf4\u5b9e\u8bdd\u4e00\u5f00\u59cb\u53c2\u4e0e\u7684\u65f6\u5019\u6211\u662f\u61f5\u7684, \u56e0\u4e3a\u6ca1\u600e\u4e48\u7528\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"Vue"),", \u5e73\u5e38\u5927\u591a\u662f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"React"),",\n\u540e\u6765\u6211\u8fb9\u770b\u8fb9\u5b66\u8fb9\u5199, \u540c\u65f6\u628a\u6837\u5f0f\u7684\u90e8\u5206\u6240\u6709\u7684\u6d3b\u90fd\u63fd\u4e0b\u6765\u4e86, \u8fd9\u624d\u5230\u73b0\u5728\u4e00\u76f4\u663e\u5f97\u5f88\u4f1a\u5199",(0,i.kt)("inlineCode",{parentName:"p"},"Vue"),"."),(0,i.kt)("p",null,"\u8fd9\u51e0\u5468\u5927\u5bb6\u4e00\u76f4\u5728\u641eSEO\u7684\u4e8b\u60c5, \u6211\u52a0\u4e86\u51e0\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"<meta>"),"\u6807\u7b7e, \u628aSEO\u7684\u8bc4\u5206\u7b97\u662f\u5b8c\u5168\u62c9\u6ee1\u4e86."),(0,i.kt)("p",null,"\u4f46\u662f\u4e00\u8dd1",(0,i.kt)("inlineCode",{parentName:"p"},"Lighthouse"),"\u53d1\u73b0, SEO\u6bd4\u8f83\u5dee\u7684\u7f18\u6545\u5f88\u53ef\u80fd\u4e3b\u8981\u662f\u9996\u9875\u6253\u5f00\u7684\u6027\u80fd\u95ee\u9898..."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"before optimize",src:n(2585).Z,width:"1134",height:"600"})),(0,i.kt)("p",null,"\u539f\u672c\u4ee5\u4e3a\u4f1a\u5f88\u4f4e, \u6ca1\u60f3\u5230\u4f1a\u8fd9\u4e48\u4f4e. \u8fd9\u4e48\u4f4e\u7684\u539f\u56e0\u6709\u4e24\u4e2a\u70b9:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6211\u4eec\u9996\u9875\u6709\u5341\u51e0\u5f20\u56e2\u961f\u6210\u5458\u7684\u7167\u7247")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6211\u4eec\u6240\u7528\u7684Vue\u6846\u67b6, \u662f\u9700\u8981\u52a0\u8f7dJS\u7136\u540e\u6ce8\u5165\u5230HTML\u91cc\u7684"))),(0,i.kt)("h2",{id:"\u56fe\u7247\u52a0\u8f7d\u5bfc\u81f4\u7684\u6027\u80fd\u95ee\u9898"},"\u56fe\u7247\u52a0\u8f7d\u5bfc\u81f4\u7684\u6027\u80fd\u95ee\u9898"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u7f51\u7ad9\u7684\u5e95\u90e8\u6709\u6bcf\u4e2a\u56e2\u961f\u6210\u5458\u7684\u7167\u7247, \u4ee3\u7801\u7ed3\u6784\u7c7b\u4f3c\u8fd9\u6837:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<div class="team-member">\n  <img\n    class="round-image"\n    src="@/images/VL-XXXXX.jpg"\n    alt="VL-Edward.jpg"\n    loading="lazy"\n  />\n  <h4>XXXX XXX XXX</h4>\n  <p>XXX XXXXX, 2020</p>\n  <p>University of XXX, 2021</p>\n  </div>\n')),(0,i.kt)("p",null,"\u50cf\u8fd9\u6837\u7684\u90e8\u5206\u8fd8\u6709\u5341\u51e0\u4e2a, \u800c\u4e14\u7531\u4e8e\u90fd\u662f\u81ea\u53d1\u4e0a\u4f20\u7684\u7167\u7247, \u6709\u4e9b\u76f8\u673a\u62cd\u6444\u7684\u7167\u7247\u7279\u522b\u5927. \u8fd9\u7edd\u5bf9\u662f\u4e00\u4e2a\u7f51\u7ad9\u52a0\u8f7d\u65f6\u7684\u5927\u9690\u60a3."),(0,i.kt)("h3",{id:"\u61d2\u52a0\u8f7dlazy-loading"},"\u61d2\u52a0\u8f7dLazy Loading"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"img"),"\u6807\u7b7e\u5185, \u52a0\u4e0a",(0,i.kt)("inlineCode",{parentName:"p"},'loading="lazy"'),", \u8fd9\u6837\u53ef\u4ee5\u8ba9\u56fe\u7247\u53ea\u6709\u5728\u89c6\u7a97\u5185\u7684\u65f6\u5019\u624d\u52a0\u8f7d."),(0,i.kt)("p",null,"\u8fd9\u6837\u80fd\u591f\u51cf\u5c11\u4e0d\u9700\u8981\u7684\u52a0\u8f7d\u65f6\u95f4."),(0,i.kt)("p",null,"\u4f46\u662f\u7531\u4e8e\u6211\u4eec\u7684\u4ee3\u7801\u4e2d, \u5df2\u7ecf\u5c06\u56fe\u7247\u8fdb\u884c\u4e86\u5206\u6279\u5c55\u793a, \u6240\u4ee5\u4f18\u5316\u6548\u679c\u4e0d\u660e\u663e"),(0,i.kt)("h3",{id:"\u56fe\u7247\u5927\u5c0f\u538b\u7f29"},"\u56fe\u7247\u5927\u5c0f\u538b\u7f29"),(0,i.kt)("p",null,"\u4e4b\u524d\u63d0\u5230\u4e00\u4e9b\u76f8\u673a\u62cd\u6444\u7684\u7167\u7247\u5f88\u5927, \u6240\u4ee5\u6211\u76f4\u63a5\u60f3\u5230\u4e86\u7528",(0,i.kt)("a",{parentName:"p",href:"https://tinypng.com"},"tinypng"),"\u6765\u538b\u7f29\u56fe\u7247\u7684\u5927\u5c0f."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"png\u662f\u65e0\u635f\u7684\u56fe\u7247\u683c\u5f0f, \u53ef\u4ee5\u65e0\u635f\u538b\u7f29; jpg\u662f\u6709\u635f\u7684, \u538b\u7f29\u65f6\u53ef\u80fd\u4f1a\u53d7\u5230\u4e00\u4e9b\u5c0f\u7834\u574f. \u540c\u65f6\u4e5f\u53ef\u4ee5\u624b\u52a8\u4fee\u6539\u56fe\u7247\u5c3a\u5bf8\u6765\u51cf\u5c11\u56fe\u7247\u5927\u5c0f.")),(0,i.kt)("p",null,"\u76f4\u63a5\u628a\u5341\u51e0\u5f20\u56fe\u7247\u62d6\u8fdb\u53bb\u538b\u7f29\u540e\u4e0b\u8f7d\u66ff\u6362\u5373\u53ef. \u8fd9\u4e00\u6b65\u8ba9\u6211\u4eec\u7f51\u7ad9\u7684\u56fe\u7247\u603b\u5927\u5c0f\u51cf\u5c11\u4e8650%. \u4f46\u662f\u8fd8\u662f\u4f18\u5316\u4e0d\u660e\u663e."),(0,i.kt)("h2",{id:"js\u52a0\u8f7d\u5bfc\u81f4\u7684\u6027\u80fd\u95ee\u9898"},"JS\u52a0\u8f7d\u5bfc\u81f4\u7684\u6027\u80fd\u95ee\u9898"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u7ecf\u8fc7\u56fe\u7247\u8d44\u6e90\u5927\u5c0f\u7684\u4f18\u5316, \u6211\u4eec\u53d1\u73b0\u597d\u50cf\u5e76\u6ca1\u6709\u4ec0\u4e48\u7528. \u5927\u5934\u4f9d\u7136\u662fJS\u7684\u52a0\u8f7d."),(0,i.kt)("h3",{id:"prerender"},"Prerender?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vue"),"\u7684\u56e2\u961f\u6210\u5458\u505a\u8fc7\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chrisvfritz/prerender-spa-plugin"},"\u9884\u5148\u6e32\u67d3\u7684\u63d2\u4ef6"),". \u8fd9\u4e2a\u63d2\u4ef6\u914d\u7f6e\u5f88\u65b9\u4fbf, \u53ef\u4ee5\u9884\u5148\u6e32\u67d3\u4e00\u4e9b\u6587\u4ef6, \u7136\u540e\u63d0\u9ad8\u52a0\u8f7d\u901f\u5ea6."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Prerender"),"\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"SSR"),"\u4e0d\u540c."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SSR"),"\u662f\u7528\u6237\u8fdb\u5165\u7f51\u5740\u540e, \u628aJS\u5148\u9001\u5230\u670d\u52a1\u5668\u6e32\u67d3\u5b8cHTML\u518d\u7ed9\u5ba2\u6237\u7aef;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Prerender"),"\u662f\u6784\u5efa\u65f6\u901a\u8fc7\u4e00\u4e2a\u65e0\u5934\u6d4f\u89c8\u5668\u53bb\u6e32\u67d3\u51faHTML.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SSR"),"\u4f1a\u589e\u52a0\u670d\u52a1\u5668\u7684\u538b\u529b, \u914d\u7f6e\u9ebb\u70e6;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Prerender"),"\u4f1a\u5f88\u5927\u62d6\u6162\u6784\u5efa\u7684\u901f\u5ea6, \u5c31\u8fde\u6e32\u67d3\u4e00\u4e2a\u7f51\u5740\u4e5f\u9700\u8981\u5341\u79d2\u5de6\u53f3\u7684\u65f6\u95f4."))))),(0,i.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u7684\u9700\u6c42\u53ea\u662f\u6e32\u67d3\u9996\u9875, \u6240\u4ee5\u6211\u9009\u62e9\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"Prerender"),"."),(0,i.kt)("p",null,"\u7ecf\u8fc7\u7b80\u5355\u7684\u914d\u7f6e, \u751f\u6210\u4e86\u4e00\u4e2a\u5145\u6ee1\u5185\u5bb9\u7684HTML\u6587\u4ef6, \u4f46\u662f\u4e00\u8fd0\u884c, \u600e\u4e48\u8fd8\u662f\u9700\u8981\u52a0\u8f7d\u90a3\u4e48\u591aJS. \u4e8e\u662f\u6211\u770b\u4e86\u4e0b\u751f\u6210\u7684\u6587\u4ef6, \u53d1\u73b0\u91cc\u9762\u6570\u636e\u90fd\u662f\u7f3a\u5931\u7684, \u800c\u4e14\u6837\u5f0f\u4e5f\u662f.\n\u95ee\u9898\u5927\u4e86."),(0,i.kt)("p",null,"\u56e0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Prerender"),"\u8fd8\u6709\u4e00\u4e2a\u95ee\u9898\u662f\u4e0d\u600e\u4e48\u9002\u7528\u4e8e\u52a8\u6001\u6570\u636e\u5f88\u591a\u7684\u9875\u9762... \u5982\u679c\u60f3\u8981\u628a\u52a8\u6001\u6570\u636e\u4e5f\u5e26\u4e0a, \u9700\u8981\u7ed9\u6839\u7ec4\u4ef6\u8bbe\u7f6e\u4e00\u4e2a\u5b9a\u65f6\u5668, \u8ba9\u5b83\u628a\u6570\u636e\u62ff\u5b8c\u518d\u6e32\u67d3.\n\u90a3\u4e48\u53ef\u80fd\u5c31\u610f\u5473\u7740, \u5f00\u53d1\u65f6\u6bcf\u6b21\u6784\u5efa\u90fd\u5f97\u989d\u5916\u7b49\u4e2a5\u79d2\u7b49\u6570\u636e, \u8fd9\u5c31\u6709\u70b9\u5f97\u4e0d\u507f\u5931\u4e86, \u751a\u81f3\u8fd8\u4e0d\u5982\u54ac\u54ac\u7259\u4e0a",(0,i.kt)("inlineCode",{parentName:"p"},"SSR"),"."),(0,i.kt)("h3",{id:"code-splitting"},"Code Splitting"),(0,i.kt)("p",null,"\u4e4b\u540e\u6211\u641c\u7d22\u4e86\u4e00\u4e9b\u4f18\u5316\u76f8\u5173\u7684\u5185\u5bb9, \u53d1\u73b0\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"p"},"router"),"\u6765\u505a\u5230\u7ec4\u4ef6\u7684\u6309\u9700\u52a0\u8f7d."),(0,i.kt)("p",null,"\u6211\u6e05\u6670\u5730\u8bb0\u5f97\u4e4b\u524d\u6709\u770b\u5230\u8fc7\u6211\u4eec\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"router"),", \u56e0\u4e3a\u5b83\u662f\u957f\u8fd9\u6837\u7684."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Official from '../views/Official.vue'\nimport LogIn from '../views/LogIn.vue'\nimport SignUp from '../views/SignUp.vue'\nimport StudentSignUp from '../views/SignUp/StudentSignUp.vue'\nimport AlumniSignUp from '../views/SignUp/AlumniSignUp.vue'\nimport Verification from '../views/Verification.vue'\nimport Main from '../views/Main.vue'\nimport Home from '../views/Main/Home.vue'\nimport MyWishesDetail from '../views/Main/MyWishesDetail.vue'\nimport WishList from '../views/Main/WishList.vue'\nimport WishListSenior from '../views/Main/WishListSenior.vue'\nimport WishCompany from '../views/Main/WishCompany.vue'\nimport Opportunities from '../views/Main/Opportunities.vue'\nimport Messages from '../views/Main/Messages.vue'\nimport OppDetail from '../views/Main/OppDetail.vue'\nimport FAQ from '../views/Main/FAQ.vue'\nimport AccountSettings from '../views/Main/AccountSettings.vue'\nimport Dashboard from '../views/Main/Dashboard.vue'\nimport PostOppDetail from '../views/Main/PostOppDetail.vue'\nimport PostNewOpp from '../views/Main/PostNewOpp.vue'\nimport EditPostOpp from '../views/Main/EditPostOpp.vue'\nimport AdminPage from '../views/Main/AdminPage.vue'\nimport Report from '../views/Main/Report.vue'\n")),(0,i.kt)("p",null,"\u6211\u4e0d\u4f1a\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"router"),", \u4f46\u662f\u6211\u5927\u53d7\u9707\u64bc. \u8fd9\u4f1a\u5bfc\u81f4\u4e00\u4e2a\u5f88\u53ef\u6015\u7684\u95ee\u9898, \u5c31\u662f\u4e00\u5f00\u59cb\u52a0\u8f7d\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"router"),"\u7684\u65f6\u5019, \u4f1a\u628a\u6240\u6709\u7684\u4e1c\u897f\u90fd",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"\u8fc7\u6765, \u5f62\u6210\u7684bundle\u4f1a\u5de8\u5927."),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f18\u5316\u8fd9\u4e2a\u60c5\u51b5, \u53ef\u4ee5",(0,i.kt)("a",{parentName:"p",href:"https://www.bacancytechnology.com/blog/vuejs-app-performance-optimization#3"},"\u8fd9\u6837\u505a"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const routes = [\n  {\n    path: '/',\n    name: 'Official',\n    component: () => import('../views/Official.vue')\n  }\n......\n")),(0,i.kt)("p",null,"\u628a\u6bcf\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"\u4fee\u6539\u6210\u8fd9\u6837, \u5c31\u53ef\u4ee5\u505a\u5230\u901a\u8fc7\u4e00\u4e2a\u56de\u8c03\u51fd\u6570, \u6309\u9700import\u5916\u90e8\u6587\u4ef6\u6765\u52a0\u8f7d, \u5927\u5927\u51cf\u5c11Bundle\u7684\u5927\u5c0f."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"React\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"router"),(0,i.kt)("a",{parentName:"p",href:"https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html#:~:text=Code%20Splitting%20in%20Create%20React%20App%201%20Code,the%20Async%20Component.%20...%205%20Next%20Steps.%20"},"\u4f18\u5316")," \u4e5f\u7c7b\u4f3c.")),(0,i.kt)("p",null,"\u901a\u8fc7\u8fd9\u51e0\u6b65, \u6211\u4eec\u7684\u6e32\u67d3\u65f6\u95f4\u5927\u5927\u52a0\u5feb."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"after first optimize",src:n(69059).Z,width:"1134",height:"590"})),(0,i.kt)("h3",{id:"\u5206\u5272\u5927\u6587\u4ef6"},"\u5206\u5272\u5927\u6587\u4ef6"),(0,i.kt)("p",null,"\u901a\u8fc7\u89c2\u5bdfConsole\u5185Network\u91cc\u7684\u52a0\u8f7d\u8fdb\u5ea6\u6211\u4eec\u53d1\u73b0, \u6700\u540e\u7b49\u7684\u5c31\u662f\u4e00\u4e2a\u5de8\u5927\u76842MB\u7684js\u6587\u4ef6, \u5176\u4ed6\u8d44\u6e90\u90fd\u7a7a\u95f2\u7740."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"chrome\u7b49\u6d4f\u89c8\u5668\u540c\u57df\u540d\u53ef\u540c\u65f6\u52a0\u8f7d\u7684\u6587\u4ef6\u5927\u7ea6\u90fd\u662f6\u4e2a.")),(0,i.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u5c31\u53ef\u4ee5\u62c6\u5206\u5927\u6587\u4ef6, \u505a\u5230\u6d4f\u89c8\u5668\u7a7a\u95f2\u7684\u65f6\u5019\u4e5f\u6709\u4e1c\u897f\u53ef\u4e0b\u8f7d. \u8fd9\u6837\u5e76\u53d1\u8fde\u63a5\u53ef\u4ee5\u66f4\u6709\u6548\u7387. \u6700\u7406\u60f3\u7684\u60c5\u51b5\u5c31\u662f\u6240\u6709\u7ebf\u7a0b\u540c\u65f6\u7ed3\u675f."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  configureWebpack: {\n    optimization: {\n      splitChunks: {\n        minSize: 10000,\n        maxSize: 25000,\n      }\n    }\n  }\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a\u6700\u5c0f\u6700\u5927\u5176\u5b9e\u4e5f\u53ea\u80fd\u662fnode_module\u91cc\u5355\u72ec\u4f9d\u8d56\u5305\u7684\u5927\u5c0f, \u6240\u4ee5\u6570\u503c\u53ef\u4ee5\u901a\u8fc7\u4e0d\u505c\u70bc\u4e39\u6765\u8c03\u6574.")),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0d\u65ad\u5730\u5c1d\u8bd5, \u6211\u4eec\u7684\u52a0\u8f7d\u65f6\u95f4\u5c11\u4e861\u79d2."),(0,i.kt)("h2",{id:"\u4f18\u5316\u6210\u679c"},"\u4f18\u5316\u6210\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"finally optimized",src:n(27274).Z,width:"1134",height:"625"})),(0,i.kt)("p",null,"\u901a\u8fc7\u6211\u4eec\u5f3a\u786c\u7684\u624b\u6bb5, \u7f51\u7ad9\u6027\u80fd\u4ece\u2764\ufe0f\u63d0\u9ad8\u5230\u4e86\ud83d\udc9b, \u4ece",(0,i.kt)("strong",{parentName:"p"},"37"),"\u63d0\u9ad8\u5230\u4e86",(0,i.kt)("strong",{parentName:"p"},"52"),", \u63d0\u5347\u4e86",(0,i.kt)("strong",{parentName:"p"},"40%"),". \u6e32\u67d3\u65f6\u95f4\u4ece",(0,i.kt)("strong",{parentName:"p"},"4.6s"),"\u5230",(0,i.kt)("strong",{parentName:"p"},"2.6s"),", \u51cf\u5c11\u4e8677%."),(0,i.kt)("p",null,"\u7f51\u7ad9\u7684\u6027\u80fd\u5927\u5927\u63d0\u9ad8, \u7528\u6237\u7684\u4ea4\u4e92\u4e5f\u5c06\u5927\u5927\u63d0\u5347."),(0,i.kt)("h2",{id:"\u8bfe\u4ee3\u8868\u603b\u7ed3"},"\u8bfe\u4ee3\u8868\u603b\u7ed3"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u61d2\u52a0\u8f7d",(0,i.kt)("inlineCode",{parentName:"li"},"img"),"\u6807\u7b7e."),(0,i.kt)("li",{parentName:"ol"},"\u7528",(0,i.kt)("a",{parentName:"li",href:"https://tinypng.com"},"tinypng"),"\u6765\u538b\u7f29\u56fe\u7247\u7684\u5927\u5c0f."),(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"li"},"router"),"\u6765\u61d2\u52a0\u8f7d\u7ec4\u4ef6."),(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"li"},"splitChunks"),"\u5206\u5272\u5927js\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"Prerender"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"li"},"SSR"),".")))}s.isMDXComponent=!0},2585:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1-47ffed24e098ae80e1198962d2deda3d.png"},69059:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2-7b1d88422b238a156517c5fbf1e2f517.png"},27274:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3-bc1a32465772e5c00ee78453e8db3a53.png"}}]);