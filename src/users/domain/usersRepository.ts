import { UpdatableUserFields } from "./updatableUserFields";
import { Users } from "./users";

export interface UsersRepository {
    addUsers(name: string, last_name: string, email: string, password: string, phone: string, status: string): Promise<Users | null>;
    getAllUsers(): Promise<Users[]>;
    deleteUserById(id: number): Promise<boolean>;
    getUserByPhone(phone: string): Promise<Users | null>;
    getInactiveUsers(): Promise<Users[]>;
    updatePassword(userId: number, newPassword: string): Promise<boolean>;
    updateUser(user: UpdatableUserFields): Promise<Users | null>;

}