"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6336],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=l.createContext({}),o=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=o(e.components);return l.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,s=k(e,["components","mdxType","originalType","parentName"]),u=o(a),c=r,h=u["".concat(i,".").concat(c)]||u[c]||m[c]||n;return a?l.createElement(h,p(p({ref:t},s),{},{components:a})):l.createElement(h,p({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,p=new Array(n);p[0]=u;var k={};for(var i in t)hasOwnProperty.call(t,i)&&(k[i]=t[i]);k.originalType=e,k.mdxType="string"==typeof e?e:r,p[1]=k;for(var o=2;o<n;o++)p[o]=a[o];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39190:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>k,toc:()=>o});var l=a(87462),r=(a(67294),a(3905));const n={},p="\ud83d\udca5 \u8bfb\u61c2zkWASM: zkVM\u7684\u672a\u6765",k={unversionedId:"Blockchain/zkwasm",id:"Blockchain/zkwasm",title:"\ud83d\udca5 \u8bfb\u61c2zkWASM: zkVM\u7684\u672a\u6765",description:"\u672c\u6587\u4e3aHyper Oracle\u64b0\u5199, English Version: Medium.",source:"@site/docs/Blockchain/zkwasm.md",sourceDirName:"Blockchain",slug:"/Blockchain/zkwasm",permalink:"/docs/Blockchain/zkwasm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddee \u8bfb\u61c2zk: zk, zkEVM, zkVM",permalink:"/docs/Blockchain/zkvm"},next:{title:"\ud83d\udc81\u200d\u2642\ufe0f \u6742\u6742\u7684 Contributions",permalink:"/docs/Code/incubate"}},i={},o=[{value:"0. ZK \u4e0e zkVM",id:"0-zk-\u4e0e-zkvm",level:2},{value:"a) \u96f6\u77e5\u8bc6\u8bc1\u660e\u7684\u9b54\u6cd5",id:"a-\u96f6\u77e5\u8bc6\u8bc1\u660e\u7684\u9b54\u6cd5",level:3},{value:"b) ZK \u5e94\u7528\u5f00\u53d1",id:"b-zk-\u5e94\u7528\u5f00\u53d1",level:3},{value:"c) zkVM \u5982\u4f55\u8fd0\u4f5c\uff1f",id:"c-zkvm-\u5982\u4f55\u8fd0\u4f5c",level:3},{value:"1. zkWASM",id:"1-zkwasm",level:2},{value:"a) zkVM \u7ade\u8d5b",id:"a-zkvm-\u7ade\u8d5b",level:3},{value:"b) WASM",id:"b-wasm",level:3},{value:"c) zkWASM",id:"c-zkwasm",level:3},{value:"2. zkWASM \u4f18\u52bf",id:"2-zkwasm-\u4f18\u52bf",level:2},{value:"a) zkWASM \u662f Adoption",id:"a-zkwasm-\u662f-adoption",level:2},{value:"b) zkWASM \u662f Composability",id:"b-zkwasm-\u662f-composability",level:2},{value:"c) zkWASM \u662f All-around",id:"c-zkwasm-\u662f-all-around",level:2},{value:"d) zkWASM \u662f Decentralization",id:"d-zkwasm-\u662f-decentralization",level:2},{value:"e) zkWASM \u662f Performance",id:"e-zkwasm-\u662f-performance",level:2},{value:"3. \u8c01\u5728\u4f7f\u7528 zkWASM",id:"3-\u8c01\u5728\u4f7f\u7528-zkwasm",level:2},{value:"4. \u4ec0\u4e48\u662f zkWASM",id:"4-\u4ec0\u4e48\u662f-zkwasm",level:2}],s={toc:o};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u8bfb\u61c2zkwasm-zkvm\u7684\u672a\u6765"},"\ud83d\udca5 \u8bfb\u61c2zkWASM: zkVM\u7684\u672a\u6765"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3aHyper Oracle\u64b0\u5199, English Version: ",(0,r.kt)("a",{parentName:"p",href:"https://hyperoracle.medium.com/zkwasm-the-next-chapter-of-zk-and-zkvm-471038b1fba6"},"Medium"),".")),(0,r.kt)("h2",{id:"0-zk-\u4e0e-zkvm"},"0. ZK \u4e0e zkVM"),(0,r.kt)("h3",{id:"a-\u96f6\u77e5\u8bc6\u8bc1\u660e\u7684\u9b54\u6cd5"},"a) \u96f6\u77e5\u8bc6\u8bc1\u660e\u7684\u9b54\u6cd5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://leastauthority.com/static/publications/MoonMath080822.pdf"},"A so-called zero-knowledge protocol is a set of mathematical rules by which one party, usually called the prover, can convince another party, usually called the verifier, that given some instance, the prover knows some witness for that instance."))),(0,r.kt)("p",null,"\u96f6\u77e5\u8bc6\u8bc1\u660e\u6280\u672f\u6b63\u5728\u98a0\u8986\u548c\u91cd\u65b0\u5b9a\u4e49\u533a\u5757\u94fe\u548c Web3."),(0,r.kt)("p",null,"\u96f6\u77e5\u8bc6\u8bc1\u660e\u6280\u672f\u901a\u8fc7\u5bc6\u7801\u5b66\u548c\u4e0d\u540c\u7684\u590d\u6742 Moon Math ",(0,r.kt)("a",{parentName:"p",href:"https://zkdeconstructions.substack.com/p/zk-has-nothing-to-do-with-blockchains"},"\u89e3\u51b3\u4e86\u5404\u79cd\u95ee\u9898"),", \u8fd9\u4e9b\u95ee\u9898\u662f\u533a\u5757\u94fe\u81ea\u8bde\u751f\u4ee5\u6765\u7531\u4e8e\u6240\u56fa\u6709\u7684."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(17901).Z,width:"2660",height:"1172"})),(0,r.kt)("p",null,"\u4e00\u4e2a Side Note, Hyper Oracle \u5c06\u5728\u672a\u6765\u7528\u5230 ZK \u7684\u6240\u6709\u56db\u4e2a\u7528\u9014."),(0,r.kt)("h3",{id:"b-zk-\u5e94\u7528\u5f00\u53d1"},"b) ZK \u5e94\u7528\u5f00\u53d1"),(0,r.kt)("p",null,"\u65e2\u7136\u4e00\u4e2a\u4ee5 ZK \u6280\u672f\u4e3a\u6838\u5fc3\u7684\u5e94\u7528\u7a0b\u5e8f, \u534f\u8bae\u6216\u7f51\u7edc\u662f\u5982\u6b64\u5f3a\u5927, \u4f60\u5982\u4f55\u5f00\u53d1\u5b83\u5462? \u5c31\u50cf\u4efb\u4f55\u5176\u4ed6\u8f6f\u4ef6\u5f00\u53d1\u9886\u57df\u4e00\u6837, \u4f60\u9700\u8981\u5199\u4ee3\u7801, \u800c\u8fd9\u53d6\u51b3\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ru-fCNOWals"},"\u7f16\u7a0b\u8bed\u8a00\u548c\u5de5\u5177\u94fe"),"."),(0,r.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b, \u5bf9\u4e8e\u4e00\u4e2aZK\u5e94\u7528\u5f00\u53d1\u8005\u6765\u8bf4, \u6709",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=wyBNZzLEgkA"},"\u4e24\u4e2a\u4e0d\u540c\u7684\u4e3b\u8981\u65b9\u5411"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37257).Z,width:"2372",height:"1054"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mirror.xyz/msfew.eth/Yl64OK3lLG48eJpVB3GxqFEhmWOm6yMlAo9sc1VrQP4"},"\u6211\u4eec\u76f8\u4fe1 zkVM \u5c06\u662f ZK \u5f00\u53d1\u7684\u5723\u676f"),", \u56e0\u4e3a\u5b83\u5c06\u5e2e\u52a9\u6240\u6709\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u65e0\u7f1d\u8fdb\u5165ZK\u9886\u57df."),(0,r.kt)("p",null,"\u5f00\u53d1\u8005\u4e0d\u9700\u8981\u5b66\u4e60\u65b0\u7684\u8bed\u8a00\u548c\u786c\u6838\u5bc6\u7801\u5b66, \u4e5f\u4e0d\u9700\u8981\u62c5\u5fc3\u65b0\u7684\u5de5\u5177\u94fe, \u8bc1\u660e\u7cfb\u7edf\u548c\u4ee3\u6570\u5bf9\u8c61, \u800c\u662f\u5229\u7528\u4ed6\u4eec\u5728 Solidity\u3001Rust\u3001C++ \u548c\u6240\u6709\u5de5\u5177\u7684\u4e13\u4e1a\u77e5\u8bc6\u5373\u53ef."),(0,r.kt)("h3",{id:"c-zkvm-\u5982\u4f55\u8fd0\u4f5c"},"c) zkVM \u5982\u4f55\u8fd0\u4f5c\uff1f"),(0,r.kt)("p",null,"zkVM \u662f\u4e00\u4e2a\u865a\u62df\u673a, \u901a\u8fc7\u96f6\u77e5\u8bc6\u8bc1\u660e\u6765\u4fdd\u8bc1\u5b89\u5168\u548c\u53ef\u9a8c\u8bc1\u7684\u53ef\u4fe1. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1XB96F9ahIlGUevpOTdi-yx_gkrwmX4WGcCjwf3gEiYc/edit#slide=id.g13232b2e9d8_0_401"},"zkVM \u4ee5\u65e0\u4fe1\u4efb\u7684\u65b9\u5f0f\u8f93\u51fa\u65b0\u72b6\u6001\u548c\u8bc1\u660e"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(28113).Z,width:"1442",height:"746"})),(0,r.kt)("p",null,"\u5b83\u5141\u8bb8\u6240\u6709\u5728\u865a\u62df\u673a\u4e2d\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u88ab\u8d4b\u4e88\u96f6\u77e5\u8bc6\u8bc1\u660e\u7684\u8d85\u80fd\u529b. \u5f00\u53d1\u8005\u53ea\u9700\u8981\u4e00\u4e2a\u53ef\u4ee5\u5728 zkVM \u4e2d\u8fd0\u884c\u7684\u7a0b\u5e8f, \u800c zkVM \u5c06\u8d1f\u8d23\u5176\u4ed6\u6240\u6709\u7684\u4e8b\u60c5."),(0,r.kt)("p",null,"\u5982\u679c\u7528\u4e00\u4e2a\u7b80\u5355\u4e14\u53ef\u80fd\u4e0d\u786e\u5207\u7684\u4f8b\u5b50\u6765\u8bf4\u660e. zkVM \u7684\u6784\u9020\u662f",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Nz4OYntBVMg"},"\u5b9e\u8d28\u4e0a\u662f\u4e00\u4e2a\u4e09\u6b65\u7684\u8fc7\u7a0b"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u505a\u4e00\u4e2a\u865a\u62df\u673a (\u5b9e\u73b0\u865a\u62df\u673a\u7684\u6240\u6709\u6307\u4ee4\u96c6)"),(0,r.kt)("li",{parentName:"ol"},"\u52a0\u5165 SNARK/STARK \u5f15\u64ce (\u52a0\u5165\u8bc1\u660e\u7cfb\u7edf)"),(0,r.kt)("li",{parentName:"ol"},"\u5728 SNARK/STARK \u5f15\u64ce\u4e2d\u52a0\u5165 zk (\u542f\u7528\u9690\u79c1)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(55995).Z,width:"1288",height:"884"})),(0,r.kt)("p",null,"\u76ee\u524d\u6700\u53d7\u5173\u6ce8\u7684 zkVM \u53ef\u80fd\u662f Ethereum Layer2 \u7684 zkEVM."),(0,r.kt)("h2",{id:"1-zkwasm"},"1. zkWASM"),(0,r.kt)("h3",{id:"a-zkvm-\u7ade\u8d5b"},"a) zkVM \u7ade\u8d5b"),(0,r.kt)("p",null,"\u8fd8\u8bb0\u5f97\u6784\u5efa zkVM \u7684\u7b2c\u4e00\u6b65\u5417? \u6211\u4eec\u6709\u5f88\u591a\u6307\u4ee4\u96c6\u7684\u9009\u62e9."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(96825).Z,width:"1986",height:"346"})),(0,r.kt)("p",null,"\u6211\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://mirror.xyz/msfew.eth/Yl64OK3lLG48eJpVB3GxqFEhmWOm6yMlAo9sc1VrQP4"},"zk\u3001zkEVM \u548c zkVM"),' \u4e2d\u603b\u7ed3\u8bf4:"\u901a\u7528 zkVM \u662f Web3 \u7684\u672a\u6765." \u8fd9\u5c31\u662f\u4ee3\u8868\u4e86\u4e3b\u6d41\u6307\u4ee4\u96c6\u7684\u6d41\u6d3e.'),(0,r.kt)("p",null,"zkEVM \u53d7\u6b22\u8fce\u7684\u539f\u56e0\u662f, zkEVM \u590d\u7528\u4e86 EVM \u5728\u533a\u5757\u94fe\u5f00\u53d1\u8005\u793e\u533a\u4e2d\u7684\u91cd\u8981\u6027."),(0,r.kt)("p",null,"\u7136\u800c, \u5f53\u6211\u4eec\u4ece\u5b8f\u89c2\u6765\u770b, \u6211\u4eec\u770b\u5230\u901a\u7528\u7684 zkVM \u4e0d\u4ec5\u53ef\u4ee5\u505a zkEVM \u80fd\u505a\u7684\u4e8b (\u4fbf\u4e8eWeb3\u5f00\u53d1\u8005\u5165\u95e8), \u8fd8\u53ef\u4ee5\u4ece Web2 \u7684\u6240\u6709\u6210\u719f\u751f\u6001\u7cfb\u7edf\u548c\u5de5\u5177\u94fe\u4e2d\u83b7\u5f97\u52a0\u6210."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(88417).Z,width:"1812",height:"468"})),(0,r.kt)("h3",{id:"b-wasm"},"b) WASM"),(0,r.kt)("p",null,"WASM \u672c\u8d28\u4e0a\u662f\u4e00\u79cd\u57fa\u4e8e\u5806\u6808\u7684\u865a\u62df\u673a\u7684\u4e8c\u8fdb\u5236\u6307\u4ee4\u683c\u5f0f. \u5b83\u4e0e\u5176\u4ed6\u7684\u65b9\u6848\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Web \u539f\u751f:"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{src:a(24630).Z,width:"1351",height:"669"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"WASM \u662f",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en"},"\u4ec5\u6709\u7684 4 \u79cd Web \u539f\u751f\u8bed\u8a00\u4e4b\u4e00.")," \u5176\u4ed6\u4e09\u79cd\u662fHTML, CSS \u548c JavaScript."),(0,r.kt)("li",{parentName:"ul"},"WASM \u662f",(0,r.kt)("a",{parentName:"li",href:"https://webassembly.org/roadmap/"},"\u88ab\u6240\u6709\u4e3b\u6d41\u7f51\u7edc\u5f15\u64ce\u6240\u652f\u6301"),"."),(0,r.kt)("li",{parentName:"ul"},"WASM \u4f7f\u4efb\u4f55\u7f16\u7a0b\u8bed\u8a00\u90fd\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u8fd0\u884c."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u901a\u7528\u683c\u5f0f:"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{src:a(92701).Z,width:"1368",height:"543"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"WASM \u662f\u4efb\u4f55\u7f16\u7a0b\u8bed\u8a00\u7684\u7f16\u8bd1\u76ee\u6807. WASM \u751f\u6001\u6709\u50cf ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/emscripten-core/emscripten"},"emscripten")," \u8fd9\u6837\u7684\u7f16\u8bd1\u5668 (LLVM-to-WASM)."),(0,r.kt)("li",{parentName:"ul"},"WASM \u662f",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/docker/"},"\u4e00\u4e2a\u4ee5\u6807\u51c6\u5316\u65b9\u5f0f\u8fd0\u884c\u4ee3\u7801\u7684\u865a\u62df\u5316\u5bb9\u5668"),". Docker \u7684\u521b\u59cb\u4eba",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/solomonstre/status/1111004913222324225"},"\u751a\u81f3\u8bf4"),"\u5982\u679c\u5f53\u65f6\u6709 WASM, \u4ed6\u5c31\u4e0d\u4f1a\u521b\u5efaDocker."),(0,r.kt)("li",{parentName:"ul"},"WASM \u662f",(0,r.kt)("a",{parentName:"li",href:"https://wasmer.io/posts/wasm-as-universal-binary-format-part-1-native-executables"},"\u4e00\u79cd\u901a\u7528\u4e8c\u8fdb\u5236\u683c\u5f0f"),". \u8fd9\u610f\u5473\u7740\u5b83\u53ef\u4ee5\u4e3a\u4efb\u4f55\u5e73\u53f0\u521b\u5efa\u672c\u5730\u53ef\u6267\u884c\u6587\u4ef6.")))),(0,r.kt)("p",null,"WASM \u6b63\u5728\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/MlNDNOChyWAJkeNbts2aIQ"},"\u4ee5\u4e0b\u65b9\u5f0f"),"\u4f7f\u7f51\u7edc\u3001\u4e91\u3001\u7f16\u7a0b\u8bed\u8a00\u548c\u6e38\u620f\u751f\u6001\u66f4\u52a0\u7e41\u8363:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/brion/ogv.js/"},"ogv.js")," \u6216\u4efb\u4f55\u5176\u4ed6\u5bf9\u6027\u80fd\u654f\u611f\u7684\u6a21\u5757\u7684 WASM \u7248\u672c\u52a0\u901f\u5a92\u4f53\u89e3\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/yewstack/yew"},"yew"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seed-rs/seed"},"seed"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hexops/vecty"},"vecty")," \u7b49\u521b\u5efa Rust \u548c Go Web \u6846\u67b6"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528 ",(0,r.kt)("a",{parentName:"li",href:"https://wasmer.io/"},"wasmer"),", ",(0,r.kt)("a",{parentName:"li",href:"https://wasmtime.dev/"},"Wasmtime"),", ",(0,r.kt)("a",{parentName:"li",href:"https://wasmedge.org/"},"WasmEdge")," \u7b49\u9769\u65b0\u4e91\u539f\u751f\u548c\u65e0\u670d\u52a1\u5668\u5e94\u7528\u7a0b\u5e8f\u8303\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/torch2424/wasmboy"},"wasmboy")," \u548c ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/koute/pinky"},"pinky")," \u63d0\u5347\u6a21\u62df\u5668\u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u51fa ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kripken/ammo.js/"},"ammo.js")," \u548c ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/defold/defold"},"defold")," \u7b49\u6e38\u620f\u5f15\u64ce"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u51fa\u65b0\u7684\u7f16\u7a0b\u8bed\u8a00, \u5305\u62ec ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AssemblyScript"},"AssemblyScript"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ballercat/walt"},"walt"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/grain-lang/grain"},"grain")," \u7b49")),(0,r.kt)("p",null,"\u6b64\u5916\uff0cWASM\u8fd8",(0,r.kt)("a",{parentName:"p",href:"https://blog.devgenius.io/webassembly-wasm-in-blockchain-f651a8ac767b"},"\u5728\u533a\u5757\u94fe\u9886\u57df\u88ab\u5e7f\u6cdb\u91c7\u7528"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Polkadot ",(0,r.kt)("a",{parentName:"li",href:"https://www.parity.io/blog/wasm-smart-contract-development/"},"\u8ba4\u4e3a WASM \u662f\u53bb\u4e2d\u5fc3\u5316\u7cfb\u7edf\u5f00\u53d1\u7684\u57fa\u7840"),". \u4ed6\u4eec all in WASM, \u5e76",(0,r.kt)("a",{parentName:"li",href:"http://troubles.md/why-wasm/"},"\u8ba4\u4e3a WASM \u662f lesser evil than EVM"),"."),(0,r.kt)("li",{parentName:"ul"},"Cosmos \u5c06 ",(0,r.kt)("a",{parentName:"li",href:"https://cosmwasm.com/"},"CosmWasm")," \u5b9a\u4f4d\u4e3a\u6784\u5efa dApp \u7684\u4e3b\u8981\u5f15\u64ce."),(0,r.kt)("li",{parentName:"ul"},"Near \u8ba4\u4e3a ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=s6-DtXFLeyE"},"WebAssembly\u662f\u53bb\u4e2d\u5fc3\u5316\u7f51\u7edc\u7684\u6838\u5fc3"),". Near ",(0,r.kt)("a",{parentName:"li",href:"https://madewithwebassembly.com/showcase/near-protocol/%EF%BC%89%E3%80%82"},"\u4f7f\u7528 AssemblyScript \u4f5c\u4e3a\u5176\u667a\u80fd\u5408\u7ea6\u7684\u9996\u9009\u8bed\u8a00"),"."),(0,r.kt)("li",{parentName:"ul"},"\u5373\u4f7f Ethereum \u6ca1\u6709\u4f7f\u7528 WASM, ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/solang"},"Solang")," \u4e5f\u53ef\u4ee5\u5c06 Solidity \u4ee3\u7801\u7f16\u8bd1\u6210 WASM (EVM\u2192WASM).")),(0,r.kt)("h3",{id:"c-zkwasm"},"c) zkWASM"),(0,r.kt)("p",null,"zkWASM \u662f\u4e00\u4e2a zkVM, \u5b83\u7684\u6574\u4e2a WASM\u865a\u62df\u673a \u662f\u7528 zkSNARK \u7535\u8def\u7f16\u5199\u7684."),(0,r.kt)("p",null,"zkWASM \u5c06\u8d4b\u4e88\u4efb\u4f55\u8fd0\u884c\u5728 WASM runtime \u4e2d\u7684\u7a0b\u5e8f trustless \u8ba1\u7b97\u7684\u80fd\u529b. \u7b80\u5355\u5730\u8bf4, zkWASM \u7ed3\u5408\u4e86 zkVM \u7684\u6700\u4f73\u4f18\u52bf\u4ee5\u53ca WASM \u7684\u4e30\u5bcc\u751f\u6001\u7cfb\u7edf."),(0,r.kt)("p",null,"\u8fd1\u5e74\u6765, WASM\u4e00\u76f4\u5728",(0,r.kt)("a",{parentName:"p",href:"https://pradeepl.com/blog/webassembly-from-browser-to-cloud/%EF%BC%89%E5%92%8C%E5%8C%BA%E5%9D%97%E9%93%BE%E3%80%82%E7%8E%B0%E5%9C%A8%EF%BC%8CzkWASM%E5%B0%86zkVM+WASM%E7%9A%84%E6%96%B0%E6%A8%A1%E5%BC%8F%E5%B8%A6%E5%88%B0%E4%BA%86%E5%8C%BA%E5%9D%97%E9%93%BE%E8%83%8C%E6%99%AF%E4%B8%8B%EF%BC%8C%E8%A7%A3%E5%86%B3%E4%BA%86%E5%8A%A0%E5%AF%86%E5%8E%9F%E7%94%9F%E5%AE%89%E5%85%A8%E3%80%81%E4%BF%A1%E4%BB%BB%E5%92%8C%E9%9A%90%E7%A7%81%E9%97%AE%E9%A2%98%E3%80%82"},"\u4ece\u6d4f\u89c8\u5668\u8d70\u5411\u4e91\u7aef"),"\u548c\u533a\u5757\u94fe. \u73b0\u5728, zkWASM \u5c06 zkVM+WASM \u7684\u65b0\u6a21\u5f0f\u5e26\u5230\u4e86\u533a\u5757\u94fe\u80cc\u666f\u4e0b, \u89e3\u51b3\u4e86\u52a0\u5bc6\u539f\u751f\u5b89\u5168\u3001\u4fe1\u4efb\u548c\u9690\u79c1\u95ee\u9898."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(27179).Z,width:"500",height:"650"})),(0,r.kt)("h2",{id:"2-zkwasm-\u4f18\u52bf"},"2. zkWASM \u4f18\u52bf"),(0,r.kt)("h2",{id:"a-zkwasm-\u662f-adoption"},"a) zkWASM \u662f Adoption"),(0,r.kt)("p",null,"\u4e4b\u6240\u4ee5 zkEVM \u4f1a\u5728 ZK \u6218\u4e89\u4e2d\u83b7\u5f97\u5de8\u5927\u4f18\u52bf, \u662f\u56e0\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/toghrulmaharram/status/1595503593192362007%EF%BC%89%E3%80%82"},"EVM \u662f\u667a\u80fd\u5408\u7ea6\u6700\u5e38\u7528\u7684\u5206\u5e03\u5f0f\u8fd0\u884c\u73af\u5883"),"."),(0,r.kt)("p",null,"EVM \u548c Solidity \u6709\u8be6\u7ec6\u7684\u6280\u672f\u6587\u6863, \u6709\u5e9e\u5927\u7684\u5de5\u5177\u5e93\u3001\u6559\u7a0b\u548c\u5f00\u6e90\u9879\u76ee\u7684\u751f\u6001\u7cfb\u7edf, \u8fd9\u4e9b\u8d44\u6e90\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8bbf\u95ee. \u5176\u4ed6\u89e3\u51b3\u65b9\u6848\u65e0\u6cd5\u4e0e EVM \u7684\u4e3b\u5bfc\u5730\u4f4d\u76f8\u5339\u654c. \u56e0\u6b64, \u8fd9\u79cd adoption \u4f7f\u5f97 zkEVM \u6210\u4e3a\u4ee5\u592a\u574a\u6269\u5c55\u7684\u7687\u51a0."),(0,r.kt)("p",null,"\u6211\u5728",(0,r.kt)("a",{parentName:"p",href:"https://mirror.xyz/msfew.eth/JJudP_Kf-IS6VhbF-qU0BUor1Ap6SFEb0TzYOHZ34Rc"},"\u524d\u4e00\u7bc7\u6587\u7ae0"),"\u4e2d\u63d0\u5230, Polygon zkEVM \u662f\u6211\u6700\u671f\u5f85\u7684 zkEVM \u89e3\u51b3\u65b9\u6848. \u8fd9\u4e5f\u662f\u7531\u4e8e adoption."),(0,r.kt)("p",null,'Polygon zkEVM \u53ef\u80fd\u4e0d\u662f\u6700 "',(0,r.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2022/08/04/zkevm.html"},"Type-1"),'" \u548c\u539f\u751f\u7684, \u53ef\u80fd\u6ca1\u6709\u6700\u597d\u7684\u6027\u80fd. \u4e0d\u8fc7, Polygon \u7684\u4f18\u52bf\u5728\u4e8e\u5176 PoS \u94fe\u5177\u6709\u5de8\u5927\u7684\u5148\u53d1\u4f18\u52bf, \u62e5\u6709\u5fe0\u5b9e\u7684\u5f00\u53d1\u8005\u793e\u533a\u3001\u751f\u6001\u4f19\u4f34\u548c\u5404\u79cd\u9ed1\u5ba2\u677e\u8d44\u6e90. \u5728 zkEVM \u7684\u91c7\u7528\u5c42\u4e4b\u4e0a, Polygon zkEVM \u8fd8\u6709\u4e00\u4e2a\u989d\u5916\u7684 adoption layer.'),(0,r.kt)("p",null,"\u90a3\u4e48, zkWASM \u62e5\u6709\u7684\u6f5c\u5728\u91c7\u7528\u5c06\u662f\u7a7a\u524d\u7684."),(0,r.kt)("p",null,"\u5b83\u6709\u4e00\u4e2a\u6bd4\u6574\u4e2a Web3 \u751f\u6001\u7cfb\u7edf\u5927\u5f97\u591a\u7684 WASM \u751f\u6001\u7cfb\u7edf, \u800c Web3 \u751f\u6001\u7cfb\u7edf\u7684\u5927\u90e8\u5206\u662f WASM \u751f\u6001\u7cfb\u7edf\u7684\u76f4\u63a5\u5ef6\u4f38. zkWASM \u6240\u62e5\u6709\u7684\u751f\u6001\u7cfb\u7edf\u5c06\u4f7f\u5b83\u4ece\u4e00\u5f00\u59cb\u5c31\u662f\u4e00\u4e2a\u6210\u719f\u7684\u5e94\u7528."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(22740).Z,width:"1732",height:"760"})),(0,r.kt)("h2",{id:"b-zkwasm-\u662f-composability"},"b) zkWASM \u662f Composability"),(0,r.kt)("p",null,"\u5728 Web3 \u7684\u4e16\u754c\u91cc, \u53ef\u7ec4\u5408\u6027\u4e0e\u5f00\u6e90\u5171\u540c\u4f7f\u5f97\u751f\u4ea7\u529b\u548c\u521b\u65b0\u7684\u6307\u6570\u5f0f\u589e\u957f. ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/cdixon/status/1448528513745760261"},"\u53ef\u7ec4\u5408\u6027\u5bf9\u8f6f\u4ef6\u6765\u8bf4\u5c31\u50cf\u590d\u5229\u5bf9\u91d1\u878d\u4e00\u6837"),"."),(0,r.kt)("p",null,"\u5728 Cairo VM \u4e2d, \u6211\u4eec\u770b\u5230\u793e\u533a\u6b63\u5728\u6784\u5efa ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sayajin-labs/kakarot"},"Kakarot zkEVM"),"; \u5728 RISC0 RISC-V zkVM \u4e2d, \u6211\u4eec\u770b\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sovereign-Labs"},"Sovereign Labs")," \u8bd5\u56fe\u7528RISC0 \u7684 zkVM \u548c Rust \u8bed\u8a00\u7684 EVM \u6784\u5efa\u4e00\u4e2a zkEVM; \u5728 EVM \u4e2d, \u6211\u4eec\u4e5f\u770b\u5230\u4e86\u8bb8\u591a EVM \u4e2d\u7684 EVM, \u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hananbeer/evm2"},"evm2")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oguimbal/HyVM"},"HyVM"),", \u751a\u81f3 ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/high_byte/status/1576576874012348421"},"Python\u89e3\u91ca\u5668\u5728EVM\u4e2d\u7684\u6982\u5ff5"),"."),(0,r.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u56fe\u7075\u5b8c\u5907\u7684\u865a\u62df\u673a, zkWASM\u53ef\u4ee5\u505a\u4efb\u4f55\u4ee5\u4e0a\u7684\u4e8b\u60c5, \u800c WASM \u5c06\u4f7f\u8fd9\u4e9b\u4e8b\u60c5\u66f4\u6709\u53ef\u80fd, \u66f4\u5bb9\u6613\u5b9e\u73b0."),(0,r.kt)("p",null,"\u8fd9\u4e9b\u53ea\u662f\u4f60\u53ef\u4ee5\u5728 zkWASM \u4e0a\u5efa\u7acb\u7684\u4e00\u90e8\u4efd\u521b\u65b0, \u4f46\u5b83\u4eec\u8db3\u4ee5\u4e3a Layer3 \u6982\u5ff5\u5f00\u8f9f\u65b0\u7684\u53d9\u8ff0\u548c\u53ef\u80fd\u6027."),(0,r.kt)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u770b\u5230\u5f00\u53d1\u8005\u5982\u4f55\u5728 zkWASM \u4e0a\u5efa\u7acb\u6fc0\u52a8\u4eba\u5fc3\u548c\u5bcc\u6709\u521b\u9020\u6027\u7684\u65b0\u5e94\u7528, \u5e76\u901a\u8fc7 zkWASM \u8fd0\u884c\u65f6\u5c06\u73b0\u6709\u7684\u6210\u719f\u5e94\u7528\u5347\u7ea7\u5230 zk \u5316\u7684\u65b0\u65f6\u4ee3."),(0,r.kt)("h2",{id:"c-zkwasm-\u662f-all-around"},"c) zkWASM \u662f All-around"),(0,r.kt)("p",null,"\u8bb0\u5f97 zk \u662f\u5173\u4e8e\u5b89\u5168\u3001\u53ef\u6269\u5c55\u6027\u3001\u4e92\u64cd\u4f5c\u6027\u548c\u9690\u79c1\u56db\u4e2a\u65b9\u9762\u7684\u63d0\u5347\u5417?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"zkWASM \u53ef\u4ee5\u5229\u7528\u6240\u6709\u8fd9\u4e9b\u65b9\u9762\u7684\u4f18\u52bf.")),(0,r.kt)("p",null,"\u8bb0\u5f97 ",(0,r.kt)("a",{parentName:"p",href:"https://mirror.xyz/msfew.eth/nA0_f-ef_dN1tE0DACDi6TLN9EM4hJn27H7SHYKX0qU"},"Crypto-Native DApp Architecture")," \u5417?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"zkWASM \u662f\u89e3\u51b3 dApps (RPC, \u7d22\u5f15, Oracle, \u81ea\u52a8\u5316) \u7684\u94fe\u4e0b\u4e2d\u5fc3\u5316\u548c\u5b89\u5168\u95ee\u9898\u7684\u6700\u4f18\u65b9\u6848.")),(0,r.kt)("p",null,"\u8bb0\u5f97 zkWASM \u7684 WASM \u8fd0\u884c\u65f6\u662f\u4f5c\u4e3a Web \u7684\u4e00\u4e2a\u5de8\u5927\u7ec4\u6210\u90e8\u5206\u7684\u5417?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"zkWASM \u4e0d\u4ec5\u4ec5\u89e3\u51b3\u533a\u5757\u94fe\u548c dApp \u7684\u95ee\u9898. \u4f8b\u5982, ZK-ML\u548c\u94fe\u4e0a ML \u7684\u5b9e\u73b0\u53ef\u4ee5\u56e0\u4e3a zkWASM \u7684\u5b58\u5728\u800c\u5f97\u5230\u52a0\u901f\u3002")),(0,r.kt)("h2",{id:"d-zkwasm-\u662f-decentralization"},"d) zkWASM \u662f Decentralization"),(0,r.kt)("p",null,"Hyper Oracle \u7684\u9996\u8981\u4efb\u52a1\u662f\u8ba9\u6240\u6709 DApps \u5b9e\u73b0\u7aef\u5230\u7aef\u7684\u53bb\u4e2d\u5fc3\u5316. \u6211\u4eec\u4e5f\u5c06\u4f7f\u6211\u4eec\u7684\u534f\u8bae\u6700\u5927\u9650\u5ea6\u5730\u53bb\u4e2d\u5fc3\u5316."),(0,r.kt)("p",null,"\u8fd8\u8bb0\u5f97 WASM \u662f\u7f51\u7edc\u4e0a\u552f\u56db\u7684\u53ef\u8fd0\u884c\u7684\u8bed\u8a00\u5417? zkWASM \u5728\u672a\u6765\u53ef\u80fd\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c. Hyper Oracle \u5c06\u63a2\u7d22\u5728\u7f51\u7edc\u4e0a\u8fd0\u884c ZK Prover \u7684\u53ef\u80fd\u6027. \u50cf ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/mina-rs"},"mina-rs")," \u4e00\u6837, \u4f60\u53ef\u4ee5\u70b9\u51fb\u4e00\u4e2a\u94fe\u63a5, \u5c31\u53ef\u4ee5\u6210\u4e3a\u4e00\u4e2a\u8282\u70b9, \u53c2\u4e0e\u7f51\u7edc\u548c\u91c7\u77ff."),(0,r.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8fd9\u5f88\u91cd\u8981?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Permissionless: \u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u6210\u4e3a\u4e00\u4e2a\u8282\u70b9. \u8282\u70b9\u6ca1\u6709\u4e2d\u5fc3\u5316 Sequencer \u6216\u8005\u8d85\u9ad8\u7684\u786c\u4ef6\u8981\u6c42."),(0,r.kt)("li",{parentName:"ul"},"Sovereignty: \u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8fd0\u884c\u81ea\u5df1\u7684\u8282\u70b9. \u8fd9\u6709\u52a9\u4e8e\u4fdd\u62a4\u9690\u79c1, \u5e76\u9632\u6b62\u5ba1\u67e5\u5236\u5ea6."),(0,r.kt)("li",{parentName:"ul"},"Diversity: \u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u4e3a\u7f51\u7edc\u7684\u5ba2\u6237\u7aef\u548c\u5730\u7406\u591a\u6837\u6027\u4f5c\u51fa\u8d21\u732e. \u8fd9\u662f\u4e00\u4e2a\u8fde\u4ee5\u592a\u574a\u90fd\u5728\u52aa\u529b\u89e3\u51b3\u7684\u95ee\u9898."),(0,r.kt)("li",{parentName:"ul"},"Performance: \u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u8282\u70b9\u63d0\u9ad8\u7f51\u7edc\u7684\u6027\u80fd.")),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u751a\u81f3\u53ef\u80fd",(0,r.kt)("a",{parentName:"p",href:"https://github.com/piranna/wasmachine"},"\u5728\u4f60\u7684\u6d17\u8863\u673a\u91cc\u8fd0\u884c zkWASM"),"\uff1f"),(0,r.kt)("h2",{id:"e-zkwasm-\u662f-performance"},"e) zkWASM \u662f Performance"),(0,r.kt)("p",null,"\u6709\u58f0\u97f3\u8ba4\u4e3a, \u901a\u7528\u7684 zkVM \u53ef\u80fd\u6bd4\u7279\u5236\u7684 zkVM \u7684\u6027\u80fd\u66f4\u5dee. \u4f46\u8fd9\u5176\u5b9e\u4e0d\u592a\u6b63\u786e."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kelvinfichter.com/pages/thoughts/hybrid-rollups/"},"\u66f4\u597d\u7684\u505a\u6cd5"),"\u662f\u5148\u5efa\u7acb\u4e00\u4e2a\u50cf zkWASM \u8fd9\u6837\u7684\u901a\u7528\u89e3\u51b3\u65b9\u6848, \u7136\u540e\u518d\u5bf9\u5b83\u8fdb\u884c\u4f18\u5316. \u6211\u4eec\u4e0d\u5e94\u8be5\u7528\u6218\u672f\u4e0a\u7684\u52e4\u594b\u6765\u63a9\u76d6\u6218\u7565\u4e0a\u7684\u59a5\u534f."),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u9009\u62e9\u9898, \u662f\u653e\u5f03 WASM \u7684\u5de8\u5927\u597d\u5904, \u8fd8\u662f\u8282\u7701\u989d\u5916\u7684\u6027\u80fd\u4f18\u5316?"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4f18\u5316, \u6709\u975e\u5e38\u591a\u7684\u89d2\u5ea6\u53ef\u4ee5\u5207\u5165, \u6bcf\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"https://mirror.xyz/labs.taiko.eth/w7NSKDeKfJoEy0p89I9feixKfdK-20JgWF9HZzxfeBo"},"Taiko")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=r-tlqdO1bRs&t=573s"},"ZKonduit")," \u63d0\u5230\u7684\u70b9\u90fd\u53ef\u4ee5\u5e26\u6765\u5de8\u5927\u7684\u4f18\u5316\u6c34\u5e73:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u50cf Hyperplonk \u548c Caulk \u8fd9\u6837\u7684\u7cfb\u7edf\u7ea7\u522b\u7684\u4f18\u5316"),(0,r.kt)("li",{parentName:"ul"},"ZKP \u4e13\u7528\u786c\u4ef6 (FPGA/ASIC)"),(0,r.kt)("li",{parentName:"ul"},"\u8bc1\u660e\u7cfb\u7edf\u7684 Composition"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1eHVzLPRIEziCJ_oDuJG0yZ-5klNj_daqioC0UaGDaiw/edit?usp=sharing"},"\u5e38\u7528\u7684\u4f18\u5316\u548c\u6280\u5de7")),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u5c42\u9762\u7684\u8c03\u6574"),(0,r.kt)("li",{parentName:"ul"},"\u805a\u5408\u548c\u9012\u5f52"),(0,r.kt)("li",{parentName:"ul"},"\u878d\u5408\u4e0e\u62bd\u8c61")),(0,r.kt)("h2",{id:"3-\u8c01\u5728\u4f7f\u7528-zkwasm"},"3. \u8c01\u5728\u4f7f\u7528 zkWASM"),(0,r.kt)("p",null,"Hyper Oracle \u6b63\u5728\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://delphinuslab.com/"},"Delphinus Lab")," \u5408\u4f5c, \u63a2\u7d22 zkWASM \u5728\u7d22\u5f15\u548c\u81ea\u52a8\u5316\u4e2d\u95f4\u4ef6\u534f\u8bae\u65b9\u9762\u7684\u524d\u6cbf\u7814\u7a76\u548c\u5f00\u53d1."),(0,r.kt)("p",null,"zkWASM \u6240\u5e26\u6765\u7684\u901a\u7528\u6027\u548c WASM \u751f\u6001\u7cfb\u7edf, \u5141\u8bb8\u5f00\u53d1\u8005\u5728\u4e0d\u9700\u8981\u4efb\u4f55\u4fee\u6539\u7684\u60c5\u51b5\u4e0b, \u5c06\u96f6\u77e5\u8bc6\u8bc1\u660e\u7684\u8d85\u80fd\u529b\u8d4b\u4e88\u4efb\u4f55\u81ea\u5b9a\u4e49\u903b\u8f91\u7684\u7a0b\u5e8f."),(0,r.kt)("p",null,"zkWASM \u6b63\u5728\u5b8c\u6210\u5bf9 Hyper Oracle \u7684\u4e00\u4e9b\u57fa\u7840\u8bbe\u65bd\u7ec4\u4ef6\u7684\u5168\u9762\u652f\u6301. \u4e4b\u540e, Hyper Oracle \u4f1a\u5c06\u8fd9\u4e9b\u57fa\u7840\u8bbe\u65bd\u7ec4\u4ef6\u4f5c\u4e3a Public Goods \u5e76\u4e14\u5b8c\u5168\u5f00\u6e90."),(0,r.kt)("h2",{id:"4-\u4ec0\u4e48\u662f-zkwasm"},"4. \u4ec0\u4e48\u662f zkWASM"),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u8ba9\u6211\u4eec\u603b\u7ed3\u4e00\u4e0b zkWASM \u662f\u4ec0\u4e48."),(0,r.kt)("p",null,"\u4ece\u67b6\u6784\u4e0a, zkWASM \u662f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"zk \u865a\u62df\u673a"),(0,r.kt)("li",{parentName:"ul"},"WASM \u4eff\u771f\u5668")),(0,r.kt)("p",null,"\u4ece\u529f\u80fd\u4e0a, zkWASM \u610f\u5473\u7740:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adoption"),(0,r.kt)("li",{parentName:"ul"},"Composability"),(0,r.kt)("li",{parentName:"ul"},"All-around"),(0,r.kt)("li",{parentName:"ul"},"Decentralization"),(0,r.kt)("li",{parentName:"ul"},"Performance")),(0,r.kt)("p",null,"\u4ece\u613f\u666f\u6765\u770b, zkWASM \u662f ZK \u548c zkVM \u7684\u4e0b\u4e00\u7ae0\u8282\u548c\u672a\u6765."))}m.isMDXComponent=!0},22740:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/adoption-39b10004e0b41a3580d3bb91bdea6436.png"},92701:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/compiler-0b37f20c48bcd40a311ce6306edb1ebb.png"},37257:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/dsl-02ee10d93dcd1973da6e382d6d107409.png"},96825:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/instruction-set-b6e7de6bf214b08f5f6a899d41b68dd7.png"},27179:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/panda-d10472ed88985c99418e2038b55b1c74.jpg"},24630:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/web-cff9e9f249226d43a595224223372fcc.png"},17901:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/zk-usage-d74acc481ea3ac27ce6bea9284aa8568.png"},55995:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/zkvm-architecture-9d2ee3b7d4de2760b8a8b29972432262.png"},88417:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/zkvm-race-b260a9d5f335d7890a4d4a52bbbe369b.png"},28113:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/zkvm-4f9a9d562a0146d921962405273a1f6b.png"}}]);