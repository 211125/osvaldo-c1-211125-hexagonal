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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgsqlReviewRepository = void 0;
const review_1 = require("../domain/review");
const reviewModel_1 = __importDefault(require("./models/reviewModel"));
class PgsqlReviewRepository {
    addReview(userId, bookId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdReview = yield reviewModel_1.default.create({ userId, bookId, status });
                return new review_1.Review(createdReview.id, createdReview.userId, createdReview.bookId, createdReview.status);
            }
            catch (error) {
                console.error("Error in PgsqlReviewRepository:", error);
                return null;
            }
        });
    }
    getAllReviews() {
        return __awaiter(this, void 0, void 0, function* () {
            const reviews = yield reviewModel_1.default.findAll();
            return reviews.map(review => new review_1.Review(review.id, review.userId, review.bookId, review.status));
        });
    }
    deleteReviewById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield reviewModel_1.default.destroy({ where: { id } });
                return result > 0;
            }
            catch (error) {
                console.error("Error in PgsqlReviewRepository:", error);
                return false;
            }
        });
    }
    getReviewByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const review = yield reviewModel_1.default.findOne({ where: { userId } });
            if (!review)
                return null;
            return new review_1.Review(review.id, review.userId, review.bookId, review.status);
        });
    }
    getInactiveReviews() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inactiveReviews = yield reviewModel_1.default.findAll({ where: { status: 'Inactivo' } });
                return inactiveReviews.map(review => new review_1.Review(review.id, review.userId, review.bookId, review.status));
            }
            catch (error) {
                console.error("Error in PgsqlReviewRepository:", error);
                return [];
            }
        });
    }
    updateReview(review) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [updateCount] = yield reviewModel_1.default.update(review, { where: { id: review.id } });
                if (updateCount > 0) {
                    const updatedReviewData = yield reviewModel_1.default.findByPk(review.id);
                    if (updatedReviewData) {
                        return new review_1.Review(updatedReviewData.id, updatedReviewData.userId, updatedReviewData.bookId, updatedReviewData.status);
                    }
                }
                return null;
            }
            catch (error) {
                console.error("Error in PgsqlReviewRepository:", error);
                return null;
            }
        });
    }
}
exports.PgsqlReviewRepository = PgsqlReviewRepository;
