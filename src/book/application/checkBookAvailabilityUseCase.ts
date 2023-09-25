import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";


export class CheckBookAvailabilityUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(id: number): Promise<string> {
        return this.bookRepository.checkBookAvailability(id);
    }
}
