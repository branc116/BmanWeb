"use strict";

import * as express from "express";
import * as fs from "fs";
import { User } from "../Data/UserData";
const index = express.Router();

index.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  //render page
  console.log("index request");
  const me : User = JSON.parse(fs.readFileSync("../Data/User/me.json", "UTF-8"));
  res.render("index", {title: "Bman",
                       userData: me});
});
export default index;