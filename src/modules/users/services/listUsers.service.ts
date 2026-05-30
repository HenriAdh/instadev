import { Injectable } from '@nestjs/common';

@Injectable()
export class ListUsersService {
  async execute(): Promise<[]> {
    return [];
  }
}
