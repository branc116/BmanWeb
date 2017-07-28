"use strict";

import * as express from "express";
import { User } from "../Data/UserData";
import { Posts } from "../libs/findBlogPosts";
import { Profile, ProfileReturn } from "../libs/findProfile";
const index = express.Router();

index.get("/", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  //render page
  const prof = await new Profile().getProfile("out/Data/Profile/Me.json");
  if (!(prof instanceof Array)) {
    throw `Can't get profile: ${prof}`;
  }
  const posts = await new Posts().getAllPosts("./out/Data/BlogPosts/");
  if (!(posts instanceof Array)) {
    throw `Can't get posts: ${posts}`;
  }
  const [usr, usrStr, keys] = prof;
  res.render("index", {title: "Bman",
                       userData:  usr,
                       userDataStr: usrStr,
                       userKeys: keys,
                       posts: posts
                      });
});
export default index;