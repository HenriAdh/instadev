import { Injectable } from '@nestjs/common';
import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

@Injectable()
export class ListUsersService {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll();

    return users;
  }
}
