import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLikedBlogDto } from './dto/create-liked-blog.dto';
import { DeleteLikedBlogDto } from './dto/delete-liked-blog.dto';

@Injectable()
export class LikedBlogsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userId: number, createReq: CreateLikedBlogDto) {
    return await this.prismaService.likedBlog.create({
      data: { blogId: createReq.blogId, userId: userId },
    });
  }

  async delete(userId: number, deleteReq: DeleteLikedBlogDto) {
    return await this.prismaService.likedBlog.delete({
      where: {
        likeId: {
          blogId: deleteReq.blogId,
          userId: userId,
        },
      },
    });
  }
}
