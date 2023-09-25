import { BookRepository } from '../domain/bookRepository';

export class ListInactiveBooksUseCase {
    constructor(readonly bookRepository: BookRepository) { }

    async run() {
        return await this.bookRepository.listInactiveBooks();
    }
}
