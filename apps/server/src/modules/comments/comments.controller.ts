import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { AuthGuard } from '../../guards/auth.guard';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Request() req: any, @Body() createCommentReq: CreateCommentDto) {
    const userId: number = req.user.id;
    return this.commentService.create(userId, createCommentReq);
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.commentService.findOne(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  delete(@Param('id') id: number) {
    return this.commentService.delete(id);
  }
}
