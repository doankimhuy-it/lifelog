import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthnGuard } from '../../guards/authn.guard';
import { AuthzGuard } from '../../guards/authz.guard';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { FindBlogDto } from './dto/find-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  @Post()
  @UseGuards(AuthnGuard)
  async create(@Request() req: any, @Body() createBlogReq: CreateBlogDto) {
    const userId: number = req.user.id;
    return this.blogsService.create(userId, createBlogReq);
  }

  @Post('filters')
  findAllByConditions(@Body() findBlogReq: FindBlogDto) {
    return this.blogsService.findAllByConditions(findBlogReq);
  }

  @Get(':slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.blogsService.findOneBySlug(slug);
  }

  @Patch(':id')
  @UseGuards(AuthnGuard, AuthzGuard)
  async update(@Param('id') id: number, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(id, updateBlogDto);
  }

  @Delete(':id')
  @UseGuards(AuthnGuard)
  async remove(@Request() req: any, @Param('id') id: number) {
    const blog = await this.blogsService.findOneById(id);
    if (req.user.id !== blog?.userId) {
      throw new UnauthorizedException('You are not allowed to delete');
    }
    return this.blogsService.delete(id);
  }
}
