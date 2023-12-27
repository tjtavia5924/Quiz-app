import { Controller, Delete, Get, Param, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
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
  deleteUser(@Param('id') id:string){
    return this.usersService.deleteUserById(+id)
  }
}
