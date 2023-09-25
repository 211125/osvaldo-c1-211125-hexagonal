import { Request, Response } from "express";
import { ListInactiveBooksUseCase } from "../../application/listInactiveBooksUseCase";

export class ListInactiveBooksController {
    constructor(readonly listInactiveBooksUseCase: ListInactiveBooksUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let books = await this.listInactiveBooksUseCase.run();

            res.status(200).send({
                status: "success",
                data: books,
                message: "Listado de libros inactivos recuperado exitosamente"
            });
        } catch (error) {
            console.error("Error in ListInactiveBooksController:", error);
            res.status(500).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
