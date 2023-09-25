import { Book } from "./book";

export interface BookRepository {
    addBook(title: string, author: string, code: string, url: string, status: string): Promise<Book | null>;

    listAllBooks(): Promise<Book[]>; // Devuelve una lista de libros

    listInactiveBooks(): Promise<Book[]>; // Devuelve una lista de libros inactivos
    
    getBookByCode(code: string): Promise<Book | null>;
    
    updateBook(id: number, title: string, author: string, code: string, url:string, status: string): Promise<Book | null>;
    
    deleteBook(id: number): Promise<boolean>;

    checkBookAvailability(id: number): Promise<string>;
}