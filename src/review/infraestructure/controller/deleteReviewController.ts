import { Request, Response } from "express";
import { DeleteReviewUseCase } from "../../application/deleteReviewUseCase";


export class DeleteReviewController {
    constructor(private deleteReviewUseCase: DeleteReviewUseCase) {}

    async run(req: Request, res: Response): Promise<void> {
        try {
            const isDeleted = await this.deleteReviewUseCase.execute(Number(req.params.id));
            
            if (isDeleted) {
                res.status(200).send({ message: "Review successfully deleted" });
            } else {
                res.status(404).send({ message: "Review not found" });
            }
        } catch (error) {
            console.error("Error in DeleteReviewController:", error);
            res.status(500).send({ message: "Internal Server Error" });
        }
    }
}