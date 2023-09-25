import { Request, Response } from "express";
import { ListAllBooksUseCase } from "../../application/listAllBooksUseCase";

export class ListAllBooksController {
    constructor(readonly listAllBooksUseCase: ListAllBooksUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let books = await this.listAllBooksUseCase.run();

            res.status(200).send({
                status: "success",
                data: books,
                message: "Listado de libros recuperado exitosamente"
            });
        } catch (error) {
            console.error("Error in ListAllBooksController:", error);
            res.status(500).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
