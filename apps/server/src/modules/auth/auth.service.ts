import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LogInDto } from './dto/log-in.dto';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './dto/sign-up.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async logIn(logInDto: LogInDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOnePrivate(
      logInDto.email ?? logInDto.username ?? '',
    );
    if (!user) {
      throw new BadRequestException('User not found');
    }
    if (!bcrypt.compareSync(logInDto.password, user.password)) {
      throw new BadRequestException('Password does not match');
    }
    const payload = { id: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: SignUpDto): Promise<{ access_token: string }> {
    const existingUser = await this.usersService.findOnePrivate(
      signUpDto.email,
    );
    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }
    const createUserDto: CreateUserDto = {
      ...signUpDto,
    };
    await this.usersService.create(createUserDto);
    return this.logIn({ ...createUserDto });
  }
}
