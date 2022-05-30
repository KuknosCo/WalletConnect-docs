"use strict";(self.webpackChunkwalletconnect_docs=self.webpackChunkwalletconnect_docs||[]).push([[337],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(n),k=l,f=d["".concat(u,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},122:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={},u="Sign Data",c={unversionedId:"client-api/signData",id:"client-api/signData",title:"Sign Data",description:"Example",source:"@site/docs/client-api/signData.md",sourceDirName:"client-api",slug:"/client-api/signData",permalink:"/WalletConnect-docs/1.0/client-api/signData",editUrl:"https://github.com/KuknosCo/WalletConnect-docs/docs/client-api/signData.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Sign XDR",permalink:"/WalletConnect-docs/1.0/client-api/signXdr"},next:{title:"Curve Encryption",permalink:"/WalletConnect-docs/1.0/client-api/curveEncryption"}},s={},p=[{value:"Example",id:"example",level:3},{value:"Params",id:"params",level:3},{value:"Return",id:"return",level:3}],d={toc:p};function k(t){var e=t.components,n=(0,l.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sign-data"},"Sign Data"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"  try {\n    const response = await wallet.signData('data') \n    if(response.status === 'reject'){\n        throw new Error(response.message)\n    }\n    console.log(response.data)\n  } catch (error) {\n      console.log(error)\n  }\n"))),(0,a.kt)("h3",{id:"params"},"Params"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"data"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"Data to sign"))),(0,a.kt)("h3",{id:"return"},"Return"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"status"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,"actionType.signData"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"message"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"data"),(0,a.kt)("td",null,"SignDataResponse"),(0,a.kt)("td",null,(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"public"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"The source account")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Signature"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"Signature")))))))}k.isMDXComponent=!0}}]);