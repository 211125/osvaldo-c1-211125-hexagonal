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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
class UpdateUserController {
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, last_name, email, phone, status } = req.body;
                const updatedUser = yield this.updateUserUseCase.run({
                    id, name, last_name, email, phone, status
                });
                if (updatedUser) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            id: updatedUser.id,
                            name: updatedUser.name,
                            last_name: updatedUser.last_name,
                            email: updatedUser.email,
                            phone: updatedUser.phone,
                            status: updatedUser.status,
                        },
                        message: "Usuario actualizado exitosamente"
                    });
                }
                res.status(400).send({
                    status: "error",
                    data: [],
                    message: "Error al actualizar el usuario"
                });
            }
            catch (error) {
                console.error("Error in UpdateUserController:", error);
                res.status(500).send({
                    status: "error",
                    message: "Error interno del servidor"
                });
            }
        });
    }
}
exports.UpdateUserController = UpdateUserController;
