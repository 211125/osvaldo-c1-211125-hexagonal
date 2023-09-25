import { Request, Response } from "express";
import { GetInactiveUsersUseCase } from "../../application/getInactiveUsersUseCase";

export class GetInactiveUsersController {
    constructor(readonly getInactiveUsersUseCase: GetInactiveUsersUseCase) { }
    async run(req: Request, res: Response) {
        try {
            let inactiveUsers = await this.getInactiveUsersUseCase.run();

            if (inactiveUsers.length > 0) {
                return res.status(200).send({
                    status: "success",
                    data: inactiveUsers,
                    message: "Usuarios inactivos "
                });
            }

            res.status(404).send({
                status: "error",
                data: [],
                message: "No hay usuarios inactivos"
            });
        } catch (error) {
            console.error("Error in GetInactiveUsersController:", error);
            res.status(500).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
