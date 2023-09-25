import { Request, Response } from "express";
import { AddReviewUseCase } from "../../application/addReviewUseCase";


export class AddReviewController {
    constructor(private addReviewUseCase: AddReviewUseCase) {}

    async run(req: Request, res: Response): Promise<void> {
        const { userId, bookId, status } = req.body;

        try {
            const newReview = await this.addReviewUseCase.run(userId, bookId, status);

            if (newReview) {
                res.status(201).send(newReview);
            } else {
                res.status(400).send({ message: "Error creating review" });
            }
        } catch (error) {
            console.error("Error in AddReviewController:", error);
            res.status(500).send({ message: "Internal Server Error" });
        }
    }
}