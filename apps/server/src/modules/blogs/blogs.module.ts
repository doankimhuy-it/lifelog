import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [JwtModule, PrismaModule],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
