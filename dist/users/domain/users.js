"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    constructor(id, name, last_name, email, password, phone, status) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.status = status;
    }
}
exports.Users = Users;
