import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";

export class UpdateReviewUseCase {
    constructor(readonly reviewRepository: ReviewRepository) {}

    async run(review: Review): Promise<Review | null> {
        return this.reviewRepository.updateReview(review);
    }
}
