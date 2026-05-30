import { CreateUserDto } from '../dtos/createUser.dto';
import { User } from '../entities/User';

export abstract class IUserRepository {
  abstract findAll(): Promise<User[]>;
  abstract findById(id: string): Promise<User | null>;
  abstract create({ name, email }: CreateUserDto): Promise<User>;
}
