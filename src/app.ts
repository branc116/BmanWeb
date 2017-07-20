import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import index from "./routes/index";

/**
 * The server.
 *
 * @class Server
 */
export class Server {
    public app: express.Application;

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
        return new Server();
    }
    /**
    * Configure routes
    *
    * @class Server
    * @method routes
    * @return void
    */
    private routes(app: express.Application) {
        //home page
        //use router middleware
        app.use("/", index);
    }
    //configure web app middleware
    private configure(app: express.Application) {
        app.set("views", path.join(__dirname, "views"));
        app.set("view engine", "pug");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.static(path.join(__dirname, "public")));


        app.use((error: any) => {
            console.log(error);
        });
    }

    /**
    * Constructor.
    *
    * @class Server
    * @constructor
    */
    constructor() {
        //create expressjs application
        this.app = express();
        this.configure(this.app);
        this.routes(this.app);
    }
}