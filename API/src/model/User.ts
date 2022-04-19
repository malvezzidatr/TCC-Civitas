import { Schema, model } from "mongoose";

import { IProject } from "./Project";

interface IUser {
    name: string;
    email: string;
    password: string;
    id?: string;
    created_at?: Date;
    projects: Array<IProject>;
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
    projects: {
        type: Array,
        required: false,
    },
});

const User = model<IUser>("User", UserSchema);

export { User, IUser };
