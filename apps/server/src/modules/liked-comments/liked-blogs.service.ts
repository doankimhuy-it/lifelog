import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLikedCommentDto } from './dto/create-liked-comment.dto';
import { DeleteLikedCommentDto } from './dto/delete-liked-comment.dto';

@Injectable()
export class LikedCommentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userId: number, createReq: CreateLikedCommentDto) {
    return await this.prismaService.likedComment.create({
      data: { commentId: createReq.commentId, userId: userId },
    });
  }

  async delete(userId: number, deleteReq: DeleteLikedCommentDto) {
    return await this.prismaService.likedComment.delete({
      where: {
        likeId: {
          commentId: deleteReq.commentId,
          userId: userId,
        },
      },
    });
  }
}
