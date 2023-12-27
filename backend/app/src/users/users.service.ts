import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { promises } from 'dns';
import { Model } from 'mongoose';
// import { Iuser } from './users.interface';
import { User } from './users.model';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './dto/UserDto';

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

  async getAllUsers(): Promise<UserDto[]> {
    const userData = await this.userModel.find();
    this.logger.log(`Users found: ${userData}`);
    if(!userData || userData.length == 0){
      throw new NotFoundException("Users data not found");
    }
    const usersDTO : UserDto[] =  userData.map(user => ({
      userId: user._id,
      user: user.user,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: user.password,
      profile: user.profile,
      points: user.points
    }));

    return usersDTO;
  }

  async findById(userId: string): Promise<User| null> {
    try {
      const user = await this.userModel.findById(userId).exec();
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (error) {
      // Handle any other errors that might occur during the database query
      throw new NotFoundException('User not found');
    }
  }


  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    console.log(user);
    if (!user) {
      console.log(`User ${id} does not exist`);
    }
    return user;
  }

  deleteUserById(id : number){
    const newUsers = this.users.filter((user) => user.id !== id)
    if(newUsers === this.users){
      return "User does not exist"
    }
    this.users = newUsers
    return `User successfully deleted`

    // try {
    //   await User.findOneAndUpdate({_id: user_name},{$pull: {addedMovies: {id: movie, media_type:type}}})
    //   return res.status(200).send("Movie successfully deleted")
    // }
    // catch (error) {
    //   res.send(error)
    // }
  }
}
