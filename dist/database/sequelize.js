"use strict";
// sequelize.ts
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
exports.initializeDatabase = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const BookModel_1 = __importDefault(require("../book/infraestructure/models/BookModel"));
const userModel_1 = __importDefault(require("../users/infraestructure/models/userModel"));
const reviewModel_1 = __importDefault(require("../review/infraestructure/models/reviewModel"));
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'SOA',
    username: 'angelito',
    password: '211125',
    models: [BookModel_1.default, userModel_1.default, reviewModel_1.default],
});
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.authenticate();
            console.log('Conexión establecida correctamente.');
            yield exports.sequelize.sync({ force: false });
        }
        catch (err) {
            console.error('No se pudo conectar a la base de datos:', err);
            process.exit(1); // Cierra la aplicación si hay un error de conexión
        }
    });
}
exports.initializeDatabase = initializeDatabase;
