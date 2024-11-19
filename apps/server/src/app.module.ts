import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { BlogsModule } from './modules/blogs/blogs.module';
import { InteractionsModule } from './modules/comments/comments.module';
import { AuthModule } from './modules/auth/auth.module';
import { LikedBlogsModule } from './modules/liked-blogs/liked-blogs.module';
import { LikedCommentsModule } from './modules/liked-comments/liked-blogs.module';
import { BookmarksModule } from './modules/bookmarks/bookmarks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    BlogsModule,
    InteractionsModule,
    LikedBlogsModule,
    LikedCommentsModule,
    BookmarksModule,
  ],
})
export class AppModule {}
