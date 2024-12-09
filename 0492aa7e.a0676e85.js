(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{119:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return u}));var t=n(0),r=n.n(t);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),c=function(e){var a=r.a.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},b=function(e){var a=c(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,s=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=c(n),m=t,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||s;return n?r.a.createElement(u,l(l({ref:a},i),{},{components:n})):r.a.createElement(u,l({ref:a},i))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return p})),n.d(a,"toc",(function(){return i})),n.d(a,"default",(function(){return b}));var t=n(3),r=n(7),s=(n(0),n(119)),o=["components"],l={title:"Using ScalaPB with Spark",sidebar_label:"SparkSQL"},p={unversionedId:"sparksql",id:"sparksql",isDocsHomePage:!1,title:"Using ScalaPB with Spark",description:"Introduction",source:"@site/../docs/target/mdoc/sparksql.md",slug:"/sparksql",permalink:"/docs/sparksql",version:"current",sidebar_label:"SparkSQL",sidebar:"someSidebar",previous:{title:"Using ScalaPB with Scala.js",permalink:"/docs/scala.js"},next:{title:"ScalaPB and JSON",permalink:"/docs/json"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Setting up your project",id:"setting-up-your-project",children:[]},{value:"Using sparksql-scalapb",id:"using-sparksql-scalapb",children:[]},{value:"From Binary to protos and back",id:"from-binary-to-protos-and-back",children:[]},{value:"On enums",id:"on-enums",children:[]},{value:"Dataframes and Datasets from RDDs",id:"dataframes-and-datasets-from-rdds",children:[]},{value:"UDFs",id:"udfs",children:[]},{value:"Primitive wrappers",id:"primitive-wrappers",children:[]},{value:"Datasets and <code>&lt;none&gt; is not a term</code>",id:"datasets-and-none-is-not-a-term",children:[]},{value:"Example",id:"example",children:[]}],c={toc:i};function b(e){var a=e.components,n=Object(r.a)(e,o);return Object(s.b)("wrapper",Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,"By default, Spark uses reflection to derive schemas and encoders from case\nclasses. This doesn't work well when there are messages that contain types that\nSpark does not understand such as enums, ",Object(s.b)("inlineCode",{parentName:"p"},"ByteString"),"s and ",Object(s.b)("inlineCode",{parentName:"p"},"oneof"),"s. To get around this, sparksql-scalapb provides its own ",Object(s.b)("inlineCode",{parentName:"p"},"Encoder"),"s for protocol buffers."),Object(s.b)("p",null,"However, it turns out there is another obstacle. Spark does not provide any mechanism to compose user-provided encoders with its own reflection-derived Encoders. Therefore, merely providing an ",Object(s.b)("inlineCode",{parentName:"p"},"Encoder")," for protocol buffers is insufficient to derive an encoder for regular case-classes that contain a protobuf as a field. To solve this problem, ScalaPB uses ",Object(s.b)("a",{parentName:"p",href:"https://github.com/typelevel/frameless"},"frameless")," which relies on implicit search to derive encoders. This approach enables combining ScalaPB's encoders with frameless encoders that takes care for all non-protobuf types."),Object(s.b)("h2",{id:"setting-up-your-project"},"Setting up your project"),Object(s.b)("p",null,"We are going to use sbt-assembly to deploy a fat JAR containing ScalaPB, and\nyour compiled protos.  Make sure in project/plugins.sbt you have a line\nthat adds sbt-assembly:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "0.14.10")\n')),Object(s.b)("p",null,"To add sparksql-scalapb to your project, add ",Object(s.b)("em",{parentName:"p"},"one")," of the following lines that\nmatches ",Object(s.b)("em",{parentName:"p"},"both the version of ScalaPB and Spark")," you use:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},'// Spark 3.5 and ScalaPB 0.11\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql35-scalapb0_11" % "1.0.4"\n\n// Spark 3.4 and ScalaPB 0.11\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql34-scalapb0_11" % "1.0.4"\n\n// Spark 3.3 and ScalaPB 0.11\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql33-scalapb0_11" % "1.0.4"\n\n// Spark 3.2 and ScalaPB 0.11\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql32-scalapb0_11" % "1.0.4"\n\n// Spark 3.1 and ScalaPB 0.11\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql31-scalapb0_11" % "1.0.4"\n\n// Spark 3.0 and ScalaPB 0.11\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql30-scalapb0_11" % "1.0.1"\n\n// Spark 3.3 and ScalaPB 0.10\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql33-scalapb0_10" % "1.0.4"\n\n// Spark 3.2 and ScalaPB 0.10\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql32-scalapb0_10" % "1.0.4"\n\n// Spark 3.1 and ScalaPB 0.10\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql31-scalapb0_10" % "1.0.4"\n\n// Spark 3.0 and ScalaPB 0.10\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql30-scalapb0_10" % "1.0.1"\n\n// Spark 2.x and ScalaPB 0.10\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql-scalapb" % "0.10.4"\n\n// Spark 2.x and ScalaPB 0.9\nlibraryDependencies += "com.thesamet.scalapb" %% "sparksql-scalapb" % "0.9.3"\n')),Object(s.b)("p",null,"Known issue: Spark 3.2.1 is binary incompatible with Spark 3.2.0 in some of its internal\nAPIs being used. If you use Spark 3.2.0, please stick to sparksql-scalapb 1.0.0-M1."),Object(s.b)("p",null,"Spark ships with an old version of Google's Protocol Buffers runtime that is not compatible with\nthe current version. In addition, it comes with incompatible versions of scala-collection-compat\nand shapeless.  Therefore, we need to shade these libraries. Add the following to your build.sbt:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},'assemblyShadeRules in assembly := Seq(\n  ShadeRule.rename("com.google.protobuf.**" -> "shadeproto.@1").inAll,\n  ShadeRule.rename("scala.collection.compat.**" -> "shadecompat.@1").inAll,\n  ShadeRule.rename("shapeless.**" -> "shadeshapeless.@1").inAll\n)\n')),Object(s.b)("p",null,"See ",Object(s.b)("a",{parentName:"p",href:"https://github.com/thesamet/sparksql-scalapb-test/blob/master/build.sbt"},"complete example of build.sbt"),"."),Object(s.b)("h2",{id:"using-sparksql-scalapb"},"Using sparksql-scalapb"),Object(s.b)("p",null,"We assume you have a ",Object(s.b)("inlineCode",{parentName:"p"},"SparkSession")," assigned to the variable ",Object(s.b)("inlineCode",{parentName:"p"},"spark"),". In a standalone Scala program, this can be created with:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},'import org.apache.spark.sql.SparkSession\n\nval spark: SparkSession = SparkSession\n  .builder()\n  .appName("ScalaPB Demo")\n  .master("local[2]")\n  .getOrCreate()\n// spark: SparkSession = org.apache.spark.sql.SparkSession@9aeebec\n')),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"IMPORTANT"),": Ensure you do not import ",Object(s.b)("inlineCode",{parentName:"p"},"spark.implicits._")," to avoid ambiguity between ScalaPB provided encoders and Spark's default encoders. You may want to import ",Object(s.b)("inlineCode",{parentName:"p"},"StringToColumn")," to convert ",Object(s.b)("inlineCode",{parentName:"p"},'$"col name"')," into a ",Object(s.b)("inlineCode",{parentName:"p"},"Column"),". Add an import ",Object(s.b)("inlineCode",{parentName:"p"},"scalapb.spark.Implicits")," to add ScalaPB's encoders for protocol buffers into the implicit search scope:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},"import org.apache.spark.sql.{Dataset, DataFrame, functions => F}\nimport spark.implicits.StringToColumn\nimport scalapb.spark.ProtoSQL\n\nimport scalapb.spark.Implicits._\n")),Object(s.b)("p",null,"The code snippets below use the ",Object(s.b)("a",{parentName:"p",href:"https://github.com/scalapb/ScalaPB/blob/master/docs/src/main/protobuf/person.proto"},Object(s.b)("inlineCode",{parentName:"a"},"Person")," message"),"."),Object(s.b)("p",null,"We start by creating some test data:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},'import scalapb.docs.person.Person\nimport scalapb.docs.person.Person.{Address, AddressType}\n\nval testData = Seq(\n   Person(name="John", age=32, addresses=Vector(\n     Address(addressType=AddressType.HOME, street="Market", city="SF"))\n   ),\n   Person(name="Mike", age=29, addresses=Vector(\n     Address(addressType=AddressType.WORK, street="Castro", city="MV"),\n     Address(addressType=AddressType.HOME, street="Church", city="MV"))\n   ),\n   Person(name="Bart", age=27)\n)\n')),Object(s.b)("p",null,"We can create a ",Object(s.b)("inlineCode",{parentName:"p"},"DataFrame")," from the test data:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},"val df = ProtoSQL.createDataFrame(spark, testData)\n// df: DataFrame = [name: string, age: int ... 1 more field]\ndf.printSchema()\n// root\n//  |-- name: string (nullable = true)\n//  |-- age: integer (nullable = true)\n//  |-- addresses: array (nullable = false)\n//  |    |-- element: struct (containsNull = false)\n//  |    |    |-- address_type: string (nullable = true)\n//  |    |    |-- street: string (nullable = true)\n//  |    |    |-- city: string (nullable = true)\n// \ndf.show()\n// +----+---+--------------------+\n// |name|age|           addresses|\n// +----+---+--------------------+\n// |John| 32|[{HOME, Market, SF}]|\n// |Mike| 29|[{WORK, Castro, M...|\n// |Bart| 27|                  []|\n// +----+---+--------------------+\n//\n")),Object(s.b)("p",null,"and then process it as any other Dataframe in Spark:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},'df.select($"name", F.size($"addresses").alias("address_count")).show()\n// +----+-------------+\n// |name|address_count|\n// +----+-------------+\n// |John|            1|\n// |Mike|            2|\n// |Bart|            0|\n// +----+-------------+\n// \n\nval nameAndAddress = df.select($"name", $"addresses".getItem(0).alias("firstAddress"))\n// nameAndAddress: DataFrame = [name: string, firstAddress: struct<address_type: string, street: string ... 1 more field>]\n\nnameAndAddress.show()\n// +----+------------------+\n// |name|      firstAddress|\n// +----+------------------+\n// |John|{HOME, Market, SF}|\n// |Mike|{WORK, Castro, MV}|\n// |Bart|              null|\n// +----+------------------+\n//\n')),Object(s.b)("p",null,"Using the datasets API it is possible to bring the data back to ScalaPB case classes:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},"nameAndAddress.as[(String, Option[Address])].collect().foreach(println)\n// (John,Some(Address(HOME,Market,SF,UnknownFieldSet(Map()))))\n// (Mike,Some(Address(WORK,Castro,MV,UnknownFieldSet(Map()))))\n// (Bart,None)\n")),Object(s.b)("p",null,"You can create a Dataset directly using Spark APIs:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},"spark.createDataset(testData)\n// res5: Dataset[Person] = [name: string, age: int ... 1 more field]\n")),Object(s.b)("h2",{id:"from-binary-to-protos-and-back"},"From Binary to protos and back"),Object(s.b)("p",null,"In some situations, you may need to deal with datasets that contain serialized protocol buffers. This can be handled by mapping the datasets through ScalaPB's ",Object(s.b)("inlineCode",{parentName:"p"},"parseFrom")," and ",Object(s.b)("inlineCode",{parentName:"p"},"toByteArray")," functions."),Object(s.b)("p",null,"Let's start by preparing a dataset with test binary data by mapping our ",Object(s.b)("inlineCode",{parentName:"p"},"testData"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},"val binaryDS: Dataset[Array[Byte]] = spark.createDataset(testData.map(_.toByteArray))\n// binaryDS: Dataset[Array[Byte]] = [value: binary]\n\nbinaryDS.show()\n// +--------------------+\n// |               value|\n// +--------------------+\n// |[0A 04 4A 6F 68 6...|\n// |[0A 04 4D 69 6B 6...|\n// |[0A 04 42 61 72 7...|\n// +--------------------+\n//\n")),Object(s.b)("p",null,"To turn this dataset into a ",Object(s.b)("inlineCode",{parentName:"p"},"Dataset[Person]"),", we map it through ",Object(s.b)("inlineCode",{parentName:"p"},"parseFrom"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},"val protosDS: Dataset[Person] = binaryDS.map(Person.parseFrom(_))\n// protosDS: Dataset[Person] = [name: string, age: int ... 1 more field]\n")),Object(s.b)("p",null,"to turn a dataset of protos into ",Object(s.b)("inlineCode",{parentName:"p"},"Dataset[Array[Byte]]"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},"val protosBinary: Dataset[Array[Byte]] = protosDS.map(_.toByteArray)\n// protosBinary: Dataset[Array[Byte]] = [value: binary]\n")),Object(s.b)("h2",{id:"on-enums"},"On enums"),Object(s.b)("p",null,"In SparkSQL-ScalaPB, enums are represented as strings. Unrecognized enum values are represented as strings containing the numeric value."),Object(s.b)("h2",{id:"dataframes-and-datasets-from-rdds"},"Dataframes and Datasets from RDDs"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},"import org.apache.spark.rdd.RDD\n\nval protoRDD: RDD[Person] = spark.sparkContext.parallelize(testData)\n\nval protoDF: DataFrame = ProtoSQL.protoToDataFrame(spark, protoRDD)\n\nval protoDS: Dataset[Person] = spark.createDataset(protoRDD)\n")),Object(s.b)("h2",{id:"udfs"},"UDFs"),Object(s.b)("p",null,"If you need to write a UDF that returns a message, it would not pick up our encoder and you may get a runtime failure.  To work around this, sparksql-scalapb provides ",Object(s.b)("inlineCode",{parentName:"p"},"ProtoSQL.udf")," to create UDFs. For example, if you need to parse a binary column into a proto:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},'val binaryDF = protosBinary.toDF("value")\n// binaryDF: DataFrame = [value: binary]\n\nval parsePersons = ProtoSQL.udf { bytes: Array[Byte] => Person.parseFrom(bytes) }\n// parsePersons: org.apache.spark.sql.Column => org.apache.spark.sql.Column = scalapb.spark.Udfs$$Lambda$17802/0x0000000104bea040@29f85440\n\nbinaryDF.withColumn("person", parsePersons($"value"))\n// res7: DataFrame = [value: binary, person: struct<name: string, age: int ... 1 more field>]\n')),Object(s.b)("h2",{id:"primitive-wrappers"},"Primitive wrappers"),Object(s.b)("p",null,"In ProtoSQL 0.9.x and 0.10.x, primitive wrappers are represented in Spark as structs\nwitha single field named ",Object(s.b)("inlineCode",{parentName:"p"},"value"),". A better representation in Spark would be a\nnullable field of the primitive type. The better representation will be the\ndefault in 0.11.x. To enable this representation today, replace the usages of\n",Object(s.b)("inlineCode",{parentName:"p"},"scalapb.spark.ProtoSQL")," with ",Object(s.b)("inlineCode",{parentName:"p"},"scalapb.spark.ProtoSQL.withPrimitiveWrappers"),".\nInstead of importing ",Object(s.b)("inlineCode",{parentName:"p"},"scalapb.spark.Implicits._"),", import\n",Object(s.b)("inlineCode",{parentName:"p"},"scalapb.spark.ProtoSQL.implicits._")),Object(s.b)("p",null,"See example in ",Object(s.b)("a",{parentName:"p",href:"https://github.com/scalapb/sparksql-scalapb/blob/80f3162b69313d57f95d3dcbfee865809873567a/sparksql-scalapb/src/test/scala/WrappersSpec.scala#L42-L59"},"WrappersSpec"),"."),Object(s.b)("h2",{id:"datasets-and-none-is-not-a-term"},"Datasets and ",Object(s.b)("inlineCode",{parentName:"h2"},"<none> is not a term")),Object(s.b)("p",null,"You will see this error if for some reason Spark's ",Object(s.b)("inlineCode",{parentName:"p"},"Encoder"),"s are being picked up\ninstead of the ones provided by sparksql-scalapb. Please ensure you are not importing ",Object(s.b)("inlineCode",{parentName:"p"},"spark.implicits._"),". See instructions above for imports."),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("p",null,"Check out a ",Object(s.b)("a",{parentName:"p",href:"https://github.com/thesamet/sparksql-scalapb-test"},"complete example")," here."))}b.isMDXComponent=!0}}]);