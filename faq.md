---
title: "ScalaPB: Frequently Asked Questions"
layout: page
---

# Frequently Asked Questions

## IntelliJ complains on duplicate files ("class is already defined")

If you are using sbt-protoc this should not happen. Please file a bug.

If you are still using sbt-scalapb, please switch to sbt-protoc as described
in the installation instruction.

sbt-protobuf which sbt-scalapb relies on defaults to generating the case
classes in `target/src_managed/compiled_protobuf/`.  This leads to a situation
where both `target/src_managed/compiled_protobuf/` and its parent, `target/src_managed/`,
are considered source directories and the source files are seen twice. To
eliminate this problem, let's tell sbt-protobuf to generate the sources into
the parent directory. Add this to your `build.sbt`:

{%highlight scala%}
scalaSource in PB.protobufConfig := sourceManaged.value
{%endhighlight%}

If you generate Java sources, add,

{%highlight scala%}
javaSource in PB.protobufConfig := sourceManaged.value
{%endhighlight%}

## How do I use ScalaPB with Maven?

ScalaPB can be invoked in your Maven build by calling ScalaPBC, a standalone
Java application that generates code. See an [example project](https://github.com/thesamet/scalapb-maven-example).

The relevant parts are marked with "Add the generated folder as a source" and
"Compile the proto file(s)".

## I am getting "Import was not found or had errors"

If you are using sbt-protoc and importing protos like `scalapb/scalapb.proto`,
or common protocol buffers like `google/protobuf/wrappers.proto`:

Add the following to your `build.sbt`:

    libraryDependencies += "com.trueaccord.scalapb" %% "scalapb-runtime" % com.trueaccord.scalapb.compiler.Version.scalapbVersion % "protobuf"

This tells `sbt-protoc` to extract protos from this jar (and all its
dependencies, which includes Google's common protos), and make them available
in the include path that is passed to protoc.

If you are not using sbt (for example, spbc), then you need to make those
files available on the file system.

## How do I generate Scala code for protos from another jar?

Include the jar as a `protobuf` dependency in your libraryDependencies:

    libraryDependencies += "com.somepackage" %% "that-has-jar" % "1.0" % "protobuf"

This will tell sbt-protoc to extract the protos from that jar into
`target/scala-2.vv/protobuf-external`. This makes it possible to `import`
those protos from your local protos. sbt-protoc looks for protocol buffers to
compile in the directories listed in `PB.protoSources`. There you need to
add a line like this to your `build.sbt`:

    PB.protoSources in Compile :+= Seq((target)(_ / "protobuf-external").value)

