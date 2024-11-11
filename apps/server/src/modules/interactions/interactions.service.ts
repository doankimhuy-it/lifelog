import { Injectable } from '@nestjs/common';
import { CreateInteractionDto } from './dto/create-interaction.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InteractionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createInteractionDto: CreateInteractionDto) {
    this.prismaService.interaction.create({
      data: {
        type: createInteractionDto.type,
        interactedOn: createInteractionDto.interactedOn,
        interactedCommentId: createInteractionDto.interactedCommentId,
        content: createInteractionDto.content,
        blogId: createInteractionDto.blogId,
        authorId: createInteractionDto.authorId,
      },
    });
  }

  async delete(id: number) {
    await this.prismaService.interaction.delete({ where: { id: id } });
  }
}
