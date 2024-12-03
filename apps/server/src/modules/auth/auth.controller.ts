import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/log-in.dto';
import { SignUpDto, signUpSchema } from './dto/sign-up.dto';
import { ZodValidationPipe } from 'src/pipes/zod.pipe';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() logInDto: LogInDto) {
    return this.authService.logIn(logInDto);
  }

  @Post('signup')
  @UsePipes(new ZodValidationPipe(signUpSchema))
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }
}
