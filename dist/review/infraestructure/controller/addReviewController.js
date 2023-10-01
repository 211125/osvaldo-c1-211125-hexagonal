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
exports.AddReviewController = void 0;
class AddReviewController {
    constructor(addReviewUseCase) {
        this.addReviewUseCase = addReviewUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, bookId, review } = req.body;
            try {
                const newReview = yield this.addReviewUseCase.run(userId, bookId, review);
                if (newReview) {
                    res.status(201).send(newReview);
                }
                else {
                    res.status(400).send({ message: "Error creating review" });
                }
            }
            catch (error) {
                console.error("Error in AddReviewController:", error);
                res.status(500).send({ message: "Internal Server Error" });
            }
        });
    }
}
exports.AddReviewController = AddReviewController;
