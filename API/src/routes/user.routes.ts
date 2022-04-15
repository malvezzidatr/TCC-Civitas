import { Router, Request, Response } from "express";

import { UserRepository } from "../repositories/UserRepository";

const userRoutes = Router();
const userRepository = new UserRepository();

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

userRoutes.post("/auth/register", async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const userExists = await userRepository.findUserByEmail(email);
    if (!userExists) {
        const user = {
            name,
            email,
            password,
        };
        await userRepository.createUser(user);
        return res.status(201).json(user);
    }
    return res.status(400).json({ error: "Usuário já cadastrado" });
});

export { userRoutes };
