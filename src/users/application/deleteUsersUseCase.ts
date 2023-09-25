import { UsersRepository } from "../domain/usersRepository";

export class DeleteUserUseCase {
    constructor(readonly usersRepository: UsersRepository) {}

    async run(id: number): Promise<boolean> {
        try {
            const wasDeleted = await this.usersRepository.deleteUserById(id);
            return wasDeleted;
        } catch (error) {
            console.error("Error in DeleteUserUseCase:", error);
            return false;
        }
    }
}
