import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { DeleteBookmarkDto } from './dto/delete-bookmark.dto';

@Injectable()
export class BookmarksService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userId: number, createReq: CreateBookmarkDto) {
    return await this.prismaService.bookmark.create({
      data: { blogId: createReq.blogId, userId: userId },
    });
  }

  async delete(userId: number, deleteReq: DeleteBookmarkDto) {
    return await this.prismaService.bookmark.delete({
      where: {
        bookmarkId: {
          blogId: deleteReq.blogId,
          userId: userId,
        },
      },
    });
  }
}
