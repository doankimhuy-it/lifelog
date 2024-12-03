import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';

@Module({
  imports: [JwtModule, PrismaModule],
  controllers: [LikesController],
  providers: [LikesService],
  exports: [LikesService],
})
export class LikesModule {}
