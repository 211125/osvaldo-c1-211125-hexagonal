import express from "express";
import { addReviewController, getReviewByUserIdController, listAllReviewsController, deleteReviewController, getInactiveReviewsController, updateReviewController  } from "./dependencies";

export const reviewsRouter = express.Router();

// Ruta para agregar una nueva reseña
reviewsRouter.post(
    "/create",
    addReviewController.run.bind(addReviewController)
);

// Ruta para obtener todas las reseñas
reviewsRouter.get(
    "/",
    listAllReviewsController.run.bind(listAllReviewsController)
);

// Ruta para eliminar una reseña por ID
reviewsRouter.delete(
    "/delete/:id",
    deleteReviewController.run.bind(deleteReviewController)
);

// Ruta para obtener una reseña por el ID del usuario
reviewsRouter.get(
    "/user/:userId",
    getReviewByUserIdController.run.bind(getReviewByUserIdController)
);

// Ruta para obtener reseñas inactivas
reviewsRouter.get(
    "/inactive",
    getInactiveReviewsController.run.bind(getInactiveReviewsController)
);

// Ruta para actualizar una reseña
reviewsRouter.put(
    "/update",
    updateReviewController.run.bind(updateReviewController)
);
