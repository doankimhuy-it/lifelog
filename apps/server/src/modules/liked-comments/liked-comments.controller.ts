import {
  Body,
  Controller,
  Delete,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../guards/auth.guard';
import { CreateLikedCommentDto } from './dto/create-liked-comment.dto';
import { LikedCommentsService as LikedCommentsService } from './liked-blogs.service';
import { DeleteLikedCommentDto } from './dto/delete-liked-comment.dto';

@Controller('liked-comments')
export class LikedCommentsController {
  constructor(private readonly likedCommentsService: LikedCommentsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Request() req: any, @Body() createReq: CreateLikedCommentDto) {
    const userId: number = req.user.id;
    return this.likedCommentsService.create(userId, createReq);
  }

  @Delete()
  @UseGuards(AuthGuard)
  delete(@Request() req: any, @Body() deleteReq: DeleteLikedCommentDto) {
    const userId: number = req.user.id;
    return this.likedCommentsService.delete(userId, deleteReq);
  }
}
