(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{119:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,u=b["".concat(s,".").concat(m)]||b[m]||d[m]||o;return t?r.a.createElement(u,i(i({ref:n},c),{},{components:t})):r.a.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),o=(t(0),t(119)),s=["components"],i={title:"ScalaPB and JSON",sidebar_label:"JSON"},l={unversionedId:"json",id:"json",isDocsHomePage:!1,title:"ScalaPB and JSON",description:"ScalaPB can convert protocol buffers to and from JSON, using",source:"@site/../docs/target/mdoc/json.md",slug:"/json",permalink:"/docs/json",version:"current",sidebar_label:"JSON",sidebar:"someSidebar",previous:{title:"Using ScalaPB with Spark",permalink:"/docs/sparksql"},next:{title:"ScalaPBC: ScalaPB's standalone compiler",permalink:"/docs/scalapbc"}},c=[{value:"Setting up your project",id:"setting-up-your-project",children:[]},{value:"More printing and parsing options",id:"more-printing-and-parsing-options",children:[]}],p={toc:c};function b(e){var n=e.components,t=Object(r.a)(e,s);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ScalaPB can convert protocol buffers to and from JSON, using\n",Object(o.b)("a",{parentName:"p",href:"http://json4s.org/"},"json4s"),"."),Object(o.b)("h2",{id:"setting-up-your-project"},"Setting up your project"),Object(o.b)("p",null,"Make sure that you are using ScalaPB 0.5.x or later."),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"build.sbt")," add a dependency on ",Object(o.b)("inlineCode",{parentName:"p"},"scalapb-json4s"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},'// For ScalaPB 0.11.x (json4s 0.4.x, released for Scala 3):\nlibraryDependencies += "com.thesamet.scalapb" %% "scalapb-json4s" % "0.12.0"\n\n// For ScalaPB 0.11.x (json4s 0.3.x):\nlibraryDependencies += "com.thesamet.scalapb" %% "scalapb-json4s" % "0.11.1"\n\n// For ScalaPB 0.10.x:\nlibraryDependencies += "com.thesamet.scalapb" %% "scalapb-json4s" % "0.10.1"\n\n// For ScalaPB 0.9.x:\nlibraryDependencies += "com.thesamet.scalapb" %% "scalapb-json4s" % "0.9.3"\n\n// For ScalaPB 0.8.x:\nlibraryDependencies += "com.thesamet.scalapb" %% "scalapb-json4s" % "0.7.2"\n\n// For ScalaPB 0.7.x:\nlibraryDependencies += "com.thesamet.scalapb" %% "scalapb-json4s" % "0.7.2"\n\n// For ScalaPB 0.6.x (note the different groupId):\nlibraryDependencies += "com.trueaccord.scalapb" %% "scalapb-json4s" % "0.3.2"\n\n// For ScalaPB 0.5.x (note the different groupId):\nlibraryDependencies += "com.trueaccord.scalapb" %% "scalapb-json4s" % "0.1.6"\n')),Object(o.b)("p",null,"In your code, you can now convert to JSON:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"import scalapb.json4s.JsonFormat\n\nval r: String = JsonFormat.toJsonString(myProto)\n")),Object(o.b)("p",null,"Parse JSON back to a protocol buffer:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},'import scalapb.json4s.JsonFormat\n\nval proto: MyProto = JsonFormat.fromJsonString[MyProto](\n    """{"x": "17"}""")\n')),Object(o.b)("p",null,"There are lower-level functions ",Object(o.b)("inlineCode",{parentName:"p"},"toJson()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"fromJson()")," that convert from\nprotos to json4s's ",Object(o.b)("inlineCode",{parentName:"p"},"JValue"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"def toJson(m: GeneratedMessage): JObject\n\ndef fromJson[Proto](value: JValue): Proto\n")),Object(o.b)("p",null,"Finally, in JsonFormat there are two implicit methods that instantiate\n",Object(o.b)("inlineCode",{parentName:"p"},"Reader[Proto]")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Writer[Proto]"),"."),Object(o.b)("h2",{id:"more-printing-and-parsing-options"},"More printing and parsing options"),Object(o.b)("p",null,"There are a few more options available to customize the format used to print\nand parse JSON. To take advantage of that, instantiate ",Object(o.b)("inlineCode",{parentName:"p"},"Printer")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Parser")," and\ncall ",Object(o.b)("inlineCode",{parentName:"p"},"toJson()")," / ",Object(o.b)("inlineCode",{parentName:"p"},"fromJson()")," as usual."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"new scalapb.json4s.Printer(\n  includingDefaultValueFields = true,\n  preservingProtoFieldNames = true,\n  formattingLongAsNumber = true\n).toJson(myProto)\n")),Object(o.b)("p",null,"Options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"includingDefaultValueFields")," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"): should fields\nthat are set to their default value be included in the output."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"preservingProtoFieldNames")," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"): by default, field names are mapped to\nlowerCamelCase and become JSON object keys. Setting this option to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," would\nmake the parser and the printer use the original field names as specified in the proto\nfile (normally, in snake_case)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"formatLongAsNumber")," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"): by default, longs are serialized as\nstrings. To use the numeric representation, set this option to true. Note that\ndue to the way Javascript represents numbers, there is a possibility to lose\nprecision (",Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger"},"more details here"),").")),Object(o.b)("p",null,"The parser can be instantiated with ",Object(o.b)("inlineCode",{parentName:"p"},"new scalapb.json4s.Parser()"),", and various methods can return instances of the parser with customized configuration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ignoringUnkownFields"),": by default the parser will throw a ",Object(o.b)("inlineCode",{parentName:"li"},"JsonFormatException")," when encountering unknown fields. By enabling this option, unknown options will be silently ignored."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ignoringOverlappingOneofFields"),": by default the parser will throw a ",Object(o.b)("inlineCode",{parentName:"li"},"JsonFormatException")," if values are provided for more than one field within the same oneof. By enabling this option, when more than one field is present for a oneof, one of the values of this field will be picked for the oneof."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mapEntriesAsKeyValuePairs"),": by default, protobuf maps are modeled as json objects. When this setting is enabled, protobuf maps are expected to be read as arrays of objects with ",Object(o.b)("inlineCode",{parentName:"li"},"key")," and ",Object(o.b)("inlineCode",{parentName:"li"},"value")," keys.")),Object(o.b)("p",null,"See the list of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/scalapb/scalapb-json4s/blob/master/src/main/scala/scalapb/json4s/JsonFormat.scala"},"constructor paramerters here")),Object(o.b)("h1",{id:"printing-and-parsing-anys"},"Printing and parsing Anys"),Object(o.b)("p",null,"In Protocol Buffers, ",Object(o.b)("inlineCode",{parentName:"p"},"google.protobuf.Any")," is a type that embeds an arbitrary protobuf message. An ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," is represented as a message that contains a ",Object(o.b)("inlineCode",{parentName:"p"},"typeUrl")," field that identifies the type, and a bytes field ",Object(o.b)("inlineCode",{parentName:"p"},"value")," which contains the serialized contents of a message. In JSON, the message embedded in the ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," is serialized as usual, and there is a ",Object(o.b)("inlineCode",{parentName:"p"},"@type")," key added to it to identify which message it is. The parser expects this ",Object(o.b)("inlineCode",{parentName:"p"},"@type")," key to know which message it is. To accomplish this, all the expected embedded types need to be registered with a ",Object(o.b)("inlineCode",{parentName:"p"},"TypeRegistry")," so the printer and parser know how to process the embedded message."),Object(o.b)("p",null,"The following example is based ",Object(o.b)("a",{parentName:"p",href:"https://github.com/scalapb/ScalaPB/blob/master/docs/src/main/protobuf/json.proto"},"on this proto"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},'import com.thesamet.docs.json._\nimport scalapb.json4s.{Printer, Parser, TypeRegistry}\n\nval c = MyContainer(\n  myAny=Some(\n    com.google.protobuf.any.Any.pack(\n      MyMessage(x=17)\n    )\n  )\n)\n// c: MyContainer = MyContainer(\n//   Some(\n//     Any(\n//       "type.googleapis.com/com.thesamet.docs.MyMessage",\n//       <ByteString@f843184 size=2 contents="\\b\\021">,\n//       UnknownFieldSet(Map())\n//     )\n//   ),\n//   UnknownFieldSet(Map())\n// )\n\nval typeRegistry = TypeRegistry().addMessage[MyMessage]\n// typeRegistry: TypeRegistry = TypeRegistry(\n//   Map(\n//     "type.googleapis.com/com.thesamet.docs.MyMessage" -> com.thesamet.docs.json.MyMessage$@5e5e65ca\n//   ),\n//   Set()\n// )\n\nval printer = new Printer().withTypeRegistry(typeRegistry)\n// printer: Printer = scalapb.json4s.Printer@4c01170\n\nprinter.print(c)\n// res0: String = "{\\"myAny\\":{\\"@type\\":\\"type.googleapis.com/com.thesamet.docs.MyMessage\\",\\"x\\":17}}"\n')),Object(o.b)("p",null,"Conversely, you can start from a JSON and parse it back to a ",Object(o.b)("inlineCode",{parentName:"p"},"MyContainer")," that contains an ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," field:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},'val parser = new Parser().withTypeRegistry(typeRegistry)\n// parser: Parser = scalapb.json4s.Parser@1941d4f0\n\nparser.fromJsonString[MyContainer]("""\n  {\n    "myAny": {\n      "@type": "type.googleapis.com/com.thesamet.docs.MyMessage",\n      "x": 17\n    }\n  }""")\n// res1: MyContainer = MyContainer(\n//   Some(\n//     Any(\n//       "type.googleapis.com/com.thesamet.docs.MyMessage",\n//       <ByteString@54500b2b size=2 contents="\\b\\021">,\n//       UnknownFieldSet(Map())\n//     )\n//   ),\n//   UnknownFieldSet(Map())\n// )\n')))}b.isMDXComponent=!0}}]);