import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";


export class UpdateBookUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(id: number, title: string, author: string, code: string, url:string, status: string): Promise<Book | null> {
        return this.bookRepository.updateBook(id, title, author, code, url, status);
    }
}
