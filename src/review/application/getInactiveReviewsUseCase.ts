import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";


export class GetInactiveReviewsUseCase {
    constructor(private reviewsRepository: ReviewRepository) {}

    async execute(): Promise<Review[]> {
        return await this.reviewsRepository.getInactiveReviews();
    }
}