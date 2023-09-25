import { Request, Response } from "express";
import { GetReviewByUserIdUseCase } from "../../application/getReviewByUserIdUseCase";


export class GetReviewByUserIdController {
    constructor(private getReviewByUserIdUseCase: GetReviewByUserIdUseCase) {}

    async run(req: Request, res: Response) {
        const review = await this.getReviewByUserIdUseCase.execute(Number(req.params.userId));
        if (review) {
            res.status(200).send(review);
        } else {
            res.status(404).send();
        }
    }
}
