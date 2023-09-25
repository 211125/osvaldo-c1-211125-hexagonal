import express from "express";
import { addReviewController, getReviewByUserIdController, listAllReviewsController, deleteReviewController, getInactiveReviewsController, updateReviewController  } from "./dependencies";

export const reviewsRouter = express.Router();

reviewsRouter.post(
    "/create_review",
    addReviewController.run.bind(addReviewController)
);

reviewsRouter.get(
    "/",
    listAllReviewsController.run.bind(listAllReviewsController)
);

reviewsRouter.delete(
    "/delete/:id",
    deleteReviewController.run.bind(deleteReviewController)
);

reviewsRouter.get(
    "/user/:userId",
    getReviewByUserIdController.run.bind(getReviewByUserIdController)
);

reviewsRouter.get(
    "/inactive",
    getInactiveReviewsController.run.bind(getInactiveReviewsController)
);

reviewsRouter.put(
    "/update",
    updateReviewController.run.bind(updateReviewController)
);
