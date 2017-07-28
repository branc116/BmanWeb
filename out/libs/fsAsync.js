"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var FsAsync = (function () {
    function FsAsync() {
    }
    FsAsync.prototype.readdirAsync = function (path) {
        return new Promise(function (resolve, reject) {
            fs.readdir(path, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    FsAsync.prototype.readFileAsync = function (path) {
        return new Promise(function (resolve, reject) {
            fs.readFile(path, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result.toString("utf8"));
                }
            });
        });
    };
    return FsAsync;
}());
exports.FsAsync = FsAsync;
//# sourceMappingURL=fsAsync.js.map