export interface IUser extends Document {
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  profile?: ImageBitmap;
  points: number;
}