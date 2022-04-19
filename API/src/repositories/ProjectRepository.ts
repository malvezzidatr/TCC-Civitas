import { IProjectRepository } from "../Interfaces/IProjectRepository";
import { IProject, Project } from "../model/Project";
import { IUser, User } from "../model/User";

class ProjectRepository implements IProjectRepository {
    async listAllProjects(): Promise<IProject[]> {
        const projects = await Project.find();
        return projects;
    }

    async createProject(project: IProject, user: IUser): Promise<void> {
        await User.updateOne(
            { email: user.email },
            {
                $push: {
                    projects: project,
                },
            }
        );
        await Project.create(project);
    }

    async deleteProject(id: string): Promise<void> {
        await Project.deleteOne({ id });
        await User.updateOne(
            {
                "projects.id": id,
            },
            {
                $pull: {
                    projects: { id },
                },
            }
        );
    }
}

export { ProjectRepository };
