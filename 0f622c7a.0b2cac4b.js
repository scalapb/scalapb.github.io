(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=o,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||r;return a?n.a.createElement(m,c(c({ref:t},p),{},{components:a})):n.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var o=a(3),n=a(7),r=(a(0),a(119)),i={title:"Frequently Asked Questions",sidebar_label:"FAQ",layout:"docs"},c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"How do I use ScalaPB from the command line?",source:"@site/../docs/target/mdoc/faq.md",slug:"/faq",permalink:"/docs/faq",version:"current",sidebar_label:"FAQ",sidebar:"someSidebar",previous:{title:"Upgrade guide",permalink:"/docs/upgrading"},next:{title:"Contacting us",permalink:"/docs/contact"}},s=[{value:"How do I use ScalaPB from the command line?",id:"how-do-i-use-scalapb-from-the-command-line",children:[]},{value:"How do I use ScalaPB with Maven?",id:"how-do-i-use-scalapb-with-maven",children:[]},{value:"How do I get grpc, java conversions, flat packages, etc with Maven?",id:"how-do-i-get-grpc-java-conversions-flat-packages-etc-with-maven",children:[]},{value:"I am getting &quot;Import was not found or had errors&quot;",id:"i-am-getting-import-was-not-found-or-had-errors",children:[]},{value:"How do I generate Scala code for protos from another jar?",id:"how-do-i-generate-scala-code-for-protos-from-another-jar",children:[]},{value:"Why message fields are wrapped in an <code>Option</code> in proto3?",id:"why-message-fields-are-wrapped-in-an-option-in-proto3",children:[]},{value:"How do I represent <code>Option[T]</code> in proto3 for scalar fields?",id:"how-do-i-represent-optiont-in-proto3-for-scalar-fields",children:[]},{value:"Why a certain customization is not available as a global generator parameter?",id:"why-a-certain-customization-is-not-available-as-a-global-generator-parameter",children:[]},{value:"How do I write my own Scala code generator for protocol buffers?",id:"how-do-i-write-my-own-scala-code-generator-for-protocol-buffers",children:[]},{value:"How do I mark a generated case class private?",id:"how-do-i-mark-a-generated-case-class-private",children:[]},{value:"How do I define custom field scope?",id:"how-do-i-define-custom-field-scope",children:[]},{value:"How do I customize third-party types?",id:"how-do-i-customize-third-party-types",children:[]},{value:"Using Spark, I am getting <code>No encoder found for ...</code> or <code>Unable to find encoder for type</code>",id:"using-spark-i-am-getting-no-encoder-found-for--or-unable-to-find-encoder-for-type",children:[]},{value:"How do I use ScalaPB with Gradle?",id:"how-do-i-use-scalapb-with-gradle",children:[]}],p={toc:s};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"how-do-i-use-scalapb-from-the-command-line"},"How do I use ScalaPB from the command line?"),Object(r.b)("p",null,"Check out ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/scalapbc"}),"ScalaPBC"),"."),Object(r.b)("h2",{id:"how-do-i-use-scalapb-with-maven"},"How do I use ScalaPB with Maven?"),Object(r.b)("p",null,"ScalaPB code generator can be invoked in your Maven build through the protobuf-maven-plugin. See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/thesamet/scalapb-maven-example"}),"example project"),"."),Object(r.b)("p",null,'The relevant parts are marked with "Add protobuf-maven-plugin..."'),Object(r.b)("h2",{id:"how-do-i-get-grpc-java-conversions-flat-packages-etc-with-maven"},"How do I get grpc, java conversions, flat packages, etc with Maven?"),Object(r.b)("p",null,"The example maven project invokes ScalaPBC. To get these ScalaPB features, you need to pass a\ngenerator parameter to ScalaPBC. See the supported generator parameters and how to use them in\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/scalapbc"}),"ScalaPBC")," documentation."),Object(r.b)("h2",{id:"i-am-getting-import-was-not-found-or-had-errors"},'I am getting "Import was not found or had errors"'),Object(r.b)("p",null,"If you are using sbt-protoc and importing protos like ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb/scalapb.proto"),",\nor common protocol buffers like ",Object(r.b)("inlineCode",{parentName:"p"},"google/protobuf/wrappers.proto"),":"),Object(r.b)("p",null,"Add the following to your ",Object(r.b)("inlineCode",{parentName:"p"},"build.sbt"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'libraryDependencies += "com.thesamet.scalapb" %% "scalapb-runtime" % scalapb.compiler.Version.scalapbVersion % "protobuf"\n')),Object(r.b)("p",null,"This tells ",Object(r.b)("inlineCode",{parentName:"p"},"sbt-protoc")," to extract protos from this jar (and all its\ndependencies, which includes Google's common protos), and make them available\nin the include path that is passed to protoc."),Object(r.b)("p",null,"If you are not using sbt (for example, spbc), then you need to make those\nfiles available on the file system."),Object(r.b)("h2",{id:"how-do-i-generate-scala-code-for-protos-from-another-jar"},"How do I generate Scala code for protos from another jar?"),Object(r.b)("p",null,"For some proto packages, we may already provide pre-compiled generated code in\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/scalapb/common-protos"}),"ScalaPB's Common Protos project"),".\nIf what you are looking for is not there, consider adding it by following the\ninstructions on the project's page."),Object(r.b)("p",null,"To build it yourself using SBT: include the jar as a ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf")," dependency in your libraryDependencies:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-scala"}),'libraryDependencies += "com.somepackage" %% "that-has-jar" % "1.0" % "protobuf-src" intransitive()\n')),Object(r.b)("p",null,"This will tell sbt-protoc to extract the protos from that jar into\n",Object(r.b)("inlineCode",{parentName:"p"},"target/scala-2.vv/protobuf_external_src")," and add them both to the import\nsearch path and the set of sources to generate code for (",Object(r.b)("inlineCode",{parentName:"p"},"PB.protoSources"),")."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"intransitive")," modifier makes it not unpack the dependencies of this\nlibrary to the same directory since you may not want to generate classes for them\nas well. Many common libraries depend on ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf-java"),", and generated\nclasses for them are already shipped with ScalaPB's ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb-runtime"),". When\nusing ",Object(r.b)("inlineCode",{parentName:"p"},"intransitive()"),", you should ensure all the dependencies are provided,\neither as ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf-src")," or ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf")," (depending if you want to compile them\nor just import them)."),Object(r.b)("p",null,"You may find other protos under ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf_external_src")," that you do not wish to\ncompile. You can exclude them by adding an ",Object(r.b)("inlineCode",{parentName:"p"},"includeFilter"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'includeFilter in PB.generate := new SimpleFileFilter(\n  (f: File) =>  f.getParent.endsWith("com/thesamet/protos"))\n')),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/thesamet/sbt-protoc/tree/master/examples/multi-with-external-jar"}),"full example here"),"."),Object(r.b)("h2",{id:"why-message-fields-are-wrapped-in-an-option-in-proto3"},"Why message fields are wrapped in an ",Object(r.b)("inlineCode",{parentName:"h2"},"Option")," in proto3?"),Object(r.b)("p",null,"For a proto like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-protobuf"}),'synax = "proto3";\n\nmessage A {}\n\nmessage B {\n    A a = 1;\n}\n')),Object(r.b)("p",null,"The generated case class for ",Object(r.b)("inlineCode",{parentName:"p"},"B")," will have a field ",Object(r.b)("inlineCode",{parentName:"p"},"a: Option[A]"),". The reason\nis that in the proto3 format, it is valid for an encoded message of type ",Object(r.b)("inlineCode",{parentName:"p"},"B")," to not\ncontain a value for the field ",Object(r.b)("inlineCode",{parentName:"p"},"a"),". Using the ",Object(r.b)("inlineCode",{parentName:"p"},"Option[A]")," type lets us distinguish\nbetween the case where a value for ",Object(r.b)("inlineCode",{parentName:"p"},"A")," was not provided and the case where ",Object(r.b)("inlineCode",{parentName:"p"},"A"),"\nwas explictly set to a certain value (even if that value is the default value\nfor ",Object(r.b)("inlineCode",{parentName:"p"},"A"),"). The case where ",Object(r.b)("inlineCode",{parentName:"p"},"a")," is not set, and the case that ",Object(r.b)("inlineCode",{parentName:"p"},"A")," is set to its\ndefault value have two distinct binary representations (in both proto2 and\nproto3)."),Object(r.b)("p",null,"You can set a certain message type or a field to not be wrapped in an ",Object(r.b)("inlineCode",{parentName:"p"},"Option"),"\nusing the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/customizations#message-level-custom-type-and-boxing"}),Object(r.b)("inlineCode",{parentName:"a"},"no_box")," option"),"."),Object(r.b)("h2",{id:"how-do-i-represent-optiont-in-proto3-for-scalar-fields"},"How do I represent ",Object(r.b)("inlineCode",{parentName:"h2"},"Option[T]")," in proto3 for scalar fields?"),Object(r.b)("p",null,"Scalar fields are the various numeric types, ",Object(r.b)("inlineCode",{parentName:"p"},"bool"),", ",Object(r.b)("inlineCode",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"byte")," and ",Object(r.b)("inlineCode",{parentName:"p"},"enum")," -\neverything except of messages. In the proto2 wire format, there is a distinction between\nnot setting a value (",Object(r.b)("inlineCode",{parentName:"p"},"None"),"), or setting it to its default value (",Object(r.b)("inlineCode",{parentName:"p"},"Some(0)")," or\n",Object(r.b)("inlineCode",{parentName:"p"},'Some("")'),")."),Object(r.b)("p",null,"In proto3, this distinction has been removed in the wire format. Whenever the value\nof a scalar type is zero, it does not get serialized. Therefore, the parser is not\nable to distinguish between ",Object(r.b)("inlineCode",{parentName:"p"},"Some(0)")," or ",Object(r.b)("inlineCode",{parentName:"p"},"None"),". The semantics is that a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/protocol-buffers/docs/proto3#default"}),"zero\nhas been received"),"."),Object(r.b)("p",null,"Optional message types are still wrapped in ",Object(r.b)("inlineCode",{parentName:"p"},"Option[]")," since there is a\ndistinction in the wire format between leaving out a message (which is\nrepresent by ",Object(r.b)("inlineCode",{parentName:"p"},"None")," or sending one, even if all its fields are unset (or\nassigned default values). If you wish to have ",Object(r.b)("inlineCode",{parentName:"p"},"Option[]")," around scalar\ntypes in proto3, you can use this fact to your advantage by using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/customizations#primitive-wrappers"}),"primitive wrappers")),Object(r.b)("h2",{id:"why-a-certain-customization-is-not-available-as-a-global-generator-parameter"},"Why a certain customization is not available as a global generator parameter?"),Object(r.b)("p",null,"It turns out that global generator parameters that affect source code compatibility are something that we would like to avoid, as it is creating issues that are tricky to resolve. For example, if:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"package A provides proto files and generate source code with one value of a generator parameter,"),Object(r.b)("li",{parentName:"ul"},"package B is compiled separately with a different value of this generator parameter, and imports protos from package A, as well as its generated classes.")),Object(r.b)("p",null,"then the code generator for B has no way of knowing that package A has code generated with a different parameter, and that it needs to account for that in the way it references it. This leads to compilation errors in ScalaPB or in user-provided code generators."),Object(r.b)("p",null,"In version 0.8.2, we introduced ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/customizations#package-scoped-options"}),"package-scoped options")," which let you set file-level options for an entire package at once."),Object(r.b)("h2",{id:"how-do-i-write-my-own-scala-code-generator-for-protocol-buffers"},"How do I write my own Scala code generator for protocol buffers?"),Object(r.b)("p",null,"Easy! Check out ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/scalapb/scalapb-plugin-template.g8"}),"giter8 template for writing new code generators"),"."),Object(r.b)("h2",{id:"how-do-i-mark-a-generated-case-class-private"},"How do I mark a generated case class private?"),Object(r.b)("p",null,"Easy! See this example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-protobuf"}),'syntax = "proto3";\nimport "scalapb/scalapb.proto";\n\nmessage MyPrivateMessage {\n    option (scalapb.message).annotations = "private[com.mypkg]";\n    option (scalapb.message).companion_annotations = "private[com.mypkg]";\n}\n')),Object(r.b)("h2",{id:"how-do-i-define-custom-field-scope"},"How do I define custom field scope?"),Object(r.b)("p",null,"Easy! See this example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-protobuf"}),"syntax = \"proto3\";\nimport \"scalapb/scalapb.proto\";\n\nmessage MyMessage {\n  string privateField        = 1 [(scalapb.field).annotations = 'private val'];\n  string protectedField      = 2 [(scalapb.field).annotations = 'protected val'];\n  string packagePrivateField = 3 [(scalapb.field).annotations = 'private[proto] val'];\n}\n")),Object(r.b)("p",null,"Generated code would be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-scala"}),'final case class MyMessage(\n    private val privateField: String = "",\n    protected val protectedField: String = "",\n    private[proto] val packagePrivateField: String = ""\n) extends ...\n')),Object(r.b)("h2",{id:"how-do-i-customize-third-party-types"},"How do I customize third-party types?"),Object(r.b)("p",null,"You can use field-transformations to match on third-party types and apply arbitrary field-level options. See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/transformations#example-customizing-third-party-types"}),"example here"),"."),Object(r.b)("h2",{id:"using-spark-i-am-getting-no-encoder-found-for--or-unable-to-find-encoder-for-type"},"Using Spark, I am getting ",Object(r.b)("inlineCode",{parentName:"h2"},"No encoder found for ...")," or ",Object(r.b)("inlineCode",{parentName:"h2"},"Unable to find encoder for type")),Object(r.b)("p",null,"When using ScalaPB case classes with Spark datasets or dataframes,\nyou need to be using sparksql-scalapb:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Make sure the version of ScalaPB, sparksql-scalapb and ScalaPB match according to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/sparksql#setting-up-your-project"}),"this table"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the scope where the exception occurs, make sure you import ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb.spark.Implicits._"),". ",Object(r.b)("strong",{parentName:"p"},"Do not import ",Object(r.b)("inlineCode",{parentName:"strong"},"spark.implicits._")),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you use an interactive notebook such as Databricks or spark-shell, there is a default import of ",Object(r.b)("inlineCode",{parentName:"p"},"spark.implicits._")," that is executed prior to your own code. There is currently no way to disable this behavior. The workaround is to manually pass the encoder\nexplicitly in the locations where an encoder is not found, for example:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-scala"}),"import scalapb.spark.Implicits.typedEncoderToEncoder\n\ndf.as[MyMessageType](typedEncoderToEncoder[MyMessageType])\n\nspark.createDataset(myList, typedEncoderToEncoder[MyMessageType])\n")))),Object(r.b)("p",null,"This error is very common for newcomers to ScalaPB and Spark. If the guidance above did not resolve your issue and you would like to get support over Gitter, Github or Stackoverflow, please clearly indicate that you have read this FAQ, and provide the protos and code that triggers the exception, including the relevant imports in scope. Ideally, provide a reproducible example. The easiest way to do it is to fork ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/thesamet/sparksql-scalapb-test"}),"this repo"),", adjust so it reproduces the issue you have and provide a link to your fork in your problem report."),Object(r.b)("h2",{id:"how-do-i-use-scalapb-with-gradle"},"How do I use ScalaPB with Gradle?"),Object(r.b)("p",null,"You can use ScalaPB with the official ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/google/protobuf-gradle-plugin"}),"Protobuf Plugin for Gradle"),"."),Object(r.b)("p",null,"In your ",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle")," the ",Object(r.b)("inlineCode",{parentName:"p"},"protobuf")," section should look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-gradle"}),'ext {\n  scalapbVersion = \'0.11.1\'\n}\n\ndependencies {\n  compile "com.thesamet.scalapb:scalapb-runtime_2.12:${scalapbVersion}"\n}\n\nprotobuf {\n  protoc {\n    artifact = \'com.google.protobuf:protoc:3.15.6\'\n  }\n  plugins {\n    scalapb {\n      artifact = (org.gradle.nativeplatform.platform.internal.DefaultNativePlatform.getCurrentOperatingSystem().isWindows()) ?\n          "com.thesamet.scalapb:protoc-gen-scala:${scalapbVersion}:windows@bat" :\n          "com.thesamet.scalapb:protoc-gen-scala:${scalapbVersion}:unix@sh"\n    }\n  }\n\n  generateProtoTasks {\n    all().each { task ->\n      task.builtins {\n          // if you don\'t want java code to be generated.\n          remove java\n      }\n      task.plugins {\n          scalapb {\n            // add any ScalaPB generator options here. See: https://scalapb.github.io/scalapbc.html#passing-generator-parameters\n            // option \'flat_package\'\n          }\n      }\n    }\n  }\n}\n\n// Add geneated Scala code as a source directory\nsourceSets {\n  main {\n    scala {\n        srcDirs "${protobuf.generatedFilesBaseDir}/main/scalapb"\n    }\n  }\n}\n')),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/scalapb/gradle-demo"}),"full example here"),"."))}l.isMDXComponent=!0}}]);