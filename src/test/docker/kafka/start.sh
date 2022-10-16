#!/bin/bash

/opt/zookeeper/bin/zkServer.sh start /etc/zookeeper/zoo.cfg

LOG_DIR="/var/log/kafka"
JMX_PORT=19092
/opt/kafka/bin/kafka-server-start.sh /etc/kafka/kafka-server.properties




