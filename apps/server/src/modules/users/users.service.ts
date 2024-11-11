import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import bcrypt from 'bcrypt';
import { HashSaltRounds } from '../../constants/module.constant';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      HashSaltRounds,
    );
    await this.prismaService.user.create({
      data: {
        fullName: createUserDto.fullName,
        username: createUserDto.username,
        email: createUserDto.email,
        password: hashedPassword,
        avatar: createUserDto.avatar,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async findOneById(id: number) {
    return await this.prismaService.user.findUniqueOrThrow({
      where: { id: id },
    });
  }

  async findOneByUsernameOrEmail(input: string) {
    return await this.prismaService.user.findFirstOrThrow({
      where: {
        OR: [{ username: input }, { email: input }],
      },
    });
  }

  async update(username: string, updateUserDto: UpdateUserDto) {
    const password = updateUserDto.password
      ? await bcrypt.hash(updateUserDto.password, HashSaltRounds)
      : undefined;
    return await this.prismaService.user.update({
      where: { username: username },
      data: {
        fullName: updateUserDto.fullName,
        username: updateUserDto.username,
        email: updateUserDto.email,
        password: password,
        avatar: updateUserDto.avatar,
      },
    });
  }

  async delete(username: string) {
    await this.prismaService.user.delete({ where: { username: username } });
  }
}
