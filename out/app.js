"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var index_1 = require("./routes/index");
/**
 * The server.
 *
 * @class Server
 */
var Server = (function () {
    /**
    * Constructor.
    *
    * @class Server
    * @constructor
    */
    function Server() {
        //create expressjs application
        this.app = express();
        this.configure(this.app);
        this.routes(this.app);
    }
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    Server.bootstrap = function () {
        return new Server();
    };
    /**
    * Configure routes
    *
    * @class Server
    * @method routes
    * @return void
    */
    Server.prototype.routes = function (app) {
        //home page
        //use router middleware
        app.use("/", index_1.default);
    };
    //configure web app middleware
    Server.prototype.configure = function (app) {
        app.set("views", path.join(__dirname, "views"));
        app.set("view engine", "pug");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.static(path.join(__dirname, "public")));
        app.use(function (error) {
            console.log(error);
        });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=app.js.map