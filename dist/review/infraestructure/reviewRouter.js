"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.reviewsRouter = express_1.default.Router();
exports.reviewsRouter.post("/create_review", dependencies_1.addReviewController.run.bind(dependencies_1.addReviewController));
exports.reviewsRouter.get("/", dependencies_1.listAllReviewsController.run.bind(dependencies_1.listAllReviewsController));
exports.reviewsRouter.delete("/delete/:id", dependencies_1.deleteReviewController.run.bind(dependencies_1.deleteReviewController));
exports.reviewsRouter.get("/user/:userId", dependencies_1.getReviewByUserIdController.run.bind(dependencies_1.getReviewByUserIdController));
exports.reviewsRouter.get("/inactive", dependencies_1.getInactiveReviewsController.run.bind(dependencies_1.getInactiveReviewsController));
exports.reviewsRouter.put("/update", dependencies_1.updateReviewController.run.bind(dependencies_1.updateReviewController));
