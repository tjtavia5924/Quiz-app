import { Controller, Delete, Get, Param } from '@nestjs/common';

import { UsersService } from './users.service';
import userschema from "./Schema/userschema";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // getUsers() {
  //   return this.usersService.getAllUsers();
  // }

  @Get('try')
  try1(): string {
    return 'hello there';
  }

  // @Get()
  // async getUsers(@Res() response) {
  //   try {
  //     const userData = this.usersService.getAllUsers();
  //     return response.status(HttpStatus.OK).json({
  //       message: 'All users data found successfully',
  //       userData,
  //     });
  //   } catch (err) {
  //     return response.status(err.status).json(err.response);
  //   }
  // }

  @Get()
  async getUsers() {
    const userData = await this.usersService.getAllUsers();
    return userData;
  }

  // @Get(':id')
  // getUser(@Param('id') id: string) {
  //   return this.usersService.getUserById(+id);
  // }

  @Get(':id')
  async getUserById(@Param('id') userId: string) {
      return this.usersService.findById(userId);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUserById(+id);
  }
}
