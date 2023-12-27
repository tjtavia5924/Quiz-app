import mongoose, { Schema, Document } from 'mongoose';

interface IuserData extends Document {
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  profile?: ImageBitmap;
  points: number;
}

const userSchema = new Schema<IuserData>({
  userId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile: { type: String, required: false },
  points: { type: Number, required: true },
});

const userModel = mongoose.model<IuserData>('user', userSchema);

export default userModel;
