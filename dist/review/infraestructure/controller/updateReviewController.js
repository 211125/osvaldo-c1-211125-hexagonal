"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReviewController = void 0;
const review_1 = require("../../domain/review");
class UpdateReviewController {
    constructor(updateReviewUseCase) {
        this.updateReviewUseCase = updateReviewUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, userId, bookId, review } = req.body;
            const reviewToUpdate = new review_1.Review(id, userId, bookId, review);
            try {
                const updatedReview = yield this.updateReviewUseCase.run(reviewToUpdate);
                if (updatedReview) {
                    res.status(200).send(updatedReview);
                }
                else {
                    res.status(404).send({ message: "Review not found" });
                }
            }
            catch (error) {
                console.error("Error in UpdateReviewController:", error);
                res.status(500).send({ message: "Internal Server Error" });
            }
        });
    }
}
exports.UpdateReviewController = UpdateReviewController;
