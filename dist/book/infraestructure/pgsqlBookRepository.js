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
exports.PgsqlBookRepository = void 0;
const book_1 = require("../domain/book");
const BookModel_1 = __importDefault(require("./models/BookModel"));
class PgsqlBookRepository {
    addBook(title, author, code, url, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdBook = yield BookModel_1.default.create({ title, author, code, url, status });
                return new book_1.Book(createdBook.id, createdBook.title, createdBook.author, createdBook.code, createdBook.url, createdBook.status);
            }
            catch (error) {
                console.error("Error in PgsqlBookRepository:", error);
                return null;
            }
        });
    }
    listAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield BookModel_1.default.findAll();
                return books.map(book => new book_1.Book(book.id, book.title, book.author, book.code, book.url, book.status));
            }
            catch (error) {
                console.error("Error in PgsqlBookRepository:", error);
                return [];
            }
        });
    }
    listInactiveBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inactiveBooks = yield BookModel_1.default.findAll({ where: { status: "Inactivo" } });
                return inactiveBooks.map(book => new book_1.Book(book.id, book.title, book.author, book.code, book.url, book.status));
            }
            catch (error) {
                console.error("Error in PgsqlBookRepository:", error);
                return [];
            }
        });
    }
    // Muestra Un libro Por medio del Codigo Unico
    getBookByCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield BookModel_1.default.findOne({ where: { code } });
                if (!book)
                    return null;
                return new book_1.Book(book.id, book.title, book.author, book.code, book.url, book.status);
            }
            catch (error) {
                console.error("Error in PgsqlBookRepository:", error);
                return null;
            }
        });
    }
    // Actualizar Un Libro POr el ID
    updateBook(id, title, author, code, url, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield BookModel_1.default.findByPk(id);
                if (!book)
                    return null;
                book.title = title;
                book.author = author;
                book.code = code;
                book.url = url;
                book.status = status;
                yield book.save();
                return new book_1.Book(book.id, book.title, book.author, book.code, book.url, book.status);
            }
            catch (error) {
                console.error("Error in PgsqlBookRepository:", error);
                return null;
            }
        });
    }
    //Elimina un Libro por el ID
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BookModel_1.default.destroy({ where: { id } });
                return result > 0;
            }
            catch (error) {
                console.error("Error in PgsqlBookRepository:", error);
                return false;
            }
        });
    }
    // Valida Si el libro esta disponible Por le Id
    checkBookAvailability(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield BookModel_1.default.findByPk(id);
                if (!book)
                    return "EstadoNo encontrado";
                if (book.status === "Inactivo")
                    return "No disponible";
                return "Disponible";
            }
            catch (error) {
                console.error("Error in PgsqlBookRepository:", error);
                return "Error";
            }
        });
    }
}
exports.PgsqlBookRepository = PgsqlBookRepository;
