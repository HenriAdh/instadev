import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../entities/User';

@Injectable()
export class GetUserByIdService {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: string): Promise<User | null> {
    const user = await this.userRepository.findById(id);

    return user;
  }
}
