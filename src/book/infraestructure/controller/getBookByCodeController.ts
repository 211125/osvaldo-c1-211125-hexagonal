import { Request, Response } from "express";
import { GetBookByCodeUseCase } from "../../application/getBookByCodeUseCase";

export class GetBookByCodeController {
    constructor(readonly getBookByCodeUseCase: GetBookByCodeUseCase) { }

    async run(req: Request, res: Response) {
        const code = req.params.code;
        const book = await this.getBookByCodeUseCase.run(code);

        if (book) {
            return res.status(200).send({ status: "success", data: book });
        } else {
            return res.status(404).send({ status: "error", message: "Libro no encontrado" });
        }
    }
}

