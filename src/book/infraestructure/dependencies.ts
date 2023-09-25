import { AddBookUseCase } from "../application/addBookUseCase";
import { PgsqlBookRepository } from "./pgsqlBookRepository";
import { AddBookController } from "./controller/addBookController";
import { ListAllBooksUseCase } from "../application/listAllBooksUseCase";
import { ListAllBooksController } from "./controller/listAllBooksController";
import { ListInactiveBooksUseCase } from "../application/listInactiveBooksUseCase";
import { ListInactiveBooksController } from "./controller/listInactiveBooksController";
import { GetBookByCodeUseCase } from "../application/getBookByCodeUseCase";
import { GetBookByCodeController } from "./controller/getBookByCodeController";
import { DeleteBookController } from "./controller/deleteBookController";
import { DeleteBookUseCase } from "../application/deleteBookUseCase";
import { UpdateBookController } from "./controller/updateBookController";
import { UpdateBookUseCase } from "../application/updateBookUseCase";
import { CheckBookAvailabilityUseCase } from "../application/checkBookAvailabilityUseCase";
import { CheckBookAvailabilityController } from "./controller/checkBookAvailabilityController";

export const pgsqlBookRepository = new PgsqlBookRepository();
export const addBookUseCase = new AddBookUseCase(pgsqlBookRepository);
export const addBookController = new AddBookController(addBookUseCase);

export const listAllBooksUseCase = new ListAllBooksUseCase(pgsqlBookRepository); 
export const listAllBooksController = new ListAllBooksController(listAllBooksUseCase);

export const listInactiveBooksUseCase = new ListInactiveBooksUseCase(pgsqlBookRepository);
export const listInactiveBooksController = new ListInactiveBooksController(listInactiveBooksUseCase);

export const getBookByCodeUseCase = new GetBookByCodeUseCase(pgsqlBookRepository);
export const getBookByCodeController = new GetBookByCodeController(getBookByCodeUseCase);

export const deleteBookUseCase = new DeleteBookUseCase(pgsqlBookRepository);
export const deleteBookController = new DeleteBookController(deleteBookUseCase);

export const updateBookUseCase = new UpdateBookUseCase(pgsqlBookRepository);
export const updateBookController = new UpdateBookController(updateBookUseCase);

export const checkBookAvailabilityUseCase = new CheckBookAvailabilityUseCase(pgsqlBookRepository);
export const checkBookAvailabilityController = new CheckBookAvailabilityController(checkBookAvailabilityUseCase);
