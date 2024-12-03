import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLikeDto } from './dto/create-like.dto';

@Injectable()
export class LikesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneById(id: number) {
    return await this.prismaService.like.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(userId: number, createReq: CreateLikeDto) {
    return await this.prismaService.like.create({
      data: {
        blogId: createReq.blogId,
        commentId: createReq.commentId,
        userId: userId,
      },
    });
  }

  async delete(id: number) {
    return await this.prismaService.like.delete({
      where: {
        id: id,
      },
    });
  }
}
