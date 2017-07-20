"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var index = express.Router();
index.get("/", function (req, res, next) {
    //render page
    console.log("index request");
    var me = JSON.parse(fs.readFileSync("../Data/User/me.json", "UTF-8"));
    res.render("index", { title: "Bman",
        userData: me });
});
exports.default = index;
//# sourceMappingURL=index.js.map