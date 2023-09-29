"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgsqlUsersRepository = void 0;
const users_1 = require("../domain/users");
const userModel_1 = __importDefault(require("./models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class PgsqlUsersRepository {
    addUsers(name, last_name, email, password, phone, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUsers = yield userModel_1.default.create({ name, last_name, email, password, phone, status });
                return new users_1.Users(createdUsers.id, createdUsers.name, createdUsers.last_name, createdUsers.email, createdUsers.password, createdUsers.phone, createdUsers.status);
            }
            catch (error) {
                console.error("Error in PgsqlBookRepository:", error);
                return null;
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield userModel_1.default.findAll();
            return users.map(user => new users_1.Users(user.id, user.name, user.last_name, user.email, user.password, user.phone, user.status));
        });
    }
    deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield userModel_1.default.destroy({ where: { id } });
                return result > 0;
            }
            catch (error) {
                console.error("Error in PgsqlUsersRepository:", error);
                return false;
            }
        });
    }
    getUserByPhone(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userModel_1.default.findOne({ where: { phone: phone } });
            if (!user)
                return null;
            return new users_1.Users(user.id, user.name, user.last_name, user.email, user.password, user.phone, user.status);
        });
    }
    getInactiveUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inactiveUsers = yield userModel_1.default.findAll({ where: { status: 'Inactivo' } });
                return inactiveUsers.map(user => new users_1.Users(user.id, user.name, user.last_name, user.email, user.password, user.phone, user.status));
            }
            catch (error) {
                console.error("Error in PgsqlUsersRepository:", error);
                return [];
            }
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [updateCount] = yield userModel_1.default.update(user, { where: { id: user.id } });
                if (updateCount > 0) {
                    const updatedUserData = yield userModel_1.default.findByPk(user.id);
                    if (updatedUserData) {
                        return new users_1.Users(updatedUserData.id, updatedUserData.name, updatedUserData.last_name, updatedUserData.email, updatedUserData.password, updatedUserData.phone, updatedUserData.status);
                    }
                }
                return null;
            }
            catch (error) {
                console.error("Error in PgsqlUsersRepository:", error);
                return null;
            }
        });
    }
    updatePassword(userId, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Cifrar la nueva contraseña
                const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
                const result = yield userModel_1.default.update({ password: hashedPassword }, { where: { id: userId } });
                return !!result;
            }
            catch (error) {
                console.error("Error in PgsqlUsersRepository:", error);
                return false;
            }
        });
    }
}
exports.PgsqlUsersRepository = PgsqlUsersRepository;
