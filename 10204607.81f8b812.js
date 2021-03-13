(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(a),u=n,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||o;return a?i.a.createElement(m,l(l({ref:t},p),{},{components:a})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),i=a(7),o=(a(0),a(119)),r={title:"Validating Protobufs",sidebar_label:"Validation",layout:"docs"},l={unversionedId:"validation",id:"validation",isDocsHomePage:!1,title:"Validating Protobufs",description:"scalapb-validate is a code generator that generates validation methods for your messages based on rules and constraints defined in the proto. It uses the same validation rules provided by protoc-gen-validate.",source:"@site/../docs/target/mdoc/validation.md",slug:"/validation",permalink:"/docs/validation",version:"current",sidebar_label:"Validation",sidebar:"someSidebar",previous:{title:"Common protos",permalink:"/docs/common-protos"},next:{title:"Writing generic code",permalink:"/docs/generic"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Using the generated code",id:"using-the-generated-code",children:[]},{value:"Validators",id:"validators",children:[]},{value:"Package-scoped extension options",id:"package-scoped-extension-options",children:[]},{value:"Rule-based type customization",id:"rule-based-type-customization",children:[{value:"Installation",id:"installation-1",children:[]},{value:"Field transformations",id:"field-transformations",children:[]},{value:"Cats non-empty collections",id:"cats-non-empty-collections",children:[]},{value:"Unboxing required fields",id:"unboxing-required-fields",children:[]},{value:"Using with refined",id:"using-with-refined",children:[]}]}],p={toc:s};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"scalapb-validate")," is a code generator that generates validation methods for your messages based on rules and constraints defined in the proto. It uses the same validation rules provided by ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/envoyproxy/protoc-gen-validate"}),"protoc-gen-validate"),"."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"In many situations, you may want to add validation rules for your messages. For example, you might want to enforce that a certain string field is an email address, or that a repeated field has at least one element."),Object(o.b)("p",null,"Such rules and constraints can be defined using custom options defined in ",Object(o.b)("inlineCode",{parentName:"p"},"validate/validate.proto"),". Here is an example taken from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/envoyproxy/protoc-gen-validate/blob/master/README.md"}),"protoc-gen-validate's documentation"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),'syntax = "proto3";\n\npackage examplepb;\n\nimport "validate/validate.proto";\n\nmessage Person {\n  uint64 id    = 1 [(validate.rules).uint64.gt    = 999];\n\n  string email = 2 [(validate.rules).string.email = true];\n\n  string name  = 3 [(validate.rules).string = {\n                      pattern:   "^[^[0-9]A-Za-z]+( [^[0-9]A-Za-z]+)*$",\n                      max_bytes: 256,\n                   }];\n\n  Location home = 4 [(validate.rules).message.required = true];\n\n  message Location {\n    double lat = 1 [(validate.rules).double = { gte: -90,  lte: 90 }];\n    double lng = 2 [(validate.rules).double = { gte: -180, lte: 180 }];\n  }\n}\n')),Object(o.b)("p",null,"scalapb-validate supports all the rules available in protoc-gen-validate and is tested with the same test harness containing over 900 test cases."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Add the following to your ",Object(o.b)("inlineCode",{parentName:"p"},"project/plugins.sbt"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'addSbtPlugin("com.thesamet" % "sbt-protoc" % "1.0.2")\n\nlibraryDependencies ++= Seq(\n    "com.thesamet.scalapb" %% "compilerplugin"           % "0.10.11",\n    "com.thesamet.scalapb" %% "scalapb-validate-codegen" % "0.2.0"\n)\n')),Object(o.b)("p",null,"Change your ",Object(o.b)("inlineCode",{parentName:"p"},"PB.targets")," to generate the validation code. The output directory must be the same as the one used for ",Object(o.b)("inlineCode",{parentName:"p"},"scalapb.gen"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'Compile / PB.targets := Seq(\n  scalapb.gen() -> (Compile / sourceManaged).value / "scalapb",\n  scalapb.validate.gen() -> (Compile / sourceManaged).value / "scalapb"\n)\n\nlibraryDependencies ++= Seq(\n  "com.thesamet.scalapb" %% "scalapb-validate-core" % scalapb.validate.compiler.BuildInfo.version % "protobuf"\n)\n')),Object(o.b)("p",null,"Note that we are adding ",Object(o.b)("inlineCode",{parentName:"p"},"scalapb-validate-core")," as a ",Object(o.b)("inlineCode",{parentName:"p"},"protobuf")," dependency. This makes it possible to import ",Object(o.b)("inlineCode",{parentName:"p"},"validate/validate.proto")," from your own protos."),Object(o.b)("p",null,"If ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sbt-settings#additional-options-to-the-generator"}),"ScalaPB generator parameters")," are passed via ",Object(o.b)("inlineCode",{parentName:"p"},"scalapb.gen(options: GeneratorOption*)"),", the same parameters must be passed to ",Object(o.b)("inlineCode",{parentName:"p"},"scalapb.validate.gen(options: GeneratorOption*)"),"."),Object(o.b)("h2",{id:"using-the-generated-code"},"Using the generated code"),Object(o.b)("p",null,"Generated code for both ScalaPB and scalapb-validate is generated at compilation time. In ",Object(o.b)("inlineCode",{parentName:"p"},"sbt"),", just type ",Object(o.b)("inlineCode",{parentName:"p"},"compile"),"."),Object(o.b)("p",null,"In addition to the standard ScalaPB generated files, scalapb-validate will generate a validator object for each message based on its protoc-gen-validate rules. For a message named ",Object(o.b)("inlineCode",{parentName:"p"},"Msg")," the validator object will be named ",Object(o.b)("inlineCode",{parentName:"p"},"MsgValidator")," and will extend ",Object(o.b)("inlineCode",{parentName:"p"},"scalapb.validate.Validator[Msg]"),". An implicit instance of the validator is added to the companion object of each message, which makes it possible to write ",Object(o.b)("inlineCode",{parentName:"p"},"Validator[Msg]")," to obtain an instance of the validator."),Object(o.b)("h2",{id:"validators"},"Validators"),Object(o.b)("p",null,"The validator object is an object with a ",Object(o.b)("inlineCode",{parentName:"p"},"validate")," method that takes an instance of a message and returns the validation result: The ",Object(o.b)("inlineCode",{parentName:"p"},"Validator[T]")," is defined as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"trait Validator[T] {\n  def validate(t: T): Result\n}\n")),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"Result")," is a data structure that can be either a ",Object(o.b)("inlineCode",{parentName:"p"},"Success")," or a ",Object(o.b)("inlineCode",{parentName:"p"},"Failure"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"sealed trait Result {\n  def isSuccess: Boolean\n  def isFailure: Boolean\n}\n\ncase object Success extends Result { ... }\n\ncase class Failure(violations: List[ValidationException]) extends Result { ... }\n")),Object(o.b)("p",null,"Therefore, the validation for the test person casn be run like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'Validator[Person].validate(personInstance) match {\n  case Success             => println("Success!")\n  case Failure(violations) => println(violations)\n}\n')),Object(o.b)("h2",{id:"package-scoped-extension-options"},"Package-scoped extension options"),Object(o.b)("p",null,"ScalaPB-validate further extends ScalaPB's package-scoped options to achieve additional customization:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),'syntax = "proto2";\n\npackage mypkg;\n\nimport "scalapb/scalapb.proto";\nimport "scalapb/validate.proto";\n\noption (scalapb.options) = {\n  scope: PACKAGE\n  [scalapb.validate.file] {\n      validate_at_construction: true\n      insert_validator_instance: true\n  }\n};\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"validate_at_construction")," when true, a check for validity is added to the message class body, so construction of invalid messages results in a validation exception. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"insert_validator_instance")," when true, implicit instance of a ",Object(o.b)("inlineCode",{parentName:"li"},"Validator")," is added to the companion object of the message. This enables writing ",Object(o.b)("inlineCode",{parentName:"li"},"Validator[MyMsg].validate(instance)"),". Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),".")),Object(o.b)("h2",{id:"rule-based-type-customization"},"Rule-based type customization"),Object(o.b)("p",null,"Starting from version 0.10.10, ScalaPB provides a way to customize its own options by writing rules that are matched against\narbitrary protobuf options. When these rules are matched, additional ScalaPB options are added to the matched entity. For example, you can create a transformation that whenever a field has a PGV-rule like ",Object(o.b)("inlineCode",{parentName:"p"},"int32: { gt: 0 }}"),", then it will be typemapped to a custom class ",Object(o.b)("inlineCode",{parentName:"p"},"PositiveInt"),"."),Object(o.b)("h3",{id:"installation-1"},"Installation"),Object(o.b)("p",null,"The features described in this section have the following version requirements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"sbt-protoc >= ",Object(o.b)("inlineCode",{parentName:"li"},"1.0.0")),Object(o.b)("li",{parentName:"ul"},"ScalaPB >= ",Object(o.b)("inlineCode",{parentName:"li"},"0.10.10")),Object(o.b)("li",{parentName:"ul"},"scalapb-validate >= ",Object(o.b)("inlineCode",{parentName:"li"},"0.2.0"))),Object(o.b)("p",null,"While field transformation is a generic ScalaPB mechanism, it is also recommended that you add\nscalapb-validate's preprocessor to ",Object(o.b)("inlineCode",{parentName:"p"},"PB.targets"),". The preprocessor does two things:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Provides field transformations for ",Object(o.b)("inlineCode",{parentName:"li"},"Set")," and cats data types."),Object(o.b)("li",{parentName:"ol"},"Expand your PGV-based rules such that they match repeated items, map keys and map values.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'Compile / PB.targets := Seq(\n  scalapb.validate.preprocessor() -> (Compile / sourceManaged).value / "scalapb",\n  scalapb.gen() -> (Compile / sourceManaged).value / "scalapb",\n  scalapb.validate.gen() -> (Compile / sourceManaged).value / "scalapb"\n)\n\nlibraryDependencies ++= Seq(\n  "com.thesamet.scalapb" %% "scalapb-validate-core" % scalapb.validate.compiler.BuildInfo.version % "protobuf",\n\n  // If you are using Cats transformations:\n  "com.thesamet.scalapb" %% "scalapb-validate-cats" % scalapb.validate.compiler.BuildInfo.version,\n  "org.typelevel" %% "cats-core" % "2.3.0"\n)\n')),Object(o.b)("p",null,"There is an example project ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/scalapb-validate-demo"}),"available on github"),"."),Object(o.b)("h3",{id:"field-transformations"},"Field transformations"),Object(o.b)("p",null,"If you want all positive integers to be typemapped to a Scala class called ",Object(o.b)("inlineCode",{parentName:"p"},"PositiveInt")," you can\ncreate a proto file with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),'syntax = "proto2";\n\npackage mypackage;\n\nimport "scalapb/scalapb.proto";\nimport "scalapb/validate.proto";\nimport "validate/validate.proto";\n\noption (scalapb.options) = {\n  preprocessors: ["scalapb-validate-preprocessor"]\n  field_transformations: [\n    {\n      when: {options { [validate.rules] {int32: {gt: 0}} }}\n      set: {\n        [scalapb.field] {\n          type: "mypkg.PositiveInt"\n        }\n      }\n    }\n  ]\n};\n')),Object(o.b)("p",null,"The scope of this definition is the entire protobuf file it is found in. Field tranformations can also\nbe used in package-scoped options so they are passed to all files within the package."),Object(o.b)("p",null,"You can learn more about ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/transformations"}),"field transformations in this page"),"."),Object(o.b)("p",null,"More examples of field transformations usage:"),Object(o.b)("p",null,"The following rule with match whenever there is a ",Object(o.b)("inlineCode",{parentName:"p"},"gt")," field set, no matter to which value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),'option (scalapb.options) = {\n  preprocessors: ["scalapb-validate-preprocessor"]\n  field_transformations: [\n    {\n      when: {options { [validate.rules] {int32: {gt: 0}}}}\n      match_type: PRESENCE\n      set: {\n        [scalapb.field] {\n          type: "mypkg.GreaterThanAnything"\n        }\n      }\n    }\n  ]\n};\n')),Object(o.b)("p",null,"Since the ",Object(o.b)("inlineCode",{parentName:"p"},"when")," clause is ",Object(o.b)("inlineCode",{parentName:"p"},"FieldDescriptorProto"),", it is possible to match on ",Object(o.b)("inlineCode",{parentName:"p"},"type")," and ",Object(o.b)("inlineCode",{parentName:"p"},"label"),". For example,\nthe following will match only when the field is in a ",Object(o.b)("inlineCode",{parentName:"p"},"repeated int32"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),'option (scalapb.options) = {\n  preprocessors: ["scalapb-validate-preprocessor"]\n  field_transformations: [\n    {\n      when: {\n        type: TYPE_INT32\n        label: LABEL_REPEATED\n        options { [validate.rules] {int32: {gt: 0}}}\n      }\n      match_type: CONTAINS\n      set: {\n        [scalapb.field] {\n          type: "mypkg.PositiveIntInRepeated"\n        }\n      }\n    }\n  ]\n};\n')),Object(o.b)("h4",{id:"what-does-the-preprocessor-do"},"What does the preprocessor do?"),Object(o.b)("p",null,"The preprocessor scans for ",Object(o.b)("inlineCode",{parentName:"p"},"field_transformations")," with ",Object(o.b)("inlineCode",{parentName:"p"},"when")," fields that contain ",Object(o.b)("inlineCode",{parentName:"p"},"[validate.rules]")," extensions. Whenever a ",Object(o.b)("inlineCode",{parentName:"p"},"[validate.rules]")," does contain a ",Object(o.b)("inlineCode",{parentName:"p"},"repeated")," or ",Object(o.b)("inlineCode",{parentName:"p"},"map")," validation rules it is assumed to be applied to a singleton type, so we add a copy of the rule for repeated, map-key and map-value context. For example, for this ",Object(o.b)("inlineCode",{parentName:"p"},"PositiveInt")," rule:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),'{\n  when: {[validate.rules] {int32: {gt: 0}}}\n  set: {\n    type: "mypkg.PositiveInt"\n  }\n}\n')),Object(o.b)("p",null,"the following field transformations will be automatically added by the preprocessor:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'    {\n      when: {options{[validate.rules] {repeated: {int32: {gt: 0}}}}}\n      set: {\n        [scalapb.field] {\n          type: "mypkg.PositiveInt"\n        }\n      }\n    },\n    {\n      when: {options{[validate.rules] {map: {keys: {int32: {gt: 0}}}}}}\n      set: {\n        [scalapb.field] {\n          key_type: "mypkg.PositiveInt"\n        }\n      }\n    },\n    {\n      when: {options{[validate.rules] {map: {values: {int32: {gt: 0}}}}}}\n      set: {\n        [scalapb.field] {\n          value_type: "mypkg.PositiveInt"\n        }\n      }\n    }\n')),Object(o.b)("p",null,"This saves you from writing those rules manually so the type transformation is applied in repeated fields or maps. Note that the rewrite mechanism rewrites the ",Object(o.b)("inlineCode",{parentName:"p"},"type")," in the original ",Object(o.b)("inlineCode",{parentName:"p"},"set")," field, into ",Object(o.b)("inlineCode",{parentName:"p"},"key_type")," or ",Object(o.b)("inlineCode",{parentName:"p"},"value_type"),"."),Object(o.b)("h3",{id:"cats-non-empty-collections"},"Cats non-empty collections"),Object(o.b)("p",null,"Using rules like the ones defined above, it is possible to detect when a list or a map are non-empty (via. ",Object(o.b)("inlineCode",{parentName:"p"},"{repeated: { min_items: 1}}")," or ",Object(o.b)("inlineCode",{parentName:"p"},"{map: {min_pairs: 1}}"),", and map them to corresponding non-empty collections.  Cats collections require some additional adaptation to ScalaPB since their API is different enough from standard Scala collections. ScalaPB-validate comes with support to automatically map non-empty collections to ",Object(o.b)("inlineCode",{parentName:"p"},"NonEmptyMap"),", ",Object(o.b)("inlineCode",{parentName:"p"},"NonEmptySet")," and ",Object(o.b)("inlineCode",{parentName:"p"},"NonEmptyList"),". To enable, add the following to a proto file. The scope of the settings will be for the entire file. You can turn the setting on for the\nentire package by adding ",Object(o.b)("inlineCode",{parentName:"p"},"scope: PACKAGE"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),'\nsyntax = "proto2";\n\npackage mypackage;\n\nimport "scalapb/scalapb.proto";\nimport "scalapb/validate.proto";\n\noption (scalapb.options) = {\n  preprocessors: ["scalapb-validate-preprocessor"]\n  [scalapb.validate.file] {\n    validate_at_construction : true\n    cats_transforms : true\n    unique_to_set : true\n  }\n};\n')),Object(o.b)("p",null,"As stated above, you will need to have ",Object(o.b)("inlineCode",{parentName:"p"},"scalapb-validate-cats")," listed in\n",Object(o.b)("inlineCode",{parentName:"p"},"libraryDependencies"),". The setting ",Object(o.b)("inlineCode",{parentName:"p"},"unique_to_set")," can be used independently\nof cats to transform a repeated with ",Object(o.b)("inlineCode",{parentName:"p"},"unique: true")," rule to a set."),Object(o.b)("h3",{id:"unboxing-required-fields"},"Unboxing required fields"),Object(o.b)("p",null,"If you use ",Object(o.b)("inlineCode",{parentName:"p"},"validate.message.required")," you can apply a transformation that\nwould set the ",Object(o.b)("inlineCode",{parentName:"p"},"scalapb.field.required")," option. As a result, the field will\nnot be boxed in an ",Object(o.b)("inlineCode",{parentName:"p"},"Option")," and parsing will throw an exception if the field\nis missing. To set this transformation add the following to ScalaPB-validate's options:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),"option (scalapb.options) = {\n    field_transformations: [\n        {\n            when: {options: {[validate.rules] {message: {required: true}}}}\n            set: {\n              [scalapb.field] {\n                required: true\n              }\n            }\n        }\n    ]\n};\n")),Object(o.b)("h3",{id:"using-with-refined"},"Using with refined"),Object(o.b)("p",null,"As explained in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/transformations#referencing-rules-values"}),'"referencing rule values"'),", it is possible\nto reference field descriptor values in the ",Object(o.b)("inlineCode",{parentName:"p"},"set")," part of field transformation.\nA use case for this is with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/fthomas/refined"}),"refined types"),". For example, you can\ndefine the following field transformations:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),'syntax = "proto3";\n\npackage refined_test;\n\nimport "validate/validate.proto";\nimport "scalapb/validate.proto";\nimport "scalapb/scalapb.proto";\n\noption (scalapb.options) = {\n  preprocessors : [ "scalapb-validate-preprocessor" ]\n  import : "eu.timepit.refined.api.Refined"\n  import : "eu.timepit.refined.numeric._"\n  import : "eu.timepit.refined.generic._"\n  import : "shapeless.{Witness => W}"\n\n  field_transformations : [ {\n    when : {options: {[validate.rules] {int32 : {gt : 1}}}}  // <-- 1 can be replaced with any number\n    set : {type : "Int Refined Greater[$(options.[validate.rules].int32.gt)]"}\n    match_type : PRESENCE\n  } ]\n};\n\nmessage Test {\n  int32 gt_test = 1 [ (validate.rules).int32 = {gt : 5} ];  // transformed to: Int Refined Greater[5]\n}\n')),Object(o.b)("p",null,"For this to work, a typemapper for refined types need to be either put in a package object in the same package where the code is generated, or be manually imported through ",Object(o.b)("inlineCode",{parentName:"p"},"import")," options."),Object(o.b)("p",null,"The typemapper used in scalapb-validate tests is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/scalapb-validate/blob/0.2.x-preview/e2e/src/main/scala/scalapb/transforms/refined/package.scala"}),"here"),"."),Object(o.b)("p",null,"Additional resources:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/scalapb/scalapb-validate/blob/0.2.x-preview/e2e/src/main/protobuf/transforms/refined/refined.proto"}),"test proto files (refined.proto)"),": note it uses ",Object(o.b)("inlineCode",{parentName:"li"},"shapeless.Witness")," since ScalaPB-validate is cross-tested for Scala 2.12 and Scala 2.13."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/scalapb/scalapb-validate/blob/0.2.x-preview/e2e/src/test/scala/scalapb/validate/transforms/refined/RefinedSpec.scala"}),"end-to-end tests")," demonstrating compile-time validation.")))}c.isMDXComponent=!0}}]);