"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
class Review {
    constructor(id, userId, bookId, status) {
        this.id = id;
        this.userId = userId;
        this.bookId = bookId;
        this.status = status;
    }
}
exports.Review = Review;
