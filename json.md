---
title: "ScalaPB: Using JSON"
layout: page
---

# ScalaPB and JSON

ScalaPB can convert protocol buffers to and from JSON, using
[json4s](http://json4s.org/).

## Setting up your project

Make sure that you are using ScalaPB 0.5.x or later.

In `build.sbt` add a dependency on `scalapb-json4s`:

{%highlight scala%}
// For ScalaPB 0.6.x:
libraryDependencies += "com.trueaccord.scalapb" %% "scalapb-json4s" % "0.3.2"

// For ScalaPB 0.5.x:
libraryDependencies += "com.trueaccord.scalapb" %% "scalapb-json4s" % "0.1.6"
{%endhighlight%}

In your code, you can now convert to JSON:

{%highlight scala%}
import com.trueaccord.scalapb.json.JsonFormat

val r: String = JsonFormat.toJsonString(myProto)
{%endhighlight%}

Parse JSON back to a protocol buffer:

{%highlight scala%}
import com.trueaccord.scalapb.json.JsonFormat

val proto: MyProto = JsonFormat.fromJsonString[MyProto](
    """{"x": "17"}""")
{%endhighlight%}

There are lower-level functions `toJson()` and `fromJson()` that convert from
protos to json4s's `JValue`:

{%highlight scala%}
def toJson(m: GeneratedMessage): JObject

def fromJson[Proto](value: JValue): Proto
{%endhighlight%}

Finally, in JsonFormat there are two implicit methods that instantiate
`Reader[Proto]` and `Writer[Proto]`.

## More printing and parsing options

There are a few more options available to customize the format used to print
and parse JSON. To take advantage of that, instantiate `Printer` and `Parser` and
call `toJson()` / `fromJson()` as usual.

For example:

{%highlight scala%}
new com.trueaccord.scalapb.json.Printer(
  includingDefaultValueFields: Boolean = true,
  preservingProtoFieldNames: Boolean = true,
  formattingLongAsNumber: Boolean = true
).toJson(myProto)
{%endhighlight%}

See the list of [constructor paramerters here](https://github.com/scalapb/scalapb-json4s/blob/master/src/main/scala/com/trueaccord/scalapb/json/JsonFormat.scala)

