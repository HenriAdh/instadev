import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SignInDto } from './dtos/SignIn.dto';
import { SignInService } from './services/signIn.service';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly signInService: SignInService) {}

  @Post('login')
  async signIn(@Body() data: SignInDto) {
    return this.signInService.execute(data);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() request: any) {
    return request.user;
  }
}
