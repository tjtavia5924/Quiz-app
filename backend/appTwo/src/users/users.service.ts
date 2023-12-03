import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
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

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      console.log(`User ${id} does not exist`);
    }
    return user;
  }
}
