import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";


export class DeleteReviewUseCase {
    constructor(private reviewsRepository: ReviewRepository) {}

    async execute(id: number): Promise<boolean> {
        return await this.reviewsRepository.deleteReviewById(id);
    }
}