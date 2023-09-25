import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";


export class DeleteBookUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(id: number): Promise<boolean> {
        return this.bookRepository.deleteBook(id);
    }
}
