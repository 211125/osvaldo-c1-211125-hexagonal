import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";

export class ListAllReviewsUseCase {
    constructor(private reviewsRepository: ReviewRepository) {}

    async execute(): Promise<Review[]> {
        return await this.reviewsRepository.getAllReviews();
    }
}