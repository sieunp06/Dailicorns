FROM openjdk:11
ARG JAR_FILE=build/libs/dailicorns.jar
COPY ${JAR_FILE} ./dailicorns.jar
ENV TZ=Asia/Seoul
ENTRYPOINT ["java", "-jar", "./dailicorns.jar"]