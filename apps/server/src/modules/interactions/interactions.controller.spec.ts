import { Test, TestingModule } from '@nestjs/testing';
import { InteractionsController } from './interactions.controller';
import { InteractionsService } from './interactions.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

describe('InteractionsController', () => {
  let controller: InteractionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, JwtModule, ConfigModule],
      controllers: [InteractionsController],
      providers: [InteractionsService, PrismaService],
    }).compile();

    controller = module.get<InteractionsController>(InteractionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
