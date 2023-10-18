"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2516],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),o=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=o(a),k=n,h=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return a?r.createElement(h,l(l({ref:e},u),{},{components:a})):r.createElement(h,l({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1467:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const i={},l="\ud83e\udd1d \u5bf9\u4e8e Uniswap \u524d\u7aef\u8d39\u7528\u7684\u8ba8\u8bba",s={unversionedId:"Blockchain/uniswap-interface-fee",id:"Blockchain/uniswap-interface-fee",title:"\ud83e\udd1d \u5bf9\u4e8e Uniswap \u524d\u7aef\u8d39\u7528\u7684\u8ba8\u8bba",description:"English Version (latest version): People's Views on Uniswap Swap Fee.",source:"@site/docs/Blockchain/uniswap-interface-fee.md",sourceDirName:"Blockchain",slug:"/Blockchain/uniswap-interface-fee",permalink:"/docs/Blockchain/uniswap-interface-fee",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd9\u200d\u2642\ufe0f \u8bfb\u61c2TWAP: \u4e0b\u4e00\u4ee3\u9884\u8a00\u673a",permalink:"/docs/Blockchain/twap"},next:{title:"\ud83d\udcac \u5bf9\u4e8e UTXOracle \u7684\u8ba8\u8bba",permalink:"/docs/Blockchain/utxoracle"}},p={},o=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u5173\u4e8e\u6cbb\u7406\u4e0e\u53bb\u4e2d\u5fc3\u5316\u7684\u770b\u6cd5",id:"\u5173\u4e8e\u6cbb\u7406\u4e0e\u53bb\u4e2d\u5fc3\u5316\u7684\u770b\u6cd5",level:2},{value:"$UNI \u6ca1\u6709\u7528",id:"uni-\u6ca1\u6709\u7528",level:3},{value:"\u4e0d\u7ecf\u8fc7\u6cbb\u7406\u662f\u53ef\u4ee5\u7684",id:"\u4e0d\u7ecf\u8fc7\u6cbb\u7406\u662f\u53ef\u4ee5\u7684",level:3},{value:"\u4e0d\u7ecf\u8fc7\u6cbb\u7406\u662f\u4e0d\u597d\u7684",id:"\u4e0d\u7ecf\u8fc7\u6cbb\u7406\u662f\u4e0d\u597d\u7684",level:3},{value:"\u5173\u4e8e\u5206\u53c9\u4e0e\u524d\u7aef\u7684\u770b\u6cd5",id:"\u5173\u4e8e\u5206\u53c9\u4e0e\u524d\u7aef\u7684\u770b\u6cd5",level:2},{value:"Uniswap \u754c\u9762\u4ecd\u5c06\u88ab\u4f7f\u7528",id:"uniswap-\u754c\u9762\u4ecd\u5c06\u88ab\u4f7f\u7528",level:3},{value:"\u5206\u53c9\u5c06\u4e0d\u540c",id:"\u5206\u53c9\u5c06\u4e0d\u540c",level:3},{value:"\u5173\u4e8e\u7b56\u7565\u7684\u770b\u6cd5",id:"\u5173\u4e8e\u7b56\u7565\u7684\u770b\u6cd5",level:2},{value:"\u7ee7\u7eed\u5360\u636e\u4e3b\u5bfc\u5730\u4f4d",id:"\u7ee7\u7eed\u5360\u636e\u4e3b\u5bfc\u5730\u4f4d",level:3},{value:"Uniswap\u5e26\u6765\u7684\u4e0d\u540c\u6a21\u5f0f",id:"uniswap\u5e26\u6765\u7684\u4e0d\u540c\u6a21\u5f0f",level:3},{value:"\u6076\u641e",id:"\u6076\u641e",level:2},{value:"\u6211\u7684\u9884\u6d4b",id:"\u6211\u7684\u9884\u6d4b",level:2}],u={toc:o};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-\u5bf9\u4e8e-uniswap-\u524d\u7aef\u8d39\u7528\u7684\u8ba8\u8bba"},"\ud83e\udd1d \u5bf9\u4e8e Uniswap \u524d\u7aef\u8d39\u7528\u7684\u8ba8\u8bba"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"English Version (latest version): ",(0,n.kt)("a",{parentName:"p",href:"https://mirror.xyz/msfew.eth/AOz3IJ-NkophiBoEPkllndLnVrZU52O_ac-RPi5oNvs"},"People's Views on Uniswap Swap Fee"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u672c\u7ffb\u8bd1\u7248\u672c\u5b8c\u5168\u7531 AI \u751f\u6210, \u5982\u6709\u9519\u8bef, \u8bf7\u53c2\u7167\u4ee5\u4e0a\u94fe\u63a5\u82f1\u6587\u539f\u6587.")),(0,n.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,n.kt)("p",null,"\u5728\u6709\u9650\u7684\u4e00\u4e9b\u4ee3\u5e01\u4ea4\u6613\u5bf9\u4e0a, Uniswap Labs ",(0,n.kt)("a",{parentName:"p",href:"https://support.uniswap.org/hc/en-us/articles/20131678274957-What-are-Uniswap-Labs-fees"},"\u5f00\u59cb")," \u6536\u53d6 0.15% \u7684\u56fa\u5b9a\u8d39\u7528, \u4ee5\u53ef\u6301\u7eed\u8d44\u52a9 Uniswap \u7684\u8fd0\u8425."),(0,n.kt)("p",null,"\u8fd9\u4e0e Uniswap \u8bae\u5b9a\u8d39\u7528\u5f00\u5173\u662f\u5206\u5f00\u7684, \u8be5\u5f00\u5173\u7531 Uniswap \u6cbb\u7406\u8fdb\u884c\u6295\u7968 (\u63d0\u6848\u3001\u5de5\u4f5c\u7ec4\u3001\u6e29\u5ea6\u68c0\u67e5\u3001\u4fe1\u53f7\u6295\u7968\u3001\u4e34\u65f6\u8bd5\u7528\u671f)."),(0,n.kt)("p",null,"Hayden ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/haydenzadams/status/1713987105666265113"},"\u8868\u793a"),":\u201c\u7528\u6237\u6709\u65e0\u6570\u79cd\u4f7f\u7528\u65b9\u5f0f, \u53ef\u4ee5\u901a\u8fc7\u805a\u5408\u5668\u3001\u5176\u4ed6\u7528\u6237\u754c\u9762\uff0c\u6216\u76f4\u63a5\u4e0e\u667a\u80fd\u5408\u540c\u4e92\u52a8. \u5728\u6211\u770b\u6765, \u6211\u4eec\u7684\u754c\u9762\u4ecd\u7136\u662f\u6700\u597d\u7684.\u201d"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u6b64\u4e8b\u4ef6, \u5b58\u5728\u8bb8\u591a\u4e0d\u540c\u7684\u89c2\u70b9. \u6211\u5c06\u4ece\u4e0d\u540c\u7684\u89d2\u5ea6\u51fa\u53d1, \u6536\u96c6\u5176\u4ed6\u4eba\u7684\u60f3\u6cd5, \u7136\u540e\u8868\u8fbe\u6211\u7684\u89c2\u70b9."),(0,n.kt)("h2",{id:"\u5173\u4e8e\u6cbb\u7406\u4e0e\u53bb\u4e2d\u5fc3\u5316\u7684\u770b\u6cd5"},"\u5173\u4e8e\u6cbb\u7406\u4e0e\u53bb\u4e2d\u5fc3\u5316\u7684\u770b\u6cd5"),(0,n.kt)("p",null,"\u5728\u6cbb\u7406\u5c42\u9762, \u8bb8\u591a\u8ba8\u8bba\u96c6\u4e2d\u5728 Uniswap \u5df2\u7ecf\u62e5\u6709\u4e00\u5957\u673a\u5236\u6765\u5bf9\u534f\u8bae\u8fdb\u884c\u66f4\u6539, \u800c\u8fd9\u4e00\u4e8b\u4ef6\u72ec\u7279\u4e4b\u5904\u5728\u4e8e\u8fd9\u662f\u5bf9\u524d\u7aef\u7684\u66f4\u6539, \u56e0\u6b64\u5e76\u6ca1\u6709\u7ecf\u8fc7\u6cbb\u7406\u6d41\u7a0b."),(0,n.kt)("h3",{id:"uni-\u6ca1\u6709\u7528"},"$UNI \u6ca1\u6709\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/fishkiller/status/1714047790756790722"},"@fishkiller \u6307\u51fa")," \u6cbb\u7406\u4ee3\u5e01\u4ecd\u7136\u6709\u70b9\u65e0\u7528."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/tmel0211/status/1714142033919824297"},"@tmel0211 \u603b\u7ed3\u8bf4")," Uniswap \u7684\u6cbb\u7406\u4ee3\u5e01\u53ef\u80fd\u4f1a\u88ab\u957f\u671f\u5b64\u7acb."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/twobitidiot/status/1714012232839770283"},"@twobitidiot \u8bf4"),":\u201cUniswap \u7684\u63d0\u6848\u7cdf\u7cd5, \u6709\u5229\u4e8e\u98ce\u9669\u6295\u8d44\u8005\u548c\u5185\u90e8\u6301\u6709\u8005\u800c\u4e0d\u662f\u4ee3\u5e01\u6301\u6709\u8005.\u201d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/FreddieRaynolds/status/1713991186669510664"},"@FreddieRaynolds \u8bf4"),":\u201c \u4ed6\u4eec\u5f00\u542f\u4e86\u9519\u8bef\u7684\u8d39\u7528\u5f00\u5173. 0.15% \u5f52 Uniswap \u5b9e\u9a8c\u5ba4\u7684\u80a1\u6743\u6240\u6709\u8005, \u800c\u4e0d\u662f $UNI \u4ee3\u5e01\u6301\u6709\u8005.\u201d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/spreekaway/status/1713992720396480757"},"@spreekaway \u6697\u793a")," UF (Uniswap Frontend) \u5728\u83b7\u5f97\u8d39\u7528\u540e\u4f1a\u629b\u552e $UNI \u4ee3\u5e01."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/0xSisyphus/status/1714554354919784882"},"@0xSisyphus \u8ba4\u4e3a"),":\u201cUniswap \u6240\u8981\u505a\u7684\u4e00\u5207\u5c31\u662f\u5c06\u5fae\u8584\u7684\u6536\u5165\u6d41\u91cf\u5bfc\u5411\u4ee3\u5e01, \u4e00\u5207\u90fd\u4f1a\u597d\u8d77\u6765\u201d, \u6211\u4eec\u201c\u53ef\u4ee5\u6709\u628a\u63e1\u5730\u5047\u8bbe\u6240\u6709\u5728 Uniswap \u5de5\u4f5c\u7684\u4eba\u73b0\u5728\u5df2\u7ecf\u5356\u6389\u4e86",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/0xSisyphus/status/1714559367456952638"},"\u4ed6\u4eec\u7684\u4ee3\u5e01"),"\u201d.")),(0,n.kt)("h3",{id:"\u4e0d\u7ecf\u8fc7\u6cbb\u7406\u662f\u53ef\u4ee5\u7684"},"\u4e0d\u7ecf\u8fc7\u6cbb\u7406\u662f\u53ef\u4ee5\u7684"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/DefiIgnas/status/1713992483502174281"},"@DefiIgnas \u6f84\u6e05\u8bf4")," \u6cbb\u7406\u9002\u7528\u4e8e\u667a\u80fd\u5408\u540c (\u534f\u8bae), \u800c\u4e0d\u9002\u7528\u4e8e Uniswap \u54c1\u724c\u4e0b\u7684\u4e00\u5207."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/devinawalsh/status/1714050595840036884"},"@devinawalsh \u6765\u81ea UF \u7684\u4e89\u8bba")," UF \u6b63\u5728\u53d8\u5f97\u66f4\u52a0\u53bb\u4e2d\u5fc3\u5316, \u91c7\u7528\u5f00\u6e90\u548c\u751f\u6001\u7cfb\u7edf.")),(0,n.kt)("h3",{id:"\u4e0d\u7ecf\u8fc7\u6cbb\u7406\u662f\u4e0d\u597d\u7684"},"\u4e0d\u7ecf\u8fc7\u6cbb\u7406\u662f\u4e0d\u597d\u7684"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/0xmillie_eth/status/1714016569662087500"},"@0xmillie_eth \u5632\u7b11\u8bf4"),":\u201c\u8fd9\u4e0d\u662f\u63d0\u6848, \u8fd9\u662f\u4e00\u9879\u6cd5\u4ee4, \u7acb\u5373\u751f\u6548\u201d, \u201c\u54c8\u54c8, \u5bf9\u6211\u6765\u8bf4\u660e\u5929\u5c31\u5f00\u59cb\u6536\u8d39\u4e86\u201d."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/AntonioMJuliano/status/1714015191560511704"},"@AntonioMJuliano \u6765\u81ea dYdX \u8bf4"),":\u201c\u4e00\u4e9b\u6700\u521d\u66f4\u52a0\u53bb\u4e2d\u5fc3\u5316\u7684\u4e3b\u8981 DeFi \u53c2\u4e0e\u8005 (Uniswap\u30010x) \u6b63\u53d8\u5f97\u76f8\u5bf9\u66f4\u52a0\u96c6\u4e2d\u5316\u201d.")),(0,n.kt)("h2",{id:"\u5173\u4e8e\u5206\u53c9\u4e0e\u524d\u7aef\u7684\u770b\u6cd5"},"\u5173\u4e8e\u5206\u53c9\u4e0e\u524d\u7aef\u7684\u770b\u6cd5"),(0,n.kt)("h3",{id:"uniswap-\u754c\u9762\u4ecd\u5c06\u88ab\u4f7f\u7528"},"Uniswap \u754c\u9762\u4ecd\u5c06\u88ab\u4f7f\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/cronokirby/status/1714276137243980066"},"@cronokirby \u8ba4\u4e3a")," \u4eba\u4eec\u4ecd\u7136\u4f1a\u4f7f\u7528 Uniswap \u754c\u9762, \u5e76 \u201c\u53ea\u9700\u652f\u4ed8\u8d39\u7528, \u56e0\u4e3a\u4ed6\u4eec\u6709\u70b9\u61d2\u201d."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/Mudit__Gupta/status/1714031667550298408"},"@Mudit__Gupta \u95ee\u9053"),":\u201cSer, \u4f60\u77e5\u9053\u6709\u591a\u5c11\u4eba\u4f7f\u7528 fox \u94b1\u5305\u7684\u5151\u6362\u5417?\u201d, \u5e76\u6697\u793a Uniswap \u754c\u9762\u4ecd\u7136\u4f1a\u50cf \u201c\u6602\u8d35\u201d \u7684 Metamask \u5151\u6362\u4e00\u6837\u88ab\u4f7f\u7528."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/0xdoug/status/1713992970901274814"},"@0xdoug \u8bf4")," Uniswap \u754c\u9762\u9ad8\u8d28\u91cf\u3001\u53ef\u9760\u4e14\u503c\u5f97\u8d39\u7528.")),(0,n.kt)("h3",{id:"\u5206\u53c9\u5c06\u4e0d\u540c"},"\u5206\u53c9\u5c06\u4e0d\u540c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/chainyoda/status/1714242258894311856"},"@chainyoda \u8bf4"),":\u201c\u4f60\u53ef\u4ee5\u5206\u53c9\u524d\u7aef\u5e76\u5c06\u8d39\u7528\u51cf\u534a\u201d, \u800c\u4e0d\u7528\u5206\u53c9\u5408\u540c."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/hasufl/status/1714266299851817384"},"@hasufl \u611f\u5230\u56f0\u60d1"),":\u201c\u4e3a\u4ec0\u4e48\u51e0\u5bb6 Uniswap \u7684\u7ade\u4e89\u5bf9\u624b\u58f0\u79f0\u6ca1\u6709\u8d39\u7528, \u4f46\u5b9e\u9645\u4e0a\u6709\u201d, \u8fd9\u663e\u793a\u4e86 \u201c\u5206\u53c9\u201d \u4e4b\u95f4\u6fc0\u70c8\u7684\u7ade\u4e89."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/rsarrow/status/1714076310564180227"},"@rsarrow \u8bf4"),"\uff1a\u201c\u4f60\u5c06\u9009\u62e9\u4f60\u7684\u524d\u7aef, \u5c31\u50cf\u4f60\u9009\u62e9\u8981\u6350\u8d60\u7684\u6148\u5584\u673a\u6784\u4e00\u6837\u201d."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/0xmons/status/1714467836251517239"},"@0xmons \u63d0\u51fa\u4e86")," \u53e6\u4e00\u79cd\u5206\u53c9\u5f62\u5f0f, \u201c\u5206\u53c9\u7684 Uni \u524d\u7aef\u6536\u8d39, \u4f46\u8fd9\u6b21\u8d39\u7528\u5c06\u5f52\u5c5e\u4e8e\u4ee3\u5e01\u6301\u6709\u8005\u201d.")),(0,n.kt)("h2",{id:"\u5173\u4e8e\u7b56\u7565\u7684\u770b\u6cd5"},"\u5173\u4e8e\u7b56\u7565\u7684\u770b\u6cd5"),(0,n.kt)("p",null,"\u4e4d\u4e00\u770b, \u4f3c\u4e4e\u5bf9 Uniswap \u6536\u8d39\u4f1a\u964d\u4f4e Uniswap \u7684\u4f7f\u7528\u7387, \u4f46\u5b9e\u9645\u4e0a, \u5bf9\u6574\u4f53\u800c\u8a00, \u8fd9\u672a\u5fc5\u662f\u574f\u4e8b."),(0,n.kt)("h3",{id:"\u7ee7\u7eed\u5360\u636e\u4e3b\u5bfc\u5730\u4f4d"},"\u7ee7\u7eed\u5360\u636e\u4e3b\u5bfc\u5730\u4f4d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/shier_nftscan/status/1714111963477979518"},"@shier_nftscan \u8ba4\u4e3a")," \u8fd9\u4f7f Uniswap \u8fdb\u5165\u7406\u60f3\u60c5\u51b5: Uniswap \u4fdd\u6301 DEX (\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240) \u7684\u7b2c\u4e00\u4f4d\u7f6e, \u7b2c\u4e09\u65b9\u5e94\u7528\u901a\u8fc7\u8bbf\u95ee\u6d88\u8d39\u8005\u4ea7\u54c1\u4e0a\u7684 Uniswap \u6765\u83b7\u5f97\u6d41\u91cf\u5e76\u8d5a\u53d6\u670d\u52a1\u8d39."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/tmel0211/status/1714142033919824297"},"@tmel0211 \u9884\u6d4b\u8bf4"),":\u201cUniswap \u534f\u8bae\u548c\u4ea7\u54c1\u5206\u5272\u7b56\u7565\u7684\u63a8\u51fa\u663e\u7136\u65e8\u5728\u4e3a\u968f\u540e\u7684\u4ea7\u54c1\u77e9\u9635\u7684\u5546\u4e1a\u5316\u548c\u6269\u5f20\u94fa\u5e73\u9053\u8def, \u6218\u7565\u6027\u5730\u8986\u76d6\u66f4\u5927\u66f4\u5e7f\u6cdb\u7684\u751f\u6001\u4f4d\u201d.")),(0,n.kt)("h3",{id:"uniswap\u5e26\u6765\u7684\u4e0d\u540c\u6a21\u5f0f"},"Uniswap\u5e26\u6765\u7684\u4e0d\u540c\u6a21\u5f0f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/0xTaker/status/1714147634380755435"},"@0xTaker \u6307\u51fa")," Uniswap Labs \u5e76\u4e0d\u62e5\u6709\u6d41\u52a8\u6027, \u754c\u9762\u7684\u8d39\u7528\u5c06\u6765\u81ea\u54c1\u724c\u548c\u7528\u6237\u4f53\u9a8c."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/keoneHD/status/1714059926375469409"},"@keoneHD \u8bf4")," \u8fd9\u4e00\u4e8b\u4ef6\u8868\u660e \u201c\u524d\u7aef\u5f88\u6709\u4ef7\u503c\uff0c\u503c\u5f97\u6295\u5165\u66f4\u591a\u7cbe\u529b\u6765\u6539\u8fdb\u7528\u6237\u4f53\u9a8c\u201d."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/tmel0211/status/1714142033919824297"},"@tmel0211 \u603b\u7ed3\u8bf4")," \u8fd9\u4e00\u884c\u52a8\u610f\u5473\u7740 \u201cUniswap \u8bd5\u56fe\u544a\u8bc9 Uni \u793e\u533a, \u53ea\u6709 Uniswap \u534f\u8bae\u662f\u53bb\u4e2d\u5fc3\u5316\u7684, \u800c Web \u548c\u79fb\u52a8\u5e94\u7528\u5219\u7531 Uniswap \u62e5\u6709\u201d."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/jolestar/status/1714114300250587534"},"@jolestar \u63d0\u51fa\u4e86")," \u534f\u8bae\u4e2d\u4fdd\u7559\u7684\u53c2\u8003\u5b57\u6bb5, \u7531\u524d\u7aef\u586b\u5145. \u6700\u7ec8, \u534f\u8bae\u4e0e\u524d\u7aef\u5171\u4eab\u5229\u6da6."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/0xkydo/status/1714437889176883337"},"@0xkydo \u5c06\u6b64\u89c6\u4e3a")," \u201cDeFi \u7684\u91cd\u8981\u4e00\u6b65\u524d\u8fdb...... \u5efa\u7acb\u4e00\u4e2a\u65e0\u9700\u8bb8\u53ef\u548c\u975e\u6258\u7ba1\u65b9\u5f0f\u8fd0\u4f5c\u7684\u5f00\u653e\u91d1\u878d\u7cfb\u7edf\u201d."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/KamesGeraghty/status/1714246452329803950"},"@KamesGeraghty \u8ba4\u4e3a")," \u201c\u4ed8\u6b3e\u5c06\u7528\u4e8e\u7b56\u5212\u800c\u975e\u6267\u884c\u201d, v4 Hooks\u4f7f\u590d\u6742\u6027\u5448\u6307\u6570\u589e\u957f."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/smsunarto/status/1714562676372992041"},"@smsunarto \u8bf4")," \u8fd9 \u201c\u4ee3\u8868\u4e86\u4ece\u8fd9\u79cd\u4e00\u4f53\u5316\u5e94\u7528/\u670d\u52a1 + \u534f\u8bae\u516c\u53f8\u7684\u8fc7\u6e21\u201d.")),(0,n.kt)("h2",{id:"\u6076\u641e"},"\u6076\u641e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/peter_szilagyi/status/1714196005422248237"},"\u6211\u5e94\u8be5\u5f00\u59cb\u5728\u901a\u8fc7 Geth \u7684\u6bcf\u7b14\u4ea4\u6613\u4e0a\u6536\u53d60.15%\u7684\u8d39\u7528......")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/napgener/status/1714005233293054154"},"Uniswap \u56e2\u961f\u751a\u81f3\u4e0d\u80fd\u4fe1\u4efb\u4ed6\u4eec\u8fdb\u884c\u8d39\u7528\u5207\u6362, \u4f46 MakerDAO (\u62e5\u6709\u76f8\u540c\u98ce\u9669\u6295\u8d44\u652f\u6301\u8005) \u53ef\u4ee5\u4fe1\u4efb 3.5 \u4ebf\u7684 RWA, \u8fd9\u5b9e\u9645\u4e0a\u4e0e DAI \u7684\u6240\u6709\u8005\u65e0\u5173?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/divine_economy/status/1714005161071555051"},"\u6b63\u786e\u7684\u505a\u6cd5\u662f\u521b\u5efa\u4e00\u4e2a\u6536\u53d6\u4ed6\u4eec\u5b58\u6b3e 10 \u500d\u8d39\u7528\u7684 Uniswap \u6302\u94a9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/DeFi_Made_Here/status/1714004645293498736"},"\u8fd9\u624d\u662f\u6700\u4f73\u754c\u9762\u7684\u5916\u89c2, \u503c\u5f97 0.15% \u7684\u8d39\u7528")," (\u9644\u6709\u975e\u5e38\u6781\u7b80\u7684 Uniswap \u754c\u9762\u7684\u56fe\u50cf)")),(0,n.kt)("h2",{id:"\u6211\u7684\u9884\u6d4b"},"\u6211\u7684\u9884\u6d4b"),(0,n.kt)("p",null,"\u6bcf\u4e2a\u4eba\u7684\u89c2\u70b9\u90fd\u975e\u5e38\u5168\u9762. \u6211\u5c06\u603b\u7ed3\u5e76\u8fdb\u884c\u4e00\u4e9b\u9884\u6d4b, \u8fd9\u5e76\u4e0d\u6784\u6210\u6295\u8d44\u5efa\u8bae:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/Adonaieth/status/1714426407655231946"},"Uniswap \u754c\u9762\u4ecd\u5c06\u4fdd\u6301\u4e3b\u5bfc\u5730\u4f4d"),", \u53ea\u5269\u4e0b\u6781\u5c0f\u6bd4\u4f8b\u7684\u7528\u6237."),(0,n.kt)("li",{parentName:"ul"},"Uniswap \u5c06\u968f\u7740 Uniswap v4\u3001Uniswap X \u548c Uniswap Mobile \u800c",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/0xSisyphus/status/1714567572010496343"},"\u589e\u957f")," \u66f4\u5feb."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/0xCygaar/status/1714268050831065419"},"\u5206\u53c9\u5c06\u4f1a\u5927\u91cf\u53d1\u5e03"),", \u4f46\u65b0\u7684\u5206\u53c9\u6ca1\u6709\u673a\u4f1a\uff08",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/nzhlfred/status/1714524380158693693"},"ipfs \u5df2\u7ecf\u6709\u4e00\u4e2a"),"\uff09."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/koeppelmann/status/1714009337297834028"},"\u8d39\u7528\u5f00\u5173\u63d0\u6848\u5c06\u88ab\u63a8\u51fa"),", \u4f46\u4e0d\u4f1a\u901a\u8fc7.")))}m.isMDXComponent=!0}}]);