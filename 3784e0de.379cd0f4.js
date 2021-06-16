(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,b=l["".concat(i,".").concat(m)]||l[m]||d[m]||r;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(119)),i={title:"Contacting us",layout:"docs"},c={unversionedId:"contact",id:"contact",isDocsHomePage:!1,title:"Contacting us",description:"Supporting ScalaPB development",source:"@site/../docs/target/mdoc/contact.md",slug:"/contact",permalink:"/docs/contact",version:"current",sidebar:"someSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},s=[{value:"Supporting ScalaPB development",id:"supporting-scalapb-development",children:[]},{value:"Asking questions",id:"asking-questions",children:[]},{value:"Providing minimal reproducible example",id:"providing-minimal-reproducible-example",children:[]},{value:"I need urgent support! When can I have a feature ready?",id:"i-need-urgent-support-when-can-i-have-a-feature-ready",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"supporting-scalapb-development"},"Supporting ScalaPB development"),Object(r.b)("p",null,"Love ScalaPB? Want to show your support for its continued maintenance?\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sponsors/thesamet"}),"Become a sponsor"),"!"),Object(r.b)("h2",{id:"asking-questions"},"Asking questions"),Object(r.b)("p",null,"If you have a question about using ScalaPB you are welcome to contact\nus over ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitter.im/ScalaPB/community"}),"ScalaPB Gitter channel"),"."),Object(r.b)("p",null,"If you prefer email or less-interactive contact, you can post to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://groups.google.com/forum/?nomobile=true#!forum/scalapb"}),"ScalaPB's\nGoogle Group"),"."),Object(r.b)("p",null,"If you believe the question (or its answer) might be beneficial to many users\nconsider posting it on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com"}),"Stack Overflow")," and tag it\nwith ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb"),". @thesamet (the main author) gets notified when that happen."),Object(r.b)("p",null,"If you have found a bug or have a feature request, please\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/scalapb/ScalaPB/issues"}),"search our open Github issues"),",\nand if it is a new bug feel free to post a new issue. When posting a new\nissue, please describe what are you trying to do, what you expect it to do,\nand what unexpected things happen. Provide as much detail as possible and\ninclude all relevant code so it is possible for us to reproduce the issue."),Object(r.b)("h2",{id:"providing-minimal-reproducible-example"},"Providing minimal reproducible example"),Object(r.b)("p",null,"Depending on the case, you may be asked to provide a minimal reproducible example\nthat demonstrates the issue. This means that the maintainer is unable to tell\nwhat is going on without additional context. At the same time, to save time, the additional\ncontext provided need to be kept to a minimum. To accomplish that, provide a\nsmall sbt project that includes only the relevant plugins and settings, and\nthe minimal code, minimal amount of proto files, messages and field that are\nneeded to demonstrate the problem. Include instructions on how to run the\nproject so the problem can be exhibited. This makes it much easier for a\nmaintainer to identify a bug and propose a solution or a workaround."),Object(r.b)("h2",{id:"i-need-urgent-support-when-can-i-have-a-feature-ready"},"I need urgent support! When can I have a feature ready?"),Object(r.b)("p",null,"If you need an issue resolved or a feature developed for you in a timely\nmanner, consider reaching out over email (thesamet at gmail.com) to discuss\npayment options for this project work (small projects start at $200 USD).  This\nwould be a great way to support the time and effort put into the development of\nScalaPB!"))}p.isMDXComponent=!0}}]);