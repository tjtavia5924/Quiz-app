import * as mongoose from "mongoose"
export const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profile: { type: String, required: false },
    points: { type: Number, required: true },
})

export class User{
    constructor( 
    public userId: string,
    public firstName: string,
    public lastName: string,
    public userName: string,
    public email: string,
    public password: string,
    public profile: ImageBitmap,
    public points: number
    ){}
}

