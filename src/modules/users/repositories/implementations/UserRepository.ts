import { WordGenerator } from '@/shared/utils/wordGenerator';
import { CreateUserDto } from '../../dtos/createUser.dto';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';
import { Crypt } from '@/shared/utils/crypt';

const userPadrao = new User();
userPadrao.id = crypto.randomUUID();
userPadrao.email = 'henrique@email.com';
userPadrao.name = 'Henrique Adhmann Pires';
userPadrao.login = 'henrique.pires';
userPadrao.password = '123456';
userPadrao.createdAt = new Date();
userPadrao.updatedAt = new Date();

const users: User[] = [userPadrao];

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    return users;
  }

  async findById(id: string): Promise<User | null> {
    return users.find((user) => user.id === id) ?? null;
  }

  async findUserByLogin(login: string): Promise<User | null> {
    return (
      users.find((user) => user.login === login || user.email === login) ?? null
    );
  }

  async create({ name, email, login }: CreateUserDto): Promise<User> {
    const user = new User();
    const tempPassword = WordGenerator.execute(12, {
      upper: true,
      numbers: true,
      specials: true,
    });

    console.log(tempPassword);

    const hash = await Crypt.hashPassword(tempPassword);

    user.id = crypto.randomUUID();
    user.email = email;
    user.name = name;
    user.login = login;
    user.password = hash;
    user.createdAt = new Date();
    user.updatedAt = new Date();

    users.push(user);

    return user;
  }
}
