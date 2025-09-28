FROM ubuntu:20.04
RUN apt-get update && apt-get install -y openjdk-11-jdk wget curl && apt-get clean
RUN wget https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.93/bin/apache-tomcat-9.0.93.tar.gz -O /tmp/tomcat.tar.gz \
    && tar xvf /tmp/tomcat.tar.gz -C /opt/ \
    && mv /opt/apache-tomcat-9.0.93 /opt/tomcat \
    && rm /tmp/tomcat.tar.gz

RUN mkdir -p /opt/tomcat/webapps/ROOT
COPY ./index.jsp /opt/tomcat/webapps/ROOT/index.jsp
EXPOSE 8080
CMD [ "/opt/tomcat/bin/catalina.sh", "run" ]