import { Request, Response } from "express";
import { UpdatePasswordUseCase } from "../../application/updatePasswordUseCase";

export class UpdatePasswordController {
    constructor(readonly updatePasswordUseCase: UpdatePasswordUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { userId, newPassword } = req.body;
            const wasUpdated = await this.updatePasswordUseCase.run(userId, newPassword);

            // Si se ha actualizado la contraseña con éxito, devuelve una respuesta positiva.
            if (wasUpdated) {
                return res.status(200).send({
                    status: "success",
                    message: "Contraseña ha sido actualizada exitosamente"
                });
            }

            // En caso de que no se haya podido actualizar la contraseña.
            res.status(400).send({
                status: "error",
                message: "Error al actualizar la contraseña"
            });
        } catch (error) {
            console.error("Error in UpdatePasswordController:", error);
            res.status(500).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
