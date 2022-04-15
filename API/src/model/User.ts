import { Schema, model } from "mongoose";

interface IUser {
    name: string;
    email: string;
    password: string;
    id?: string;
    created_at?: Date;
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
    created_at: {
        type: Date,
        required: true,
    },
});

const User = model<IUser>("User", UserSchema);

export { User, IUser };
