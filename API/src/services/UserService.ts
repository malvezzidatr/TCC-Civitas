import bcrypt from "bcrypt";

import { IUserRepository } from "../Interfaces/IUserRepository";
import { IUser } from "../model/User";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class UserService {
    constructor(private userRepository: IUserRepository) {}
    async createUser({ name, email, password }: IRequest): Promise<void> {
        const userAlreadyExists = await this.userRepository.findUserByEmail(
            email
        );
        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const salt = await bcrypt.genSalt(12);
        const passwordHashed = await bcrypt.hash(password, salt);

        this.userRepository.createUser(name, email, passwordHashed);
    }

    async findUserById(id: string): Promise<IUser> {
        const userById = await this.userRepository.findUserById(id);
        return userById;
    }

    async findUserByEmail(email: string): Promise<IUser> {
        const userByEmail = await this.userRepository.findUserByEmail(email);
        return userByEmail;
    }

    async getAllUsers(): Promise<IUser[]> {
        const allUsers = await this.userRepository.getAllUsers();
        return allUsers;
    }

    async deleteUserById(id: string): Promise<void> {
        const user = await this.userRepository.findUserById(id);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        await this.userRepository.deleteUserById(id);
    }
}

export { UserService };
