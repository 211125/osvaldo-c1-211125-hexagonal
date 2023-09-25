

// updatePasswordUseCase.ts
import { UsersRepository } from "../domain/usersRepository";

export class UpdatePasswordUseCase {
    constructor(readonly usersRepository: UsersRepository) {}

    async run(userId: number, newPassword: string): Promise<boolean> {
        try {
            const wasUpdated = await this.usersRepository.updatePassword(userId, newPassword);
            return wasUpdated;
        } catch (error) {
            console.error("Error in UpdatePasswordUseCase:", error);
            return false;
        }
    }
}