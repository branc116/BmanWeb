"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//module dependencies.
var appNs = require("../app");
var http = require("http");
//get port from environment and store in Express.
var app = appNs.Server.bootstrap().app;
var port = 55556;
app.set("port", port);
//create http server
var server = http.createServer(app);
server.on("listening", function () {
    console.log("Started listening");
});
server.listen(port);
//add error handler
server.on("error", function (error) {
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
server.on("listening", function () {
    var addr = server.address();
    var bind = typeof addr === "string" ?
        "pipe " + addr :
        "port " + addr.port;
    console.log("Listening on " + bind);
});
//# sourceMappingURL=www.js.map