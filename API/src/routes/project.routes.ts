import { Router, Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";

import { IProject, Project } from "../model/Project";
import { UserRepository } from "../repositories/UserRepository";

const projectRoutes = Router();
const userRepository = new UserRepository();

projectRoutes.post("/", async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const { id } = req.params;
    const userExists = userRepository.findUserById(id);
    if (userExists) {
        const project: IProject = {
            name,
            description,
            id: uuidV4(),
            created_at: new Date(),
        };
        Project.create(project);
        return res.status(201).send(project);
    }
    return res
        .status(400)
        .json({ error: "Usuários deslogados não podem criar projetos" });
});

export { projectRoutes };
