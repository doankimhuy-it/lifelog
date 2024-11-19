import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentController } from './comments.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule, PrismaModule],
  controllers: [CommentController],
  providers: [CommentsService],
})
export class InteractionsModule {}
