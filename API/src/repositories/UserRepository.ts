import JWT from "jsonwebtoken";
import { v4 as uuidV4 } from "uuid";

import { IUserRepository } from "../Interfaces/IUserRepository";
import { IUser, User } from "../model/User";

class UserRepository implements IUserRepository {
    async createUser(
        name: string,
        email: string,
        password: string
    ): Promise<void> {
        const user = {
            name,
            email,
            password,
            id: uuidV4(),
            created_at: new Date(),
            projects: [],
        };
        await User.create(user);
    }

    generateJWT(secret: string, user: IUser) {
        try {
            const token = JWT.sign(
                {
                    id: user.id,
                },
                secret
            );
            return token;
        } catch (error) {
            return false;
        }
    }

    async findUserByEmail(email: string): Promise<IUser> {
        const userExists = await User.findOne({ email }, "-password");
        return userExists;
    }

    async findUserById(id: string): Promise<IUser> {
        const userById = await User.findOne({ id }, "-password");
        return userById;
    }

    async getAllUsers(): Promise<IUser[]> {
        const users = User.find({}, "-password");
        return users;
    }

    async deleteUserById(id: string): Promise<void> {
        await User.deleteOne({ id });
    }
}

export { UserRepository };
