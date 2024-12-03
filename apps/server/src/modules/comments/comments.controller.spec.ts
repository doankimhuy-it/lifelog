import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

describe('CommentController', () => {
  let controller: CommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, JwtModule, ConfigModule],
      controllers: [CommentsController],
      providers: [CommentsService, PrismaService],
    }).compile();

    controller = module.get<CommentsController>(CommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
