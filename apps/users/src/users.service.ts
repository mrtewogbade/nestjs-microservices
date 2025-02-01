import { Injectable } from '@nestjs/common';
import { UserDto } from './DTO/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johdndoe@gmail.com',
      password: 'password',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: '',
      password: 'password',
      role: 'user',
    },
  ];

  findAll() {
    return this.users;
  }
}
