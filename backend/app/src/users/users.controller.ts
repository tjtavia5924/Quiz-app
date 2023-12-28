import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // getUsers() {
  //   return this.usersService.getAllUsers();
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

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUserById(+id);
  }
}
