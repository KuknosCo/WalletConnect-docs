"use strict";(self.webpackChunkwalletconnect_docs=self.webpackChunkwalletconnect_docs||[]).push([[1122],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3880:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={},c="Technical Specification",s={unversionedId:"tech-spec",id:"version-1.0/tech-spec",title:"Technical Specification",description:"Introduction",source:"@site/versioned_docs/version-1.0/tech-spec.md",sourceDirName:".",slug:"/tech-spec",permalink:"/WalletConnect-docs/1.0/tech-spec",editUrl:"https://github.com/KuknosCo/WalletConnect-docs/versioned_docs/version-1.0/tech-spec.md",tags:[],version:"1.0",frontMatter:{},sidebar:"version-1.0/mainSidebar",previous:{title:"Standalone Client",permalink:"/WalletConnect-docs/1.0/quick-start/dapps/client"},next:{title:"Connect",permalink:"/WalletConnect-docs/1.0/client-api/connect"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Core Architecture",id:"core-architecture",level:2},{value:"Requesting Connection",id:"requesting-connection",level:3},{value:"Establishing Connection",id:"establishing-connection",level:3}],d={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"technical-specification"},"Technical Specification"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"WalletConnect is an open protocol for connecting Dapps to Wallets. The motivation behind it came from the lack of user-friendly Wallets available to the user - In particular solutions which don't require installing browser extensions. In order to solve this it was designed to not require any additional software or hardware to connect a Wallet to a Dapp. The design is mostly tailored to mobile wallets but it could definitely support desktop wallets as well. The protocol relies that both the Dapp and the Wallet use WalletConnect Client and connect to a Bridge server that will relay the communications. The communication is initiated with a standard URI format that contains the topic of the connection request, a symmetric key is then used to decrypt the payload and the bridge server url."),(0,i.kt)("h2",{id:"core-architecture"},"Core Architecture"),(0,i.kt)("p",null,"The architecture consists essentially of a websocket server (Bridge) between two peers (Dapp and Wallet) that use the Client."),(0,i.kt)("h3",{id:"requesting-connection"},"Requesting Connection"),(0,i.kt)("p",null,"The initiator, is the first peer who requests connection (Dapp). Dapp posts a  connection request details to the Bridge Server. Then using the WalletConnect URI, Dapp assembles together the required parameters to establish the connection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wc-kuknos://Base64 encoded string\n")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Required parts"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"wc-kuknos"),(0,i.kt)("td",null,"Kuknos Wallet Connect protocol")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Base64 encoded string"),(0,i.kt)("td",null,"Base64 encoded of Dapp information",(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"project_id"),(0,i.kt)("td",null,"Unique id")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"meta"),(0,i.kt)("td",null,"title, logo, Dapp url"),(0,i.kt)("td",null)))))),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"establishing-connection"},"Establishing Connection"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"alt text",src:n(6630).Z,width:"601",height:"321"})),(0,i.kt)("p",null,"The second peer (Wallet) will read the URI using either a QR Code or a deep link. After reading the URI the peer will immediately receive the connection request payload."),(0,i.kt)("p",null,"The Wallet will then display to the user request details provided by the Dapp. The user will then approve or reject the connection. If rejected, the Dapp will  throw an error message if provided by the Wallet. If approved, the Dapp will receive PublicKey from the Wallet."),(0,i.kt)("p",null,"Once the connection is established, the Dapp will be able to send any requests to be handled by the Wallet either to read data from its node or make signing requests for transactions or messages."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"alt text",src:n(9185).Z,width:"601",height:"331"})))}h.isMDXComponent=!0},6630:function(e,t,n){t.Z=n.p+"assets/images/establishConnection-0efa975e1ab3ef89bfe55ff077362d73.png"},9185:function(e,t,n){t.Z=n.p+"assets/images/postCall-4c603b59efce3c86f45c25ded1c8d795.png"}}]);