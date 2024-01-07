import {
  Controller,
  Delete,
  Get,
  Param,
  Logger,
  Patch,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
const logger = new Logger('MyLogger');

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // @Get()
  // getUsers() {
  //   return this.usersService.getAllUsers();
  // }

  // @Get('try')
  // attempt1() {
  //   console.log(process.env.CONNECTION_STRING)
  //   // logger.log(`Connection string: ${process.env.ATTEMPT}`);
  // }

  @Get()
  async getUsers() {
    const userData = await this.usersService.getAllUsers();
    return userData;
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }

  @Patch(':id')
  async updateUser(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('password') password: string,

    @Body('profile') profile?: string,
  ) {
    await this.usersService.updateUser(
      firstName,
      lastName,
      email,
      password,

      profile,
    );
    return null;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUserById(+id);
  }
}
