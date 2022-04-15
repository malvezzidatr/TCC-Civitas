import { v4 as uuidV4 } from "uuid";

import { IUser, User } from "../model/User";

class UserRepository {
    async createUser({ name, email, password }: IUser): Promise<void> {
        const user = {
            name,
            email,
            password,
            id: uuidV4(),
            created_at: new Date(),
        };
        await User.create(user);
    }

    async findUserByEmail(email: string): Promise<IUser> {
        const userExists = await User.findOne({ email });
        return userExists;
    }

    async findUserById(id: string): Promise<IUser> {
        const userById = await User.findOne({ id });
        return userById;
    }

    async getAllUsers(): Promise<IUser[]> {
        const users = User.find();
        return users;
    }

    async deleteUserById(id: string): Promise<void> {
        await User.deleteOne({ id });
    }
}

export { UserRepository };
