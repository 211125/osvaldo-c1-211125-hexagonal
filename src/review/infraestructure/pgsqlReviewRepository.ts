import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";
import ReviewModel from "./models/reviewModel";

export class PgsqlReviewRepository implements ReviewRepository {

    async addReview(userId: number, bookId: number, status: string): Promise<Review | null> {
        try {
            const createdReview = await ReviewModel.create({ userId, bookId, status });
            return new Review(createdReview.id, createdReview.userId, createdReview.bookId, createdReview.status);
        } catch (error) {
            console.error("Error in PgsqlReviewRepository:", error);
            return null;
        }
    }

    async getAllReviews(): Promise<Review[]> {
        const reviews = await ReviewModel.findAll();
        return reviews.map(review => new Review(review.id, review.userId, review.bookId, review.status));
    }
    
    async deleteReviewById(id: number): Promise<boolean> {
        try {
            const result = await ReviewModel.destroy({ where: { id } });
            return result > 0; 
        } catch (error) {
            console.error("Error in PgsqlReviewRepository:", error);
            return false;
        }
    }
    
    async getReviewByUserId(userId: number): Promise<Review | null> {
        const review = await ReviewModel.findOne({ where: { userId } });
        if (!review) return null;
        return new Review(review.id, review.userId, review.bookId, review.status);
    }

    async getInactiveReviews(): Promise<Review[]> {
        try {
            const inactiveReviews = await ReviewModel.findAll({ where: { status: 'Inactivo' } });
            return inactiveReviews.map(review => new Review(review.id, review.userId, review.bookId, review.status));
        } catch (error) {
            console.error("Error in PgsqlReviewRepository:", error);
            return [];
        }
    }

    async updateReview(review: Review): Promise<Review | null> {
        try {
            const [updateCount] = await ReviewModel.update(review, { where: { id: review.id } });
            
            if (updateCount > 0) {
                const updatedReviewData = await ReviewModel.findByPk(review.id);
                if (updatedReviewData) {
                    return new Review(
                        updatedReviewData.id,
                        updatedReviewData.userId,
                        updatedReviewData.bookId,
                        updatedReviewData.status
                    );
                }
            }
            return null;
        } catch (error) {
            console.error("Error in PgsqlReviewRepository:", error);
            return null;
        }
    }
}
