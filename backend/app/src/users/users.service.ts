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

  async getUserById(id: string): Promise<UserDto> {
    const userData = await this.userModel.findById(id);
    if (!userData) {
      throw new NotFoundException(`User with id ${id} not found!`);
    }
    return {
      userId: userData._id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      userName: userData.userName,
      email: userData.email,
      password: userData.password,
      profile: userData.profile,
      points: userData.points,
    };
  }

  async deleteUserById(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundException(`User with id ${id} not found!`);
    } else {
      return `User with id ${id} succesfully deleted!`;
    }
  }

  async updateUser(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,

    profile?: string,
  ) {
    console.log(id);
    const updatedUser = await this.findUser(id);
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

  private async findUser(userId: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findById(userId);
    } catch (error) {
      throw new NotFoundException('There is an error. Could not find user.');
    }
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return user;
  }
}
