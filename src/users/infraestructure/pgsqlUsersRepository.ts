import { UpdatableUserFields } from "../domain/updatableUserFields";
import { Users } from "../domain/users";
import { UsersRepository } from "../domain/usersRepository";
import UserModel from "./models/userModel";
import bcrypt from 'bcrypt';

export class PgsqlUsersRepository implements UsersRepository {

    async addUsers(name: string, last_name: string, email: string, password: string, phone: string, status: string): Promise<Users | null> {
        try {
            const createdUsers = await UserModel.create({ name, last_name, email, password, phone, status});
            return new Users(createdUsers.id, createdUsers.name, createdUsers.last_name, createdUsers.email, createdUsers.password, createdUsers.phone, createdUsers.status);
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return null;
        }
    }

    async getAllUsers(): Promise<Users[]> {
        const users = await UserModel.findAll();
        return users.map(user => new Users(user.id, user.name, user.last_name, user.email, user.password, user.phone, user.status));
    }
    
    async deleteUserById(id: number): Promise<boolean> {
        try {
            const result = await UserModel.destroy({ where: { id } });
            return result > 0;
        } catch (error) {
            console.error("Error in PgsqlUsersRepository:", error);
            return false;
        }
    }
    
    async getUserByPhone(phone: string): Promise<Users | null> {
        const user = await UserModel.findOne({ where: { phone: phone } });
        if (!user) return null;
        return new Users(user.id, user.name, user.last_name, user.email, user.password, user.phone, user.status);
    }

    async getInactiveUsers(): Promise<Users[]> {
        try {
            const inactiveUsers = await UserModel.findAll({ where: { status: 'Inactivo' } });
            return inactiveUsers.map(user => new Users(user.id, user.name, user.last_name, user.email, user.password, user.phone, user.status));
        } catch (error) {
            console.error("Error in PgsqlUsersRepository:", error);
            return [];
        }
    }

    async updateUser(user: UpdatableUserFields): Promise<Users | null> {
        try {
            const [updateCount] = await UserModel.update(user, { where: { id: user.id } });
            
            if (updateCount > 0) {
                const updatedUserData = await UserModel.findByPk(user.id);
                if (updatedUserData) {
                    return new Users(
                        updatedUserData.id,
                        updatedUserData.name,
                        updatedUserData.last_name,
                        updatedUserData.email,
                        updatedUserData.password,
                        updatedUserData.phone,
                        updatedUserData.status
                    );
                }
            }
            return null;
        } catch (error) {
            console.error("Error in PgsqlUsersRepository:", error);
            return null;
        }
    }
    
    
    
    async updatePassword(userId: number, newPassword: string): Promise<boolean> {
        try {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            const result = await UserModel.update({ password: hashedPassword }, { where: { id: userId } });
    
            return !!result;
        } catch (error) {
            console.error("Error in PgsqlUsersRepository:", error);
            return false;
        }
    }
    
    

}
