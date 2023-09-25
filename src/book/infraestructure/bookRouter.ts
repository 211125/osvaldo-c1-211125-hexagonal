import express from "express";
import { addBookController,listInactiveBooksController, listAllBooksController, getBookByCodeController, updateBookController, deleteBookController, checkBookAvailabilityController } from "./dependencies";

export const bookRouter = express.Router();
bookRouter.post(
    "/postBoos",
    addBookController.run.bind(addBookController)
);

bookRouter.get(
    "/",
    listAllBooksController.run.bind(listAllBooksController)
);

bookRouter.get(
    "/inactives",
    listInactiveBooksController.run.bind(listInactiveBooksController)
);

bookRouter.get("/code/:code", getBookByCodeController.run.bind(getBookByCodeController));


bookRouter.put(
    "/update/:id",
    updateBookController.run.bind(updateBookController)
);

bookRouter.delete(
    "/delete/:id",
    deleteBookController.run.bind(deleteBookController)
);

bookRouter.get(
    "/status/:id/", 
    checkBookAvailabilityController.run.bind(checkBookAvailabilityController)
);
