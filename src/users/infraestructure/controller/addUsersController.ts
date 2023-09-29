import { Request, Response } from "express";
import { AddUsersUseCase } from "../../application/addUsersUseCase";

import bcrypt from 'bcrypt';

export class AddUsersController {
    constructor(readonly addUsersUseCase: AddUsersUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let { name, last_name, email, password, phone, status } = req.body;
                const saltRounds = 10;
                password = await bcrypt.hash(password, saltRounds);


            let createdUsers = await this.addUsersUseCase.run(name, last_name, email, password, phone,status);

            if (createdUsers) {
                return res.status(201).send({
                    status: false,
                    data: {
                        name: createdUsers.name,
                        last_name: createdUsers.last_name,
                        password: createdUsers.password,
                        email: createdUsers.email,
                        phone: createdUsers.phone,
                    },
                    message: "Usuario ha sido creado exitosamente"
                });
            }

            res.status(400).send({
                data: [],
                validations: [], 
                message: "Error al crear Usuario nuevo, intentalo mas tarde"
            });
        } catch (error) {
            console.error("Error in AddUsersController:", error);
            res.status(500).send({
                message: "Error interno del servidor"
            });
        }
    }
}
