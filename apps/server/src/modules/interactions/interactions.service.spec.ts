import { Test, TestingModule } from '@nestjs/testing';
import { InteractionsService } from './interactions.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('InteractionsService', () => {
  let service: InteractionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [InteractionsService],
    }).compile();

    service = module.get<InteractionsService>(InteractionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
