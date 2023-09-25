import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class GetBookByCodeUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(code: string): Promise<Book | null> {
        return this.bookRepository.getBookByCode(code);
    }
}