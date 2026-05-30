import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ListUsersService } from './services/listUsers.service';
import { GetUserByIdService } from './services/getUserById.service';
import { CreateUserService } from './services/createUser.service';
import { IUserRepository } from './repositories/IUserRepository';
import { UserRepository } from './repositories/implementations/UserRepository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    ListUsersService,
    GetUserByIdService,
    CreateUserService,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
})
export class UsersModule {}
