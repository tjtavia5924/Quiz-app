import mongoose from "mongoose";


// need to addd mongoose.Docoment to use a save() method.
export interface CreateUserDto extends mongoose.Document{
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  profile: string;
  points: number;
}
