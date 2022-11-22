"use strict";(self.webpackChunkwalletconnect_docs=self.webpackChunkwalletconnect_docs||[]).push([[4242],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},872:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={},c="Set Network",u={unversionedId:"client-api/setNetwork",id:"version-2.0.0/client-api/setNetwork",title:"Set Network",description:"You can switch between the public network and the test network by this method.",source:"@site/versioned_docs/version-2.0.0/client-api/setNetwork.md",sourceDirName:"client-api",slug:"/client-api/setNetwork",permalink:"/WalletConnect-docs/client-api/setNetwork",editUrl:"https://github.com/KuknosCo/WalletConnect-docs/versioned_docs/version-2.0.0/client-api/setNetwork.md",tags:[],version:"2.0.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Connection Status",permalink:"/WalletConnect-docs/client-api/walletConnectStatus"},next:{title:"Create Keypair",permalink:"/WalletConnect-docs/client-api/createKeypair"}},p={},s=[{value:"Example",id:"example",level:3},{value:"Params",id:"params",level:4},{value:"Return",id:"return",level:4}],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-network"},"Set Network"),(0,a.kt)("p",null,"You can switch between the public network and the test network by this method.",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    wallet.setNetwork(network.test) \n"))),(0,a.kt)("h4",{id:"params"},"Params"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"net"),(0,a.kt)("td",null,"walletConnect.network"),(0,a.kt)("td",null,"Network that you want work with it "))),(0,a.kt)("h4",{id:"return"},"Return"),(0,a.kt)("div",null,"void"))}f.isMDXComponent=!0}}]);