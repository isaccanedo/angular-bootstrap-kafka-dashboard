# Overview

JSConnect is a framework adopting ideas from the latest generation of data processing tools like Kafka Connect, Akka Streams and Apache Beam projects, applied to DPP architecture, specifically to its Source Producers component which is responsible for bringing data from disparate Primary Data Sources to the platform's environment, i.e. Secondary Sources. The following definitions are used throughout the codebase as well as in this document:

- Data set - either a bounded dataset (set of files, sql table, ...) or unbounded data set (message queue, topic,  socket,...)
- Source - abstract component which provides a stream of entries, whether they come from bounded or unbounded input data set
- Sink - abstract consumer of a Source which is runnable
- Pipe - is a complete processor chain which has at least one source and exactly one sink and is runnable
- Connector - either a source connector or a sink connector for a specific technology, e.g. SFTP, LocalFS, JDBC, JMS, Kafka
- Adapter - a concrete pipeline connecting a Primary Source data set through a source connector via zero or more transformations to sink connector to the final Secondary Source data set, e.g. Customer Profile Adapter


In respect to the terms defined above, all data sets are streamed through the system, whether they are bounded or unbounded, the only difference being that an adapter which streams through say a set of files will terminate while an adapter which streams through an ongoing event stream from a JMS broker will not terminate. Both bounded and unbounded adapters can still be stopped / restarted by an external scheduler process.  Below is an activity diagram for the general design of source adapter built with Sainsburys Connect

![General Design](https://github.com/dawudr/angular-bootstrap-kafka-dashboard/raw/master/docs/dpp-source-adapters-general-design.png "General Design")


## Current Source Adapters Landscape

![Data domain Ingestion Pipelines](https://github.com/dawudr/angular-bootstrap-kafka-dashboard/raw/master/docs/JSConnect%20Landscape.png "Data domain Ingestion Pipelines")
