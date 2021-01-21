(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{118:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),c=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return t?o.a.createElement(m,s(s({ref:n},p),{},{components:t})):o.a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var a=t(3),o=t(7),i=(t(0),t(118)),r={title:"Protocol Buffer Tutorial: Scala",sidebar_label:"Tutorial",layout:"docs"},s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Protocol Buffer Tutorial: Scala",description:"This tutorial provides a basic Scala programmer's introduction to working with protocol buffers. By walking through creating a simple example application, it shows you how to",source:"@site/../docs/target/mdoc/getting-started.md",slug:"/getting-started",permalink:"/docs/getting-started",version:"current",sidebar_label:"Tutorial",sidebar:"someSidebar",previous:{title:"Installing ScalaPB",permalink:"/docs/installation"},next:{title:"Customizations",permalink:"/docs/customizations"}},l=[{value:"Why Use Protocol Buffers?",id:"why-use-protocol-buffers",children:[]},{value:"Where to Find the Example Code",id:"where-to-find-the-example-code",children:[]},{value:"Defining Your Protocol Format",id:"defining-your-protocol-format",children:[]},{value:"Compiling Your Protocol Buffers",id:"compiling-your-protocol-buffers",children:[]},{value:"Enums",id:"enums",children:[]},{value:"Nested messages",id:"nested-messages",children:[]},{value:"Serialization",id:"serialization",children:[]},{value:"Parsing",id:"parsing",children:[]},{value:"Parsing from an input stream",id:"parsing-from-an-input-stream",children:[]},{value:"Adding new person",id:"adding-new-person",children:[]},{value:"Running the example",id:"running-the-example",children:[]}],p={toc:l};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This tutorial provides a basic Scala programmer's introduction to working with protocol buffers. By walking through creating a simple example application, it shows you how to"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Define message formats in a .proto file.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use SBT to generate Scala case classes from proto files.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use ScalaPB's API to write and read messages."))),Object(i.b)("p",null,"This isn't a comprehensive guide to using protocol buffers in Scala. For more detailed reference information, see the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/generated-code"}),"Generated Code page"),"."),Object(i.b)("h2",{id:"why-use-protocol-buffers"},"Why Use Protocol Buffers?"),Object(i.b)("p",null,"The example we're going to use is a very simple \"address book\" application that can read and write people's contact details to and from a file. Each person in the address book has a name, an ID, an email address, and a contact phone number."),Object(i.b)("p",null,"How do you serialize and retrieve structured data like this? There are a few ways to solve this problem:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use Java Serialization. This is the default approach since it's built into the language, but it has a host of well-known problems (see Effective Java, by Josh Bloch pp. 213), and also doesn't work very well if you need to share data with applications written in C++ or Python."),Object(i.b)("li",{parentName:"ul"},'You can invent an ad-hoc way to encode the data items into a single string \u2013 such as encoding 4 ints as "12:3:-23:67". This is a simple and flexible approach, although it does require writing one-off encoding and parsing code, and the parsing imposes a small run-time cost. This works best for encoding very simple data.'),Object(i.b)("li",{parentName:"ul"},"Serialize the data to JSON (or XML). This approach can be very attractive since JSON and XML are (sort of) human readable and there are plenty of libraries for lots of languages. This can be a good choice if you want to share data with other applications/projects. However, JSON and XML are notoriously space intensive, and encoding/decoding it can impose a huge performance penalty on applications. Also, navigating JSON AST trees or XML DOM trees is considerably more complicated than navigating simple fields in a case class normally would be.")),Object(i.b)("p",null,"Protocol buffers are the flexible, efficient, automated solution to solve exactly this problem. With protocol buffers, you write a ",Object(i.b)("inlineCode",{parentName:"p"},".proto")," description of the data structure you wish to store. From that, the protocol buffer compiler creates a case class that implements automatic encoding and parsing of the protocol buffer data with an efficient binary format. Importantly, the protocol buffer format supports the idea of extending the format over time in such a way that the code can still read data encoded with the old format."),Object(i.b)("h2",{id:"where-to-find-the-example-code"},"Where to Find the Example Code"),Object(i.b)("p",null,"The example code for this tutorial is under the ",Object(i.b)("inlineCode",{parentName:"p"},"examples/basic")," directory\nin ScalaPB's repo. To get your copy:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/scalapb/ScalaPB.git\ncd examples/basic\n")),Object(i.b)("h2",{id:"defining-your-protocol-format"},"Defining Your Protocol Format"),Object(i.b)("p",null,"By default, all proto files under ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/protobuf")," will be compiled to Scala case classes. The following example ",Object(i.b)("inlineCode",{parentName:"p"},".proto")," file resides in ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/protobuf/addressbook.proto"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-protobuf"}),'syntax = "proto2";\n\npackage tutorial;\n\nmessage Person {\n  required string name = 1;\n  required int32 id = 2;\n  optional string email = 3;\n\n  enum PhoneType {\n    MOBILE = 0;\n    HOME = 1;\n    WORK = 2;\n  }\n\n  message PhoneNumber {\n    required string number = 1;\n    optional PhoneType type = 2 [default = HOME];\n  }\n\n  repeated PhoneNumber phones = 4;\n}\n\nmessage AddressBook {\n  repeated Person people = 1;\n}\n')),Object(i.b)("p",null,"Let's go through each part of the file and see what it does."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},".proto")," file starts with a package declaration, which helps to prevent naming conflicts between different projects. In Scala, the package name followed by the file name is used as the Scala package unless you have either explicitly specified a java_package, or specified a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/customizations"}),"scala package option"),"."),Object(i.b)("p",null,"Next, you have your message definitions. A message is just an aggregate containing a set of typed fields. Many standard simple data types are available as field types, including ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),", ",Object(i.b)("inlineCode",{parentName:"p"},"int32"),", ",Object(i.b)("inlineCode",{parentName:"p"},"float"),", ",Object(i.b)("inlineCode",{parentName:"p"},"double"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"string"),". You can also add further structure to your messages by using other message types as field types \u2013 in the above example the ",Object(i.b)("inlineCode",{parentName:"p"},"Person")," message contains ",Object(i.b)("inlineCode",{parentName:"p"},"PhoneNumber")," messages, while the ",Object(i.b)("inlineCode",{parentName:"p"},"AddressBook")," message contains ",Object(i.b)("inlineCode",{parentName:"p"},"Person")," messages. You can even define message types nested inside other messages \u2013 as you can see, the ",Object(i.b)("inlineCode",{parentName:"p"},"PhoneNumber")," type is defined inside ",Object(i.b)("inlineCode",{parentName:"p"},"Person"),". You can also define ",Object(i.b)("inlineCode",{parentName:"p"},"enum")," types if you want one of your fields to have one of a predefined list of values \u2013 here you want to specify that a phone number can be one of ",Object(i.b)("inlineCode",{parentName:"p"},"MOBILE"),", ",Object(i.b)("inlineCode",{parentName:"p"},"HOME"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"WORK"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},'" = 1"'),", ",Object(i.b)("inlineCode",{parentName:"p"},'" = 2"'),' markers on each element identify the unique "tag" that field uses in the binary encoding. Tag numbers 1-15 require one less byte to encode than higher numbers, so as an optimization you can decide to use those tags for the commonly used or repeated elements, leaving tags 16 and higher for less-commonly used optional elements. Each element in a repeated field requires re-encoding the tag number, so repeated fields are particularly good candidates for this optimization.'),Object(i.b)("p",null,"Each field must be annotated with one of the following modifiers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"required")),": a value for the field must be provided when constructing a message case class. Parsing a message that misses a required field will throw an ",Object(i.b)("inlineCode",{parentName:"li"},"InvalidProtocolBufferException"),". Other than this, a required field behaves exactly like an optional field."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"optional")),': the field may or may not be set. If an optional field value isn\'t set, a default value is used. For simple types, you can specify your own default value, as we\'ve done for the phone number type in the example. Otherwise, a system default is used: zero for numeric types, the empty string for strings, false for bools. For embedded messages, the default value is always the "default instance" or "prototype" of the message, which has none of its fields set. Calling the accessor to get the value of an optional (or required) field which has not been explicitly set always returns that field\'s default value. In proto2, optional fields are represented as ',Object(i.b)("inlineCode",{parentName:"li"},"Option[]"),". In proto3, optional primitives are not wrapped in ",Object(i.b)("inlineCode",{parentName:"li"},"Option[]"),", but messages are."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"repeated")),": the field may be repeated any number of times (including zero). The order of the repeated values will be preserved in the protocol buffer. Think of repeated fields as dynamically sized arrays. They are represented in Scala as ",Object(i.b)("inlineCode",{parentName:"li"},"Seq"),"s.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Required Is Forever"),". You should be very careful about marking fields as required. If at some point you wish to stop writing or sending a required field, it will be problematic to change the field to an optional field \u2013 old readers will consider messages without this field to be incomplete and may reject or drop them unintentionally. You should consider writing application-specific custom validation routines for your buffers instead. Some engineers at Google have come to the conclusion that using required does more harm than good; they prefer to use only optional and repeated. However, this view is not universal.")),Object(i.b)("p",null,"You'll find a complete guide to writing ",Object(i.b)("inlineCode",{parentName:"p"},".proto")," files \u2013 including all the possible field types \u2013 in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/protocol-buffers/docs/proto"}),"Protocol Buffer Language Guide"),". Don't go looking for facilities similar to class inheritance, though \u2013 protocol buffers don't do that."),Object(i.b)("h2",{id:"compiling-your-protocol-buffers"},"Compiling Your Protocol Buffers"),Object(i.b)("p",null,"Start ",Object(i.b)("inlineCode",{parentName:"p"},"sbt")," and type ",Object(i.b)("inlineCode",{parentName:"p"},"compile")," to compile the tutorial project."),Object(i.b)("p",null,"Now, take a look at the files that were generated under\n",Object(i.b)("inlineCode",{parentName:"p"},"target/scala-2.13/src_managed/main/scalapb/com/example/tutorial/addressbook"),":"),Object(i.b)("p",null,"You will find ",Object(i.b)("inlineCode",{parentName:"p"},"Person.scala"),", with a case class that conceptually looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"final case class Person(\n    name: String,\n    id: Int,\n    email: Option[String] = None,\n    phones: Seq[PhoneNumber] = Seq.empty,\n    ...\n")),Object(i.b)("p",null,"The actual generated code will contain fully qualified class names (such as ",Object(i.b)("inlineCode",{parentName:"p"},"_root_.scala.Predef.String"),") to prevent name collissions between entities defined in your protocol buffer and other Scala code."),Object(i.b)("p",null,"As you can see, each protobuf field becomes a member in the generated case class."),Object(i.b)("p",null,"Repeated fields, by default, have a ",Object(i.b)("inlineCode",{parentName:"p"},"Seq[T]")," type. When they are parsed, the runtime type would be a ",Object(i.b)("inlineCode",{parentName:"p"},"Vector"),"."),Object(i.b)("h2",{id:"enums"},"Enums"),Object(i.b)("p",null,"The enum ",Object(i.b)("inlineCode",{parentName:"p"},"PhoneType")," is represented as a sealed abstract class, extended by a case object for each possible enum value:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'sealed abstract class PhoneType(val value: Int)\n    extends _root_.scalapb.GeneratedEnum {\n  type EnumType = PhoneType\n  def isMobile: Boolean = false\n  def isHome: Boolean = false\n  def isWork: Boolean = false\n}\n\nobject PhoneType {\n  case object MOBILE extends PhoneType(0) {\n    val index = 0\n    val name = "MOBILE"\n    override def isMobile: Boolean = true\n  }\n\n  case object HOME extends PhoneType(1) {\n    val index = 1\n    val name = "HOME"\n    override def isMobile: Boolean = true\n  }\n\n  // ...\n}\n')),Object(i.b)("p",null,"Since Scala type equality is not type-safe (",Object(i.b)("inlineCode",{parentName:"p"},"a == b")," will compile even when\n",Object(i.b)("inlineCode",{parentName:"p"},"a")," and ",Object(i.b)("inlineCode",{parentName:"p"},"b")," are of types that can never be equal), it is recommended to use\nthe various ",Object(i.b)("inlineCode",{parentName:"p"},"isX")," methods or pattern matching for comparison:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'// Using isX:\nval t = if (phoneType.isMobile) "Mobile" else "Not Mobile"\n\n// Using pattern matching\nphoneType match {\n  case PhoneType.MOBILE => println("Mobile!")\n  case _                => println("Not mobile!")\n}\n')),Object(i.b)("h2",{id:"nested-messages"},"Nested messages"),Object(i.b)("p",null,"Nested messages appear as case classes inside the companion object of\nthe containing message."),Object(i.b)("h2",{id:"serialization"},"Serialization"),Object(i.b)("p",null,"Each message case class extends a base trait called ",Object(i.b)("inlineCode",{parentName:"p"},"GeneratedMessage")," which provides\nmethods that help serialize a message:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"def toByteArray: Array[Byte]"),": serializes the message and return a byte array containing its raw bytes."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"def writeTo(output: OutputStream): Unit"),": serializes the message and writes it to an ",Object(i.b)("inlineCode",{parentName:"li"},"OutputStream"),".")),Object(i.b)("h2",{id:"parsing"},"Parsing"),Object(i.b)("p",null,"The companion object of each message extends a base trait called ",Object(i.b)("inlineCode",{parentName:"p"},"GeneratedMessageCompanion[A]")," where ",Object(i.b)("inlineCode",{parentName:"p"},"A")," is the type of the message. It provides many\nuseful methods that helps dealing with a message in a generic way, however the primary use is parsing:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"def parseFrom(input: InputStream): A"),": reads and parses a message from an ",Object(i.b)("inlineCode",{parentName:"li"},"InputStream"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"def parseFrom(s: Array[Byte]): A"),": parses a message from the given byte array.")),Object(i.b)("h2",{id:"parsing-from-an-input-stream"},"Parsing from an input stream"),Object(i.b)("p",null,"The following example code loads binary data from a file and parses it as an ",Object(i.b)("inlineCode",{parentName:"p"},"AddressBook"),". If the file doesn't exist it returns an empty ",Object(i.b)("inlineCode",{parentName:"p"},"AddressBook"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'def readFromFile(): AddressBook =\n  Using(new FileInputStream("addressbook.pb")) { fileInputStream =>\n    AddressBook.parseFrom(fileInputStream)\n  }.recover {\n    case _: FileNotFoundException =>\n      println("No address book found. Will create a new file.")\n      AddressBook()\n  }.get\n')),Object(i.b)("h2",{id:"adding-new-person"},"Adding new person"),Object(i.b)("p",null,"The following code prompts the user to enter a person's data. It then loads\nthe address book from a file, adds the new person to the list, and saves it again:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'def personFromStdin(): Person = {\n  print("Enter person ID (int): ")\n  val id = StdIn.readInt()\n  print("Enter name: ")\n  val name = StdIn.readLine()\n  print("Enter email address (blank for none): ")\n  val email = StdIn.readLine()\n\n  def getPhone(): Option[Person.PhoneNumber] = {\n    print("Enter a phone number (or leave blank to finish): ")\n    val number = StdIn.readLine()\n    if (number.nonEmpty) {\n      print("Is this a mobile, home, or work phone [mobile, home, work] ? ")\n      val typ = StdIn.readLine() match {\n        case "mobile" => Some(Person.PhoneType.MOBILE)\n        case "home"   => Some(Person.PhoneType.HOME)\n        case "work"   => Some(Person.PhoneType.WORK)\n        case _ =>\n          println("Unknown phone type. Leaving as None.")\n          None\n      }\n      Some(Person.PhoneNumber(number = number, `type` = typ))\n    } else None\n  }\n\n  // Keep prompting for phone numbers until None is returned.\n  val phones =\n    Iterator\n      .continually(getPhone())\n      .takeWhile(_.nonEmpty)\n      .flatten\n      .toSeq\n\n  Person(\n    id = id,\n    name = name,\n    email = if (email.nonEmpty) Some(email) else None,\n    phones = phones\n  )\n}\n\ndef addPerson(): Unit = {\n  val newPerson = personFromStdin()\n  val addressBook = readFromFile()\n  // Append the new person to the people list field\n  val updated = addressBook.update(\n    _.people :+= newPerson\n  )\n  Using(new FileOutputStream("addressbook.pb")) { output =>\n    updated.writeTo(output)\n  }\n}\n')),Object(i.b)("h2",{id:"running-the-example"},"Running the example"),Object(i.b)("p",null,"In sbt, type ",Object(i.b)("inlineCode",{parentName:"p"},"run")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'This document, "Protocol Buffer Tutorial: Scala" is a modification of ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/protocol-buffers/docs/javatutorial"}),'"Protocol Buffer Basics: Java"'),", which is a work created and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/terms/site-policies"}),"shared by Google"),"  and used according to terms described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://creativecommons.org/licenses/by/4.0/"}),"Creative Commons 4.0 Attribution License"),".")))}c.isMDXComponent=!0}}]);