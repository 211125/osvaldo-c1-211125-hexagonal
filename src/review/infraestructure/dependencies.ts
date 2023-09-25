import { PgsqlReviewRepository } from "./pgsqlReviewRepository";
import { AddReviewUseCase } from "../application/addReviewUseCase";
import { AddReviewController } from "./controller/addReviewController";
import { ListAllReviewsController } from "./controller/listAllReviewsController";
import { ListAllReviewsUseCase } from "../application/listAllReviewsUseCase";
import { GetReviewByUserIdController } from "./controller/getReviewByUserIdController";
import { GetReviewByUserIdUseCase } from "../application/getReviewByUserIdUseCase";
import { DeleteReviewUseCase } from "../application/deleteReviewUseCase";
import { DeleteReviewController } from "./controller/deleteReviewController";
import { GetInactiveReviewsUseCase } from "../application/getInactiveReviewsUseCase";
import { GetInactiveReviewsController } from "./controller/getInactiveReviewsController";
import { UpdateReviewUseCase } from "../application/updateReviewUseCase";
import { UpdateReviewController } from "./controller/updateReviewController";

export const pgsqlReviewRepository = new PgsqlReviewRepository();

export const addReviewUseCase = new AddReviewUseCase(pgsqlReviewRepository);
export const addReviewController = new AddReviewController(addReviewUseCase);

export const listAllReviewsUseCase = new ListAllReviewsUseCase(pgsqlReviewRepository);
export const listAllReviewsController = new ListAllReviewsController(listAllReviewsUseCase);

export const getReviewByUserIdUseCase = new GetReviewByUserIdUseCase(pgsqlReviewRepository);
export const getReviewByUserIdController = new GetReviewByUserIdController(getReviewByUserIdUseCase);

export const deleteReviewUseCase = new DeleteReviewUseCase(pgsqlReviewRepository);
export const deleteReviewController = new DeleteReviewController(deleteReviewUseCase);

export const getInactiveReviewsUseCase = new GetInactiveReviewsUseCase(pgsqlReviewRepository);
export const getInactiveReviewsController = new GetInactiveReviewsController(getInactiveReviewsUseCase);

export const updateReviewUseCase = new UpdateReviewUseCase(pgsqlReviewRepository);
export const updateReviewController = new UpdateReviewController(updateReviewUseCase);
