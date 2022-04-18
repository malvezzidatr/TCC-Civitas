import { IUser } from "../model/User";

interface IUserRepository {
    createUser(name: string, email: string, password: string): void;
    generateJWT(secret: string, user: IUser): string | boolean;
    findUserByEmail(email: string): Promise<IUser>;
    findUserById(id: string): Promise<IUser>;
    getAllUsers(): Promise<IUser[]>;
    deleteUserById(id: string): Promise<void>;
}

export { IUserRepository };
