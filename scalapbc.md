---
title: "ScalaPBC: Compiling outside SBT"
layout: page
---

# ScalaPBC

ScalaPBC is a tool that lets you generate Scala sources from the command line (or from a maven build).

## Installation

You can download the current release here: [scalapbc-{{site.data.version.scalapb}}.zip](https://github.com/scalapb/ScalaPB/releases/download/v{{site.data.version.scalapb}}/scalapbc-{{site.data.version.scalapb}}.zip).

Older versions can be found in the [releases page](https://github.com/scalapb/ScalaPB/releases).

## Usage

ScalaPBC is a wrapper around protoc. It actually ships with [multiple
versions](https://github.com/os72/protoc-jar) of protoc embedded in the jar
and you can pick the one you want to use by passing the desired version as the
first command line argument:

{%highlight shell%}
./bin/scalapbc -v340 [options]
{%endhighlight%}

{%highlight shell%}
./bin/scalapbc -v261 [options]
{%endhighlight%}

To generate Scala code, invoke ScalaPBC like this:

{%highlight shell%}
./bin/scalapbc -v340 --scala_out=some/output/directory myproto.proto
{%endhighlight%}

To generate both Scala code and Java code along with Java conversions:

{%highlight shell%}
./bin/scalapbc -v340 \
    --scala_out=java_conversions:some/output/directory \
    --java_out=some/output/directory \
    myproto.proto
{%endhighlight%}

## Passing generator parameters

It is possible to pass parameters to the ScalaPB code generator as a
comma-separated list following the `--scala_out=` and separated from the path
by colon (`:`)

{%highlight shell%}
./bin/scalapbc -v340 \
    --scala_out=param1,param2:some/output/directory
{%endhighlight%}

The supported parameters are: `flat_package`, `java_conversions`, `grpc` and
`single_line_to_proto_string`. Those parameters are described in [SBT settings]({{site.baseurl}}/sbt-settings.html)
