import { Test, TestingModule } from '@nestjs/testing';
import { LikedCommentsController } from './liked-comments.controller';

describe('LikedCommentsController', () => {
  let controller: LikedCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikedCommentsController],
    }).compile();

    controller = module.get<LikedCommentsController>(LikedCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
