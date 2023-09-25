import { Request, Response } from "express";
import { GetInactiveReviewsUseCase } from "../../application/getInactiveReviewsUseCase";


export class GetInactiveReviewsController {
    constructor(private getInactiveReviewsUseCase: GetInactiveReviewsUseCase) {}

    async run(req: Request, res: Response) {
        const reviews = await this.getInactiveReviewsUseCase.execute();
        res.status(200).send(reviews);
    }
}