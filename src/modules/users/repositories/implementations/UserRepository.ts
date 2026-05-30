import { CreateUserDto } from '../../dtos/createUser.dto';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

const users: User[] = [];

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    return users;
  }

  async findById(id: string): Promise<User | null> {
    return users.find((user) => user.id === id) ?? null;
  }

  async create({ name, email }: CreateUserDto): Promise<User> {
    const user = new User();

    user.id = crypto.randomUUID();
    user.email = email;
    user.name = name;
    user.createdAt = new Date();
    user.updatedAt = new Date();

    users.push(user);

    return user;
  }
}
