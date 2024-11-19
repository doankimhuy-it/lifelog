import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { FindBlogDto } from './dto/find-blog.dto';
import { OrderBy } from '../../constants/module.constant';
import { PrismaService } from '../prisma/prisma.service';
import slug from 'slug';

@Injectable()
export class BlogsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userId: number, createBlogDto: CreateBlogDto) {
    return await this.prismaService.blog.create({
      data: {
        title: createBlogDto.title,
        slug: slug(createBlogDto.title),
        description: createBlogDto.description,
        content: createBlogDto.content,
        userId: userId,
      },
    });
  }

  async findAll() {
    return await this.prismaService.blog.findMany({
      include: {
        user: { select: { fullName: true, avatar: true } },
      },
    });
  }

  async findAllByConditions(query: FindBlogDto) {
    const orCondition = query.author
      ? [{ username: query.author }, { email: query.author }]
      : undefined;
    const blogs = await this.prismaService.blog.findMany({
      where: {
        title: query.title,
        description: query.description,
        createdAt: {
          gte: query.createdAtGte,
          lte: query.createdAtLte,
        },
        updatedAt: {
          gte: query.updatedAtGte,
          lte: query.updatedAtLte,
        },
        user: { OR: orCondition },
      },
      include: {
        user: {
          select: {
            fullName: true,
            avatar: true,
          },
        },
      },
      orderBy: [
        {
          ...(query.orderBy == OrderBy.CreatedAt
            ? { createdAt: query.sortOrder }
            : { updatedAt: query.sortOrder }),
        },
      ],
    });

    return blogs;
  }

  async findOneBySlug(slug: string) {
    return await this.prismaService.blog.findUnique({
      where: { slug: slug },
      include: {
        comments: {
          include: { childComments: true },
          where: { parentCommentId: null },
        },
        _count: { select: { likedBlog: true, comments: true } },
      },
    });
  }

  async findOneById(id: number) {
    return await this.prismaService.blog.findUnique({
      where: { id: +id },
      include: {
        comments: {
          include: { childComments: true },
          where: { parentCommentId: null },
        },
        _count: { select: { likedBlog: true, comments: true } },
      },
    });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    return await this.prismaService.blog.update({
      where: {
        id: +id,
      },
      data: {
        title: updateBlogDto.title,
        slug: updateBlogDto.title ? slug(updateBlogDto.title) : undefined,
        description: updateBlogDto.description,
        content: updateBlogDto.content,
      },
    });
  }

  async delete(id: number) {
    await this.prismaService.blog.delete({ where: { id: id } });
  }
}
