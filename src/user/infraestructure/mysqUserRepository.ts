import { query } from "../../database/sequelize";
import { User } from "../domain/user";
import { IUsuarioRepository } from "../domain/userRepository";
import { compare, encrypt } from '../../token/ashs';
import { tokenSigIn } from "../../token/token";
import { isEmailRegistered } from "./validation/usermysql";

export class MysqlUserRepository implements IUsuarioRepository {
    async registerUser(
        id: string,
        name: string,
        last_name: string,
        phone_number: string,
        email: string,
        password: string,
        loan_status: boolean,
        status: boolean
    ): Promise<User | null | string | Error> {
        try {
            await isEmailRegistered(email);
            const sql = `
                INSERT INTO users(uuid, name, last_name, phone_number , email, password, loan_status, status)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const params: any[] = [id, name, last_name, phone_number, email, password, loan_status, status];
            const [result]: any = await query(sql, params);
            return new User(id, name, last_name, phone_number, email, password, loan_status, status);
        } catch (error) {
            console.error("Error adding review:", error);
            return error as Error;
        }
    }

    async listAllUsers(): Promise<User[] | null> {
        try {
            const sql = "SELECT * FROM users";
            const [rows]: any = await query(sql);
            if (!Array.isArray(rows)) {
                throw new Error('Rows is not an array');
            }
            const users: User[] = rows.map(row => new User(row.uuid, row.name, row.last_name, row.phone_number, row.email, row.password, row.loan_status, row.status));
            return users;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async listAllUserIactive(): Promise<User[] | null> {
        try {
            const sql = "SELECT * FROM users WHERE status = false";
            const [rows]: any = await query(sql);

            if (!Array.isArray(rows)) {
                throw new Error('Rows is not an array');
            }

            const users: User[] = rows.map(row => new User(row.uuid, row.name, row.last_name, row.phone_number, row.email, row.password, row.loan_status, row.status));
            return users;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getUserByFilter(
        filter: string,
        email?: string | undefined,
        name?: string | undefined,
        phone_number?: string | undefined
    ): Promise<User[] | null> {
        try {
            let sql: string;
            let value: string | undefined;
            switch (filter) {
                case 'email':
                    if (!email) throw new Error('Email is required when filter is email');
                    sql = 'SELECT * FROM users WHERE email = ?';
                    value = email;
                    break;
                case 'name':
                    if (!name) throw new Error('Name is required when filter is name');
                    sql = 'SELECT * FROM users WHERE name = ?';
                    value = name;
                    break;
                case 'phone_number':
                    if (!phone_number) throw a Error('Phone number is required when filter is phone_number');
                    sql = 'SELECT * FROM users WHERE phone_number = ?';
                    value = phone_number;
                    break;
                default:
                    throw new Error('Invalid filter type');
            }

            const [rows]: any = await query(sql, [value]);
            console.log(rows)
            if (rows.length === 0) {
                return null;
            }
            return rows.map((row: User) => new User(row.uuid, row.name, row.last_name, row.phone_number, row.email, row.password, row.loan_status, row.status));
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getUserById(uuid: string): Promise<User | null> {
        try {
            const sql = "SELECT * FROM users WHERE uuid = ? LIMIT 1";
            const [rows]: any = await query(sql, [uuid]);

            if (!rows || rows.length === 0) return null;
            const row = rows[0];
            return new User(row.uuid, row.name, row.last_name, row.phone_number, row.email, row.password, row.loan_status, row.status);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updateUserById(uuid: string, name?: string, last_name?: string, phone_number?: string, email?: string): Promise<User | null> {
        const updates: { [key: string]: string } = {};
        if (name !== undefined) updates.name = name;
        if (last_name !== undefined) updates.last_name = last_name;
        if (phone_number !== undefined) updates.phone_number = phone_number;
        if (email !== undefined) updates.email = email;

        const keys = Object.keys(updates);
        if (keys.length === 0) return null;

        const sqlParts = keys.map(key => `${key} = ?`);
        const sql = `UPDATE users SET ${sqlParts.join(', ')} WHERE uuid = ?`;

        try {
            const values = keys.map(key => updates[key]);
            values.push(uuid);
            await query(sql, values);

            const [updatedRows]: any = await query('SELECT * FROM users WHERE uuid = ?', [uuid]);
            if (!updatedRows || updatedRows.length === 0) {
                throw new Error('No user found with the provided UUID.');
            }

            const updatedUser = new User(
                updatedRows[0].uuid,
                updatedRows[0].name,
                updatedRows[0].last_name,
                updatedRows[0].phone_number,
                updatedRows[0].email,
                updatedRows[0].password,
                updatedRows[0].loan_status,
                updatedRows[0].status
            );

            return updatedUser;
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }

    async updatePassword(id: string, password: string): Promise<User | null> {
        try {
            const hashPassword = await encrypt(password)
            const sql = 'UPDATE users SET password = ? WHERE uuid = ?';
            const result: any = await query(sql, [hashPassword, id]);

            if (!result || result.affectedRows === 0) return null;

            const [updatedRows]: any = await query('SELECT * FROM users WHERE uuid = ?', [id]);
            if (updatedRows.length === 0) return null;

            const updatedUser = new User(
                updatedRows[0].uuid,
                updatedRows[0].name,
                updatedRows[0].last_name,
                updatedRows[0].phone_number,
                updatedRows[0].email,
                updatedRows[0].password,
                updatedRows[0].loan_status,
                updatedRows[0].status
            );

            return updatedUser;
        } catch (error) {
            console.error('Error updating password:', error);
            throw error;
        }
    }

    async deleteUserById(id: string): Promise<string | null> {
        try {
            const sql = 'DELETE FROM users WHERE uuid = ?';
            const result: any = await query(sql, [id]);
            if (result[0].affectedRows === 0) {
                return null;
            }

            return 'User deleted successfully.';
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }

    async activateUser(id: string): Promise<string | null> {
        try {
            const sql = 'UPDATE users SET status = true WHERE uuid = ?';
            const [resultSet]: any = await query(sql, [id]);

            if (!resultSet || resultSet.affectedRows === 0) {
                return null;
            }
            return 'User activated successfully.';
        } catch (error) {
            console.error('Error activating user:', error);
            throw error;
        }
    }

    async inactivateUser(id: string): Promise<string | null> {
        try {
            const sql = 'UPDATE users SET status = false WHERE uuid = ?';
            const [resultSet]: any = await query(sql, [id]);

            if (!resultSet || resultSet.affectedRows === 0) {
                return null;
            }
            return 'User inactive successfully.';
        } catch (error) {
            console.error('Error inactivating user:', error);
            throw error;
        }
    }
}
