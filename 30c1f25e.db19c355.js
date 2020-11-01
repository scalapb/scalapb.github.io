(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(103)),i={title:"Writing protoc plugins in Scala",sidebar_label:"Writing protoc plugins",layout:"docs"},s={unversionedId:"writing-plugins",id:"writing-plugins",isDocsHomePage:!1,title:"Writing protoc plugins in Scala",description:"This guide will show you how to write Protoc Plugins in Scala so you can write your own custom code generators for protocol buffers.",source:"@site/../docs/target/mdoc/writing-plugins.md",slug:"/writing-plugins",permalink:"/docs/writing-plugins",version:"current",sidebar_label:"Writing protoc plugins",sidebar:"someSidebar",previous:{title:"Writing generic code",permalink:"/docs/generic"},next:{title:"Upgrade guide",permalink:"/docs/upgrading"}},c=[{value:"Introduction: What is a protoc plugin?",id:"introduction-what-is-a-protoc-plugin",children:[]},{value:"When to write a protoc plugin?",id:"when-to-write-a-protoc-plugin",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Look around",id:"look-around",children:[]},{value:"Running the tests",id:"running-the-tests",children:[]},{value:"Understanding the code generator",id:"understanding-the-code-generator",children:[]},{value:"Changing the generated code",id:"changing-the-generated-code",children:[]},{value:"Adding custom options",id:"adding-custom-options",children:[]},{value:"Publishing the plugin",id:"publishing-the-plugin",children:[]},{value:"Summary",id:"summary",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide will show you how to write Protoc Plugins in Scala so you can write your own custom code generators for protocol buffers."),Object(r.b)("h2",{id:"introduction-what-is-a-protoc-plugin"},"Introduction: What is a protoc plugin?"),Object(r.b)("p",null,"A protoc plugin is a program that gets invoked by protoc (the protobuf compiler) and generates output files based on a set of input protocol buffers. The plugins are programs that read a ",Object(r.b)("inlineCode",{parentName:"p"},"CodeGeneratorRequest")," via their standard input and write a ",Object(r.b)("inlineCode",{parentName:"p"},"CodeGeneratorResponse")," to their standard output."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CodeGeneratorRequest")," is a protobuf that describes the protocol buffers being compiled, along with all their transitive imports. ",Object(r.b)("inlineCode",{parentName:"p"},"CodeGeneratorResponse")," is a protobuf that contains a list of output filenames along with their content to be written to the file system by protoc. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/compiler/plugin.proto"}),"plugin.proto")," for the definitions of these messages."),Object(r.b)("h2",{id:"when-to-write-a-protoc-plugin"},"When to write a protoc plugin?"),Object(r.b)("p",null,"Generally, write a protoc plugin whenever you want to generate code that corresponds to the structure of protobufs. For example, ScalaPB\u2019s code protoc plugin generates case classes for each protobuf message. The protoc plugins shipped with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.akka.io/docs/akka-grpc/current/"}),"akka-grpc"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/fiadliel/fs2-grpc"}),"fs2-grpc")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://scalapb.github.io/zio-grpc/"}),"zio-grpc")," generate Scala traits with methods that correspond to protobuf service methods."),Object(r.b)("p",null,"Plugins can also be used to generate code that validates messages (see  ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/scalapb/scalapb-validate"}),"scalapb-validate"),"), or convert protobufs to a different format."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Some use cases don\u2019t require a plugin.")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Using Descriptors you can inspect the structure of protocol buffers at runtime, extract values of arbitrary fields from message instances and even create new instances of messages. You can look into the source of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/scalapb/scalapb-json4s/blob/master/src/main/scala/scalapb/json4s/JsonFormat.scala"}),"scalapb-json4s")," to see how conversion to and from JSON can be done without code generation. In contrast, the RPC libraries mentioned above create traits with methods that correspond to methods in the proto which would be impossible to accomplish at runtime (at least, in a statically typed manner)."))),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"As plugins are just programs that read a ",Object(r.b)("inlineCode",{parentName:"p"},"CodeGeneratorRequest")," and write a ",Object(r.b)("inlineCode",{parentName:"p"},"CodeGeneratorResponse"),", they are fairly simple to code. However, as you start going, you will want:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Rapidly test changes")," in the generator over a sample protobuf, so you don't have to manually publish the plugin each time you want to try the generated code."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Access ScalaPB's ",Object(r.b)("inlineCode",{parentName:"strong"},"DescriptorImplicits"))," which give you access to the Scala types and names used by ScalaPB for the different protobuf entities. So your code doesn\u2019t have to guess."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Publish your plugin")," in different formats for users of SBT and for users of other build tools (CLI, maven, etc)")),Object(r.b)("p",null,"To let you do all of the above, and to get you off to a great start with a streamlined development setup that uses the current best practices, we have prepared a project template. To create your plugin:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open a terminal and change to your development directory. The project will be generated into a subdirectory of this directory.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create your project:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sbt new scalapb/protoc-gen-template.g8\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The template will prompt you for the name of your plugin and what package name to use. The answers for those questions will be used extensively in the generated project."))),Object(r.b)("h2",{id:"look-around"},"Look around"),Object(r.b)("p",null,"The project that is generated is an sbt multiproject with the following directory structure:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"code-gen"),": the actual code generator."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"core"),": is an optional Scala library that the generated code can depend on. For example, if you find that the generator code is producing a large block of code, you might want to move it to this library, and call it from there."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"e2e"),": an integration test for your plugin. The ",Object(r.b)("inlineCode",{parentName:"li"},"e2e")," project contains a test protobuf in ",Object(r.b)("inlineCode",{parentName:"li"},"src/main/protobuf"),", and you should add some more based on what needs to be tested for your plugin. The project also has an munit test suite to exercise the generated code. Each time you run the tests, the code generator will be recompiled, and code for the protobufs will be regenerated and compiled. This flow results in very productive edit-test iterations.")),Object(r.b)("p",null,"Now, start ",Object(r.b)("inlineCode",{parentName:"p"},"sbt")," and type ",Object(r.b)("inlineCode",{parentName:"p"},"projects"),". You will something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[info] In file:/tmp/my-cool-plugin/\n[info]     codeGenJVM2_12\n[info]     codeGenJVM2_13\n[info]     coreJVM2_12\n[info]     coreJVM2_13\n[info]     e2eJVM2_12\n[info]     e2eJVM2_13\n[info]     protoc-gen-my-cool-plugin\n[info]     protoc-gen-my-cool-plugin-unix\n[info]     protoc-gen-my-cool-plugin-windows\n[info]   * root\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You might wonder why we have different synthetic sub-projects for different versions of Scala. We are using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sbt/sbt-projectmatrix"}),"sbt-projectmatrix")," here, instead of SBT\u2019s built-in cross-version support to facilitate the use of the code generator by e2e. The root cause is that SBT itself is built in Scala 2.12.  When you run the e2e tests for Scala 2.13, we want to be able to compile and execute the Scala 2.12 version of the code generator so it can load quickly into the same JVM used by SBT. This is not currently possible with SBT ",Object(r.b)("inlineCode",{parentName:"p"},"crossScalaVersions"),"."))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"protoc-gen-*")," projects are used for publishing artifcats and will be described in a later section."),Object(r.b)("h2",{id:"running-the-tests"},"Running the tests"),Object(r.b)("p",null,"To run the end-to-end tests for Scala 2.12 and Scala 2.13, inside SBT type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"e2eJVM2_12/test\n")),Object(r.b)("p",null,"and"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"e2eJVM2_13/test\n")),Object(r.b)("p",null,"This will compile the code generator (for Scala 2.12 in both cases), generate the code for the protos in ",Object(r.b)("inlineCode",{parentName:"p"},"e2e/src/main/protobuf"),", compile and run the tests in e2e for the corresponding Scala version."),Object(r.b)("p",null,"Now, find the generated code under ",Object(r.b)("inlineCode",{parentName:"p"},"e2e/target/jvm-2.12/src_managed/main/scalapb/com/myplugin/test/TestMessageFieldNums.scala"),". The path might differ based on the package name you chose when creating the project."),Object(r.b)("h2",{id:"understanding-the-code-generator"},"Understanding the code generator"),Object(r.b)("p",null,"Look for ",Object(r.b)("inlineCode",{parentName:"p"},"CodeGenerator.scala")," under the code-gen directory. There you will find an object like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'object CodeGenerator extends CodeGenApp {\n  override def registerExtensions(registry: ExtensionRegistry): Unit = {\n    Scalapb.registerAllExtensions(registry)\n  }\n\n  // When your code generator will be invoked from SBT via sbt-protoc,\n  // this will add the following artifact to your users build whenver\n\n  // the generator is used in `PB.targets`:\n  override def suggestedDependencies: Seq[Artifact] =\n    Seq(\n      Artifact(\n        BuildInfo.organization,\n        "my-cool-plugin-core",\n        BuildInfo.version,\n        crossVersion = true\n      )\n    )\n\n  // This is called by CodeGenApp after the request is parsed.\n  def process(request: CodeGenRequest): CodeGenResponse =\n    ProtobufGenerator.parseParameters(request.parameter) match {\n      case Right(params) =>\n        // Implicits gives you extension methods that provide ScalaPB\n        // names and types for protobuf entities.\n        val implicits =\n          new DescriptorImplicits(params, request.allProtos)\n\n        // Process each top-level message in each file.\n        // This can be customized if you want to traverse\n        // the input in a different way.\n        CodeGenResponse.succeed(\n          for {\n            file <- request.filesToGenerate\n            message <- file.getMessageTypes().asScala\n          } yield new MessagePrinter(message, implicits).result\n        )\n      case Left(error)   =>\n        CodeGenResponse.fail(error)\n    }\n}\n')),Object(r.b)("p",null,"The object extends the ",Object(r.b)("inlineCode",{parentName:"p"},"CodeGenApp")," trait. This trait provides our application a ",Object(r.b)("inlineCode",{parentName:"p"},"main")," method so it can be used as a standalone protoc plugin. That trait extends another trait named ",Object(r.b)("inlineCode",{parentName:"p"},"ProtocCodeGenerator")," which facilitates the integration with ",Object(r.b)("inlineCode",{parentName:"p"},"sbt-protoc"),". ",Object(r.b)("inlineCode",{parentName:"p"},"ProtocCodeGenerator")," provides for us the method ",Object(r.b)("inlineCode",{parentName:"p"},"suggestedDependencies")," that let us specify which libraries we want to append to the ",Object(r.b)("inlineCode",{parentName:"p"},"libraryDependencies")," of our users. Normally, we want to add our ",Object(r.b)("inlineCode",{parentName:"p"},"core")," library. If you don't need to change the user's library dependencies you can remove this method as the default implementations return an empty list of artifacts."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"registerExtensions")," method is called when parsing the request and used to install protobuf extensions inside an ",Object(r.b)("inlineCode",{parentName:"p"},"ExtensionRegistry"),". This is useful if you are planning to add ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/user_defined_options"}),"custom protobuf options"),'. See the section "Adding custom options" below to learn how to add custom options to your generator.'),Object(r.b)("p",null,"The main action happens at the ",Object(r.b)("inlineCode",{parentName:"p"},"process")," method that takes a ",Object(r.b)("inlineCode",{parentName:"p"},"CodeGenRequest")," and returns a ",Object(r.b)("inlineCode",{parentName:"p"},"CodeGenResponse"),". These classes are simple wrappers around  the Java based protobufs ",Object(r.b)("inlineCode",{parentName:"p"},"CodeGeneratorRequest")," and ",Object(r.b)("inlineCode",{parentName:"p"},"CodeGeneratorResponse")," and are provided by a helper project called ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/scalapb/protoc-bridge/tree/master/protoc-gen/src/main/scala/protocgen"}),"protocgen"),". This is the place you would normally start to customize from.  The template starts by parsing the parameters given in the request, then it creates a ",Object(r.b)("inlineCode",{parentName:"p"},"DescriptorImplicits")," object that provides us with ScalaPB-specific information about the protobuf entities such as the names of generated Scala types."),Object(r.b)("p",null,"It is important to pass ScalaPB's parameters to DescriptorImplicits rather than the default since parameters such as ",Object(r.b)("inlineCode",{parentName:"p"},"flat_package")," change the package name and thus the generated code may not compile due to trying to use a symbol that doesn't exist."),Object(r.b)("p",null,"The code instantiates a ",Object(r.b)("inlineCode",{parentName:"p"},"MessagePrinter")," for each message. We use a class rather than a method here so we only import the implicits in a single place:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'class MessagePrinter(message: Descriptor, implicits: DescriptorImplicits) {\n  import implicits._\n\n  private val MessageObject =\n    message.scalaType.sibling(message.scalaType.name + "FieldNums")\n\n  def scalaFileName =\n    MessageObject.fullName.replace(\'.\', \'/\') + ".scala"\n\n  def result: CodeGeneratorResponse.File = {\n    val b = CodeGeneratorResponse.File.newBuilder()\n    b.setName(scalaFileName)\n    b.setContent(content)\n    b.build()\n  }\n\n  def printObject(fp: FunctionalPrinter): FunctionalPrinter =\n    fp\n      .add(s"object ${MessageObject.name} {")\n      .indented(\n        _.print(message.getFields().asScala){ (fp, fd) => printField(fp, fd) }\n        .add("")\n        .print(message.getNestedTypes().asScala) {\n          (fp, m) => new MessagePrinter(m, implicits).printObject(fp)\n        }\n      )\n      .add("}")\n\n  def printField(fp: FunctionalPrinter, fd: FieldDescriptor): FunctionalPrinter =\n    fp.add(s"val ${fd.getName} = ${fd.getNumber}")\n\n  def content: String = {\n    val fp = new FunctionalPrinter()\n    .add(\n      s"package ${message.getFile.scalaPackage.fullName}",\n      "",\n    ).call(printObject)\n    fp.result\n  }\n}\n')),Object(r.b)("h2",{id:"changing-the-generated-code"},"Changing the generated code"),Object(r.b)("p",null,"Let's make a simple change for the generated code. For example, try changing the suffix of the generated classes from ",Object(r.b)("inlineCode",{parentName:"p"},"FieldNums")," to ",Object(r.b)("inlineCode",{parentName:"p"},"FieldNumbers"),":"),Object(r.b)("p",null,"Before:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'private val MessageObject =\n  message.scalaType.sibling(message.scalaType.name + "FieldNums")\n')),Object(r.b)("p",null,"After:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'private val MessageObject =\n  message.scalaType.sibling(message.scalaType.name + "FieldNumbers")\n')),Object(r.b)("p",null," Then run ",Object(r.b)("inlineCode",{parentName:"p"},"e2eJVM2_12/test"),". The code in ",Object(r.b)("inlineCode",{parentName:"p"},"e2e")," will be regenerated, and you\u2019ll see a compilation error, since the tests still use the old names. You can open the generated code under ",Object(r.b)("inlineCode",{parentName:"p"},"target/scala_2.12")," directory to see the modified generated code. To finish this exercise on a positive note, make the tests in ",Object(r.b)("inlineCode",{parentName:"p"},"e2e/src/test/scala")," pass by updating the reference to the new class name.\nPublishing the code generator"),Object(r.b)("h2",{id:"adding-custom-options"},"Adding custom options"),Object(r.b)("p",null,"This section describes how you can let your users customize the generated code\nvia options. To add custom options, follow this process:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a proto file with the custom options you want to add under\n",Object(r.b)("inlineCode",{parentName:"p"},"core/src/main/protobuf"),". Name it something like ",Object(r.b)("inlineCode",{parentName:"p"},"myplugin.proto"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-protobuf"}),'syntax = "proto2";\n\npackage myplugin;\n\nimport "google/protobuf/descriptor.proto";\n\nextend google.protobuf.MessageOptions {\n      optional MyMessageOptions myopts = 60001;\n}\n\nmessage MyMessageOptions {\n      optional bool my_option = 1;\n}\n')),Object(r.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"The number 60001 above is just an example!")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It's important that different extensions do not use the same numbers so they do not overwrite\neach other's data. If you publish your plugin externally, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/protocolbuffers/protobuf/blob/master/docs/options.md"}),"requset for an\nextension number here"),".")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Make your ",Object(r.b)("inlineCode",{parentName:"p"},"core")," project generate both Java and Scala sources for the\ncustom options proto by adding the following settings to the ",Object(r.b)("inlineCode",{parentName:"p"},"core"),"\nproject in ",Object(r.b)("inlineCode",{parentName:"p"},"build.sbt"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'PB.targets in Compile := Seq(\n  PB.gens.java -> (sourceManaged in Compile).value / "scalapb",\n  scalapb.gen(javaConversions = true) ->\n    (sourceManaged in Compile).value / "scalapb",\n)\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The core project will only need the Java version of the new protobuf.\nUpdate its settings as follows:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'libraryDependencies ++= Seq(\n   "com.thesamet.scalapb" %% "compilerplugin" % scalapb.compiler.Version.scalapbVersion,\n   "com.thesamet.scalapb" %% "scalapb-runtime" % scalapb.compiler.Version.scalapbVersion,\n   "com.thesamet.scalapb" %% "scalapb-runtime" % scalapb.compiler.Version.scalapbVersion % "protobuf",\n ),\n PB.protoSources in Compile += core.base / "src" / "main" / "protobuf",\n PB.targets in Compile := Seq(\n   PB.gens.java -> (sourceManaged in Compile).value / "scalapb"\n )\n')),Object(r.b)("p",{parentName:"li"},"This would tell ScalaPB to compile the protobuf that's in the core project protobuf directory. We\nare adding ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb")," as a ",Object(r.b)("inlineCode",{parentName:"p"},'"protobuf"')," dependency so it extracts ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb.proto"),", and its own\ntransitive dependencies which includes ",Object(r.b)("inlineCode",{parentName:"p"},"google/protobuf/descriptor.proto"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Register the extension in the code generator. In your code generator , under ",Object(r.b)("inlineCode",{parentName:"p"},"code-gen/src/main/scala/"),"\nlook for the ",Object(r.b)("inlineCode",{parentName:"p"},"registerExtensions")," method, and add a call to register your own extension:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"myplugin.Myplugin.registerExtensin(registry)\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Now you are able to extract the extension value in your generator using the standard protobuf-java\nAPIs:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scsala"}),"messageDescriptor.getOptions.getExtension(myplugin.Myplugin.myopts).getMyOption\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"You can now use the new option in your e2e tests. Also the newly added proto will be automatically\npackaged with the core jar. External projects will be able to unpack it by depending on the core\nlibrary with a ",Object(r.b)("inlineCode",{parentName:"p"},'% "protobuf"')," scope. To use:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-protobuf"}),'import "myplugin.proto";\n\nmessage MyMessage {\n  option (myplugin.myopts).my_option = false;\n}\n')))),Object(r.b)("h2",{id:"publishing-the-plugin"},"Publishing the plugin"),Object(r.b)("p",null,"The project can be published to Maven using the \u201cpublish\u201d command. We recommend to use the excellent ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/olafurpg/sbt-ci-release"}),"sbt-ci-release")," plugin to automatically build a snapshot on each commit, and a full release when pushing a git tag."),Object(r.b)("p",null,"SBT users of your code generators will add your plugin to the build by adding it to their ",Object(r.b)("inlineCode",{parentName:"p"},"project/plugins.sbt")," like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'PB.targets in Compile := Seq(\n  scalapb.gen()      -> (sourceManaged in Compile).value / "scalapb",\n  com.myplugin.gen() -> (sourceManaged in Compile).value / "scalapb"\n)\n')),Object(r.b)("p",null,"The template also publishes artifacts with names ending with ",Object(r.b)("inlineCode",{parentName:"p"},"unix.sh")," and ",Object(r.b)("inlineCode",{parentName:"p"},"windows.bat"),". These are executable jars for Unix and Windows systems that contain all the classes needed to run your code generator (except of a JVM which is expected to be in ",Object(r.b)("inlineCode",{parentName:"p"},"JAVA_HOME")," or in the ",Object(r.b)("inlineCode",{parentName:"p"},"PATH"),"). This is useful if your users need to use your plugin directly with protoc, or with a build tool such as maven."),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("p",null,"If you followed this guide all the way to here, then congratulations for creating your first protoc plugin in Scala!"),Object(r.b)("p",null,"If you have any questions, feel free to reach out to us on Gitter or Github."),Object(r.b)("p",null,"Did you write an interesting protoc plugin? Let us know on our gitter channel or our Google group and we'd love to mention it here!"))}p.isMDXComponent=!0}}]);