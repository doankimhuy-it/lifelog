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
import { CreateLikeDto } from './dto/create-like.dto';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  @UseGuards(AuthnGuard)
  create(@Request() req: any, @Body() createReq: CreateLikeDto) {
    const userId: number = req.user.id;
    return this.likesService.create(userId, createReq);
  }

  @Delete(':id')
  @UseGuards(AuthnGuard)
  delete(@Request() req: any, @Param('id') id: number) {
    return this.likesService.delete(id);
  }
}
