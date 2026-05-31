import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SignInService } from './services/signIn.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JWTEXPIRES, JWTSECRET } from './constants/jwt.constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JWTSECRET,
      signOptions: { expiresIn: JWTEXPIRES },
    }),
  ],
  controllers: [AuthController],
  providers: [SignInService],
})
export class AuthModule {}
