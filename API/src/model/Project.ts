import { Schema, model } from "mongoose";

interface IProject {
    name: string;
    description: string;
    pix: string;
    id?: string;
    user_id: string;
    created_at: Date;
}

const ProjectSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pix: {
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
    user_id: {
        type: String,
        required: true,
    },
});

const Project = model<IProject>("Project", ProjectSchema);

export { Project, IProject };
