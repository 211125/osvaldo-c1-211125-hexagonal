"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, title, author, code, url, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.code = code;
        this.url = url;
        this.status = status;
    }
}
exports.Book = Book;
