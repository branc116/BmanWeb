"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appNs = require("../app");
var http = require("http");
var app = appNs.Server.bootstrap().app;
var en = process;
var os = process.env["OS"];
var port = os === "Windows_NT" ? 5555 : 80;
app.set("port", port);
var server = http.createServer(app);
server.on("listening", function () {
    console.log("Started listening");
});
server.listen(port);
server.on("error", function (error) {
    if (error.name !== "listen") {
        throw error;
    }
    var bind = typeof port === "string" ?
        "Pipe " + port :
        "Port " + port;
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
server.on("listening", function () {
    var addr = server.address();
    var bind = typeof addr === "string" ?
        "pipe " + addr :
        "port " + addr.port;
    console.log("Listening on " + bind);
});
//# sourceMappingURL=www.js.map