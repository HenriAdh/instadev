import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from '../dtos/SignIn.dto';
import { GetUserByLoginService } from '@/modules/users/services/getUserByLogin.service';
import { JwtService } from '@nestjs/jwt';
import { Crypt } from '@/shared/utils/crypt';

@Injectable()
export class SignInService {
  constructor(
    private getUserByLoginService: GetUserByLoginService,
    private jwtService: JwtService,
  ) {}

  async execute({ login, password }: SignInDto) {
    const user = await this.getUserByLoginService.execute(login);

    if (!user) throw new UnauthorizedException('Usuário ou senha inválidos');

    const { password: pass, ...result } = user;

    const valid = await Crypt.compare(password, pass);

    if (!valid) throw new UnauthorizedException('Usuário ou senha inválidos');

    const payload = { sub: result.id, username: result.name };

    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }
}
