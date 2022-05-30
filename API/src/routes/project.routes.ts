import { Router, Request, Response } from "express";

import { ProjectRepository } from "../repositories/ProjectRepository";
import { UserRepository } from "../repositories/UserRepository";
import { ProjectService } from "../services/ProjectService";
import { UserService } from "../services/UserService";

const projectRoutes = Router();
const projectRepository = new ProjectRepository();
const projectService = new ProjectService(projectRepository);
const userRepository = new UserRepository();
const userService = new UserService(userRepository);

projectRoutes.patch("/:id", async (req: Request, res: Response) => {
    const { name, description, pix } = req.body;
    const { id } = req.params;
    const user = await userService.findUserById(id);
    if (!user) {
        return res.status(404).json({ error: "Usuário não existe" });
    }
    await projectService.createProject(name, description, user, pix);
    return res.status(201).send();
});

projectRoutes.get("/", async (req, res) => {
    const allProjects = await projectService.listAllProject();
    return res.send(allProjects);
});

projectRoutes.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await projectService.deleteProject(id);

    // await projectService.deleteProject(id);
    return res.status(204).send();
});

export { projectRoutes };
