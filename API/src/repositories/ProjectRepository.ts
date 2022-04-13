import { v4 as uuidV4 } from "uuid";

import { IProject, Project } from "../model/Project";

class ProjectRepository {
    async createProject(name: string, description: string): Promise<void> {
        const project = {
            name,
            description,
            id: uuidV4(),
            created_at: new Date(),
        };
        await Project.create(project);
    }

    async findProjectById(id: string): Promise<IProject> {
        const projectById = await Project.findOne({ id });
        return projectById;
    }

    async getAllProjects(): Promise<IProject[]> {
        const projects = Project.find();
        return projects;
    }

    async deleteProjectById(id: string): Promise<void> {
        await Project.deleteOne({ id });
    }
}

export { ProjectRepository };
