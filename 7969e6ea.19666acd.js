(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{102:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),s=function(e){var a=o.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},b=function(e){var a=s(e.components);return o.a.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},d=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=s(t),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||r;return t?o.a.createElement(m,l(l({ref:a},i),{},{components:t})):o.a.createElement(m,l({ref:a},i))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<r;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return s}));var n=t(2),o=t(6),r=(t(0),t(102)),c={title:"ScalaPBC: ScalaPB's standalone compiler",sidebar_label:"ScalaPBC"},l={unversionedId:"scalapbc",id:"scalapbc",isDocsHomePage:!1,title:"ScalaPBC: ScalaPB's standalone compiler",description:"ScalaPBC is a tool that lets you generate Scala sources from the command line (or from a maven build).",source:"@site/../docs/target/mdoc/scalapbc.md",slug:"/scalapbc",permalink:"/docs/scalapbc",version:"current",sidebar_label:"ScalaPBC",sidebar:"someSidebar",previous:{title:"ScalaPB and JSON",permalink:"/docs/json"},next:{title:"Using third-party protos",permalink:"/docs/third-party-protos"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Passing generator parameters",id:"passing-generator-parameters",children:[]},{value:"Loading additional generators from Maven",id:"loading-additional-generators-from-maven",children:[]},{value:"Using ScalaPB as a proper protoc plugin",id:"using-scalapb-as-a-proper-protoc-plugin",children:[]}],i={rightToc:p};function s(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"ScalaPBC is a tool that lets you generate Scala sources from the command line (or from a maven build)."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"You can download the current release here: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/ScalaPB/releases/download/v0.10.8/scalapbc-0.10.8.zip"}),"scalapbc-0.10.8.zip"),"."),Object(r.b)("p",null,"Older versions can be found in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/ScalaPB/releases"}),"releases page"),"."),Object(r.b)("p",null,"Unzip the file, and inside you will find two scripts: ",Object(r.b)("inlineCode",{parentName:"p"},"bin/scalapbc")," (and\n",Object(r.b)("inlineCode",{parentName:"p"},"bin/scalapbc.bat"),") that can be used on Unix/Linux/Mac OS X (and Windows,\nrespectively)."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"ScalaPBC is used exactly like protoc. In fact, scalapbc calls protoc.\nIt ships with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/os72/protoc-jar"}),"multiple versions")," of protoc embedded in the jar and you can pick the one you want to use by passing the desired version as the\nfirst command line argument:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./bin/scalapbc -v3.11.1 [options]\n")),Object(r.b)("p",null,"To generate Scala code, invoke ScalaPBC like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./bin/scalapbc -v3.5.1 --scala_out=some/output/directory myproto.proto\n")),Object(r.b)("p",null,"To generate both Scala code and Java code along with Java conversions:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./bin/scalapbc -v3.5.1 \\\n    --scala_out=java_conversions:some/output/directory \\\n    --java_out=some/output/directory \\\n    myproto.proto\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The generated code depends on ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb-runtime")," to compile. You will To get the code to work, add a dependency on ","[https://mvnrepository.com/artifact/com.thesamet.scalapb/scalapb-runtime]"," to your project. The version of ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb-runtime")," needs to match or be newer than the version of the plugin.")),Object(r.b)("h2",{id:"passing-generator-parameters"},"Passing generator parameters"),Object(r.b)("p",null,"If you would like to pass additional options, like ",Object(r.b)("inlineCode",{parentName:"p"},"java_conversions"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"flat_package"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"single_line_to_proto_string"),", it can be done like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"bin/scalapbc my.proto --scala_out=OPT1,OPT2:path/to/output/dir/\n")),Object(r.b)("p",null,"where OPT1,OPT2 is a comma-separated list of options, followed by a colon\n(",Object(r.b)("inlineCode",{parentName:"p"},":"),") and then the output directory. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"bin/scalapbc my.proto --scala_out=flat_package,java_conversions:protos/src/scala/main/\n")),Object(r.b)("p",null,"The supported parameters are: ",Object(r.b)("inlineCode",{parentName:"p"},"flat_package"),", ",Object(r.b)("inlineCode",{parentName:"p"},"java_conversions"),", ",Object(r.b)("inlineCode",{parentName:"p"},"grpc")," and ",Object(r.b)("inlineCode",{parentName:"p"},"single_line_to_proto_string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"no_lenses"),", ",Object(r.b)("inlineCode",{parentName:"p"},"retain_source_code_info"),"."),Object(r.b)("p",null,"Those parameters are described in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sbt-settings#additional-options-to-the-generator"}),"SBT settings")),Object(r.b)("h2",{id:"loading-additional-generators-from-maven"},"Loading additional generators from Maven"),Object(r.b)("p",null,"ScalaPBC (starting version 0.10.1) can fetch generators from Maven using\nCoursier:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"bin/scalapbc --plugin-artifact=io.grpc:protoc-gen-grpc-java:1.27.2:default,classifier=linux-x86_64,ext=exe,type=jar -- e2e/src/main/protobuf/service.proto --grpc-java_out=/tmp/out -Ie2e/src/main/protobuf -Ithird_party -Iprotobuf\n")),Object(r.b)("p",null,"If you use zio-grpc, you can use the following command to generate services\nthat use ZIO. This also generates ScalaPB case classes for messages and the\nGRPC descriptors that the generated ZIO code depends on."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"bin/scalapbc --plugin-artifact=com.thesamet.scalapb.zio-grpc:protoc-gen-zio:0.1.0:default,classifier=unix,ext=sh,type=jar -- e2e/src/main/protobuf/service.proto --zio_out=/tmp/out --scala_out=grpc:/tmp/out -Ie2e/src/main/protobuf -Ithird_party -Iprotobuf\n")),Object(r.b)("p",null,"bin/scalapbc --plugin-artifact=io.grpc:grpc-java:"),Object(r.b)("h2",{id:"using-scalapb-as-a-proper-protoc-plugin"},"Using ScalaPB as a proper protoc plugin"),Object(r.b)("p",null,"You may want to use ScalaPB code generator as a standard protoc plugin (rather\nthan using scalapbc as a wrapper or through SBT)."),Object(r.b)("p",null,"For Linux and Mac OS X, you can download a native executable version of the plugin for Scala from our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/ScalaPB/releases"}),"release page"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For Linux: ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/scalapb/ScalaPB/releases/download/v0.10.8/protoc-gen-scala-0.10.8-linux-x86_64.zip"}),"protoc-gen-scala-0.10.8-linux-x86_64.zip")),Object(r.b)("li",{parentName:"ul"},"For OS X: ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/scalapb/ScalaPB/releases/download/v0.10.8/protoc-gen-scala-0.10.8-osx-x86_64.zip"}),"protoc-gen-scala-0.10.8-osx-x86_64.zip"))),Object(r.b)("p",null,"Those zip files contain native executables of the plugin for the respective operating system built using GraalVM. If you are using another operating system (such as Windows), or prefer to use a JVM based plugin implementation, you will find in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/ScalaPB/releases/download/v0.10.8/scalapbc-0.10.8.zip"}),"scalapbc-0.10.8.zip")," an executable named ",Object(r.b)("inlineCode",{parentName:"p"},"bin/protoc-gen-scala")," which requires a JVM to run (a JVM needs to be available on the path, or through the ",Object(r.b)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable)"),Object(r.b)("p",null,"To generate code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"protoc my.protos --plugin=/path/to/bin/protoc-gen-scala --scala_out=scala\n")),Object(r.b)("p",null,"On Windows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"protoc my.protos --plugin=protoc-gen-scala=/path/to/bin/protoc-gen-scala.bat --scala_out=scala\n")),Object(r.b)("p",null,"For passing parameters to the plugin, see the section above."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note that the standalone plugin provided in ",Object(r.b)("inlineCode",{parentName:"p"},"scalapbc")," needs to be able to find a JVM in the path or through ",Object(r.b)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable. If you encounter unexpected errors, try to execute the plugin directly from the command line, and the output printed may be useful for further debugging.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The generated code depends on ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb-runtime")," to compile. To get the code to work, add a dependency on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://mvnrepository.com/artifact/com.thesamet.scalapb/scalapb-runtime"}),"scalapb-runtime")," to your project. The version of ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb-runtime")," needs to match or be newer than the version of the plugin.")))}s.isMDXComponent=!0}}]);