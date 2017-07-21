"use strict";

import * as express from "express";
import * as fs from "fs";
import { User } from "../Data/UserData";
const index = express.Router();

index.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  //render page
  console.log("index request");
  const meStr = fs.readFileSync("out/Data/Profile/Me.json", "UTF-8");
  const me : User = JSON.parse(meStr);
  res.render("index", {title: "Bman",
                       userData: me,
                       userDataStr: meStr});
});
export default index;