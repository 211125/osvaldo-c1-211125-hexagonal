import { Users } from "../domain/users";
import { UsersRepository } from "../domain/usersRepository";

export class AddUsersUseCase {
    constructor(readonly usersRepository: UsersRepository) {}
    async run(name: string, last_name: string, email: string, password: string, phone: string, status: string): Promise<Users | null> {
        try {
            const createdUsers = await this.usersRepository.addUsers(name, last_name, email, password, phone, status);
            return createdUsers;
        } catch (error) {
            console.error("Error in addUsersUseCase:", error);
            return null;
        }
    }
}


