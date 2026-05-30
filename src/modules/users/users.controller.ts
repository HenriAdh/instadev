import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ListUsersService } from './services/listUsers.service';
import { ParamIdDto } from '../../shared/dtos/byId.dto';
import { CreateUserDto } from './dtos/createUser.dto';
import { GetUserByIdService } from './services/getUserById.service';
import { CreateUserService } from './services/createUser.service';

@Controller('/users')
export class UsersController {
  constructor(
    private readonly listUsersService: ListUsersService,
    private readonly getUserByIdService: GetUserByIdService,
    private readonly createUserService: CreateUserService,
  ) {}

  @Get()
  async getUsers() {
    return this.listUsersService.execute();
  }

  @Get('/:id')
  async getUser(@Param() params: ParamIdDto) {
    return this.getUserByIdService.execute(params.id);
  }

  @Post()
  async postUser(@Body() data: CreateUserDto) {
    return this.createUserService.execute(data);
  }
}
