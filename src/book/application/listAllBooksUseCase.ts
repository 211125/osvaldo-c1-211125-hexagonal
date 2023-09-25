import { BookRepository } from '../domain/bookRepository';

export class ListAllBooksUseCase {
    constructor(readonly bookRepository: BookRepository) { }

    async run() {
        return await this.bookRepository.listAllBooks();
    }
}
