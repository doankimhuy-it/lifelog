import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { BookmarksModule } from '../bookmarks/bookmarks.module';
import { CommentsModule } from '../comments/comments.module';
import { LikesModule } from '../likes/likes.module';
import { PrismaModule } from '../prisma/prisma.module';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';

@Module({
  imports: [
    JwtModule,
    PrismaModule,
    LikesModule,
    CommentsModule,
    BookmarksModule,
  ],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
