import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { BlogsModule } from './modules/blogs/blogs.module';
import { BookmarksModule } from './modules/bookmarks/bookmarks.module';
import { CommentsModule } from './modules/comments/comments.module';
import { LikesModule } from './modules/likes/likes.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    BlogsModule,
    CommentsModule,
    LikesModule,
    BookmarksModule,
  ],
})
export class AppModule {}
