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
exports.GetInactiveUsersController = void 0;
class GetInactiveUsersController {
    constructor(getInactiveUsersUseCase) {
        this.getInactiveUsersUseCase = getInactiveUsersUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let inactiveUsers = yield this.getInactiveUsersUseCase.run();
                if (inactiveUsers.length > 0) {
                    return res.status(200).send({
                        status: "success",
                        data: inactiveUsers,
                        message: "Usuarios inactivos "
                    });
                }
                res.status(404).send({
                    status: "error",
                    data: [],
                    message: "No hay usuarios inactivos"
                });
            }
            catch (error) {
                console.error("Error in GetInactiveUsersController:", error);
                res.status(500).send({
                    status: "error",
                    message: "Error interno del servidor"
                });
            }
        });
    }
}
exports.GetInactiveUsersController = GetInactiveUsersController;
