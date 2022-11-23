"use strict";(self.webpackChunkwalletconnect_docs=self.webpackChunkwalletconnect_docs||[]).push([[761],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7462),r=t(7294),l=t(2389),o=t(3725),i=t(6010),s="tabItem_LplD";function c(e){var n,t,l,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,o.lx)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),g=h.tabGroupChoices,w=h.setTabGroupChoices,C=(0,r.useState)(y),N=C[0],O=C[1],T=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=g[m];null!=D&&D!==N&&b.some((function(e){return e.value===D}))&&O(D)}var j=function(e){var n=e.currentTarget,t=T.indexOf(n),a=b[t].value;a!==N&&(E(n),O(a),null!=m&&w(m,a))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),c?(0,r.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function u(e){var n=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},5745:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=t(9877),i=t(8215),s=["components"],c={description:"Quick Start For Dapps using Standalone Client"},u="Standalone Client",p={unversionedId:"quick-start/dapps/client",id:"version-2.0.0/quick-start/dapps/client",title:"Standalone Client",description:"Quick Start For Dapps using Standalone Client",source:"@site/versioned_docs/version-2.0.0/quick-start/dapps/client.md",sourceDirName:"quick-start/dapps",slug:"/quick-start/dapps/client",permalink:"/WalletConnect-docs/quick-start/dapps/client",editUrl:"https://github.com/KuknosCo/WalletConnect-docs/versioned_docs/version-2.0.0/quick-start/dapps/client.md",tags:[],version:"2.0.0",frontMatter:{description:"Quick Start For Dapps using Standalone Client"},sidebar:"mainSidebar",previous:{title:"Kuknos WalletConnect",permalink:"/WalletConnect-docs/"},next:{title:"Technical Specification",permalink:"/WalletConnect-docs/tech-spec"}},d={},m=[{value:"Install",id:"install",level:2},{value:"Initiate Connection",id:"initiate-connection",level:3},{value:"Use in raw files as a pure library",id:"use-in-raw-files-as-a-pure-library",level:3},{value:"Payment",id:"payment",level:3},{value:"Sign XDR",id:"sign-xdr",level:3}],f={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"standalone-client"},"Standalone Client"),(0,l.kt)("p",null,"This library is written in typescript language and can be used on the web"),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @kuknos/wallet-connect\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @kuknos/wallet-connect\n")))),(0,l.kt)("p",null,"OR you can just import the ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," type of library from the CDN:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://unpkg.com/@kuknos/wallet-connect@2.0.0/dist/kuknos-wallet-connect.var.js\n")),(0,l.kt)("h3",{id:"initiate-connection"},"Initiate Connection"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Client as walletConnect } from '@kuknos/wallet-connect'\nconst wallet = new walletConnect({\n  // Inital options\n  relay_server_url: 'https://relay.kuknos.ir',\n  network: walletConnect.network.public,\n})\n\nconst connectResponse = await wallet.connect()\nif (connectResponse.status === 'reject') {\n  throw new Error('Connect Request Reject by Wallet')\n}\nconsole.log(connectResponse.data.public) // PublicKey of connected wallet\nwallet.onConnectionStatusChange((status) => {\n  if (status) {\n    // Dapp is connected to the wallet\n  } else {\n    // Dapp is not connected to the wallet\n  }\n})\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"use-in-raw-files-as-a-pure-library"},"Use in raw files as a pure library"),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    \x3c!-- Import it from the CDN --\x3e\n    <script src="https://unpkg.com/@kuknos/wallet-connect@2.0.0/dist/kuknos-wallet-connect.var.js"><\/script>\n\n    <title>Kuknos Wallet Connect by CDN</title>\n  </head>\n  <body>\n    <script type="module">\n        // Use it like a piece of cake :)\n        // Note: the var script import a variable as KuknosWalletConnect for whole library instance\n      const WalletClient = new KuknosWalletConnect.Client({\n        // Inital options\n        relay_server_url: \'https://relay.kuknos.ir\',\n        network: \'public\',\n      })\n      console.log(WalletClient)\n    <\/script>\n  </body>\n</html>\n')),(0,l.kt)("h3",{id:"payment"},"Payment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create payment transaction and submit on Kuknos network\nconst paymentResponse = await wallet.payment({\n  amount: 1.25,\n  destination: 'GDWNW72K5RSW77JTCPADH5EYL2VT4FLUNN43CLIXKEGORT7YO5JDLHLK',\n  asset_code: 'PMN',\n  memo: 'test',\n})\nif (paymentResponse.status === 'reject') {\n  throw new Error(paymentResponse.message)\n}\nconsole.log(paymentResponse.data.hash) // Transaction hash of this payment\n")),(0,l.kt)("h3",{id:"sign-xdr"},"Sign XDR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Sign custom XDR\nconst signResponse = await wallet.sign('custom xdr')\nif (signResponse.status === 'reject') {\n  throw new Error(paymentResponse.message)\n}\nconsole.log(paymentResponse.data.xdr) // Signed XDR\n")))}v.isMDXComponent=!0}}]);