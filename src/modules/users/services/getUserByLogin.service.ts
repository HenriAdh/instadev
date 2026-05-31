import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../repositories/IUserRepository';

@Injectable()
export class GetUserByLoginService {
  constructor(private userRepository: IUserRepository) {}

  async execute(login: string) {
    return this.userRepository.findUserByLogin(login);
  }
}
