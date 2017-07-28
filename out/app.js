"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var index_1 = require("./routes/index");
var Server = (function () {
    function Server() {
        this.app = express();
        this.configure(this.app);
        this.routes(this.app);
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.routes = function (app) {
        app.use("/", index_1.default);
        app.use(function (error) {
        });
    };
    Server.prototype.configure = function (app) {
        app.set("views", path.join(__dirname, "views"));
        app.set("view engine", "pug");
        app.use("/styles", express.static(path.join(__dirname, "style")));
        app.use("/img", express.static(path.join(__dirname, "Data", "img")));
        app.use("/posts", express.static(path.join(__dirname, "Data", "BlogPosts")));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.static(path.join(__dirname, "public")));
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=app.js.map