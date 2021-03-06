A GWT example project using GWT-Vue with Webpack and the https://github.com/ascendtech/gwt-gradle plugin.

# Getting Started

Run REST service
```bash
cd rest && ../gradlew run
```


Run frontend in dev mode (requires 3 different terminals)
```bash
cd todoMaterial && ../gradlew webpackDev
cd todoMaterial && ../gradlew gwtDev
cd todoMaterial && ../gradlew -t build
```
Open browser to http://localhost:8888/


In dev mode a refresh will recompile GWT, CSS, JS, and webpack changes.

Compile deploy
```bash
#deploy service with proxy in front (/service/todo to localhost:12111) (run service using java -jar)
cd rest && ../gradlew shadowJar

#copy to archive in build/webapp to nginx or apache
cd todoMaterial && ../gradlew gwtArchive
```
