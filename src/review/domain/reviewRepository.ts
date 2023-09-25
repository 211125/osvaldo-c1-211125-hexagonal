import { Review } from './review';

export interface ReviewRepository {
    addReview(userId: number, bookId: number, status: string): Promise<Review | null>;
    getAllReviews(): Promise<Review[]>;
    deleteReviewById(id: number): Promise<boolean>;
    getReviewByUserId(userId: number): Promise<Review | null>;
    getInactiveReviews(): Promise<Review[]>;
    updateReview(review: Review): Promise<Review | null>;
}
