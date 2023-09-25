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
exports.DeleteReviewController = void 0;
class DeleteReviewController {
    constructor(deleteReviewUseCase) {
        this.deleteReviewUseCase = deleteReviewUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isDeleted = yield this.deleteReviewUseCase.execute(Number(req.params.id));
                if (isDeleted) {
                    res.status(200).send({ message: "Review successfully deleted" });
                }
                else {
                    res.status(404).send({ message: "Review not found" });
                }
            }
            catch (error) {
                console.error("Error in DeleteReviewController:", error);
                res.status(500).send({ message: "Internal Server Error" });
            }
        });
    }
}
exports.DeleteReviewController = DeleteReviewController;
