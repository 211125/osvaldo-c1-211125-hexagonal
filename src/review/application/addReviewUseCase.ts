import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";



export class AddReviewUseCase {
    constructor(private reviewRepository: ReviewRepository) {}

    async run(userId: number, bookId: number, status: string): Promise<Review | null> {
        try {
            const newReview = await this.reviewRepository.addReview(userId, bookId, status);
            return newReview;
        } catch (error) {
            console.error("Error in AddReviewUseCase:", error);
            return null;
        }
    }
}
