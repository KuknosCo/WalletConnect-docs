"use strict";(self.webpackChunkwalletconnect_docs=self.webpackChunkwalletconnect_docs||[]).push([[446],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=l,k=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4303:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],c={},i="Create Keypair",u={unversionedId:"client-api/createKeypair",id:"version-1.0/client-api/createKeypair",title:"Create Keypair",description:"Generate mnemonic backup words",source:"@site/versioned_docs/version-1.0/client-api/createKeypair.md",sourceDirName:"client-api",slug:"/client-api/createKeypair",permalink:"/WalletConnect-docs/client-api/createKeypair",editUrl:"https://github.com/KuknosCo/WalletConnect-docs/versioned_docs/version-1.0/client-api/createKeypair.md",tags:[],version:"1.0",frontMatter:{},sidebar:"version-1.0/mainSidebar",previous:{title:"Set Network",permalink:"/WalletConnect-docs/client-api/setNetwork"},next:{title:"Account Balance",permalink:"/WalletConnect-docs/client-api/accountBalance"}},p={},s=[{value:"Example",id:"example",level:4},{value:"Return",id:"return",level:4}],d={toc:s};function f(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-keypair"},"Create Keypair"),(0,a.kt)("p",null,"Generate mnemonic backup words",(0,a.kt)("br",null),"\nMnemonic and Secret of the keypair will be safe and do not return to the DApp."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\n  try {\n    const response = await wallet.createKeypair() \n    if(response.status === 'reject'){\n        throw new Error(response.message)\n    }\n    console.log(response.data)\n  } catch (error) {\n      console.log(error)\n  }\n\n"))),(0,a.kt)("h4",{id:"return"},"Return"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"status"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,"actionType.createKeypair"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"message"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"data"),(0,a.kt)("td",null,"createKeypairResponse"),(0,a.kt)("td",null,(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"public"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"The source account")))))))}f.isMDXComponent=!0}}]);