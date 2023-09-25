import { Request, Response } from "express";
import { CheckBookAvailabilityUseCase } from "../../application/checkBookAvailabilityUseCase";


export class CheckBookAvailabilityController {
    constructor(readonly checkBookAvailabilityUseCase: CheckBookAvailabilityUseCase) {}

    async run(req: Request, res: Response) {
        const id = Number(req.params.id);

        const availability = await this.checkBookAvailabilityUseCase.run(id);
        return res.status(200).send({ status: "success", availability });
    }
}
