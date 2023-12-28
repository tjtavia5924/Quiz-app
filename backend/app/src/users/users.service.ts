import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';
// import { UserDto } from './dto/UserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel:Model<User>
  ){}
  private readonly logger = new Logger(UsersService.name);

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
  ];

  // getAllUsers() {
  //   return this.users;
  // }

  async getAllUsers(): Promise<UserDto[]> {
    const userData = await this.userModel.find();
    this.logger.log(`Users found: ${userData}`);
    if(!userData || userData.length == 0){
      throw new NotFoundException("Users data not found");
    }
    const usersDto : UserDto[] = userData.map(user => ({
      userId: user._id,
      user: user.user,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: user.password,
      profile: user.profile,
      points: user.points,
    }));

    return usersDto;
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      console.log(`User ${id} does not exist`);
    }
    return user;
  }
}
