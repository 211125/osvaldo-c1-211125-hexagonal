import { Request, Response } from "express";
import { UpdateReviewUseCase } from "../../application/updateReviewUseCase";
import { Review } from "../../domain/review";

export class UpdateReviewController {
    constructor(private updateReviewUseCase: UpdateReviewUseCase) {}

    async run(req: Request, res: Response): Promise<void> {
        const { id, userId, bookId, status } = req.body;
    
        const reviewToUpdate = new Review(id, userId, bookId, status);
    
        try {
            const updatedReview = await this.updateReviewUseCase.run(reviewToUpdate);
    
            if (updatedReview) {
                res.status(200).send(updatedReview);
            } else {
                res.status(404).send({ message: "Review not found" });
            }
        } catch (error) {
            console.error("Error in UpdateReviewController:", error);
            res.status(500).send({ message: "Internal Server Error" });
        }
    }
    
}