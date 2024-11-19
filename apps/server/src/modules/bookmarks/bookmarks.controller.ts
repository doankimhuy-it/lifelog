import {
  Body,
  Controller,
  Delete,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../guards/auth.guard';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { BookmarksService as BookmarksService } from './bookmarks.service';
import { DeleteBookmarkDto } from './dto/delete-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Request() req: any, @Body() createReq: CreateBookmarkDto) {
    const userId: number = req.user.id;
    return this.bookmarksService.create(userId, createReq);
  }

  @Delete()
  @UseGuards(AuthGuard)
  delete(@Request() req: any, @Body() deleteReq: DeleteBookmarkDto) {
    const userId: number = req.user.id;
    return this.bookmarksService.delete(userId, deleteReq);
  }
}
