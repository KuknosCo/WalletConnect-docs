"use strict";(self.webpackChunkwalletconnect_docs=self.webpackChunkwalletconnect_docs||[]).push([[799],{3905:function(t,n,e){e.d(n,{Zo:function(){return s},kt:function(){return d}});var l=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,l,r=function(t,n){if(null==t)return{};var e,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)e=a[l],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)e=a[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=l.createContext({}),i=function(t){var n=l.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):u(u({},n),t)),e},s=function(t){var n=i(t.components);return l.createElement(o.Provider,{value:n},t.children)},p={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},k=l.forwardRef((function(t,n){var e=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),k=i(e),d=r,m=k["".concat(o,".").concat(d)]||k[d]||p[d]||a;return e?l.createElement(m,u(u({ref:n},s),{},{components:e})):l.createElement(m,u({ref:n},s))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=e.length,u=new Array(a);u[0]=k;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,u[1]=c;for(var i=2;i<a;i++)u[i]=e[i];return l.createElement.apply(null,u)}return l.createElement.apply(null,e)}k.displayName="MDXCreateElement"},8172:function(t,n,e){e.r(n),e.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var l=e(7462),r=e(3366),a=(e(7294),e(3905)),u=["components"],c={},o="Account Balance",i={unversionedId:"client-api/accountBalance",id:"version-1.0/client-api/accountBalance",title:"Account Balance",description:"Example",source:"@site/versioned_docs/version-1.0/client-api/accountBalance.md",sourceDirName:"client-api",slug:"/client-api/accountBalance",permalink:"/WalletConnect-docs/client-api/accountBalance",editUrl:"https://github.com/KuknosCo/WalletConnect-docs/versioned_docs/version-1.0/client-api/accountBalance.md",tags:[],version:"1.0",frontMatter:{},sidebar:"version-1.0/mainSidebar",previous:{title:"Create Keypair",permalink:"/WalletConnect-docs/client-api/createKeypair"},next:{title:"Payment",permalink:"/WalletConnect-docs/client-api/payment"}},s={},p=[{value:"Example",id:"example",level:3},{value:"Params",id:"params",level:3},{value:"Return",id:"return",level:3}],k={toc:p};function d(t){var n=t.components,e=(0,r.Z)(t,u);return(0,a.kt)("wrapper",(0,l.Z)({},k,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"account-balance"},"Account Balance"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\n  try {\n    const response = await wallet.getAccountBalance('GDWNW72K5RSW77JTCPADH5EYL2VT4FLUNN43CLIXKEGORT7YO5JDLHLK') \n    if(response.status === 'reject'){\n        throw new Error(response.message)\n    }\n    console.log(response.data) // Balances of your account\n  } catch (error) {\n      console.log(error)\n  }\n\n"))),(0,a.kt)("h3",{id:"params"},"Params"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"public"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"Account id"))),(0,a.kt)("h3",{id:"return"},"Return"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"status"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,"actionType.accountBalance"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"message"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"data"),(0,a.kt)("td",null,"accountBlancesResponse"),(0,a.kt)("td",null,(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"public"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"The source account")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"network"),(0,a.kt)("td",null,"Public | test"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"balances"),(0,a.kt)("td",null,"Array of Balance"),(0,a.kt)("td",null,(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"asset_code"),(0,a.kt)("td",null,"string")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"asset_issuer"),(0,a.kt)("td",null,"string")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"available_balance"),(0,a.kt)("td",null,"number")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"balance"),(0,a.kt)("td",null,"number")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"buying_liabilites"),(0,a.kt)("td",null,"string")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"selling_liabilites"),(0,a.kt)("td",null,"string")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"limit"),(0,a.kt)("td",null,"string"))))))))))}d.isMDXComponent=!0}}]);