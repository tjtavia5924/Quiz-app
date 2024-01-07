import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';
import { UserDto } from './dto/UserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) { }
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
    if (!userData || userData.length == 0) {
      throw new NotFoundException('Users data not found');
    }
    const usersDto: UserDto[] = userData.map((user) => ({
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
    return {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      points: user.points,
      profile: user.profile,
    };
  }

  async updateUser(
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,

    profile?: string,
  ) {
    const updatedUser = await this.findUser(userId);
    if (firstName) {
      updatedUser.firstName = firstName;
    }
    if (lastName) {
      updatedUser.lastName = lastName;
    }
    if (email) {
      updatedUser.email = email;
    }
    if (password) {
      updatedUser.password = password;
    }
    if (profile) {
      updatedUser.profile = profile;
    }
    updatedUser.save();
  }

  deleteUserById(id: number) {
    const newUsers = this.users.filter((user) => user.id !== id);
    if (newUsers === this.users) {
      return 'User does not exist';
    }
    this.users = newUsers;
    return `User successfully deleted`;
  }

  private async findUser(userId: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findById(userId);
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return user;
  }
}
