"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.bookRouter = express_1.default.Router();
exports.bookRouter.post("/postBoos", dependencies_1.addBookController.run.bind(dependencies_1.addBookController));
exports.bookRouter.get("/", dependencies_1.listAllBooksController.run.bind(dependencies_1.listAllBooksController));
exports.bookRouter.get("/inactives", dependencies_1.listInactiveBooksController.run.bind(dependencies_1.listInactiveBooksController));
exports.bookRouter.get("/code/:code", dependencies_1.getBookByCodeController.run.bind(dependencies_1.getBookByCodeController));
exports.bookRouter.put("/update/:id", dependencies_1.updateBookController.run.bind(dependencies_1.updateBookController));
exports.bookRouter.delete("/delete/:id", dependencies_1.deleteBookController.run.bind(dependencies_1.deleteBookController));
exports.bookRouter.get("/status/:id/", dependencies_1.checkBookAvailabilityController.run.bind(dependencies_1.checkBookAvailabilityController));
