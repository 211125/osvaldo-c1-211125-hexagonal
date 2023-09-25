import { Request, Response } from "express";
import { GetUserByPhoneUseCase } from "../../application/getUserByPhoneUseCase";

export class GetUserByPhoneController {
    constructor(readonly getUserByPhoneUseCase: GetUserByPhoneUseCase) {}

    async run(req: Request, res: Response) {
        const user = await this.getUserByPhoneUseCase.run(req.params.phone);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({ message: "User not found." });
        }
    }
}
