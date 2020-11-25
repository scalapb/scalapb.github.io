(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var a=o.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},b=function(e){var a=p(e.components);return o.a.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(t),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return t?o.a.createElement(m,s(s({ref:a},l),{},{components:t})):o.a.createElement(m,s({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},57:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return p}));var n=t(2),o=t(6),r=(t(0),t(104)),i={title:"Frequently Asked Questions",sidebar_label:"FAQ",layout:"docs"},s={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:'IntelliJ complains on duplicate files ("class is already defined")',source:"@site/../docs/target/mdoc/faq.md",slug:"/faq",permalink:"/docs/faq",version:"current",sidebar_label:"FAQ",sidebar:"someSidebar",previous:{title:"Upgrade guide",permalink:"/docs/upgrading"},next:{title:"Contacting us",permalink:"/docs/contact"}},c=[{value:"IntelliJ complains on duplicate files (&quot;class is already defined&quot;)",id:"intellij-complains-on-duplicate-files-class-is-already-defined",children:[]},{value:"How do I use ScalaPB from the command line?",id:"how-do-i-use-scalapb-from-the-command-line",children:[]},{value:"How do I use ScalaPB with Maven?",id:"how-do-i-use-scalapb-with-maven",children:[]},{value:"How do I get grpc, java conversions, flat packages, etc with Maven?",id:"how-do-i-get-grpc-java-conversions-flat-packages-etc-with-maven",children:[]},{value:"I am getting &quot;Import was not found or had errors&quot;",id:"i-am-getting-import-was-not-found-or-had-errors",children:[]},{value:"How do I generate Scala code for protos from another jar?",id:"how-do-i-generate-scala-code-for-protos-from-another-jar",children:[]},{value:"Why message fields are wrapped in an <code>Option</code> in proto3?",id:"why-message-fields-are-wrapped-in-an-option-in-proto3",children:[]},{value:"How do I represent <code>Option[T]</code> in proto3 for scalar fields?",id:"how-do-i-represent-optiont-in-proto3-for-scalar-fields",children:[]},{value:"Why a certain customization is not available as a global generator parameter?",id:"why-a-certain-customization-is-not-available-as-a-global-generator-parameter",children:[]},{value:"How do I write my own Scala code generator for protocol buffers?",id:"how-do-i-write-my-own-scala-code-generator-for-protocol-buffers",children:[]},{value:"How do I mark a generated case class private?",id:"how-do-i-mark-a-generated-case-class-private",children:[]},{value:"How do I use ScalaPB with Gradle?",id:"how-do-i-use-scalapb-with-gradle",children:[]}],l={rightToc:c};function p(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"intellij-complains-on-duplicate-files-class-is-already-defined"},'IntelliJ complains on duplicate files ("class is already defined")'),Object(r.b)("p",null,"If you are using sbt-protoc this should not happen. Please file a bug."),Object(r.b)("p",null,"If you are still using sbt-scalapb, please switch to sbt-protoc as described\nin the installation instruction."),Object(r.b)("p",null,"sbt-protobuf which sbt-scalapb relies on defaults to generating the case\nclasses in ",Object(r.b)("inlineCode",{parentName:"p"},"target/src_managed/compiled_protobuf/"),".  This leads to a situation\nwhere both ",Object(r.b)("inlineCode",{parentName:"p"},"target/src_managed/compiled_protobuf/")," and its parent, ",Object(r.b)("inlineCode",{parentName:"p"},"target/src_managed/"),",\nare considered source directories and the source files are seen twice. To\neliminate this problem, let's tell sbt-protobuf to generate the sources into\nthe parent directory. Add this to your ",Object(r.b)("inlineCode",{parentName:"p"},"build.sbt"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"scalaSource in PB.protobufConfig := sourceManaged.value\n")),Object(r.b)("p",null,"If you generate Java sources, add,"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"javaSource in PB.protobufConfig := sourceManaged.value\n")),Object(r.b)("h2",{id:"how-do-i-use-scalapb-from-the-command-line"},"How do I use ScalaPB from the command line?"),Object(r.b)("p",null,"Check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/scalapbc"}),"ScalaPBC"),"."),Object(r.b)("h2",{id:"how-do-i-use-scalapb-with-maven"},"How do I use ScalaPB with Maven?"),Object(r.b)("p",null,"ScalaPB code generator can be invoked in your Maven build through the protobuf-maven-plugin. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thesamet/scalapb-maven-example"}),"example project"),"."),Object(r.b)("p",null,'The relevant parts are marked with "Add protobuf-maven-plugin..."'),Object(r.b)("h2",{id:"how-do-i-get-grpc-java-conversions-flat-packages-etc-with-maven"},"How do I get grpc, java conversions, flat packages, etc with Maven?"),Object(r.b)("p",null,"The example maven project invokes ScalaPBC. To get these ScalaPB features, you need to pass a\ngenerator parameter to ScalaPBC. See the supported generator parameters and how to use them in\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/scalapbc"}),"ScalaPBC")," documentation."),Object(r.b)("h2",{id:"i-am-getting-import-was-not-found-or-had-errors"},'I am getting "Import was not found or had errors"'),Object(r.b)("p",null,"If you are using sbt-protoc and importing protos like ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb/scalapb.proto"),",\nor common protocol buffers like ",Object(r.b)("inlineCode",{parentName:"p"},"google/protobuf/wrappers.proto"),":"),Object(r.b)("p",null,"Add the following to your ",Object(r.b)("inlineCode",{parentName:"p"},"build.sbt"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'libraryDependencies += "com.thesamet.scalapb" %% "scalapb-runtime" % scalapb.compiler.Version.scalapbVersion % "protobuf"\n')),Object(r.b)("p",null,"This tells ",Object(r.b)("inlineCode",{parentName:"p"},"sbt-protoc")," to extract protos from this jar (and all its\ndependencies, which includes Google's common protos), and make them available\nin the include path that is passed to protoc."),Object(r.b)("p",null,"If you are not using sbt (for example, spbc), then you need to make those\nfiles available on the file system."),Object(r.b)("h2",{id:"how-do-i-generate-scala-code-for-protos-from-another-jar"},"How do I generate Scala code for protos from another jar?"),Object(r.b)("p",null,"For some proto packages, we may already provide pre-compiled generated code in\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/common-protos"}),"ScalaPB's Common Protos project"),".\nIf what you are looking for is not there, consider adding it by following the\ninstructions on the project's page."),Object(r.b)("p",null,"To build it yourself using SBT: include the jar as a ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf")," dependency in your libraryDependencies:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'libraryDependencies += "com.somepackage" %% "that-has-jar" % "1.0" % "protobuf-src" transitive()\n')),Object(r.b)("p",null,"This will tell sbt-protoc to extract the protos from that jar into\n",Object(r.b)("inlineCode",{parentName:"p"},"target/scala-2.vv/protobuf_external_src")," and add them both to the import\nsearch path and the set of sources to generate code for (",Object(r.b)("inlineCode",{parentName:"p"},"PB.protoSources"),")."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"intransitive")," modifier makes it not unpack the dependencies of this\nlibrary to the same directory since you may not want to generate classes for them\nas well. Many common libraries depend on ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf-java"),", and generated\nclasses for them are already shipped with ScalaPB's ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb-runtime"),". When\nusing ",Object(r.b)("inlineCode",{parentName:"p"},"intransitive()"),", you should ensure all the dependencies are provided,\neither as ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf-src")," or ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf")," (depending if you want to compile them\nor just import them)."),Object(r.b)("p",null,"You may find other protos under ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf_external_src")," that you do not wish to\ncompile. You can exclude them by adding an ",Object(r.b)("inlineCode",{parentName:"p"},"includeFilter"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'includeFilter in PB.generate := new SimpleFileFilter(\n  (f: File) =>  f.getParent.endsWith("com/thesamet/protos"))\n')),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thesamet/sbt-protoc/tree/master/examples/multi-with-external-jar"}),"full example here"),"."),Object(r.b)("h2",{id:"why-message-fields-are-wrapped-in-an-option-in-proto3"},"Why message fields are wrapped in an ",Object(r.b)("inlineCode",{parentName:"h2"},"Option")," in proto3?"),Object(r.b)("p",null,"For a proto like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),'synax = "proto3";\n\nmessage A {}\n\nmessage B {\n    A a = 1;\n}\n')),Object(r.b)("p",null,"The generated case class for ",Object(r.b)("inlineCode",{parentName:"p"},"B")," will have a field ",Object(r.b)("inlineCode",{parentName:"p"},"a: Option[A]"),". The reason\nis that in the proto3 format, it is valid for an encoded message of ",Object(r.b)("inlineCode",{parentName:"p"},"B")," to not\ncontain a value for the field ",Object(r.b)("inlineCode",{parentName:"p"},"A"),". Using ",Object(r.b)("inlineCode",{parentName:"p"},"Option[A]")," lets us distinguish\nbetween the case where a value for ",Object(r.b)("inlineCode",{parentName:"p"},"A")," is not available and the case where ",Object(r.b)("inlineCode",{parentName:"p"},"A"),"\nis explictly given (even if it's the default instance). The two cases above\nhave two distinct binary representations when the message is serialized."),Object(r.b)("p",null,"You can set a certain message type or a field to not be wrapped in an ",Object(r.b)("inlineCode",{parentName:"p"},"Option"),"\nusing the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/customizations#message-level-custom-type-and-boxing"}),Object(r.b)("inlineCode",{parentName:"a"},"no_box")," option"),"."),Object(r.b)("h2",{id:"how-do-i-represent-optiont-in-proto3-for-scalar-fields"},"How do I represent ",Object(r.b)("inlineCode",{parentName:"h2"},"Option[T]")," in proto3 for scalar fields?"),Object(r.b)("p",null,"Scalar fields are the various numeric types, ",Object(r.b)("inlineCode",{parentName:"p"},"bool"),", ",Object(r.b)("inlineCode",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"byte")," and ",Object(r.b)("inlineCode",{parentName:"p"},"enum")," -\neverything except of messages. In the proto2 wire format, there is a distinction between\nnot setting a value (",Object(r.b)("inlineCode",{parentName:"p"},"None"),"), or setting it to its default value (",Object(r.b)("inlineCode",{parentName:"p"},"Some(0)")," or\n",Object(r.b)("inlineCode",{parentName:"p"},'Some("")'),")."),Object(r.b)("p",null,"In proto3, this distinction has been removed in the wire format. Whenever the value\nof a scalar type is zero, it does not get serialized. Therefore, the parser is not\nable to distinguish between ",Object(r.b)("inlineCode",{parentName:"p"},"Some(0)")," or ",Object(r.b)("inlineCode",{parentName:"p"},"None"),". The semantics is that a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/protocol-buffers/docs/proto3#default"}),"zero\nhas been received"),"."),Object(r.b)("p",null,"Optional message types are still wrapped in ",Object(r.b)("inlineCode",{parentName:"p"},"Option[]")," since there is a\ndistinction in the wire format between leaving out a message (which is\nrepresent by ",Object(r.b)("inlineCode",{parentName:"p"},"None")," or sending one, even if all its fields are unset (or\nassigned default values). If you wish to have ",Object(r.b)("inlineCode",{parentName:"p"},"Option[]")," around scalar\ntypes in proto3, you can use this fact to your advantage by using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/customizations#primitive-wrappers"}),"primitive wrappers")),Object(r.b)("h2",{id:"why-a-certain-customization-is-not-available-as-a-global-generator-parameter"},"Why a certain customization is not available as a global generator parameter?"),Object(r.b)("p",null,"It turns out that global generator parameters that affect source code compatibility are something that we would like to avoid, as it is creating issues that are tricky to resolve. For example, if:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"package A provides proto files and generate source code with one value of a generator parameter,"),Object(r.b)("li",{parentName:"ul"},"package B is compiled separately with a different value of this generator parameter, and imports protos from package A, as well as its generated classes.")),Object(r.b)("p",null,"then the code generator for B has no way of knowing that package A has code generated with a different parameter, and that it needs to account for that in the way it references it. This leads to compilation errors in ScalaPB or in user-provided code generators."),Object(r.b)("p",null,"In version 0.8.2, we introduced ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/customizations#package-scoped-options"}),"package-scoped options")," which let you set file-level options for an entire package at once."),Object(r.b)("h2",{id:"how-do-i-write-my-own-scala-code-generator-for-protocol-buffers"},"How do I write my own Scala code generator for protocol buffers?"),Object(r.b)("p",null,"Easy! Check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/scalapb-plugin-template.g8"}),"giter8 template for writing new code generators"),"."),Object(r.b)("h2",{id:"how-do-i-mark-a-generated-case-class-private"},"How do I mark a generated case class private?"),Object(r.b)("p",null,"Easy! See this example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),'syntax = "proto3";\nimport "scalapb/scalapb.proto";\n\nmessage MyPrivateMessage {\n    option (scalapb.message).annotations = "private[com.mypkg]";\n    option (scalapb.message).companion_annotations = "private[com.mypkg]";\n}\n')),Object(r.b)("h2",{id:"how-do-i-use-scalapb-with-gradle"},"How do I use ScalaPB with Gradle?"),Object(r.b)("p",null,"You can use ScalaPB with the official ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/google/protobuf-gradle-plugin"}),"Protobuf Plugin for Gradle"),"."),Object(r.b)("p",null,"In your ",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle")," the ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf")," section should look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-gradle"}),'ext {\n  scalapbVersion = \'0.10.9\'\n}\n\ndependencies {\n  compile "com.thesamet.scalapb:scalapb-runtime_2.12:${scalapbVersion}"\n}\n\nprotobuf {\n  protoc {\n    artifact = \'com.google.protobuf:protoc:3.11.4\'\n  }\n  plugins {\n    scalapb {\n      artifact = (org.gradle.nativeplatform.platform.internal.DefaultNativePlatform.getCurrentOperatingSystem().isWindows()) ?\n          "com.thesamet.scalapb:protoc-gen-scala:${scalapbVersion}:windows@bat" :\n          "com.thesamet.scalapb:protoc-gen-scala:${scalapbVersion}:unix@sh"\n    }\n  }\n\n  generateProtoTasks {\n    all().each { task ->\n      task.builtins {\n          // if you don\'t want java code to be generated.\n          remove java\n      }\n      task.plugins {\n          scalapb {\n            // add any ScalaPB generator options here. See: https://scalapb.github.io/scalapbc.html#passing-generator-parameters\n            // option \'flat_package\'\n          }\n      }\n    }\n  }\n}\n\n// Add geneated Scala code as a source directory\nsourceSets {\n  main {\n    scala {\n        srcDirs "${protobuf.generatedFilesBaseDir}/main/scalapb"\n    }\n  }\n}\n')),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/gradle-demo"}),"full example here"),"."))}p.isMDXComponent=!0}}]);