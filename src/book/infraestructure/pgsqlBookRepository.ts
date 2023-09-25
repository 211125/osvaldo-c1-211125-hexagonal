import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";
import BookModel from "./models/BookModel";

export class PgsqlBookRepository implements BookRepository {
    async addBook(title: string, author: string, code: string, url:string, status: string): Promise<Book | null> {
        try {
            const createdBook = await BookModel.create({ title, author, code, url, status});
            return new Book(createdBook.id, createdBook.title, createdBook.author, createdBook.code, createdBook.url, createdBook.status);
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return null;
        }
    }

    // Lista a todos los libros 
    async listAllBooks(): Promise<Book[]> {
        try {
            const books = await BookModel.findAll();
            return books.map(book => new Book(book.id, book.title, book.author, book.code, book.url, book.status));
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return [];
        }
    }

    // Lista los a todos los libros Inativos
    async listInactiveBooks(): Promise<Book[]> {
        try {
            
            const inactiveBooks = await BookModel.findAll({ where: { status: "Inactivo" } });
            return inactiveBooks.map(book => new Book(book.id, book.title, book.author, book.code, book.url, book.status));
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return [];
        }
    }
    
    // Muestra Un libro Por medio del Codigo Unico
    async getBookByCode(code: string): Promise<Book | null> {
        try {
            const book = await BookModel.findOne({ where: { code } });
            if (!book) return null;
            return new Book(book.id, book.title, book.author, book.code, book.url, book.status);
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return null;
        }
    }


    // Actualizar Un Libro POr el ID
    async updateBook(id: number, title: string, author: string, code: string, url: string, status: string): Promise<Book | null> {
        try {
            const book = await BookModel.findByPk(id);
            if (!book) return null;

            book.title = title;
            book.author = author;
            book.code = code;
            book.url = url;
            book.status = status;

            await book.save();
            return new Book(book.id, book.title, book.author, book.code, book.url, book.status);
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return null;
        }
    }

    //Elimina un Libro por el ID
    async deleteBook(id: number): Promise<boolean> {
        try {
            const result = await BookModel.destroy({ where: { id } });
            return result > 0;
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return false;
        }
    }

    // Valida Si el libro esta disponible Por le Id
    async checkBookAvailability(id: number): Promise<string> {
        try {
            const book = await BookModel.findByPk(id);
            if (!book) return "EstadoNo encontrado";
    
            if (book.status === "Inactivo") return "No disponible";
            return "Disponible";
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return "Error";
        }
    }
}
