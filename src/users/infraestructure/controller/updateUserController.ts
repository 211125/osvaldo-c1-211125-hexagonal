import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../application/updateUserUseCase";

export class UpdateUserController {
    constructor(readonly updateUserUseCase: UpdateUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { id, name, last_name, email, phone, status } = req.body;
            
            const updatedUser = await this.updateUserUseCase.run({
                id, name, last_name, email, phone, status
            });

            if (updatedUser) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        id: updatedUser.id,
                        name: updatedUser.name,
                        last_name: updatedUser.last_name,
                        email: updatedUser.email,
                        phone: updatedUser.phone,
                        status: updatedUser.status,
                    },
                    message: "Usuario ha sido actualizado exitosamente"
                });
            }

            res.status(400).send({
                status: "error",
                data: [],
                message: "Error al actualizar el usuario"
            });
        } catch (error) {
            console.error("Error in UpdateUserController:", error);
            res.status(500).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}

