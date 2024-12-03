import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthnGuard } from '../../guards/authn.guard';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  @Post()
  @UseGuards(AuthnGuard)
  create(@Request() req: any, @Body() createCommentReq: CreateCommentDto) {
    const userId: number = req.user.id;
    return this.commentService.create(userId, createCommentReq);
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.commentService.findOneById(id);
  }

  @Delete(':id')
  @UseGuards(AuthnGuard)
  delete(@Param('id') id: number) {
    return this.commentService.delete(id);
  }
}
