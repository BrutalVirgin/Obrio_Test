import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() data: CreateUserInput): UserInterface {
    return this.usersService.create(data);
  }
}
