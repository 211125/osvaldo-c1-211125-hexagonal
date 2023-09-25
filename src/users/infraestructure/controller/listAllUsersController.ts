import { Request, Response } from "express";
import { ListAllUsersUseCase } from "../../application/listAllUsersUseCase";

export class ListAllUsersController {
    constructor(readonly listAllUsersUseCase: ListAllUsersUseCase) {}

    async run(req: Request, res: Response) {
        const users = await this.listAllUsersUseCase.run();
        res.status(200).send(users);
    }
}
