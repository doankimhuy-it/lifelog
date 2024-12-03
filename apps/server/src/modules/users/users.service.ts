import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { HashSaltRounds } from '../../constants/common.constant';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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

  async findOnePrivate(input: string) {
    return await this.prismaService.user.findFirst({
      where: {
        OR: [{ username: input }, { email: input }],
      },
    });
  }

  async findOneProfile(input: string) {
    return await this.prismaService.user.findFirstOrThrow({
      omit: {
        password: true,
        createdAt: true,
        updatedAt: true,
      },
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
