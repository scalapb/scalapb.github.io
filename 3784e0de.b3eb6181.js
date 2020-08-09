(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(100)),c={title:"Contacting us",layout:"docs"},i={unversionedId:"contact",id:"contact",isDocsHomePage:!1,title:"Contacting us",description:"Supporting ScalaPB development",source:"@site/../docs/target/mdoc/contact.md",permalink:"/docs/contact",sidebar:"someSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},s=[{value:"Supporting ScalaPB development",id:"supporting-scalapb-development",children:[]},{value:"Asking questions",id:"asking-questions",children:[]},{value:"I need urgent support! When can I have a feature ready?",id:"i-need-urgent-support-when-can-i-have-a-feature-ready",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"supporting-scalapb-development"},"Supporting ScalaPB development"),Object(o.b)("p",null,"Love ScalaPB? Want to show your support for its continued maintenance?\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sponsors/thesamet"}),"Become a sponsor"),"!"),Object(o.b)("h2",{id:"asking-questions"},"Asking questions"),Object(o.b)("p",null,"If you have a question about using ScalaPB you are welcome to contact\nus over ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitter.im/ScalaPB/community"}),"ScalaPB Gitter channel"),"."),Object(o.b)("p",null,"If you prefer email or less-interactive contact, you can post to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://groups.google.com/forum/?nomobile=true#!forum/scalapb"}),"ScalaPB's\nGoogle Group"),"."),Object(o.b)("p",null,"If you believe the question (or its answer) might be beneficial to many users\nconsider posting it on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackoverflow.com"}),"Stack Overflow")," and tag it\nwith ",Object(o.b)("inlineCode",{parentName:"p"},"scalapb"),". @thesamet (the main author) gets notified when that happen."),Object(o.b)("p",null,"If you have found a bug or have a feature request, please\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/scalapb/ScalaPB/issues"}),"search our open Github issues"),",\nand if it is a new bug feel free to post a new issue. When posting a new\nissue, please describe what are you trying to do, what you expect it to do,\nand what unexpected things happen. Provide as much detail as possible and\ninclude all relevant code so it is possible for us to reproduce the issue."),Object(o.b)("h2",{id:"i-need-urgent-support-when-can-i-have-a-feature-ready"},"I need urgent support! When can I have a feature ready?"),Object(o.b)("p",null,"If you need an issue resolved or a feature developed for you in a timely\nmanner, consider reaching out over email (thesamet at gmail.com) to discuss\npayment options for this project work (small projects start at $200 USD).  This\nwould be a great way to support the time and effort put into the development of\nScalaPB!"))}p.isMDXComponent=!0}}]);