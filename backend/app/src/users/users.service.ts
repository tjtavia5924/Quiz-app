import { Injectable, NotFoundException } from '@nestjs/common';
import { promises } from 'dns';
import { Model } from 'mongoose';
import { IUser } from './users.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<IUser>,
  ) {}

  private users = [
    {
      id: 1,
      user: 'slug',
      firstName: 'Hurty',
      lastName: 'Smith',
      userName: 'goat4552',
      email: 'Jack.Smith@gmail.com',
      password: 'heloof123',
      profile: 'picture',
      points: 5,
    },
    {
      id: 9,
      user: 'cappers',
      firstName: 'Jack',
      lastName: 'Smith',
      userName: 'goat4552',
      email: 'Jack.Smith@gmail.com',
      password: 'heloof123',
      profile: 'picture',
      points: 0,
    },
    {
      id: 2,
      user: 'Just',
      firstName: 'Trying',
      lastName: 'Smith',
      userName: 'goat4552',
      email: 'just.trying@gmail.com',
      password: 'heloof123',
      profile: 'picture',
      points: 0,
    },
  ];

  // getAllUsers() {
  //   return this.users;
  // }

  // async getAllUsers(): {
  //   // const userData = await this.userModel.find().exec();
  //   // console.log(userData);
  //   // if (!userData || userData.length == 0) {
  //   //   throw new NotFoundException('Users data not found');
  //   // }
  //   // console.log(userData);
  //   // return userData;
  //   const usersData = await this.userModel.find().exec();
  //   return usersData as User[];
  // }

  async getAllUsers() {
    const users = await this.userModel.find().exec();
    console.log(users);
    return users.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: user.password,
      profile: user.profile,
      points: user.points,
    }));
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      console.log(`User ${id} does not exist`);
    }
    return user;
  }

  deleteUserById(id: number) {
    const newUsers = this.users.filter((user) => user.id !== id)
    if(newUsers === this.users){
      return 'User does not exist';
    }
    this.users = newUsers;
    return `User successfully deleted`;

    // try {
    //   await User.findOneAndUpdate({_id: user_name},{$pull: {addedMovies: {id: movie, media_type:type}}})
    //   return res.status(200).send("Movie successfully deleted")
    // }
    // catch (error) {
    //   res.send(error)
    // }
  }
}
