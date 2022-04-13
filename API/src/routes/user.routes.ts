import { Router, Request, Response } from "express";

import { UserRepository } from "../repositories/UserRepository";

const userRoutes = Router();
const userRepository = new UserRepository();

userRoutes.post("/", async (req: Request, res: Response) => {
    const { name, description } = req.body;
    await userRepository.createUser(name, description);
    return res.status(201).send();
});

userRoutes.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userRepository.findUserById(id);
    return res.send(user);
});

userRoutes.get("/", async (req: Request, res: Response) => {
    const allUsers = await userRepository.getAllUsers();
    return res.send(allUsers);
});

userRoutes.delete("/delete/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    await userRepository.deleteUserById(id);
    return res.status(204).send();
});

export { userRoutes };
