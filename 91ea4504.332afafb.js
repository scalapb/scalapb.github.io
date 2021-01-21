(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{118:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return u}));var r=o(0),a=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(o),m=r,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||n;return o?a.a.createElement(u,p(p({ref:t},s),{},{components:o})):a.a.createElement(u,p({ref:t},s))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<n;s++)i[s]=o[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},97:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return l}));var r=o(3),a=o(7),n=(o(0),o(118)),i={title:"Using third-party protos"},p={unversionedId:"third-party-protos",id:"third-party-protos",isDocsHomePage:!1,title:"Using third-party protos",description:"The protos you are trying to generate code may depend on other protos which are currently are not a part of your build. We need to solve two problems:",source:"@site/../docs/target/mdoc/third-party-protos.md",slug:"/third-party-protos",permalink:"/docs/third-party-protos",version:"current",sidebar:"someSidebar",previous:{title:"Using with Dotty",permalink:"/docs/dotty"},next:{title:"Common protos",permalink:"/docs/common-protos"}},c=[{value:"Common protos: maybe a Scala package for the protos already exists?",id:"common-protos-maybe-a-scala-package-for-the-protos-already-exists",children:[]},{value:"There is a library on Maven with the protos (and possibly generated Java code)",id:"there-is-a-library-on-maven-with-the-protos-and-possibly-generated-java-code",children:[]}],s={toc:c};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The protos you are trying to generate code may depend on other protos which are currently are not a part of your build. We need to solve two problems:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Making those proto files available to ",Object(n.b)("inlineCode",{parentName:"li"},"protoc"),"'s import search path so the ",Object(n.b)("inlineCode",{parentName:"li"},"import")," statements in your protos don't cause errors and code is generated."),Object(n.b)("li",{parentName:"ol"},"Providing Scala classes for those third-party protos.")),Object(n.b)("p",null,"There are multiple ways to solve those problems."),Object(n.b)("h2",{id:"common-protos-maybe-a-scala-package-for-the-protos-already-exists"},"Common protos: maybe a Scala package for the protos already exists?"),Object(n.b)("p",null,"Check whether a ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/common-protos"}),"ScalaPB Common Protos")," package is already avaiable for the protos. If the proto library you are looking for, consider making a PR or file a feature request."),Object(n.b)("p",null,"You will add such libraries to your project twice: once with a ",Object(n.b)("inlineCode",{parentName:"p"},"protobuf")," suffix and once without:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'libraryDependencies ++= Seq(\n  "com.thesamet.scalapb.common-protos" %% "proto-google-common-protos-scalapb_1.0" % "1.17.0-0" % "protobuf"\n  "com.thesamet.scalapb.common-protos" %% "proto-google-common-protos-scalapb_1.0" % "1.17.0-0"\n)\n')),Object(n.b)("p",null,"The first one makes ",Object(n.b)("inlineCode",{parentName:"p"},"sbt-protoc")," unpack the protos from the jar and add them to the import search path so protoc can import them (Problem 1 above), and the second import adds the compiled Scala classes to your classpath (Problem 2 above). In this solution, protoc will not generate code for the third-party protos: the provided package already gives you compiled classes for the generated code."),Object(n.b)("h2",{id:"there-is-a-library-on-maven-with-the-protos-and-possibly-generated-java-code"},"There is a library on Maven with the protos (and possibly generated Java code)"),Object(n.b)("p",null,"Consider ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/scalapb/common-protos"}),"adding it to Common Protos"),". If this is not possible (for example, maybe the package is on a repository internal to your company), then you can have your SBT project download the library and build it by using the ",Object(n.b)("inlineCode",{parentName:"p"},"protobuf-src")," config. For example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'libraryDependencies += "com.somepackage" %% "with-protos" % "1.0" % "protobuf-src" intransitive()\n')),Object(n.b)("p",null,"This would make sbt-protoc download this JAR unpack it to ",Object(n.b)("inlineCode",{parentName:"p"},"target/protobuf_external_src"),", and make it both available for imports and generate code for it (which solves both problems above at once)."),Object(n.b)("p",null,"Without the ",Object(n.b)("inlineCode",{parentName:"p"},"intransitive()")," modifier, sbt-protoc would generate code for all the dependencies of this package, and this is generally undesirable - since this is likely to lead to duplicate classes being generated."),Object(n.b)("p",null,"If the given package has dependencies, you will need to manually add them. The dependencies should be added with ",Object(n.b)("inlineCode",{parentName:"p"},"protobuf-src")," scope if you want to build them too. If you already have compiled packages for these dependencies, add the package both with ",Object(n.b)("inlineCode",{parentName:"p"},"protobuf"),' and without like in the "common protos" example above.'),Object(n.b)("p",null,"It is recommended to create a separate SBT sub-project for the third-party protos. For example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),'lazy val externalProtos = (project in file("ext-protos"))\n  .settings(\n    libraryDependencies ++= Seq(\n      "com.thesamet.test" % "test-protos" % "0.1" % "protobuf-src" intransitive(),\n      "com.thesamet.scalapb" %% "scalapb-runtime" % scalapbVersion % "protobuf"\n    ),\n\n    PB.targets in Compile := Seq(\n      scalapb.gen() -> (sourceManaged in Compile).value\n    )\n  )\n\n// myProject contains its own protos which rely on protos from externalProtos\nlazy val myProject = (project in file("my-project"))\n  .dependsOn(externalProtos)\n  .settings(\n    PB.targets in Compile := Seq(\n      scalapb.gen() -> (sourceManaged in Compile).value\n    )\n  )\n')),Object(n.b)("p",null,"See ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/thesamet/sbt-protoc/tree/master/examples/multi-with-external-jar"}),"full example here"),"."))}l.isMDXComponent=!0}}]);