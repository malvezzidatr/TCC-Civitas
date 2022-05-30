import { v4 as uuidV4 } from "uuid";

import { IProjectRepository } from "../Interfaces/IProjectRepository";
import { IProject } from "../model/Project";
import { IUser } from "../model/User";

class ProjectService {
    constructor(private projectRepository: IProjectRepository) {}

    async createProject(
        name: string,
        description: string,
        user: IUser,
        pix: string
    ) {
        const project: IProject = {
            name,
            description,
            id: uuidV4(),
            pix,
            user_id: user.id,
            created_at: new Date(),
        };
        await this.projectRepository.createProject(project, user);
    }

    async listAllProject() {
        const allProjects = await this.projectRepository.listAllProjects();
        return allProjects;
    }

    async deleteProject(id: string) {
        await this.projectRepository.deleteProject(id);
    }
}
export { ProjectService };
