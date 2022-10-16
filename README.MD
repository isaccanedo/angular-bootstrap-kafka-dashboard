# JSConnect Explorer

Angular 4 and Bootstrap 3 dashboard to display live status of data streams from Kafka broker


## Overview

Dashboard to display data ingestion pipeline live status for each incoming data feed.
This is a loosely coupled front-end that will sit on top of dpp-source-adapter backend data services
application. It will display live incoming and allow end-users to monitor data feeds and
build new ingestion pipelines without have write any JSON in the configuration files.

## Running the UI

1. Install npm packages.
2. Run npm start to launch the sample application.


## Configuration files

- domain.config.json - this is the list of the domain for which we can a data feed.
- conf folder - these are the properties for defining the data endpoint source, data connection adapter and sink which is the target to copy data to.


## Docker

There is a docker image to run Kafka broker on your localhost:2181.
To run install docker on your computer. Then run the following commands.

```
docker-compose up
docker-compose down
docker-compose up
docker ps
docker exec -it dppsourceadapters_kafka_1 bash
```

For storeslocation from the storeslocations.conf file create a topic…..

Then in the docker Kafka vm:
Get the port configured in Zookeeper
```
/opt/kafka/config/zooker.properties
```

Run the consumer giving topic…..
```
/opt/kafka_2.10-0.9.0.1/bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic stores
```

The JSConnect source adpaters code will need to be run to send message to the store topic. We need to write some code to send mock messages to this topic.



## Todo List, Framework challenges and epics

Build using Bootstrap v3, Node v6, Angular v2.4

Do not use JQuery code.
Stick to Bootstrap style css as close as possible.


### [EPIC] Domain page (High priority)

Page to show live pie charts of percentage completion for each data domain status. We should try get status from Kafka broker.
If we can't show percentage completion because data maybe a continuous real time stream we can show a spinner.

#### Kafka status
- Show for each data domain listed in domain.config.json
- Setup test kafka broker using docker. Create test message producer that will generate random messages and send to this broker continuously for testing purpose.
- Write consumer code to read messages from the broker. Either display status running or calculate percentage completion to show current status of incoming message stream.
- Implement animated live charts to show active.

#### JMS status
- Setup test JMS server using docker.  Create test message producer that will generate random messages and send to this broker continuously for testing purpose.
- Write consumer code to read messages from the JMS queue. Either display status running or calculate percentage completion to show current status of incoming message stream.
- Implement animated live charts to show active.

- (Optional) Pop-up to show contents of incoming message sample



### [EPIC] Pipelines page (High priority)

Shows the pipeline job from source to sink. We show an animated progress bar between the process points if live. Buttons to start job.
Need to find out how Angular can run a command line script. (This is a Java program that start the source adapter jobs).

#### Command line job execution
- Implement RUN button to call a command line program.
- Write code to call a command line program or .bat file
For example backend program is executed on unix shell using:
```
./bin/jsconnect --conf conf/store_location.dev.conf
```
This will run the data ingestion program with --conf [path to config file from conf/ folder]

#### Read, Update JSON config files in conf/ folder
- Write code to read JSON from config files. Update file from form input fields.
- Edit pipeline button should update domain.config.json. The domain config file path is listed here.
- On the Edit page, read from config file, loop over the JSON elements. For each create an editable input form element.
- Save button - should update domain.config.json and update the config file for that domain. i.e For storelocation -> "config": "conf/store_locations.dev.conf"

#### Process Steps
- Implement animated progress bar to show active in progress between each point between SOURCE -> SINK (Ignore EDIE - this is a custom program done by another team)
- Each progress steps name / source type should be defined by the config file. This can be either SFTP, HTTP REST or JMS.
See https://github.com/dawudr/angular-bootstrap-kafka-dashboard/blob/master/docs/Introduction.MD
- Add exclamation flag for errors. With button to show details. It's best to have another page called Errors and Notifications (todo later)
- At each point hover over to get popup of detailed status.


### [EPIC] Jobs page (Low priority)

This is configure time scheduling of the job and submit this to Oozie in Cloudera.
This will be a form that will call the out-of-the-box standard REST API that comes with Oozie application.
- List of job from Oozie
- Handle creating a new scheduled job for a pipeline, updating existing jobs

### [EPIC] Sources page (Medium priority)

This is the pipeline designer. GUI to enable end-user to build a new domain configuration file without having to write JSON file in conf/ folder.
This will show:-
- List of Source type e.g REST api, SFTP, Database connection, JMS Queues
- List of Adapters - for read data from different file stream and data formats and compressed files.
- List of Sink - destination to copy the data to e.g Amazon S3 or Kafka broker

Users can select with drop down to build end to end pipeline and that will generate a new .conf file and add an entry to the domain.config.json file.


### [EPIC] Settings page (Medium priority)

This lists configuration files paths because the /conf folder maybe be installed on another path on the linux server environments.
Any other settings here?


### [EPIC] Errors and Notifications monitoring page
- Write code to read from backend application log files. Filter list to show lines that contain string "ERROR".
- Add location of command line program log files to domain.config.json. - I need to find out where these will be on the unix server.
- Use text area to show live logging by read from log file as they are updated when the command line program is running.
- List error's by date time, domain and severity.

### [EPIC] Login page and Security
- Create JSON file list of username and password for test.
- Create sign in page.
- Wirte authentication code against rest api (using JSON file for now).
- Use high secure code to protect against Cross-Site Request Forgery (CSRF) and Cross-site Scripting (XSS)





### [OTHER]
Any fantastics ideas?

See:-
http://webapplayers.com/inspinia_admin-v2.7/graph_flot.html
http://wrapbootstrap.com/preview/WB0R5L90S


## [LIBRARIES and USEFUL Links]
- KAFKA - https://github.com/confluentinc/kafka-rest-node
- OOZIE - https://oozie.apache.org/docs/4.0.0/WebServicesAPI.html#Job_Information
- Execute command line program from Javascript - http://stackoverflow.com/questions/1880198/how-to-execute-shell-command-in-javascript and https://nodejs.org/api/child_process.html
- Angular Tutorial - https://angular.io/docs/ts/latest/tutorial/
- READ from JSON files - http://crunchify.com/how-to-read-json-object-from-file-in-java/
- BOOTSTRAP fancy menus - http://navnav.co/
