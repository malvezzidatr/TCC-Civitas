import { IProject } from "../model/Project";
import { IUser } from "../model/User";

interface IProjectRepository {
    createProject(project: IProject, user: IUser): Promise<void>;
    listAllProjects(): Promise<IProject[]>;
    deleteProject(id: string): Promise<void>;
}

export { IProjectRepository };
