import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userId: number, createCommentReq: CreateCommentDto) {
    if (createCommentReq.parentCommentId) {
      return await this.prismaService.comment.update({
        where: { id: createCommentReq.parentCommentId },
        data: {
          childComments: {
            createMany: {
              data: [
                {
                  content: createCommentReq.content,
                  blogId: createCommentReq.blogId,
                  userId: userId,
                },
              ],
            },
          },
        },
      });
    }

    return await this.prismaService.comment.create({
      data: {
        content: createCommentReq.content,
        blogId: createCommentReq.blogId,
        userId: userId,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.comment.findUniqueOrThrow({
      where: { id: +id },
      include: {
        childComments: true,
      },
    });
  }

  async delete(id: number) {
    await this.prismaService.comment.delete({ where: { id: +id } });
  }
}
