import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { LikedCommentsService } from './liked-blogs.service';
import { LikedCommentsController } from './liked-comments.controller';

@Module({
  imports: [JwtModule, PrismaModule],
  controllers: [LikedCommentsController],
  providers: [LikedCommentsService],
})
export class LikedCommentsModule {}
