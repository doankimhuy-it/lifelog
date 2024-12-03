import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthnGuard } from '../../guards/authn.guard';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  @UseGuards(AuthnGuard)
  create(@Request() req: any, @Body() createReq: CreateBookmarkDto) {
    const userId: number = req.user.id;
    return this.bookmarksService.create(userId, createReq);
  }

  @Delete(':id')
  @UseGuards(AuthnGuard)
  delete(@Param('id') id: number) {
    return this.bookmarksService.delete(id);
  }
}
