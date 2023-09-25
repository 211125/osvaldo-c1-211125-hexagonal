import { UsersRepository } from "../domain/usersRepository";
import { Users } from "../domain/users";
import { UpdatableUserFields } from "../domain/updatableUserFields";

export class UpdateUserUseCase {
    constructor(readonly usersRepository: UsersRepository) {}

    async run(user: UpdatableUserFields): Promise<Users | null>  {
        try {
            const updatedUser = await this.usersRepository.updateUser(user);
            return updatedUser;
        } catch (error) {
            console.error("Error in UpdateUserUseCase:", error);
            return null;
        }
    }
}
