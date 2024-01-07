import { Controller, Delete, Get, Param, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
// const logger = new Logger('MyLogger');

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    const userData = await this.usersService.getAllUsers();
    return userData;
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.usersService.getUserById(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<string> {
    return await this.usersService.deleteUserById(id);
  }
}
