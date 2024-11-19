import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { LikedBlogsService } from './liked-blogs.service';
import { LikedBlogsController } from './liked-blogs.controller';

@Module({
  imports: [JwtModule, PrismaModule],
  controllers: [LikedBlogsController],
  providers: [LikedBlogsService],
})
export class LikedBlogsModule {}
