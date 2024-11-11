import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { AuthGuard } from '../../guards/auth.guard';
import { FindBlogDto } from './dto/find-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard)
  async create(@Request() req: any, @Body() createBlogReq: CreateBlogDto) {
    const authorId: number = req.user.id;
    return this.blogsService.create(authorId, createBlogReq);
  }

  @Post('filters')
  findAllByConditions(@Body() findBlogReq: FindBlogDto) {
    return this.blogsService.findAllByConditions(findBlogReq);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.blogsService.findOneBySlug(slug);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(
    @Request() req: any,
    @Param('id') id: number,
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    const blog = await this.blogsService.findOneById(id);
    if (req.user.id !== blog?.authorId) {
      throw new UnauthorizedException('You are not allowed to edit');
    }
    return this.blogsService.update(id, updateBlogDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Request() req: any, @Param('id') id: number) {
    const blog = await this.blogsService.findOneById(id);
    if (req.user.id !== blog?.authorId) {
      throw new UnauthorizedException('You are not allowed to delete');
    }
    return this.blogsService.delete(id);
  }
}
