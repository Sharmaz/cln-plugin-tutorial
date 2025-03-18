"use strict";(self.webpackChunkcln_plugin_tutorial=self.webpackChunkcln_plugin_tutorial||[]).push([[67],{5211:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"rust-tutorial/index","title":"Rust Tutorial","description":"Rust version of the tutorial.","source":"@site/docs/rust-tutorial/index.md","sourceDirName":"rust-tutorial","slug":"/rust-tutorial/","permalink":"/cln-plugin-tutorial/rust-tutorial/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Rust Tutorial"},"sidebar":"tutorialSidebar","previous":{"title":"Bonus Rust","permalink":"/cln-plugin-tutorial/python-tutorial/bonus-rust"},"next":{"title":"Intro","permalink":"/cln-plugin-tutorial/rust-tutorial/intro"}}');var o=n(4848),s=n(8453),i=n(7473);const l={sidebar_position:3,title:"Rust Tutorial"},c=void 0,a={},u=[];function d(t){const e={p:"p",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Rust version of the tutorial."}),"\n",(0,o.jsx)(i.A,{})]})}function m(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},7473:(t,e,n)=>{n.d(e,{A:()=>k});var r=n(6540),o=n(4164),s=n(102),i=n(6289),l=n(797);const c=["zero","one","two","few","many","other"];function a(t){return c.filter((e=>t.includes(e)))}const u={locale:"en",pluralForms:a(["one","other"]),select:t=>1===t?"one":"other"};function d(){const{i18n:{currentLocale:t}}=(0,l.A)();return(0,r.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:a(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),u}}),[t])}function m(){const t=d();return{selectMessage:(e,n)=>function(t,e,n){const r=t.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${t}`);const o=n.select(e),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,e,t)}}var p=n(2887),f=n(539),h=n(9303);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(4848);function j(t){let{href:e,children:n}=t;return(0,x.jsx)(i.A,{href:e,className:(0,o.A)("card padding--lg",g.cardContainer),children:n})}function b(t){let{href:e,icon:n,title:r,description:s}=t;return(0,x.jsxs)(j,{href:e,children:[(0,x.jsxs)(h.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),s&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function v(t){let{item:e}=t;const n=(0,s.Nr)(e),r=function(){const{selectMessage:t}=m();return e=>t(e,(0,f.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,x.jsx)(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??r(e.items.length)}):null}function w(t){let{item:e}=t;const n=(0,p.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(e.docId??void 0);return(0,x.jsx)(b,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function y(t){let{item:e}=t;switch(e.type){case"link":return(0,x.jsx)(w,{item:e});case"category":return(0,x.jsx)(v,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function N(t){let{className:e}=t;const n=(0,s.$S)();return(0,x.jsx)(k,{items:n.items,className:e})}function k(t){const{items:e,className:n}=t;if(!e)return(0,x.jsx)(N,{...t});const r=(0,s.d1)(e);return(0,x.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((t,e)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(y,{item:t})},e)))})}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>l});var r=n(6540);const o={},s=r.createContext(o);function i(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);