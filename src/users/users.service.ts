import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { users, UserInterface } from './entities/user.entity';
import { UserErrors } from './errors/user.errors';
import { randomUUID } from 'node:crypto';

@Injectable()
export class UsersService {
  create(data: CreateUserInput): UserInterface {
    const user = users.find((u) => u.email === data.email);

    if (user) {
      throw UserErrors.UserExists();
    }

    const newUser: UserInterface = {
      id: randomUUID(),
      email: data.email,
      marketingData: data.marketingData,
    };

    users.push(newUser);
    return newUser;
  }

  find(id: string): UserInterface {
    return users.find((o) => o.id === id);
  }
}
