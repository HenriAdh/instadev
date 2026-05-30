import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserByIdService {
  async execute(id: string): Promise<any> {
    return null;
  }
}
