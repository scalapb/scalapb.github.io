(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),o=(r(0),r(119)),c=["components"],p={sidebar_label:"Introduction",slug:"/",title:"ScalaPB: Scala Protocol Buffer Compiler"},l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"ScalaPB: Scala Protocol Buffer Compiler",description:"ScalaPB is a protocol buffer compiler (protoc) plugin for Scala. It will",source:"@site/../docs/target/mdoc/intro.md",slug:"/",permalink:"/docs/",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Installing ScalaPB",permalink:"/docs/installation"}},i=[{value:"Main features",id:"main-features",children:[]}],s={toc:i};function b(e){var t=e.components,r=Object(n.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ScalaPB is a protocol buffer compiler (",Object(o.b)("inlineCode",{parentName:"p"},"protoc"),") plugin for Scala. It will\ngenerate Scala case classes, parsers and serializers for your protocol\nbuffers."),Object(o.b)("p",null,"ScalaPB is hosted on ",Object(o.b)("a",{parentName:"p",href:"https://github.com/scalapb/ScalaPB"},"Github"),"."),Object(o.b)("h2",{id:"main-features"},"Main features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Built on top of Google's protocol buffer compiler to ensure perfect\ncompatibility with the language specification.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Supports both proto2 and proto3.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Nested updates are easy by using lenses:"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"val newOrder = order.update(_.creditCard.expirationYear := 2015)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Generated case classes can co-exist alongside the Java-generated code (the\nclass names will not clash). This allows gradual transition from Java to\nScala.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Can optionally generate conversion methods between the Java generated\nversion of Protocol Buffers to the Scala generated version. This makes\nit possible to migrate your project gradually.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"New:")," Supports for\n",Object(o.b)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto#oneof"},"Oneof"),"'s\nthat were introduced in Protocol Buffers 2.6.0.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Newer:")," Supports ",Object(o.b)("a",{parentName:"p",href:"/docs/scala.js"},"Scala.js")," (in 0.5.x).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Newer:")," Supports ",Object(o.b)("a",{parentName:"p",href:"http://www.grpc.io/"},"gRPC")," (in 0.5.x).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Newest:")," Supports ",Object(o.b)("a",{parentName:"p",href:"/docs/sparksql"},"SparkSQL")," (in 0.5.23).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Newest:")," Supports ",Object(o.b)("a",{parentName:"p",href:"/docs/json"},"converting to and from JSON")," (in 0.5.x).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Newest:")," Supports ",Object(o.b)("a",{parentName:"p",href:"/docs/user_defined_options"},"User-defined options")," (in 0.5.29)."))))}b.isMDXComponent=!0},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=s(r),f=a,m=b["".concat(c,".").concat(f)]||b[f]||u[f]||o;return r?n.a.createElement(m,p(p({ref:t},i),{},{components:r})):n.a.createElement(m,p({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);