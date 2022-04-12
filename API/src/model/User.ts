import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    id: { type: String, required: true },
    created_at: { type: Date, required: true },
});

const User = model("User", UserSchema);

export { User };
