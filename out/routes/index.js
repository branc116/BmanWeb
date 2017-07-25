"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var index = express.Router();
index.get("/", function (req, res, next) {
    console.log("index request");
    var meStr = fs.readFileSync("out/Data/Profile/Me.json", "UTF-8");
    var me = JSON.parse(meStr);
    var infoKeys = new Array();
    for (var inf in me.contactInfo) {
        if (inf) {
            infoKeys.push(inf);
        }
    }
    res.render("index", { title: "Bman",
        userData: me,
        userDataStr: meStr,
        userKeys: infoKeys
    });
});
exports.default = index;
//# sourceMappingURL=index.js.map