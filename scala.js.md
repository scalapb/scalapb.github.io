---
title: "ScalaPB: Using with Scala.js"
layout: page
---

# ScalaPB in Scala.js

[Scala.js](http://scala-js.org) compiles Scala source code to equivalent
Javascript code.  It is possible to use ScalaPB generated case classes and
lenses in ScalaJS, and even serialize and parse byte arrays.

Limitations:

- The Java protocol buffers are unavailable, and therefore Java conversions
  and Java descriptors do not work (though Scala descriptors in ScalaPB >=
  0.6.0 would cover most use cases)

## Getting Started

Add to your library dependencies:

    libraryDependencies ++= Seq(
      "com.trueaccord.scalapb" %%% "scalapb-runtime" % com.trueaccord.scalapb.compiler.Version.scalapbVersion,

      // The following needed only if you include scalapb/scalapb.proto:
      "com.trueaccord.scalapb" %%% "scalapb-runtime" % com.trueaccord.scalapb.compiler.Version.scalapbVersion % "protobuf"
    )

### Shaded compiler plugin (Deprecated)

Prior to ScalaPB 0.6.4, there was a version conflict for protobuf-java. The compilerplugin would bring in a 3.x version, while scalajs plugin depends on a 2.5.x version of protobuf-java. To resolve this issue, a compilerplugin-shaded artifact has been created that contained a shaded version of protobuf-java as well as other dependencies.  From ScalaPB 0.6.4 and onwards, a shaded version of protobuf-java is shipped with the main artifact so compilerplugin-shaded is no longer necessary.

If you are using an older version of ScalaPB, here are the usage instructions for adding compilerplugin-shaded to your project. First, remove the dependency on `compilerplugin`, and instead add this to your `project/scalapb.sbt`:

    addSbtPlugin("com.thesamet" % "sbt-protoc" % "{{site.data.version.sbt_protoc}}" exclude ("com.trueaccord.scalapb", "protoc-bridge_2.10"))

    libraryDependencies += "com.trueaccord.scalapb" %% "compilerplugin-shaded" % "{{site.data.version.scalapb}}"

## Demo

Example project: [https://github.com/thesamet/scalapbjs-test](https://github.com/thesamet/scalapbjs-test)

Example with multi-project build: [https://github.com/thesamet/sbt-protoc/tree/master/examples/scalajs-multiproject](https://github.com/thesamet/sbt-protoc/tree/master/examples/scalajs-multiproject)

Live demo: [http://thesamet.github.io/scalapbjs-test/](http://thesamet.github.io/scalapbjs-test/)

