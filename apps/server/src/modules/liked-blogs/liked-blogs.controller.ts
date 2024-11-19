import {
  Body,
  Controller,
  Delete,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../guards/auth.guard';
import { CreateLikedBlogDto } from './dto/create-liked-blog.dto';
import { LikedBlogsService } from './liked-blogs.service';
import { DeleteLikedBlogDto } from './dto/delete-liked-blog.dto';

@Controller('liked-blogs')
export class LikedBlogsController {
  constructor(private readonly likedBlogsService: LikedBlogsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Request() req: any, @Body() createReq: CreateLikedBlogDto) {
    const userId: number = req.user.id;
    return this.likedBlogsService.create(userId, createReq);
  }

  @Delete()
  @UseGuards(AuthGuard)
  delete(@Request() req: any, @Body() deleteReq: DeleteLikedBlogDto) {
    const userId: number = req.user.id;
    return this.likedBlogsService.delete(userId, deleteReq);
  }
}
