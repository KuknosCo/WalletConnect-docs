"use strict";(self.webpackChunkwalletconnect_docs=self.webpackChunkwalletconnect_docs||[]).push([[5216],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||c;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2830:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={},l="Disconnect",p={unversionedId:"client-api/disconnect",id:"version-1.0/client-api/disconnect",title:"Disconnect",description:"Disconnect from the wallet and clean walletConnet storage on Dapp.",source:"@site/versioned_docs/version-1.0/client-api/disconnect.md",sourceDirName:"client-api",slug:"/client-api/disconnect",permalink:"/WalletConnect-docs/1.0/client-api/disconnect",editUrl:"https://github.com/KuknosCo/WalletConnect-docs/versioned_docs/version-1.0/client-api/disconnect.md",tags:[],version:"1.0",frontMatter:{},sidebar:"version-1.0/mainSidebar",previous:{title:"Connect",permalink:"/WalletConnect-docs/1.0/client-api/connect"},next:{title:"Connection Status",permalink:"/WalletConnect-docs/1.0/client-api/walletConnectStatus"}},s={},u=[{value:"Exapmle",id:"exapmle",level:3}],f={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"disconnect"},"Disconnect"),(0,c.kt)("p",null,"Disconnect from the wallet and clean walletConnet storage on Dapp."),(0,c.kt)("h3",{id:"exapmle"},"Exapmle"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"\n    wallet.disconnect() \n\n")))}d.isMDXComponent=!0}}]);