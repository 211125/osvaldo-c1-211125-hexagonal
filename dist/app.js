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
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const sequelize_1 = require("./database/sequelize");
const bookRouter_1 = require("./book/infraestructure/bookRouter");
const usersRouter_1 = require("./users/infraestructure/usersRouter");
const reviewRouter_1 = require("./review/infraestructure/reviewRouter");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use('/api/v1/book', bookRouter_1.bookRouter);
app.use('/api/v1/user', usersRouter_1.usersRouter);
app.use('/api/v1/review', reviewRouter_1.reviewsRouter);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, sequelize_1.initializeDatabase)();
            app.listen(3000, () => {
                signale.success("Server online in port 3000");
            });
        }
        catch (error) {
            signale.error("Error al iniciar el servidor:", error);
        }
    });
}
// Inicia todo
startServer();
