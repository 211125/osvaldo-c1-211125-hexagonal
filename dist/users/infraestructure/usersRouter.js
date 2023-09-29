"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.usersRouter = express_1.default.Router();
exports.usersRouter.post("/create", dependencies_1.addUsersController.run.bind(dependencies_1.addUsersController));
exports.usersRouter.get("/", dependencies_1.listAllUsersController.run.bind(dependencies_1.listAllUsersController));
// Ruta para eliminados usuarios
exports.usersRouter.delete("/delete/:id", dependencies_1.deleteUserController.run.bind(dependencies_1.deleteUserController));
// Ruta para obtener un usuario por su número telefónico
exports.usersRouter.get("/phone/:phone", dependencies_1.getUserByPhoneController.run.bind(dependencies_1.getUserByPhoneController));
exports.usersRouter.get("/inactive", dependencies_1.getInactiveUsersController.run.bind(dependencies_1.getInactiveUsersController));
exports.usersRouter.put("/update", dependencies_1.updateUserController.run.bind(dependencies_1.updateUserController));
exports.usersRouter.put("/update-password", dependencies_1.updatePasswordController.run.bind(dependencies_1.updatePasswordController));
