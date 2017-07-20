"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    /**
     *
     */
    function User(name, lastName, contactInfo, image) {
        if (contactInfo) {
            this.contactInfo = contactInfo;
        }
        if (image) {
            this.image = image;
        }
        if (lastName) {
            this.lastName = lastName;
        }
        if (name) {
            this.name = name;
        }
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (v) {
            this._lastName = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "contactInfo", {
        get: function () {
            return this._contactInfo;
        },
        set: function (v) {
            this._contactInfo = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (v) {
            this._image = v;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=UserData.js.map