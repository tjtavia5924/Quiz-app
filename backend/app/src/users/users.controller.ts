import { Controller, Delete, Get, Param, Patch, Body } from '@nestjs/common';
//import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getUsers() {
    const userData = await this.usersService.getAllUsers();
    return userData;
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.usersService.getUserById(id);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('password') password: string,

    @Body('profile') profile?: string,
  ) {
    await this.usersService.updateUser(
      id,
      firstName,
      lastName,
      email,
      password,
      profile,
    );
    return null;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<string> {
    return await this.usersService.deleteUserById(id);
  }
}
