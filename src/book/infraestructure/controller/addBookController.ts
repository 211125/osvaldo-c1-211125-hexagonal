import { Request, Response } from "express";
import { AddBookUseCase } from "../../application/addBookUseCase";

export class AddBookController {
    constructor(readonly addBookUseCase: AddBookUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let { title, author, code, url, status } = req.body;
            let createdBook = await this.addBookUseCase.run(title, author, code, url, status);

            if (createdBook) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        id: createdBook.id,
                        title: createdBook.title,
                        author: createdBook.author,
                        code: createdBook.code,
                        url: createdBook.url,
                        status: createdBook.status
                    },
                    message: "El libro ha sido creado exitosamente"
                });
            }

            res.status(400).send({
                status: "error",
                data: [],
                validations: [], // TODO: implementar validaciones
                message: "Error al crear un libro nuevo, intentalo mas tarde"
            });
        } catch (error) {
            console.error("Error in AddBookController:", error);
            res.status(500).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
