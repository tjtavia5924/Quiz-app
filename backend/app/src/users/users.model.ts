import * as mongoose from "mongoose"
// import { Schema } from '@nestjs/mongoose';

export const UserSchema = new mongoose.Schema({
    user: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profile: { type: String, required: false },
    points: { type: Number, required: true },
})


// @Schema({ collection: 'data' })
export interface User extends Document{
    _id: string;
    user: string;
    userId: string,
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    profile: string,
    points: number

}