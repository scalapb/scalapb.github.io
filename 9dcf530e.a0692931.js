(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(118)),i={title:"SBT Settings"},l={unversionedId:"sbt-settings",id:"sbt-settings",isDocsHomePage:!1,title:"SBT Settings",description:"Basic Installation",source:"@site/../docs/target/mdoc/sbt-settings.md",slug:"/sbt-settings",permalink:"/docs/sbt-settings",version:"current",sidebar:"someSidebar",previous:{title:"Customizations",permalink:"/docs/customizations"},next:{title:"Generated Code",permalink:"/docs/generated-code"}},c=[{value:"Basic Installation",id:"basic-installation",children:[]},{value:"Defaults",id:"defaults",children:[]},{value:"Java Conversions",id:"java-conversions",children:[]},{value:"gRPC",id:"grpc",children:[]},{value:"Additional options to the generator",id:"additional-options-to-the-generator",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"basic-installation"},"Basic Installation"),Object(o.b)("p",null,"To automatically generate Scala case classes for your messages add ScalaPB's sbt plugin to your project. Create a file named ",Object(o.b)("inlineCode",{parentName:"p"},"project/plugins.sbt")," containing the following line (or add the following lines if a file with this name already exists):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'addSbtPlugin("com.thesamet" % "sbt-protoc" % "1.0.0")\n\nlibraryDependencies += "com.thesamet.scalapb" %% "compilerplugin" % "0.10.10"\n')),Object(o.b)("p",null,"Add the following line to your ",Object(o.b)("inlineCode",{parentName:"p"},"build.sbt"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'Compile / PB.targets := Seq(\n  scalapb.gen() -> (Compile / sourceManaged).value / "scalapb"\n)\n')),Object(o.b)("p",null,"Running the ",Object(o.b)("inlineCode",{parentName:"p"},"compile")," command in sbt will generate Scala sources from\nyour protos and compile them. If you just want to generate Scala sources for your protocol buffers without compiling them, run ",Object(o.b)("inlineCode",{parentName:"p"},"protoc-generate"),"."),Object(o.b)("p",null,"Additionally, if you need ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/customizations"}),"customizations")," from\nscalapb/scalapb.proto or anything from ",Object(o.b)("inlineCode",{parentName:"p"},"google/protobuf/*.proto"),", add the\nfollowing to your ",Object(o.b)("inlineCode",{parentName:"p"},"build.sbt"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'libraryDependencies += "com.thesamet.scalapb" %% "scalapb-runtime" % scalapb.compiler.Version.scalapbVersion % "protobuf"\n')),Object(o.b)("h2",{id:"defaults"},"Defaults"),Object(o.b)("p",null,"The plugin assumes your ",Object(o.b)("inlineCode",{parentName:"p"},"proto")," files are under ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/protobuf"),",\nhowever this is configurable using the ",Object(o.b)("inlineCode",{parentName:"p"},"Compile / PB.protoSources")," setting."),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"sbt-protoc")," invokes ",Object(o.b)("inlineCode",{parentName:"p"},"protoc")," 3.x that is shipped with ",Object(o.b)("inlineCode",{parentName:"p"},"protoc-jar"),".\nIf you would like to run a different version of ",Object(o.b)("inlineCode",{parentName:"p"},"protoc"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'PB.protocVersion := "-v3.11.4"\n')),Object(o.b)("p",null,"See all available options in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/thesamet/sbt-protoc"}),"sbt-protoc documentation")),Object(o.b)("h2",{id:"java-conversions"},"Java Conversions"),Object(o.b)("p",null,"To enable Java conversions add the following to your build.sbt:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"Compile / PB.targets := Seq(\n  PB.gens.java -> (Compile / sourceManaged).value,\n  scalapb.gen(javaConversions=true) -> (Compile / sourceManaged).value\n)\n")),Object(o.b)("h2",{id:"grpc"},"gRPC"),Object(o.b)("p",null,"Generating gRPC stubs for services is enabled by default. To disable:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"Compile / PB.targets := Seq(\n  scalapb.gen(grpc=false) -> (Compile / sourceManaged).value\n)\n")),Object(o.b)("h2",{id:"additional-options-to-the-generator"},"Additional options to the generator"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"scalapb.gen(\n  flatPackage: Boolean = false,\n  javaConversions: Boolean = false,\n  grpc: Boolean = true,\n  singleLineToProtoString: Boolean = false,\n  asciiFormatToString: Boolean = false,\n  lenses: Boolean = true,\n  retainSourceCodeInfo: Boolean = false\n)\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"scalapbc"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"flatPackage")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"flat_package")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When set, ScalaPB will not append the protofile base name to the package name.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"javaConversions")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"java_conversions")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generates in the companion object two functions, ",Object(o.b)("inlineCode",{parentName:"td"},"toJavaProto")," and ",Object(o.b)("inlineCode",{parentName:"td"},"fromJavaProto")," that convert between the Scala case class and the Java protobufs. For the generated code to compile, the Java protobuf code need to be also generated or available as a library dependency.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"grpc")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"grpc")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generates gRPC code for services. Default is ",Object(o.b)("inlineCode",{parentName:"td"},"true")," in ",Object(o.b)("inlineCode",{parentName:"td"},"scalapb.gen"),", and need to be explicitly specified in ",Object(o.b)("inlineCode",{parentName:"td"},"scalapbc"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"singleLineToProtoString")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"single_line_to_proto_string")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"By default, ScalaPB generates a ",Object(o.b)("inlineCode",{parentName:"td"},"toProtoString()")," method that renders the message as a multi-line format (using ",Object(o.b)("inlineCode",{parentName:"td"},"TextFormat.printToUnicodeString"),"). If set, ScalaPB generates ",Object(o.b)("inlineCode",{parentName:"td"},"toString()")," methods that use the single line format.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"asciiFormatToString")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"ascii_format_to_string")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Setting this to true, overrides ",Object(o.b)("inlineCode",{parentName:"td"},"toString")," to return a standard ASCII representation of the message by calling ",Object(o.b)("inlineCode",{parentName:"td"},"toProtoString"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"lenses")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"no_lenses")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"By default, ScalaPB generates lenses for each message for easy updating. If you are not using this feature and would like to reduce code size or compilation time, you can set this to ",Object(o.b)("inlineCode",{parentName:"td"},"false")," and lenses will not be generated.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"retainSourceCodeInfo")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"retain_source_code_info")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Retain source code information (locations, comments) provided by protoc in the descriptors. Use the ",Object(o.b)("inlineCode",{parentName:"td"},"location")," accessor to get that information from a descriptor.")))))}s.isMDXComponent=!0}}]);