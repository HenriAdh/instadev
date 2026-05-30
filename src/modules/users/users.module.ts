import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ListUsersService } from './services/listUsers.service';
import { GetUserByIdService } from './services/getUserById.service';
import { CreateUserService } from './services/createUser.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [ListUsersService, GetUserByIdService, CreateUserService],
})
export class UsersModule {}
