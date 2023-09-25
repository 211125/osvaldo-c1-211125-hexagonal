import express from "express";
import { addBookController,listInactiveBooksController, listAllBooksController, getBookByCodeController, updateBookController, deleteBookController, checkBookAvailabilityController } from "./dependencies";

export const bookRouter = express.Router();

// Ruta para agregar un nuevo libro
bookRouter.post(
    "/create",
    addBookController.run.bind(addBookController)
);

// Ruta para listar todos los libros
bookRouter.get(
    "/",
    listAllBooksController.run.bind(listAllBooksController)
);

// Ruta para listar todos los libros inactivos
bookRouter.get(
    "/inactives",
    listInactiveBooksController.run.bind(listInactiveBooksController)
);

// Rura para listar un libro por codigo
bookRouter.get("/code/:code", getBookByCodeController.run.bind(getBookByCodeController));


// Ruta para Actualizar Un libro Por id
bookRouter.put(
    "/update/:id",
    updateBookController.run.bind(updateBookController)
);

// Ruta para Eliminar Un libro por Id
bookRouter.delete(
    "/delete/:id",
    deleteBookController.run.bind(deleteBookController)
);

//Ruta Para ver si Esta activo O Inativo el Libro
bookRouter.get(
    "/status/:id/", 
    checkBookAvailabilityController.run.bind(checkBookAvailabilityController)
);
