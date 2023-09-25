import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";


export class GetReviewByUserIdUseCase {
    constructor(private reviewsRepository: ReviewRepository) {}

    async execute(userId: number): Promise<Review | null> {
        return await this.reviewsRepository.getReviewByUserId(userId);
    }
}