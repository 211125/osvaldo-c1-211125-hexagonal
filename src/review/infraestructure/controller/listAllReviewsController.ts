import { Request, Response } from "express";
import { ListAllReviewsUseCase } from "../../application/listAllReviewsUseCase";


export class ListAllReviewsController {
    constructor(private listAllReviewsUseCase: ListAllReviewsUseCase) {}

    async run(req: Request, res: Response) {
        const reviews = await this.listAllReviewsUseCase.execute();
        res.status(200).send(reviews);
    }
}