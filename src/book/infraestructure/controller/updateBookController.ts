import { Request, Response } from "express";
import { UpdateBookUseCase } from "../../application/updateBookUseCase";


export class UpdateBookController {
    constructor(readonly updateBookUseCase: UpdateBookUseCase) { }

    async run(req: Request, res: Response) {
        const id = Number(req.params.id);
        const { title, author, code, url, status } = req.body;
        
        const updatedBook = await this.updateBookUseCase.run(id, title, author, code, url, status);

        if (updatedBook) {
            return res.status(200).send({ status: "success", data: updatedBook });
        } else {
            return res.status(404).send({ status: "error", message: "Error al actualizar el libro" });
        }
    }
}
