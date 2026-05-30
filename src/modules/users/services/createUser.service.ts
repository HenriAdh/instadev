import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';

@Injectable()
export class CreateUserService {
  async execute({ name, email }: CreateUserDto) {
    return { name, email };
  }
}
