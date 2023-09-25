import express from "express";
import { addUsersController, getUserByPhoneController, listAllUsersController, deleteUserController, getInactiveUsersController, updatePasswordController, updateUserController  } from "./dependencies";

export const usersRouter = express.Router();

usersRouter.post(
    "/create",
    addUsersController.run.bind(addUsersController)
);
usersRouter.get(
    "/",
    listAllUsersController.run.bind(listAllUsersController)
);

usersRouter.delete(
    "/delete/:id",
    deleteUserController.run.bind(deleteUserController)
);

usersRouter.get(
    "/phone/:phone",
    getUserByPhoneController.run.bind(getUserByPhoneController)
);

usersRouter.get(
    "/inactive",
    getInactiveUsersController.run.bind(getInactiveUsersController)
);

usersRouter.put(
    "/update",
    updateUserController.run.bind(updateUserController)
);

usersRouter.put(
    "/update-password",
    updatePasswordController.run.bind(updatePasswordController)
);

