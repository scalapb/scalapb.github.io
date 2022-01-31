(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{119:function(e,o,t){"use strict";t.d(o,"a",(function(){return m})),t.d(o,"b",(function(){return d}));var a=t(0),r=t.n(a);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function c(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var o=r.a.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):p(p({},o),e)),t},m=function(e){var o=b(e.components);return r.a.createElement(s.Provider,{value:o},e.children)},i={inlineCode:"code",wrapper:function(e){var o=e.children;return r.a.createElement(r.a.Fragment,{},o)}},u=r.a.forwardRef((function(e,o){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(t),u=a,d=m["".concat(c,".").concat(u)]||m[u]||i[u]||n;return t?r.a.createElement(d,p(p({ref:o},s),{},{components:t})):r.a.createElement(d,p({ref:o},s))}));function d(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=t.length,c=new Array(n);c[0]=u;var p={};for(var l in o)hasOwnProperty.call(o,l)&&(p[l]=o[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<n;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return p})),t.d(o,"metadata",(function(){return l})),t.d(o,"toc",(function(){return s})),t.d(o,"default",(function(){return m}));var a=t(3),r=t(7),n=(t(0),t(119)),c=["components"],p={title:"Common protos",layout:"docs"},l={unversionedId:"common-protos",id:"common-protos",isDocsHomePage:!1,title:"Common protos",description:"This page lists packages that contain compiled ScalaPB classes for common third-party protobuf libraries.",source:"@site/../docs/target/mdoc/common-protos.md",slug:"/common-protos",permalink:"/docs/common-protos",version:"current",sidebar:"someSidebar",previous:{title:"Using third-party protos",permalink:"/docs/third-party-protos"},next:{title:"Validating Protobufs",permalink:"/docs/validation"}},s=[{value:"Adding new packages",id:"adding-new-packages",children:[]},{value:"Available packages",id:"available-packages",children:[{value:"proto-google-common-protos",id:"proto-google-common-protos",children:[]},{value:"proto-google-cloud-pubsub-v1",id:"proto-google-cloud-pubsub-v1",children:[]},{value:"pgv-proto",id:"pgv-proto",children:[]}]}],b={toc:s};function m(e){var o=e.components,t=Object(r.a)(e,c);return Object(n.b)("wrapper",Object(a.a)({},b,t,{components:o,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This page lists packages that contain compiled ScalaPB classes for common third-party protobuf libraries."),Object(n.b)("p",null,"Each of these packages require you to add two library dependencies in your ",Object(n.b)("inlineCode",{parentName:"p"},"build.sbt"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The dependency with the ",Object(n.b)("inlineCode",{parentName:"p"},'"protobuf"'),' unpacks the protos from the jar. This\nallows the protos in your own project to "import" the third-party protos\n(without this, protoc would fail with an error like: ',Object(n.b)("inlineCode",{parentName:"p"},'"Import was not found or had errors"'),")")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The generated code for your protos, may reference types that are defined in\nthe protos in that jar. That requires a Scala class for them available in\nthe classpath. This is accomplished by adding the library as a normal\ndependency."))),Object(n.b)("p",null,"If you don't have any proto files that import the common protos, then you can omit the ",Object(n.b)("inlineCode",{parentName:"p"},'"protobuf"')," dependency."),Object(n.b)("h2",{id:"adding-new-packages"},"Adding new packages"),Object(n.b)("p",null,"If you don't see your favorite third-party proto package here, and there is already a maven package for it that provides the proto files (with possibly Java generated classes), you can send a pull request to common-protos to have it added. See instruction on the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/scalapb/common-protos"},"ScalaPB Common Protos project page on Github"),"."),Object(n.b)("h2",{id:"available-packages"},"Available packages"),Object(n.b)("h3",{id:"proto-google-common-protos"},"proto-google-common-protos"),Object(n.b)("p",null,"ScalaPB 0.11.x:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "com.thesamet.scalapb.common-protos" %% "proto-google-common-protos-scalapb_0.11" % "2.5.0-2" % "protobuf",\n  "com.thesamet.scalapb.common-protos" %% "proto-google-common-protos-scalapb_0.11" % "2.5.0-2"\n)\n')),Object(n.b)("p",null,"ScalaPB 0.10.x:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "com.thesamet.scalapb.common-protos" %% "proto-google-common-protos-scalapb_0.10" % "2.5.0-2" % "protobuf",\n  "com.thesamet.scalapb.common-protos" %% "proto-google-common-protos-scalapb_0.10" % "2.5.0-2"\n)\n')),Object(n.b)("p",null,"ScalaPB 0.9.x:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "com.thesamet.scalapb.common-protos" %% "proto-google-common-protos-scalapb_0.9" % "2.5.0-2" % "protobuf",\n  "com.thesamet.scalapb.common-protos" %% "proto-google-common-protos-scalapb_0.9" % "2.5.0-2"\n)\n')),Object(n.b)("h3",{id:"proto-google-cloud-pubsub-v1"},"proto-google-cloud-pubsub-v1"),Object(n.b)("p",null,"ScalaPB 0.11.x:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "com.thesamet.scalapb.common-protos" %% "proto-google-cloud-pubsub-v1-scalapb_0.11" % "1.96.2-2" % "protobuf",\n  "com.thesamet.scalapb.common-protos" %% "proto-google-cloud-pubsub-v1-scalapb_0.11" % "1.96.2-2"\n)\n')),Object(n.b)("p",null,"ScalaPB 0.10.x:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "com.thesamet.scalapb.common-protos" %% "proto-google-cloud-pubsub-v1-scalapb_0.10" % "1.96.2-2" % "protobuf",\n  "com.thesamet.scalapb.common-protos" %% "proto-google-cloud-pubsub-v1-scalapb_0.10" % "1.96.2-2"\n)\n')),Object(n.b)("p",null,"ScalaPB 0.9.x:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "com.thesamet.scalapb.common-protos" %% "proto-google-cloud-pubsub-v1-scalapb_0.9" % "1.96.2-2" % "protobuf",\n  "com.thesamet.scalapb.common-protos" %% "proto-google-cloud-pubsub-v1-scalapb_0.9" % "1.96.2-2"\n)\n')),Object(n.b)("h3",{id:"pgv-proto"},"pgv-proto"),Object(n.b)("p",null,"ScalaPB 0.11.x:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "com.thesamet.scalapb.common-protos" %% "pgv-proto-scalapb_0.11" % "0.6.1-0" % "protobuf",\n  "com.thesamet.scalapb.common-protos" %% "pgv-proto-scalapb_0.11" % "0.6.1-0"\n)\n')),Object(n.b)("p",null,"ScalaPB 0.10.x:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "com.thesamet.scalapb.common-protos" %% "pgv-proto-scalapb_0.10" % "0.6.1-0" % "protobuf",\n  "com.thesamet.scalapb.common-protos" %% "pgv-proto-scalapb_0.10" % "0.6.1-0"\n)\n')),Object(n.b)("p",null,"ScalaPB 0.9.x:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "com.thesamet.scalapb.common-protos" %% "pgv-proto-scalapb_0.9" % "0.6.1-0" % "protobuf",\n  "com.thesamet.scalapb.common-protos" %% "pgv-proto-scalapb_0.9" % "0.6.1-0"\n)\n')),Object(n.b)("p",null,"footer"))}m.isMDXComponent=!0}}]);