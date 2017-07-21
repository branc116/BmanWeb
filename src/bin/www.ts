"use strict";

//module dependencies.
import * as appNs from "../app";
import * as debug from "debug";
import * as http from "http";

//get port from environment and store in Express.
let app = appNs.Server.bootstrap().app;
const en =  process;
var os = process.env["OS"];
var port = os === "Windows_NT" ? 5555 : 80;
app.set("port", port);

//create http server
var server = http.createServer(app);
server.on("listening", () => {
    console.log("Started listening");
});

server.listen(port);

//add error handler
server.on("error", (error) => {
    if (error.name !== "listen") {
        throw error;
    }

    var bind = typeof port === "string" ?
        "Pipe " + port :
        "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.message) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
});

//start listening on port
server.on("listening", () => {
    var addr = server.address();
    var bind = typeof addr === "string" ?
        "pipe " + addr :
        "port " + addr.port;
    console.log("Listening on " + bind);
});