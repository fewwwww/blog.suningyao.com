"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(o,".").concat(k)]||d[k]||u[k]||l;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<l;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:6},c="\ud83d\udd2c \u8c03\u7528\u65e0\u524d\u7aef\u65e0\u5408\u7ea6\u7684\u667a\u80fd\u5408\u7ea6",i={unversionedId:"Blockchain/hack-call",id:"Blockchain/hack-call",title:"\ud83d\udd2c \u8c03\u7528\u65e0\u524d\u7aef\u65e0\u5408\u7ea6\u7684\u667a\u80fd\u5408\u7ea6",description:"\u9898\u76ee",source:"@site/docs/Blockchain/hack-call.md",sourceDirName:"Blockchain",slug:"/Blockchain/hack-call",permalink:"/docs/Blockchain/hack-call",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcaa Arm Mac\u642d\u5efaFisco\u533a\u5757\u94fe",permalink:"/docs/Blockchain/fisco-arm-mac"},next:{title:"\ud83c\uddea\ud83c\uddec \u5b66\u4e60Cairo\u667a\u80fd\u5408\u7ea6\u5f00\u53d1 (\u96f6)",permalink:"/docs/Blockchain/cairo-0"}},o={},s=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u539f\u59cb\u9898\u76ee",id:"\u539f\u59cb\u9898\u76ee",level:2},{value:"\u9898\u76ee\u89e3\u8bfb",id:"\u9898\u76ee\u89e3\u8bfb",level:2},{value:"\u505a\u9898\u8fc7\u7a0b",id:"\u505a\u9898\u8fc7\u7a0b",level:2},{value:"1. \u627e\u51fa\u51fd\u6570 Signature",id:"1-\u627e\u51fa\u51fd\u6570-signature",level:3},{value:"2. \u627e\u51fa\u53ef\u80fd\u7684\u51fd\u6570",id:"2-\u627e\u51fa\u53ef\u80fd\u7684\u51fd\u6570",level:3},{value:"3. \u9006\u5411\u63a8\u51fa\u5408\u7ea6",id:"3-\u9006\u5411\u63a8\u51fa\u5408\u7ea6",level:3},{value:"4. \u8fd0\u884c\u731c\u51fa\u7684\u5408\u7ea6",id:"4-\u8fd0\u884c\u731c\u51fa\u7684\u5408\u7ea6",level:3},{value:"5. \u4f20\u5165\u53c2\u6570, \u63d0\u4ea4\u4ea4\u6613",id:"5-\u4f20\u5165\u53c2\u6570-\u63d0\u4ea4\u4ea4\u6613",level:3},{value:"\u9519\u8bef\u793a\u8303",id:"\u9519\u8bef\u793a\u8303",level:2},{value:"BONUS",id:"bonus",level:2}],p={toc:s};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u8c03\u7528\u65e0\u524d\u7aef\u65e0\u5408\u7ea6\u7684\u667a\u80fd\u5408\u7ea6"},"\ud83d\udd2c \u8c03\u7528\u65e0\u524d\u7aef\u65e0\u5408\u7ea6\u7684\u667a\u80fd\u5408\u7ea6"),(0,a.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,a.kt)("h2",{id:"\u539f\u59cb\u9898\u76ee"},"\u539f\u59cb\u9898\u76ee"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"task",src:n(76952).Z,width:"483",height:"919"})),(0,a.kt)("h2",{id:"\u9898\u76ee\u89e3\u8bfb"},"\u9898\u76ee\u89e3\u8bfb"),(0,a.kt)("p",null,"\u6211\u4eec\u76f4\u63a5\u770b\u9898. \u5df2\u77e5",(0,a.kt)("a",{parentName:"p",href:"https://polygonscan.com/address/0xc1fae1924303CC7a816919B7A3935Cda8Bf8eF3d"},"\u6709\u4e00\u4e2aPolygon\u94fe\u4e0a\u7684\u672a\u5f00\u6e90\u7684\u5408\u7ea6"),", \u6c42\u627e\u5230\u5176\u4e2d\u4e00\u4e2a\u51fd\u6570, \u5c06\u5fae\u4fe1\u6635\u79f0\u4f20\u5165\u5e76\u6210\u529f\u53d1\u9001\u4ea4\u6613."),(0,a.kt)("h2",{id:"\u505a\u9898\u8fc7\u7a0b"},"\u505a\u9898\u8fc7\u7a0b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u4e00\u5f00\u59cb\u60f3\u4e86\u597d\u4e45\u4e5f\u6ca1\u60f3\u901a, \u5361\u5728\u67d0\u4e00\u6b65\u4e86, \u5230\u6700\u540e\u505a\u5b8c\u624d\u77e5\u9053\u539f\u6765\u662f\u81ea\u5df1\u4e4b\u524d\u6316\u4e86\u4e2a\u5751.")),(0,a.kt)("p",null,"\u8096\u8d8a\u4e0e\u4f1a\u67ab\u7684\u89e3\u9898",(0,a.kt)("a",{parentName:"p",href:"https://meeting.tencent.com/v2/cloud-record/share?id=3634fff0-337f-4b60-8ca4-4277f3dc2513&from=3"},"\u89c6\u9891\u5f55\u50cf")),(0,a.kt)("h3",{id:"1-\u627e\u51fa\u51fd\u6570-signature"},"1. \u627e\u51fa\u51fd\u6570 Signature"),(0,a.kt)("p",null,"\u9996\u5148, \u6211\u4eec\u9700\u8981\u5ba1\u9898, \u8fd9\u662fPolygon\u4e0a\u7684\u5408\u7ea6, \u90a3\u4e48\u6211\u4eec\u5c31\u53bbPolygonscan\u4e0a\u6765\u641c\u7d22\u8fd9\u4e2a\u5408\u7ea6. \u627e\u5230\u7b2c\u4e00\u7b14\u6210\u529f\u4ea4\u6613."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"first transaction",src:n(86361).Z,width:"2742",height:"684"})),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u89c2\u5bdf\u51fa\u8fd9\u4e2a\u51fd\u6570\u7684\u540d\u5b57\u975e\u5e38\u5947\u602a. \u53ebBuy And Free2245... . \u540c\u65f6\u4e0a\u9762\u7684\u53e6\u4e00\u6761\u6210\u529f\u4ea4\u6613\u53ebElddhzr. \u4f46\u5728\u73b0\u6709\u7684\u4fe1\u606f\u4e0b\u6211\u4eec\u6ca1\u6cd5\u76f4\u63a5\u6765\u901a\u8fc7\u51fd\u6570\u7684\u540d\u5b57\u8c03\u7528, \u56e0\u4e3a\u6211\u4eec\u6ca1\u6709\u6e90\u7801."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"signature",src:n(29544).Z,width:"2742",height:"684"})),(0,a.kt)("p",null,"\u6211\u4eec\u70b9\u8fdb\u5176\u4e2d\u7684\u4e00\u4e2a\u4ea4\u6613, \u53bb\u770b\u5176\u4e2d\u7684\u5177\u4f53\u4fe1\u606f. \u6839\u636e\u6211\u4eec\u5728\u7f51\u7edc\u4e0a\u641c\u7d22\u5230\u7684",(0,a.kt)("a",{parentName:"p",href:"https://www.anquanke.com/post/id/189145"},"\u95ed\u6e90\u5408\u7ea6\u77e5\u8bc6"),", \u6211\u4eec\u53ef\u4ee5\u77e5\u9053. \u8fd9\u4e9b\u5404\u79cd0\u5f53\u4e2d\u76840x\u4ee5\u53ca\u524d\u516b\u4f4d\u662f\u51fd\u6570\u7684\u7b7e\u540d."),(0,a.kt)("p",null,"\u8fd9\u5c31\u66f4\u5947\u602a\u4e86, \u4e00\u4e2a\u51fd\u6570\u7684\u7b7e\u540d\u7adf\u7136\u4f1a\u5982\u6b64\u51d1\u5de7, \u6b63\u597d\u662f00000000. \u4f46\u662f\u6709\u4e86\u8fd9\u4e2a\u7ebf\u7d22, \u6211\u4eec\u6240\u80fd\u786e\u5b9a\u7684\u8303\u56f4\u66f4\u5c0f\u4e86."),(0,a.kt)("h3",{id:"2-\u627e\u51fa\u53ef\u80fd\u7684\u51fd\u6570"},"2. \u627e\u51fa\u53ef\u80fd\u7684\u51fd\u6570"),(0,a.kt)("p",null,"\u6211\u4eec\u6709\u4e860x00000000\u7684\u51fd\u6570\u7b7e\u540d\u540e, \u5c31\u9700\u8981\u7528\u5230",(0,a.kt)("a",{parentName:"p",href:"https://www.4byte.directory"},"\u4ee5\u592a\u574a\u7b7e\u540d\u6570\u636e\u5e93"),". \u8fd9\u91cc\u9762\u8bb0\u5f55\u4e86\u51e0\u5341\u4e07\u4e2a\u4e0d\u540c\u51fd\u6570\u548c\u65b9\u6cd5\u7684\u7b7e\u540d. \u6211\u4eec\u641c\u7d220x00000000\u5f97\u5230\u4ee5\u4e0b\u7ed3\u679c."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"db",src:n(69268).Z,width:"2742",height:"1200"})),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u5176\u4e2d\u770b\u5230\u4e86\u6211\u4eec\u7684\u719f\u4eba BuyAndFree \u51fd\u6570."),(0,a.kt)("p",null,"\u56de\u5fc6\u4e00\u4e0b\u9898\u76ee\u5185\u5bb9, \u51fd\u6570\u662f\u53ea\u6709\u4e00\u4e2a\u53c2\u6570, \u53c2\u6570\u662f\u80fd\u591f\u4f20\u5fae\u4fe1\u6635\u79f0\u7684. \u5fae\u4fe1\u6635\u79f0\u662f\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\u7684\u7ec4\u5408, \u90a3\u4e48\u5728\u5176\u4e2d\u5c31\u53ea\u80fd\u662f\u4f20\u4e00\u4e2abytes\u53c2\u6570\u7684\u51fd\u6570. \u6211\u4eec\u627e\u5230\u4ee5\u4e0b\u4e09\u4e2a\u53ef\u7591\u7684\u51fd\u6570."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"suspicious",src:n(91718).Z,width:"2742",height:"1200"})),(0,a.kt)("h3",{id:"3-\u9006\u5411\u63a8\u51fa\u5408\u7ea6"},"3. \u9006\u5411\u63a8\u51fa\u5408\u7ea6"),(0,a.kt)("p",null,"\u518d\u6b21\u56de\u5fc6\u4e00\u4e0b\u9898\u76ee\u5185\u5bb9. \u539f\u59cb\u9898\u76ee\u5185, \u6211\u4eec\u6210\u529f\u89e6\u53d1\u7684\u987a\u5e8f\u5c31\u662f\u6211\u4eec\u62a5\u540d\u7684\u987a\u5e8f, \u800c\u4e14\u6211\u4eec\u6240\u4f20\u5165\u7684\u53c2\u6570\u662f\u6211\u4eec\u7684\u5fae\u4fe1\u6635\u79f0. \u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u63a8\u65ad\u51fa\u5408\u7ea6\u6e90\u7801\u5185\u662f\u6709\u4e00\u4e2amapping\u6765\u5b58\u50a8\u62a5\u540d\u987a\u5e8f\u4ee5\u53ca\u5fae\u4fe1\u6635\u79f0\u7684. \u5176\u4e2d\u62a5\u540d\u7684\u987a\u5e8f\u80af\u5b9a\u662f\u4e00\u4e2a\u6570\u5b57, \u90a3\u4e48\u5c31\u80af\u5b9a\u662fuint256, \u5fae\u4fe1\u6635\u79f0\u5219\u662fbytes."),(0,a.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u63a8\u7406\u51fa\u5408\u7ea6\u7684\u5177\u4f53\u5185\u5bb9\u53ef\u80fd\u53ef\u4ee5\u662f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"pragma experimental ABIEncoderV2;\npragma solidity ^0.6.0;\n\ncontract hack{\n\n    mapping (uint256=>bytes) c;\n\n    function abcei51243fdgjkh(bytes memory _a) public returns(bytes memory){\n        c[2] = _a;\n        return _a;\n    }\n}\n")),(0,a.kt)("h3",{id:"4-\u8fd0\u884c\u731c\u51fa\u7684\u5408\u7ea6"},"4. \u8fd0\u884c\u731c\u51fa\u7684\u5408\u7ea6"),(0,a.kt)("p",null,"\u6211\u4eec\u628a\u5408\u7ea6\u5185\u5bb9\u653e\u5230",(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"remix"),"\u91cc. \u7f16\u8bd1\u540e\u9009\u62e9 Injected Web3 \u73af\u5883, \u5728\u4e0b\u65b9\u586b\u5165\u5408\u7ea6\u539f\u59cb\u7684\u5730\u5740. \u70b9\u51fb At Address."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"creation",src:n(67574).Z,width:"1292",height:"778"})),(0,a.kt)("p",null,"\u6211\u4eec\u6210\u529f\u5f97\u5230\u4e86\u6211\u4eec\u60f3\u8981\u7684\u90a3\u4e2a\u51fd\u6570!"),(0,a.kt)("h3",{id:"5-\u4f20\u5165\u53c2\u6570-\u63d0\u4ea4\u4ea4\u6613"},"5. \u4f20\u5165\u53c2\u6570, \u63d0\u4ea4\u4ea4\u6613"),(0,a.kt)("p",null,"\u4e0d\u8981\u5fd8\u8bb0\u8fd9\u4e2a\u51fd\u6570\u53c2\u6570\u7684\u7c7b\u578b\u662fbytes, \u6211\u4eec\u6ca1\u6cd5\u76f4\u63a5\u628a\u5b57\u7b26\u4e32\u586b\u8fdb\u53bb."),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u7528\u5230",(0,a.kt)("a",{parentName:"p",href:"http://www.hiencode.com/hex.html"},"\u53e6\u4e00\u4e2a\u5de5\u5177"),", \u5c06\u6211\u4eec\u7684\u6635\u79f0\u53d8\u6210hex\u7f16\u7801."),(0,a.kt)("p",null,"\u4e4b\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u76f4\u63a5\u628ahex\u7f16\u7801\u586b\u5165\u8fdb\u53bb, \u53d1\u8d77\u4ea4\u6613. (\u522b\u5fd8\u4e86\u5728\u524d\u9762\u52a0\u4e0a0x)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"send",src:n(45801).Z,width:"1292",height:"778"})),(0,a.kt)("p",null,"\u652f\u4ed8\u624b\u7eed\u8d39\u786e\u8ba4\u4ea4\u6613\u4e4b\u540e\u4f60\u5c31\u53ef\u4ee5\u770b\u5230\u6210\u529f\u5566!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"success",src:n(97324).Z,width:"1854",height:"1052"})),(0,a.kt)("h2",{id:"\u9519\u8bef\u793a\u8303"},"\u9519\u8bef\u793a\u8303"),(0,a.kt)("p",null,"\u4e00\u4e2a\u5f88\u5178\u578b\u7684\u9519\u8bef\u793a\u8303\u5c31\u662f\u5c1d\u8bd5\u628a\u5b57\u8282\u7801\u53cd\u7f16\u8bd1\u51fa\u6765. ","[\u53cd\u7f16\u8bd1\u7684\u5de5\u5177]","\u4e2d\u4e0d\u5305\u542bPolygon\u7f51\u7edc, \u5c31\u7b97\u628a\u5b57\u8282\u7801\u7c98\u8d34\u8fc7\u53bb, \u6210\u529f\u53cd\u7f16\u8bd1\u51fa\u6765\u4e4b\u540e\u4e5f\u4f1a\u662f\u5929\u4e66."),(0,a.kt)("h2",{id:"bonus"},"BONUS"),(0,a.kt)("p",null,"\u5728\u9898\u76ee\u53d1\u51fa\u7684\u4e00\u4e2a\u661f\u671f\u524d, \u6211\u6b63\u597d\u5728\u7fa4\u91cc\u8f6c\u4e86\u5173\u4e8e\u51fd\u6570\u7b7e\u540d\u5e260\u80fd\u7701gas\u7684\u804a\u5929\u8bb0\u5f55 (\u8fd9\u91cc\u6709\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/coinmonks/on-efficient-ethereum-addresses-3fef0596e263"},"\u76f8\u5173\u7684\u6587\u7ae0"),"\u63a8\u8350\u9605\u8bfb). \u5f53\u65f6\u5d14\u68c9\u5927\u5e08\u8bc4\u8bba\u4e86\u51e0\u53e5. \u4e4b\u540e\u53ef\u80fd\u4e5f\u662f\u53d7\u8fd9\u51e0\u7bc7\u6587\u7ae0\u7684\u542f\u53d1, \u6240\u4ee5\u51fa\u4e86\u8fd9\u9053\u9898, \u628a\u6211\u96be\u4f4f\u8fd9\u4e48\u597d\u51e0\u5929."),(0,a.kt)("p",null,"\u611f\u8c22\u4f1a\u67ab\u548c\u8096\u8d8a\u7684\u89e3\u9898!"))}u.isMDXComponent=!0},67574:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/creation-6a2cdc96e118c721a154aee2feaaf3c7.png"},69268:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/db-5c289f87ab63d83ce5ab339271e71c36.png"},86361:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/first-e165da9f1b5ecb9b68ec7a85940cbd01.png"},45801:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/send-c1b062ce442e84ab3ba54280e50966ac.png"},29544:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/signature-ac7cb616fef6e924bcce722b4558d1f3.png"},97324:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/success-4fc019f95e7ce8a69187170f7465a57e.png"},91718:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sus-e6119126eb4952779449ddb5745bfcf3.png"},76952:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/task-bcee396ba84fce8427c19786223d8e0f.png"}}]);