import { Users } from "../domain/users";
import { UsersRepository } from "../domain/usersRepository";


export class GetUserByPhoneUseCase {
    constructor(readonly usersRepository: UsersRepository) {}

    async run(phone: string): Promise<Users | null> {
        return this.usersRepository.getUserByPhone(phone);
    }
}
