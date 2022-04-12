import { Router, Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";

import { User } from "../model/User";

interface ICreateUser {
    name: string;
    age: number;
    id: string;
    created_at: Date;
}

const userRoutes = Router();

userRoutes.post("/", async (req: Request, res: Response) => {
    const { name, age } = req.body;
    const user: ICreateUser = {
        name,
        age,
        id: uuidV4(),
        created_at: new Date(),
    };
    try {
        await User.create(user);
        return res.status(201).send(user);
    } catch (err) {
        return res.status(500).json({ error: "Error" });
    }
});

userRoutes.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    await User.findOne({ id }).then((user) => {
        if (!user) {
            return res.status(400).json({ error: "Usuário não cadastrado" });
        }
        return res.send(user);
    });
});

userRoutes.get("/", async (req: Request, res: Response) => {
    await User.find().then((user) => {
        if (!user) {
            return res.status(400).json({ error: "Nenhum usuário" });
        }
        return res.send(user);
    });
});

export { userRoutes };
