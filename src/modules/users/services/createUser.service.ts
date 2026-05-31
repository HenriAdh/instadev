import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';
import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../entities/User';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(data: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(data);

    return user;
  }
}
