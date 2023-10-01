import { validate } from "class-validator";
import { User } from "../domain/user";
import { v4 as uuid } from "uuid";

import { IUsuarioRepository } from "../domain/userRepository";
import { ValidatorCreateUser } from "../domain/validations/user";
import { encrypt } from "../../token/ashs";



export class RegisterUserUseCase {
    constructor(readonly usuarioRepository: IUsuarioRepository) { }

    async run(
        name: string,
        last_name: string,
        phone_number: string,
        email: string,
        password:string
    ): Promise<User | null | string | Error>{

        const miuuid: string = uuid()
        const loan_status = false
        const status = false
       

        let post = new ValidatorCreateUser(miuuid, name, last_name, phone_number, email, password, loan_status, status);
        const validation = await validate(post)
        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }
        const hashPassword = await encrypt(password)
        try {
            const createUser = await this.usuarioRepository.registerUser(
                miuuid,
                name,
                last_name,
                phone_number,
                email,
                hashPassword,
                loan_status,
                status
            );

            return createUser;
        } catch (error) {
            return null;
        }
    }
}