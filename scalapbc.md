---
title: "ScalaPBC: Compiling outside SBT"
layout: page
---

# ScalaPBC

ScalaPBC is a tool that lets you generate Scala sources from the command line (or from a maven build).

## Installation

You can download the current release here: [scalapbc-{{site.data.version.scalapb}}.zip](https://github.com/scalapb/ScalaPB/releases/download/v{{site.data.version.scalapb}}/scalapbc-{{site.data.version.scalapb}}.zip).

Older versions can be found in the [releases page](https://github.com/scalapb/ScalaPB/releases).

Unzip the file, and inside you will find two scripts: `bin/scalapbc` (and
`bin/scalapbc.bat`) that can be used on Unix/Linux/Mac OS X (and Windows,
respectively).

## Usage

ScalaPBC is used exactly like protoc. In fact, scalapbc calls protoc.
It ships with [multiple versions](https://github.com/os72/protoc-jar) of protoc embedded in the
jar and you can pick the one you want to use by passing the desired version as the
first command line argument:

{%highlight shell%}
./bin/scalapbc -v351 [options]
{%endhighlight%}

{%highlight shell%}
./bin/scalapbc -v261 [options]
{%endhighlight%}

To generate Scala code, invoke ScalaPBC like this:

{%highlight shell%}
./bin/scalapbc -v351 --scala_out=some/output/directory myproto.proto
{%endhighlight%}

To generate both Scala code and Java code along with Java conversions:

{%highlight shell%}
./bin/scalapbc -v351 \
    --scala_out=java_conversions:some/output/directory \
    --java_out=some/output/directory \
    myproto.proto
{%endhighlight%}

## Passing generator parameters

If you would like to pass additional options, like `java_conversions`,
`flat_package`, or `single_line_to_proto_string`, it can be done like this:

    bin/scalapbc my.proto --scala_out=OPT1,OPT2:path/to/output/dir/

where OPT1,OPT2 is a comma-separated list of options. For example:

    bin/scalapbc my.proto --scala_out=flat_package,java_conversions:.

{%highlight shell%}
./bin/scalapbc -v351 \
    --scala_out=param1,param2:some/output/directory
{%endhighlight%}

The supported parameters are: `flat_package`, `java_conversions`, `grpc` and
`single_line_to_proto_string`. Those parameters are described in [SBT settings]({{site.baseurl}}/sbt-settings.html)
