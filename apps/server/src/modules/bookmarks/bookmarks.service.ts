import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarksService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneById(id: number) {
    return await this.prismaService.bookmark.findUnique({ where: { id: id } });
  }

  async create(userId: number, createReq: CreateBookmarkDto) {
    return await this.prismaService.bookmark.create({
      data: { blogId: createReq.blogId, userId: userId },
    });
  }

  async delete(id: number) {
    return await this.prismaService.bookmark.delete({
      where: {
        id: id,
      },
    });
  }
}
