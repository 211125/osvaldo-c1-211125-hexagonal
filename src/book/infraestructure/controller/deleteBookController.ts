import { Request, Response } from "express";
import { DeleteBookUseCase } from "../../application/deleteBookUseCase";

export class DeleteBookController {
    constructor(readonly deleteBookUseCase: DeleteBookUseCase) { }

    async run(req: Request, res: Response) {
        const id = Number(req.params.id);
        
        const isDeleted = await this.deleteBookUseCase.run(id);

        if (isDeleted) {
            return res.status(200).send({ status: "success", message: "Libro eliminado con éxito" });
        } else {
            return res.status(404).send({ status: "error", message: "Error al eliminar el libro" });
        }
    }
}
