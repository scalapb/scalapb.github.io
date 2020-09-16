(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(0),a(101)),o={title:"Using ScalaPB with Scala.js",sidebar_label:"Scala.js"},s={unversionedId:"scala.js",id:"scala.js",isDocsHomePage:!1,title:"Using ScalaPB with Scala.js",description:"Scala.js compiles Scala source code to equivalent",source:"@site/../docs/target/mdoc/scala.js.md",permalink:"/docs/scala.js",sidebar_label:"Scala.js",sidebar:"someSidebar",previous:{title:"gRPC",permalink:"/docs/grpc"},next:{title:"Using ScalaPB with Spark",permalink:"/docs/sparksql"}},i=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Demo",id:"demo",children:[]}],l={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://scala-js.org"}),"Scala.js")," compiles Scala source code to equivalent\nJavascript code.  It is possible to use ScalaPB generated case classes and\nlenses in Scala.js, and even serialize and parse byte arrays."),Object(c.b)("p",null,"Limitations:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The Java protocol buffers are unavailable, and therefore Java conversions\nand Java descriptors do not work (though Scala descriptors in ScalaPB >=\n0.6.0 would cover most use cases)")),Object(c.b)("h2",{id:"getting-started"},"Getting Started"),Object(c.b)("p",null,"Add to your library dependencies:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'libraryDependencies ++= Seq(\n  "com.thesamet.scalapb" %%% "scalapb-runtime" % scalapb.compiler.Version.scalapbVersion,\n\n  // The following needed only if you include scalapb/scalapb.proto:\n  "com.thesamet.scalapb" %%% "scalapb-runtime" % scalapb.compiler.Version.scalapbVersion % "protobuf"\n)\n')),Object(c.b)("p",null,"Since the Scala.js compiler depends on an old version of protobuf it is\nrecommended to work with the ",Object(c.b)("inlineCode",{parentName:"p"},"compilerplugin-shaded")," artifact. This artifact contains a shaded version of protobuf-java and other dependencies. Have\nthis in your ",Object(c.b)("inlineCode",{parentName:"p"},"project/scalapb.sbt")," file instead of what described in the\nstandard installation instructions:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'addSbtPlugin("com.thesamet" % "sbt-protoc" % "1.0.0-RC1" exclude ("com.thesamet.scalapb", "protoc-bridge_2.12"))\n\nlibraryDependencies += "com.thesamet.scalapb" %% "compilerplugin-shaded" % "0.10.8"\n')),Object(c.b)("h2",{id:"demo"},"Demo"),Object(c.b)("p",null,"Example project: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thesamet/scalapbjs-test"}),"https://github.com/thesamet/scalapbjs-test")),Object(c.b)("p",null,"Example with multi-project build: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thesamet/sbt-protoc/tree/master/examples/scalajs-multiproject"}),"https://github.com/thesamet/sbt-protoc/tree/master/examples/scalajs-multiproject")),Object(c.b)("p",null,"Live demo: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://thesamet.github.io/scalapbjs-test/"}),"http://thesamet.github.io/scalapbjs-test/")))}p.isMDXComponent=!0}}]);