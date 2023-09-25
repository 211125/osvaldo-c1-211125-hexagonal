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
exports.DeleteBookController = void 0;
class DeleteBookController {
    constructor(deleteBookUseCase) {
        this.deleteBookUseCase = deleteBookUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const isDeleted = yield this.deleteBookUseCase.run(id);
            if (isDeleted) {
                return res.status(200).send({ status: "success", message: "Libro eliminado con éxito" });
            }
            else {
                return res.status(404).send({ status: "error", message: "Error al eliminar el libro" });
            }
        });
    }
}
exports.DeleteBookController = DeleteBookController;
