import { Users } from "../domain/users";
import { UsersRepository } from "../domain/usersRepository";


export class ListAllUsersUseCase {
    constructor(readonly usersRepository: UsersRepository) {}

    async run(): Promise<Users[]> {
        return this.usersRepository.getAllUsers();
    }
}
