import { Users } from "../domain/users";
import { UsersRepository } from "../domain/usersRepository";

export class GetInactiveUsersUseCase {
    constructor(readonly usersRepository: UsersRepository) {}

    async run(): Promise<Users[]> {
        try {
            const inactiveUsers = await this.usersRepository.getInactiveUsers();
            return inactiveUsers;
        } catch (error) {
            console.error("Error in getInactiveUsersUseCase:", error);
            return [];
        }
    }
}
