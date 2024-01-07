export interface Iuser extends Document {
  _id: string;
  user: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  profile: string;
  points: number;
}
