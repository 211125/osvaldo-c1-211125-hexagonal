"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
class Review {
    constructor(id, userId, bookId, review) {
        this.id = id;
        this.userId = userId;
        this.bookId = bookId;
        this.review = review;
    }
}
exports.Review = Review;
